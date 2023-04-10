<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include 'db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
     
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        // print_r($path);
        $checkuser = "UPDATE `payments` SET  `status`='Confirmed' WHERE `id`='$path[5]'";
        $queryusers = mysqli_query($conn, $checkuser);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Payment Approved successfully.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'Payment approval  failed.'];
            exit();
        }
        echo json_encode($response);
        break;
    

}
