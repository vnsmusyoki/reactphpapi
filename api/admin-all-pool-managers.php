<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $category = "pool";
        $sql = "SELECT * FROM `users` WHERE `category` LIKE '%pool%'";
        $querysql = mysqli_query($conn, $sql); 
        $queryrows = mysqli_num_rows($querysql);
        $users = array();
 
        if ($queryrows > 0) { 
            while ($row = mysqli_fetch_assoc($querysql)) {
                $users[] = $row;
            }
        }
        echo json_encode($users);
        break;
}
