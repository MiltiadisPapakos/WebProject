<?php
session_start();

if(isset($_SESSION['uid'])) {
    $uid = $_SESSION['uid'];
    $firstName = $_SESSION['first_name'];
    $lastName = $_SESSION['last_name'];
    $email = $_SESSION['email'];
    $password = $_SESSION['password'];
    $isAdmin = $_SESSION['is_admin'];
    echo json_encode(array(
        'success'=>true,
        'uid'=>$uid,
        'firstName'=>$firstName,
        'lastName'=>$lastName,
        'email'=>$email,
        'password'=>$password,
        'isAdmin'=>$isAdmin
    ));
}
else{
    echo json_encode(array('success'=>false));
}