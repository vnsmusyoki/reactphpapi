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
        $sql = "SELECT * FROM vehicles WHERE id='$path[6]'";
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
        $carmodel  = mysqli_real_escape_string($conn, $user->car_model);
        $regno  = mysqli_real_escape_string($conn, $user->reg_number); 
        if (empty($carmodel) || empty($regno)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details to upload new vehicle.'));
            exit();
        } else {

            $updatevehicle = "UPDATE `vehicles` SET `car_model`='$carmodel', `reg_number`='$regno' WHERE `id`='$path[6]'";
            $queryupdate = mysqli_query($conn, $updatevehicle);
            if ($queryupdate) {

                $response = ['status' => '1', 'message' => 'Vehicle details Updated successfully'];
                
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the account.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $checkuser = "DELETE  FROM `vehicles` WHERE `id`='$path[6]'";
        $queryusers = mysqli_query($conn, $checkuser);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Security Team deleted successfull.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'Account deletion failed.'];
            exit();
        }
        echo json_encode($response);
        break;
     

}
