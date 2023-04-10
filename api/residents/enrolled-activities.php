<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "SELECT * FROM `user_enrolled_activities` WHERE `user_id`='$path[6]'";
        // print_r($path);
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
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        // print_r($path);
        $sqls = "DELETE  FROM user_enrolled_activities WHERE `id`='$path[6]'";
        $querysqls = mysqli_query($conn, $sqls);
        // $queryrows = mysqli_num_rows($querysqls);
        // $users = array();

        // if ($queryrows > 0) {
        //     while ($row = mysqli_fetch_assoc($querysqls)) {
        //         $users[] = $row;
        //     }
        // }
        echo json_encode($users);
        break;
}
