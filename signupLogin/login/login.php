<?php
include '../utils.php';

session_start();
$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$usernameUsed = $credentials['usernameUsed'];
$password = $credentials['password'];


if($usernameUsed == 'true'){
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
    $firstName = $row['first_name'];
    $lastName = $row['last_name'];
    $email = $row['email'];
    $password = $row['password'];
    $isAdmin = $row['is_admin'];

    $_SESSION['uid'] = $uid;
    $_SESSION['username'] = $username;
    $_SESSION['first_name'] = $firstName;
    $_SESSION['last_name'] = $lastName;
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    $_SESSION['is_admin'] = $isAdmin;

    $jsonArray = array('uid'=>$uid, 'username'=>$username, 'firstName'=>$firstName, 'lastName'=>$lastName,'email'=>$email, 'password'=>$password, 'isAdmin'=>$isAdmin, 'failed'=>false);
    echo json_encode($jsonArray);
}

$connection->close();

