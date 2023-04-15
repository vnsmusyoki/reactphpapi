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
        $password  = mysqli_real_escape_string($conn, $user->password);
        $cpassword  = mysqli_real_escape_string($conn, $user->confirm_password);
        $passlegth = strlen($password);
        if (empty($password) || empty($cpassword)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details to edit your password.'));
            exit();
        } elseif ($passlegth < 8) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide a password with atleast 8 characters.'));
            exit();
        } elseif ($password !== $cpassword) {
            http_response_code(400);
            echo json_encode(array('message' => 'Password provided failed to match.'));
            exit();
        } else {

            $password = md5($password);
            $updatevehicle = "UPDATE `users` SET `password`='$password' WHERE `id`='$path[6]'";
            $queryupdate = mysqli_query($conn, $updatevehicle);
            if ($queryupdate) {
                $response = ['status' => '1', 'message' => 'Password  Updated successfully'];
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the account.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
}
