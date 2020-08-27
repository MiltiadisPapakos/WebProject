<?php
include "../utils.php";
include "../sqlUtils.php";


$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$insertQuery = "INSERT INTO locations(uid, loc_timestamp, latitude, longitude, activity, year, month, day, hour) VALUES";

for ($i=0; $i<sizeof($credentials); $i=$i+1){
    $item = $credentials[$i];

    $uid = $item['uid'];
    $timestamp = $item['timestamp'];
    $latitude = $item['latitude'];
    $longitude = $item['longitude'];
    $activity = $item['activity'];

    $dateInfo = getDateInfo((int) (intval($timestamp)/1000));

    $insertQuery = $insertQuery.appendLocationInsertValues($uid, $timestamp, $latitude, $longitude, $activity, $dateInfo);
    if ($i != sizeof($credentials)-1){
        $insertQuery = $insertQuery.",";
    }
}

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

    return array($year, $month, $day, $hour);
}