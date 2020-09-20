<?php
include "../utils.php";

session_start();

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

$query = "SELECT latitude, longitude, count(*) AS \"count\" FROM locations WHERE"
    . " id BETWEEN $startingIndex AND $endingIndex"
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
        $query = $query . "\"" . $activity . "\"" . ")";
    }
}

$query = $query . " GROUP BY latitude, latitude";

$results = [];
$result = $connection->query($query);

while ($row = $result->fetch_array()){
    $results[] = ['lat'=>(intval($row['latitude'])/(10**7)), 'lng'=>(intval($row['longitude'])/(10**7)), 'count'=>intval($row['count'])];
}

$connection->close();

//$newResults = [];
//for ($i = 0; $i < 700; $i = $i + 1){
//    $newResults[] = $results[$i];
//}
//foreach ($value in $results){
//
//}


echo json_encode($results);
//echo json_encode(array_slice($results, 0, 699));
//echo json_encode(array_slice($results, 700, 1399));

