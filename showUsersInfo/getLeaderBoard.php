<?php

include '../utils.php';

session_start();
$connection = connectToDb();

if (mysqli_connect_errno()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);


$query = "select locations.uid as uid_s,month as month_s,first_name,last_name,activity, (select count(activity) from locations where (activity = 'ON_FOOT' or activity = 'WALKING' or activity = 'ON_BICYCLE') and uid = uid_s 
and month= month_s)/ (select count(activity) from locations where uid = uid_s and month= month_s) as eco_percentage from locations join users on locations.uid = users.uid where month = MONTH(CURDATE()) and year = YEAR(CURDATE()) group by uid_s, 
month ORDER BY eco_percentage DESC";


$results = [];
$result = $connection->query($query);
while ($row = $result->fetch_array()) {
    $results[] = [
        'uid_s' => $row['uid_s'],
        'activity' => $row['activity'],
        'first_name' => $row['first_name'],
        'last_name' => $row['last_name'],
        'month_s' => $row ['month_s'],
        'eco_percentage' => $row['eco_percentage']
    ];
}
$connection->close();
echo json_encode($results);