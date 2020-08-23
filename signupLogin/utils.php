<?php

function connectToDb(){
    $dbHost = "127.0.0.1";
    $dbUser = "kon";
    $dbPassword = "2nK!UEcDwBNZ";
    $dbName = "web_project";
    $dbPort = 3306;

    return new mysqli($dbHost, $dbUser, $dbPassword, $dbName, $dbPort);
}