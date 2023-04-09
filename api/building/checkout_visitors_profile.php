<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    
    
    case 'DELETE':
        $time = date("M, d Y, h:i:s A");
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $checkuser = "UPDATE `visitors` SET `check_out`='$time' WHERE `id`='$path[6]'";
        $queryusers = mysqli_query($conn, $checkuser);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Pool Manager Account  updated successfully.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'Account deletion failed.'];
            exit();
        }
        echo json_encode($response);
        break;
}
