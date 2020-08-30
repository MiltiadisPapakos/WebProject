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
$firstName = $credentials['firstName'];
$lastName = $credentials['lastName'];
$password = $credentials['password'];

$query = "UPDATE users SET first_name = \"$firstName\", last_name = \"$lastName\" WHERE uid = \"$uid\" AND password = \"$password\"";


$connection->query($query);
$affectedRows = $connection->affected_rows;

if ($affectedRows == 1) {
    $_SESSION['first_name'] = $firstName;
    $_SESSION['last_name'] = $lastName;
}

$connection->close();

echo $affectedRows;