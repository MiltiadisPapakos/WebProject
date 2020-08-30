<?php
include "../utils.php";

session_start();

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$uid = $_SESSION['uid'];
$oldPassword = $credentials['oldPassword'];
$newPassword = $credentials['newPassword'];

$query = "UPDATE users SET password = \"$newPassword\" WHERE uid = \"$uid\" AND password = \"$oldPassword\"";

$connection->query($query);
$affectedRows = $connection->affected_rows;

$connection->close();

echo $affectedRows;