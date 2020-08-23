<?php

function generatePassword(){
    $pool = str_split("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$*&@");
    $password = "";

    for ($i = 0; $i < 13; $i = $i + 1) {
        $char = rand(0, sizeof($pool));
        $password = $password . $pool[$char];
    }

    return $password;
}

