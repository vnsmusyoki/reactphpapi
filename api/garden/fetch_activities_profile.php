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
        $sql = "SELECT * FROM garden_activities WHERE id='$path[6]'";
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
    case 'PUT':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $activity = $user->activity;
        $starttime =   $user->start_time;
        $endtime = $user->end_time; 
        if (empty($activity) || empty($starttime) || empty($endtime)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  Edit This Activity'));
            exit();
        } elseif (!preg_match("/^[a-zA-z0-9 ]*$/", $activity)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Provide a valid Activity name'));
            exit();
        } else {
            $checkuser = "UPDATE  `garden_activities` SET `activity`='$activity', `start_time`='$starttime',`end_time`='$endtime' WHERE `id`= '$path[6]'";
            $queryupdate = mysqli_query($conn, $checkuser);
            if ($queryupdate) {
                $response = ['status' => '1', 'message' => 'Activity Updated successfully'];
                // echo json_encode($response);
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the activity.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $deleteactivity = "DELETE  FROM `garden_activities` WHERE `id`='$path[6]'";
        $queryusers = mysqli_query($conn, $deleteactivity);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Activity  deleted successfully.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'Account deletion failed.'];
            exit();
        }
        echo json_encode($response);
        break;
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $activity = $user->activity;
        $starttime =   $user->start_from;
        $endtime = $user->ends_at;
        if (empty($activity) || empty($starttime) || empty($endtime)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  Edit This Activity'));
            exit();
        } elseif (!preg_match("/^[a-zA-z0-9 ]*$/", $activity)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Provide a valid Activity name'));
            exit();
        }else {
            $checkphoneemail = "SELECT * FROM `garden_activities` WHERE `activity`='$activity'";
            $querycheckphoneemail = mysqli_query($conn, $checkphoneemail);
            $queryrows = mysqli_num_rows($querycheckphoneemail);
            if ($queryrows >= 1) {

                http_response_code(400);
                echo json_encode(array('message' => 'Activity already exists.'));
                exit();
            } else {
                
                $add = "INSERT INTO `garden_activities`(`activity`, `start_time`,`end_time`) VALUES ('$activity', '$starttime', '$endtime')";
                $queryadd = mysqli_query($conn, $add);
                if ($queryadd) {
                    $response = ['status' => '1', 'message' => 'New Activity   created successfully.'];
                    exit();
                } else {
                    http_response_code(400);
                    echo json_encode(array('message' => 'An error occurred while creating this account.'));
                    exit();
                }
            }
        }
        echo json_encode($response);
        break;
}
