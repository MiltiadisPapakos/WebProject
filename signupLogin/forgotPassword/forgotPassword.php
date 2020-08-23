<?php
include "../utils.php";
include "passwordGenerator.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$email = $credentials['email'];
$newPassword = generatePassword();
$newPasswordHash = md5($newPassword);

$updateQuery = "UPDATE users SET password = \"$newPasswordHash\" where email = \"$email\"";

$result = $connection->query($updateQuery);
$connection->close();

echo json_encode(array("success" => true, "password" => $newPassword));
