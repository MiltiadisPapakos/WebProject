<?php
include "../utils.php";
include "../sqlUtils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$insertQuery = "INSERT INTO locations(uid, key_timestamp, latitude, longitude, activity, heading, confidence, ";
$insertQuery = $insertQuery . "loc_timestamp, act_timestamp, vertical_accuracy, velocity, accuracy, altitude, ";
$insertQuery = $insertQuery . "year, month, day, hour, day_of_week) VALUES";

for ($i=0; $i<sizeof($credentials); $i=$i+1){
    $item = $credentials[$i];

    $uid = $item['uid'];
    $actTimestamp = $item['actTimestamp'];
    $latitude = $item['latitude'];
    $longitude = $item['longitude'];
    $activity = $item['activity'];
    $locTimestamp = $item['locTimestamp'];
    $accuracy = $item['accuracy'];
    $velocity = $item['velocity'];
    $altitude = $item['altitude'];
    $verticalAccuracy = $item['verticalAccuracy'];
    $confidence = $item['confidence'];
    $heading = $item['heading'];

    $keyTimestamp = $actTimestamp != -1 ? $actTimestamp : $locTimestamp;

    $dateInfo = getDateInfo((int) (intval($keyTimestamp)/1000));

    $insertQuery = $insertQuery.appendLocationInsertValues(
        $uid,
        $keyTimestamp,
        $latitude,
        $longitude,
        $activity,
        $heading,
        $confidence,
        $locTimestamp,
        $actTimestamp,
        $verticalAccuracy,
        $velocity,
        $accuracy,
        $altitude,
        $dateInfo);

    if ($i != sizeof($credentials)-1){
        $insertQuery = $insertQuery.",";
    }
}

error_log($insertQuery);

$connection->query($insertQuery);
$connection->close();


function getDateInfo($timestamp){
    $dt = new DateTime("@$timestamp");
    $timeString = $dt->format('Y-m-d H:i:s');

    $split1 = explode("-", $timeString);
    $year = $split1[0];
    $month = $split1[1];

    $split2 = explode(" ", $split1[2]);
    $day = $split2[0];

    $split3 = explode(":", $split2[1]);
    $hour = strval(intval($split3[0]) + 2);     // converting to Greek time zone

    $dayOfWeek = date('w', strtotime(explode(" ", $timeString)[0]));
    if ($dayOfWeek == 0){
        $day = 7;
    }

    return array($year, $month, $day, $hour, $dayOfWeek);
}