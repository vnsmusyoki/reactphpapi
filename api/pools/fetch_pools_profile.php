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
}
