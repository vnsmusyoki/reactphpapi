<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $sql = "SELECT * FROM `payments` WHERE `user_id`='$path[6]'";
        $querysql = mysqli_query($conn, $sql);
        $queryrows = mysqli_num_rows($querysql);
        $activities = array();

        if ($queryrows > 0) {
            while ($row = mysqli_fetch_assoc($querysql)) {
                $activities[] = $row;
            }
        }
        echo json_encode($activities);
        break;
}
