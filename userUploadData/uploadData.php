<?php
include "../utils.php";
include "../sqlUtils.php";
include "../vendor/autoload.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = \JsonMachine\JsonMachine::fromString($json);

$dbMax = 4000;

$insertBase = "INSERT INTO locations(uid, key_timestamp, upload_timestamp, latitude, longitude, activity, heading, confidence, ";
$insertBase = $insertBase . "loc_timestamp, act_timestamp, vertical_accuracy, velocity, accuracy, altitude, ";
$insertBase = $insertBase . "year, month, day, hour, day_of_week) VALUES";

$insertQuery = $insertBase;

foreach ($credentials as $id => $item){

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
        time(),
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

    $insertQuery = $insertQuery.",";

    if ($id % $dbMax == 0){
        $insertQuery = rtrim($insertQuery, ",");
        $connection->query($insertQuery);

        $insertQuery = $insertBase;
    }
}

$insertQuery = rtrim($insertQuery, ",");
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
    $hour = intval($split3[0]) + 2;     // converting to Greek time zone
    if ($hour == 24){
        $hour = 0;
    }
    else if($hour == 25){
        $hour = 1;
    }
    $hour = strval($hour);

    $dayOfWeek = date('w', strtotime(explode(" ", $timeString)[0]));
    if ($dayOfWeek == 0){
        $day = 7;
    }

    return array($year, $month, $day, $hour, $dayOfWeek);
}