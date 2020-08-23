<?php
session_start();

if(isset($_SESSION['uid'])) {
    $isAdmin = $_SESSION['is_admin'];
    echo json_encode(array('success'=>true, 'isAdmin'=>$isAdmin));
}
else{
    echo json_encode(array('success'=>false));
}