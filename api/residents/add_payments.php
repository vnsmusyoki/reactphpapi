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
            echo json_encode(array('message' => 'Please provide all the details to record this transaction.'));
            exit();
        } elseif ($codelength !== 8) {
            http_response_code(400);
            echo json_encode(array('message' => 'Payment code should have 8 characters.'));
            exit();
        } else {


            $checkcode = "SELECT * FROM payments WHERE `code`='$code'";
            $querycheckcode = mysqli_query($conn, $checkcode);
            $querycheckcoderows = mysqli_num_rows($querycheckcode);
            if ($querycheckcoderows >= 1) {
                http_response_code(400);
                echo json_encode(array('message' => 'Payment code already exists.'));
                exit();
            } else {
                $check = "SELECT * FROM users WHERE `id`='$path[6]'";
                $querycheck = mysqli_query($conn, $check);
                $querycheckrows = mysqli_num_rows($querycheck);
                if ($querycheckrows >= 1) {
                    while ($fetch = mysqli_fetch_assoc($querycheck)) {
                        $fullnames = $fetch['full_names'];
                        $phonenumber = $fetch['phone_number'];
                        $add = "INSERT INTO `payments`(`user_id`, `name`, `phone_number`, `amount`, `status`, `code`) VALUES ('$path[6]', '$fullnames', '$phonenumber', '$amount', 'Pending', '$code')";
                        $queryadddd = mysqli_query($conn, $add);
                        if ($queryadddd) {
                            $response = ['status' => '1', 'message' => 'Payment successfully added.'];
                        } else {
                            http_response_code(400);
                            echo json_encode(array('message' => 'An error occurred while creating this record'));
                            exit();
                        }
                    }
                }
            }
        }
        echo json_encode($response);
        break;
}
