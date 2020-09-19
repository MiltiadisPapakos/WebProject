<?php
include "../utils.php";

session_start();

$connection = connectToDb();

if(mysqli_connect_errno()){
    die('Connect Error ('.mysqli_connect_errno().') '.mysqli_connect_error());
}

$json = file_get_contents('php://input');
$credentials = json_decode($json, true);

$query1 = "SELECT activity, count(*) as count FROM locations GROUP BY activity; ";
$query2 = "SELECT locations.uid, count(*) as count FROM locations INNER JOIN users on users.uid= locations.uid GROUP BY locations.uid ; ";
$query3 = "SELECT month, count(*) as count FROM locations GROUP BY month;";
$query4 = "SELECT day_of_week, count(*) as count FROM locations GROUP BY day_of_week;";
$query5 = "SELECT hour, count(*) as count FROM locations GROUP BY hour;";
$query6 = "SELECT year, count(*) as count FROM locations GROUP BY year;";

$results = [];

$result = $connection->query($query1);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $results[0][] = array("activity"=>(($row["activity"])), "count"=>intval($row["count"]));
    }

} else {
    echo "0 results";
}

$result = $connection->query($query2);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $results[1][] = array("uid"=>(($row["uid"])), "count"=>intval($row["count"]));
    }

} else {
    echo "0 results";
}
$result = $connection->query($query3);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $results[2][] = array("month"=>(($row["month"])), "count"=>intval($row["count"]));
    }

} else {
    echo "0 results";
}

$result = $connection->query($query4);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $results[3][] = array("day_of_week"=>(($row["day_of_week"])), "count"=>intval($row["count"]));
    }

} else {
    echo "0 results";
}
$result = $connection->query($query5);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $results[4][] = array("hour"=>(($row["hour"])), "count"=>intval($row["count"]));
    }

} else {
    echo "0 results";
}

$result = $connection->query($query6);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $results[5][] = array("year"=>(($row["year"])), "count"=>intval($row["count"]));
    }

} else {
    echo "0 results";
}


$connection->close();
echo json_encode($results);
