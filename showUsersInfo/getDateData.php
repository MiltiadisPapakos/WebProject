<?php
include '../utils.php';

session_start();
$connection = connectToDb();

if (mysqli_connect_errno()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);
$results = [];

$query = "select DATE_FORMAT(FROM_UNIXTIME(key_timestamp/1000), '%e %b %Y') AS 'date_formatted' from locations 
where locations.uid like \"{$_SESSION['uid']}\" order by key_timestamp DESC LIMIT 1";

$result = $connection->query($query);
while ($row = $result->fetch_array()) {
    $results['last_date'] =
          $row['date_formatted'];
}
$query1 = "select DATE_FORMAT(FROM_UNIXTIME(key_timestamp/1000), '%e %b %Y') AS 'date_formatted' from locations 
where locations.uid like \"{$_SESSION['uid']}\" order by key_timestamp ASC LIMIT 1";

$result = $connection->query($query1);
while ($row = $result->fetch_array()) {
    $results['first_date'] =
          $row['date_formatted'];
}
$connection->close();
echo json_encode($results);

