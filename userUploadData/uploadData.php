<?php
include "../utils.php";
include "../sqlUtils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$insertQuery = "INSERT INTO locations(uid, loc_timestamp, latitude, longitude, activity) VALUES";

for ($i=0; $i<sizeof($credentials); $i=$i+1){
    $item = $credentials[$i];

    $uid = $item['uid'];
    $timestamp = $item['timestamp'];
    $latitude = $item['latitude'];
    $longitude = $item['longitude'];
    $activity = $item['activity'];

    $insertQuery = $insertQuery.appendLocationInsertValues($uid, $timestamp, $latitude, $longitude, $activity);
    if ($i != sizeof($credentials)-1){
        $insertQuery = $insertQuery.",";
    }
}

$connection->query($insertQuery);
$connection->close();
