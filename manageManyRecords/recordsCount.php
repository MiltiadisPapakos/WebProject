<?php
include "../utils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$query = "SELECT COUNT(*) as \"r_count\" FROM locations;";

$result = $connection->query($query);
$row = $result->fetch_assoc();

$res = array("count" => $row["r_count"]);

echo json_encode($res);
