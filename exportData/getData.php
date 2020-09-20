<?php
include "../utils.php";

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$startingYear = $credentials['startingYear'];
$endingYear = $credentials['endingYear'];
$startingMonth = $credentials['startingMonth'];
$endingMonth = $credentials['endingMonth'];
$startingDay = $credentials['startingDay'];
$endingDay = $credentials['endingDay'];
$startingHour = $credentials['startingHour'];
$endingHour = $credentials['endingHour'];
$activities = $credentials['activities'];
$startingIndex = $credentials['startingIndex'];
$endingIndex = $credentials['endingIndex'];

$query = "SELECT uid, heading, activity, confidence, act_timestamp, vertical_accuracy, velocity, accuracy,"
    . " longitude, latitude, altitude, loc_timestamp"
    . " FROM locations WHERE"
    . " id BETWEEN " . $startingIndex . " AND " . $endingIndex
    . " AND year BETWEEN " . $startingYear . " AND " . $endingYear
    . " AND month BETWEEN " . $startingMonth . " AND " . $endingMonth
    . " AND day_of_week BETWEEN " . $startingDay . " AND " . $endingDay
    . " AND hour BETWEEN " . $startingHour . " AND " . $endingHour
    . " AND activity in (";

foreach ($activities as $key => $activity){
    if ($key != sizeof($activities)-1) {
        $query = $query . "\"" . $activity . "\"" . ", ";
    }
    else{
        $query = $query . "\"" . $activity . "\"" . ");";
    }
}

$results = [];
$result = $connection->query($query);

while ($row = $result->fetch_array()){
    $results[] = [
        'heading'=>intval($row['heading']),
        'activity'=>$row['activity'],
        'confidence'=>intval($row['confidence']),
        'act_timestamp'=>intval($row['act_timestamp']),
        'vertical_accuracy'=>intval($row['vertical_accuracy']),
        'velocity'=>intval($row['velocity']),
        'accuracy'=>intval($row['accuracy']),
        'longitude'=>intval($row['longitude']),
        'latitude'=>intval($row['latitude']),
        'altitude'=>intval($row['altitude']),
        'loc_timestamp'=>intval($row['loc_timestamp']),
        'uid'=>$row['uid']];
}

$connection->close();

echo json_encode($results);
