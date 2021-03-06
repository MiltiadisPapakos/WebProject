<?php

function appendLocationInsertValues(
    $uid,
    $keyTimestamp,
    $time,
    $latitude,
    $longitude,
    $activity,
    $heading,
    $confidence,
    $locTimestamp,
    $actTimestamp,
    $verticalAccuracy,
    $velocity,
    $accuracy,
    $altitude,
    $dateInfo
){
    $year = $dateInfo[0];
    $month = $dateInfo[1];
    $day = $dateInfo[2];
    $hour = $dateInfo[3];
    $dayOfWeek = $dateInfo[4];

    $res = " (\"$uid\", \"$keyTimestamp\", \"$time\", \"$latitude\", \"$longitude\", \"$activity\", ";
    $res = $res . "\"$heading\", \"$confidence\", \"$locTimestamp\", \"$actTimestamp\", \"$verticalAccuracy\", ";
    $res = $res . "\"$velocity\", \"$accuracy\", \"$altitude\", \"$year\", \"$month\", \"$day\", \"$hour\", ";
    $res = $res . "\"$dayOfWeek\")";

    return $res;
}

