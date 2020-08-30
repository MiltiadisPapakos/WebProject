<?php
include "../utils.php";

session_start();

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

$query = "SELECT latitude, longitude, count(*) AS \"count\" FROM locations WHERE"
    . " uid like \"{$_SESSION['uid']}\" AND "
    . " year >= " . $startingYear . " AND year <= " . $endingYear
    . " AND month >= " . $startingMonth . " AND month <= " . $endingMonth
    . " GROUP BY latitude, longitude;";


$results = [];
$result = $connection->query($query);

while ($row = $result->fetch_array()) {
    $results[] = [
        'lat' => (intval($row['latitude']) / (10 ** 7)),
        'lng' => (intval($row['longitude']) / (10 ** 7)),
        'count' => intval($row['count'])];
}

$connection->close();

echo json_encode($results);