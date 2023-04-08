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
        $sql = "SELECT * FROM operating_hours WHERE id='$path[6]'";
        $querysql = mysqli_query($conn, $sql);
        $queryrows = mysqli_num_rows($querysql);
        $timings = array();

        if ($queryrows > 0) {
            while ($row = mysqli_fetch_assoc($querysql)) {
                $timings[] = $row;
            }
        }
        echo json_encode($timings);
        break;
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $week_day = $user->week_day;
        $opening_time =   $user->opening_time;
        $closing_time =   $user->closing_time;
        if (empty($week_day) || empty($opening_time) || empty($closing_time)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required'));
            exit();
        } else {
            $checkphoneemail = "SELECT * FROM `operating_hours` WHERE `day`='$week_day' ";
            $querycheckphoneemail = mysqli_query($conn, $checkphoneemail);
            $queryrows = mysqli_num_rows($querycheckphoneemail);
            if ($queryrows >= 1) {
                http_response_code(400);
                echo json_encode(array('message' => 'Week day schedule already exists.'));
                exit();
            } else {

                $add = "INSERT INTO `operating_hours`(`day`, `opening_time`, `closing_time`) VALUES ('$week_day', '$opening_time', '$closing_time')";
                $queryadd = mysqli_query($conn, $add);
                if ($queryadd) {
                    $response = ['status' => '1', 'message' => 'Record created successfully.'];
                    exit();
                } else {
                    http_response_code(400);
                    echo json_encode(array('message' => 'An error occurred while creating this record.'));
                    exit();
                }
            }
        }
        echo json_encode($response);
        break;
    case 'PUT':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        // print_r($path);
        $timing = json_decode(file_get_contents('php://input'));
        $week_day = $timing->week_day;
        $opening_time =   $timing->opening_time;
        $closing_time =   $timing->closing_time;
        if (empty($week_day) || empty($opening_time) || empty($closing_time)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required'));
            exit();
        } else {

            $add = "UPDATE `operating_hours` SET `day`='$week_day', `opening_time`='$opening_time', `closing_time`='$closing_time' WHERE `id`='$path[6]'";
            $queryadd = mysqli_query($conn, $add);
            if ($queryadd) {
                $response = ['status' => '1', 'message' => 'Record created successfully.'];
                exit();
            } else {
                http_response_code(400);
                echo json_encode(array('message' => 'An error occurred while creating this record.'));
                exit();
            }
        }
        echo json_encode($response);
        break;
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']); 
        $checkuser = "DELETE  FROM `operating_hours` WHERE `id`='$path[6]'";
        $queryusers = mysqli_query($conn, $checkuser);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Operating Hours deleted successfull.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'record deletion failed.'];
            exit();
        }
        echo json_encode($response);
        break;
}
