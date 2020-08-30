<?php
include "../utils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}


$json = file_get_contents('php://input');
$credentials = json_decode($json, true);


$startingYear = $credentials['startingYear'];
$endingYear = $credentials['endingYear'];
$startingMonth = $credentials['startingMonth'];
$endingMonth = $credentials['endingMonth'];


$query = "SELECT activity, count(*) as \"count\", max(hour) as \"maxHour\", max(day) as \"maxDay\" FROM locations WHERE"
    . " year >= " . $startingYear . " AND year <= " . $endingYear
    . " AND month >= " . $startingMonth . " AND month <= " . $endingMonth
    . " GROUP BY activity;";


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