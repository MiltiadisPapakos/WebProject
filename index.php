<?php
session_start();

if(isset($_SESSION['uid'])) {
    echo json_encode(array('success'=>true));
}
else{
    echo json_encode(array('success'=>false));
}