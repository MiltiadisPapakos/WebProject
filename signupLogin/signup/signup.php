<?php
include '../utils.php';

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

//$dbHost = "127.0.0.1";
//$dbUser = "kon";
//$dbPassword = "2nK!UEcDwBNZ";
//$dbName = "web_project";
//$dbPort = 3306;
//
//$connection = new mysqli($dbHost, $dbUser, $dbPassword, $dbName, $dbPort);
$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$insertQuery = "INSERT INTO users (uid, username, email, password, is_admin) VALUES (\"{$credentials["uid"]}\", \"{$credentials["username"]}\",\"{$credentials["email"]}\", \"{$credentials["password"]}\", {$credentials["isAdmin"]})";

$connection->query($insertQuery);
$connection->close();

echo "Success!";

