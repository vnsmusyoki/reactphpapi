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
        $amount  = mysqli_real_escape_string($conn, $user->amount);
        $code  = mysqli_real_escape_string($conn, $user->code);
        $codelength = strlen($code);

        if (empty($amount) || empty($code)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details to update this transaction.'));
            exit();
        } elseif ($codelength !== 8) {
            http_response_code(400);
            echo json_encode(array('message' => 'Payment code should have 8 characters.'));
            exit();
        } else {
            $check = "SELECT * FROM payments WHERE `id`='$path[6]'";
            $querycheck = mysqli_query($conn, $check);
            $querycheckrows = mysqli_num_rows($querycheck);
            if ($querycheckrows >= 1) {
                while ($fetch = mysqli_fetch_assoc($querycheck)) {
                    $status = $fetch['status']; 
                    if($status=="Pending" || $status=="pending"){
                        $add = "UPDATE `payments` SET `amount`='$amount', `code`='$code'";
                        $queryadddd = mysqli_query($conn, $add);
                        if ($queryadddd) {
                            $response = ['status' => '1', 'message' => 'Payment successfully edited.'];
                        } else {
                            http_response_code(400);
                            echo json_encode(array('message' => 'An error occurred while creating this record'));
                            exit();
                        }
                    }else{
                        http_response_code(400);
                        echo json_encode(array('message' => 'This payment has already been processed.'));
                        exit();
                }
                    
                }
            }
        }
        echo json_encode($response);
        break;
}
