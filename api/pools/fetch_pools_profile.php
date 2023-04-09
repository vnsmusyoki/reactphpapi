<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $name = $user->pool_name;
        $capacity =   $user->capacity;
        $status = $user->pool_status;
        if (empty($name) || empty($capacity) || empty($status)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  add new  pool.'));
            exit();
        } else {
            $checkpool = "SELECT * FROM `pools` WHERE `pool_name`='$name'";
            $querycheckpool = mysqli_query($conn, $checkpool);
            $queryrows = mysqli_num_rows($querycheckpool);
            if ($queryrows >= 1) {
                http_response_code(400);
                echo json_encode(array('message' => 'Pool Name already exists.'));
                exit();
            } else {
                $add = "INSERT INTO `pools`(`pool_name`, `capacity`, `status`) VALUES ('$name', '$capacity', '$status')";
                $queryadd = mysqli_query($conn, $add);
                if ($queryadd) {
                    $response = ['status' => '1', 'message' => 'Pool  created successfully.'];
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
    case 'GET':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "SELECT * FROM pools WHERE id='$path[6]'";
        $querysql = mysqli_query($conn, $sql);
        $queryrows = mysqli_num_rows($querysql);
        $pools = array();

        if ($queryrows > 0) {
            while ($row = mysqli_fetch_assoc($querysql)) {
                $pools[] = $row;
            }
        }
        echo json_encode($pools);
        break;
    case 'PUT':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $pool = json_decode(file_get_contents('php://input'));
        $name = $pool->pool_name;
        $capacity =   $pool->capacity;
        $status = $pool->status;
        if (empty($name) || empty($capacity) || empty($status)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  edit Pool Profile.'));
            exit();
        } else {
            $checkuser = "UPDATE  `pools` SET `pool_name`='$name', `capacity`='$capacity',`status`='$status' WHERE `id`= '$path[6]'";
            $queryupdate = mysqli_query($conn, $checkuser);
            if ($queryupdate) {

                $response = ['status' => '1', 'message' => 'Pool Profile Updated successfully'];
                // echo json_encode($response);
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the details for this pool.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
        case 'DELETE':
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $user = json_decode(file_get_contents('php://input'));
            $checkuser = "DELETE  FROM `pools` WHERE `id`='$path[6]'";
            $queryusers = mysqli_query($conn, $checkuser);
            if ($queryusers) {
                $response = ['status' => '1', 'message' => 'Pool Account deleted successfully.'];
                exit();
            } else {
                $response = ['status' => '0', 'message' => 'Pool deletion failed.'];
                exit();
            }
            echo json_encode($response);
            break;
}
