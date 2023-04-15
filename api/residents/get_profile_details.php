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
        $sql = "SELECT * FROM `users` WHERE `id`='$path[6]'";
        $querysql = mysqli_query($conn, $sql);
        $queryrows = mysqli_num_rows($querysql);
        $payments = array();
        if ($queryrows > 0) {
            while ($row = mysqli_fetch_assoc($querysql)) {
                $payments[] = $row;
            }
        }
        echo json_encode($payments);
        break;
    case 'PUT':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $names  = mysqli_real_escape_string($conn, $user->full_names);
        $email  = mysqli_real_escape_string($conn, $user->email);
        $idnumber  = mysqli_real_escape_string($conn, $user->id_number);
        $phonenumber  = mysqli_real_escape_string($conn, $user->phone_number);
        $phonelegth = strlen($phonenumber);
        $idlength = strlen($idnumber);
        if (empty($names) || empty($email) || empty($idnumber) || empty($phonenumber)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details to edit your account.'));
            exit();
        }elseif(!preg_match("/^[0-9]*$/", $phonenumber) || !preg_match("/^[0-9]*$/", $idnumber)){
            http_response_code(400);
            echo json_encode(array('message' => 'Please valid phone number / id number.'));
            exit();
        }elseif($phonelegth !== 10){
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide 10 digits mobile number.'));
            exit();   
        }elseif($idlength !== 8){
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide 8 digits id number.'));
            exit();  
        } else {

           
            $updatevehicle="UPDATE `users` SET `full_names`='$names',`email`='$email',`id_number`='$idnumber',`phone_number`='$phonenumber' WHERE `id`='$path[6]'";
            $queryupdate = mysqli_query($conn, $updatevehicle);
            if ($queryupdate) {

                $response = ['status' => '1', 'message' => 'account details Updated successfully'];
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the account.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
}
