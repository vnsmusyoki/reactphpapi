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
        // print_r($path);
        $sql = "SELECT * FROM user_enrolled_activities WHERE `user_id`='$path[7]' AND `activity_id`='$path[6]'";
        $querysql = mysqli_query($conn, $sql);
        $queryrows = mysqli_num_rows($querysql);
        if ($queryrows >= 1) {
            http_response_code(400);
            echo json_encode(array('message' => 'You are already an active member to this activity'));
            exit();
        } else {
            $check = "SELECT * FROM activities WHERE `id`='$path[6]'";
            $querycheck = mysqli_query($conn, $check);
            $querycheckrows = mysqli_num_rows($querycheck);
            if ($querycheckrows >= 1) {
                while ($fetch = mysqli_fetch_assoc($querycheck)) {
                    $activityname = $fetch['activity'];
                    $subscribers = $fetch['subscribers'];
                    $add = "INSERT INTO `user_enrolled_activities`(`user_id`, `activity_id`, `activity_name`) VALUES ('$path[7]', '$path[6]', '$activityname')";
                    $queryadddd = mysqli_query($conn, $add);
                    if ($queryadddd) {

                        $newcount = $subscribers + 1;
                        $updaterow = "UPDATE `activities` SET `subscribers`='$newcount' WHERE `id`='$path[6]'";
                        $queryupdaterow = mysqli_query($conn, $updaterow);
                        $response = ['status' => '1', 'message' => 'You have successfully enrolled to this activity'];
                    } else {
                        http_response_code(400);
                        echo json_encode(array('message' => 'An error occurred while registering to this activity'));
                        exit();
                    }
                }
            }
        }
        $users = array();

        if ($queryrows > 0) {
            while ($row = mysqli_fetch_assoc($querysql)) {
                $users[] = $row;
            }
        }
        echo json_encode($users);
        break;
}
