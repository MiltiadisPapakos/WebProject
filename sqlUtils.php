<?php

function appendLocationInsertValues($uid, $timestamp, $latitude, $longitude, $activity){
    return " (\"$uid\", \"$timestamp\", \"$latitude\", \"$longitude\", \"$activity\")";
}

