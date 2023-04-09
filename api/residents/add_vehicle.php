<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
     
    case 'PUT':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $carmodel  = mysqli_real_escape_string($conn, $user->car_model);
        $regno  = mysqli_real_escape_string($conn, $user->reg_number); 
        if (empty($carmodel) || empty($regno)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details to upload new vehicle.'));
            exit();
        } else {

            $checkuser = "INSERT INTO `vehicles`(`user_id`, `car_model`, `reg_number`) VALUES ('$path[6]', '$carmodel', '$regno')";
            $queryupdate = mysqli_query($conn, $checkuser);
            if ($queryupdate) {

                $response = ['status' => '1', 'message' => 'Account Updated successfully'];
                // echo json_encode($response);
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the account.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
    

}
