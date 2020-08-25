<?php
include "userNumber.php";

/**
 * How this works:
 * Create a userNumber.php file in the same directory with utils.php and NEVER add it on github.
 * In this file create a function getUserNumber() which simply returns an integer.
 * This integer will be your developer number.
 * Change the connectToDB() function like this:
 *   - add an else if statement where you check if getUserNumber() equals to your developer number,
 *   - add your login credential inside the else if,
 *   - return a database connection with your credential.
 */
function connectToDb(){

    if(getUserNumber() == 0) {
        $dbHost = "127.0.0.1";
        $dbUser = "kon";
        $dbPassword = "2nK!UEcDwBNZ";
        $dbName = "web_project";
        $dbPort = 3306;

        return new mysqli($dbHost, $dbUser, $dbPassword, $dbName, $dbPort);
    }

    return null;
}


/**_____________________________________________________________________________________________*/
/**
 * DB details (those are the details information.
 * When you create your own localhost DB you need to use exactly the same names for everything to work correctly.
 * DB name: web_project
 * Table 1:
 *   - name: users
 *   - columns: uid, username, first_name, last_name, email, password, is_admin
 *   - primary key: uid
 *   - column types: uid, password --> varchar(35); username --> varchar(25); first_name, last_name --> varchar(30); email --> varchar(50); is_admin --> tinyint(1);
 * Table 2:
 *   - name: locations
 *   - columns: uid, loc_timestamp, latitude, longitude, activity
 *   - primary key: uid, loc_timestamp
 *   - foreign key: uid (on delete: cascade, on update: cascade)
 *   - column types: uid --> varchar(35); loc_timestamp, latitude, longitude --> bigint(20); activity --> varchar(25);
 *   - default values: activity --> "UNKNOWN"
 */