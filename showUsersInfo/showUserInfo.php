<?php
include '..\utils.php';
session_start();
$connection = connectToDb();


if (mysqli_connect_errno()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);



$query = "select locations.uid as uid_s,day,month as month_s,year,activity,key_timestamp, (select count(activity) from locations where (activity = 'ON_FOOT' or activity = 'WALKING' or activity = 'ON_BICYCLE') and 
uid = uid_s and month= month_s)/ (select count(activity) from locations where uid = uid_s and month= month_s) as eco_percentage from locations where locations.uid
 like \"{$_SESSION['uid']}\" and STR_TO_DATE((DATE_FORMAT(FROM_UNIXTIME(key_timestamp/1000), '%Y %m %d')),\"%Y %m %d\") 
 BETWEEN '2019-01-01' - INTERVAL 12 month and '2019-01-01' GROUP by month, year order by year,month, day DESC ";


$results = [];
$result = $connection->query($query);
while($row = $result->fetch_array()) {
    $results[] = [
        'uid_s' => $row['uid_s'],
        'activity' => $row['activity'],
        'month_s' => $row ['month_s'],
        'eco_percentage' => $row['eco_percentage']
    ];
}
$connection->close();
echo json_encode($results);
