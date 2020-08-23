<?php
include '../utils.php';

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$usernameUsed = $credentials['usernameUsed'];
$password = $credentials['password'];


if($usernameUsed == false){
    $username = $credentials['userInput'];
    $query = "SELECT * FROM users WHERE username = \"$username\" AND password = \"$password\"";
}
else{
    $email = $credentials['userInput'];
    $query = "SELECT * FROM users WHERE email = \"$email\" AND password = \"$password\"";
}

$result = $connection->query($query);
$row = $result->fetch_assoc();

if(is_null($row)){
    die(json_encode(array('failed'=>true, 'reason'=>"No user found.")));
}
else{
    $uid = $row['uid'];
    $username = $row['username'];
    $email = $row['email'];
    $password = $row['password'];
    $isAdmin = $row['is_admin'];
    $jsonArray = array('uid'=>$uid, 'username'=>$username, 'email'=>$email, 'password'=>$password, 'isAdmin'=>$isAdmin, 'failed'=>false);
    echo json_encode($jsonArray);
}

$connection->close();

