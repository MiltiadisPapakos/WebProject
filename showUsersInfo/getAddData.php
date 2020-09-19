<?php

include '..\utils.php';

session_start();
$connection = connectToDb();

if (mysqli_connect_errno()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$query = "select DATE(upload_timestamp) from locations where locations.uid like 'b3211ad0137d64d6c1d207901d454718' order by 
upload_timestamp DESC LIMIT 1";

$results = [];
$result = $connection->query($query);
while($row = $result->fetch_array()) {
    $results[] = [
        'upload_timestamp' => $row['upload_timestamp']
    ];
}
$connection->close();
echo json_encode($results);