<?php
include '../../utils.php';

session_start();
$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$insertQuery = "INSERT INTO users (uid, username, first_name, last_name, email, password, is_admin) VALUES (\"{$credentials["uid"]}\", \"{$credentials["username"]}\", \"{$credentials["firstName"]}\", \"{$credentials["lastName"]}\", \"{$credentials["email"]}\", \"{$credentials["password"]}\", {$credentials["isAdmin"]})";

$result = $connection->query($insertQuery);
$connection->close();

if($result) {
    $_SESSION['uid'] = $credentials['uid'];
    $_SESSION['username'] = $credentials['username'];
    $_SESSION['first_name'] = $credentials['firstName'];
    $_SESSION['last_name'] = $credentials['lastName'];
    $_SESSION['email'] = $credentials['email'];
    $_SESSION['password'] = $credentials['password'];
    $_SESSION['is_admin'] = $credentials['isAdmin'];

    echo json_encode(array("success"=>true));
}
else{
    die(json_encode(array("success"=>false)));
}
