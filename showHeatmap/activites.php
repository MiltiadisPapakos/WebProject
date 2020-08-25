<?php
include "../utils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$query = "SELECT DISTINCT activity FROM locations";

$result = $connection->query($query);

$activities = array();
$i = 0;

while ($row = $result->fetch_array()){
    $activities[] = $row["activity"];
}

echo json_encode($activities);
