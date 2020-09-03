<?php
include "../utils.php";

session_start();

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}


$json = file_get_contents('php://input');
$credentials = json_decode($json, true);


$startingTimestamp = $credentials['startingTimestamp'];
$endingTimestamp = $credentials['endingTimestamp'];


$query = "SELECT activity, count(*) as \"count\", max(hour) as \"maxHour\", max(day) as \"maxDay\" FROM locations WHERE"
    . " uid like \"{$_SESSION['uid']}\" AND"
    . " key_timestamp >= " . $startingTimestamp . " AND key_timestamp <= " . $endingTimestamp
    . " GROUP BY activity;";

error_log($query);

$results = [];
$result = $connection->query($query);

while ($row = $result->fetch_array()){
    $results[] = [
        'activity'=>$row['activity'],
        'count'=>intval($row['count']),
        'maxHour'=>intval($row['maxHour']),
        'maxDay'=>intval($row['maxDay'])
    ];
}

$connection->close();

echo json_encode($results);