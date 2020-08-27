<?php

function appendLocationInsertValues($uid, $timestamp, $latitude, $longitude, $activity, $dateInfo){
    $year = $dateInfo[0];
    $month = $dateInfo[1];
    $day = $dateInfo[2];
    $hour = $dateInfo[3];

    return " (\"$uid\", \"$timestamp\", \"$latitude\", \"$longitude\", \"$activity\", \"$year\", \"$month\", \"$day\", \"$hour\")";
}

