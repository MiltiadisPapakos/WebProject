<?php
include '../utils.php';

session_start();
$connection = connectToDb();

if (mysqli_connect_errno()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$query = "select DATE_FORMAT(FROM_UNIXTIME(upload_timestamp), '%e %b %Y') AS 'date_formatted' from locations 
where locations.uid like \"{$_SESSION['uid']}\" order by upload_timestamp DESC LIMIT 1";

$results = [];
$result = $connection->query($query);
while($row = $result->fetch_array()) {
    $results[] = [
        'upload_timestamp' => $row['date_formatted']
    ];
}
$connection->close();
echo json_encode($results);