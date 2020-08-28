<?php
include "../utils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$delete_query = "DELETE FROM locations";

$connection->query($delete_query);
$connection->close();