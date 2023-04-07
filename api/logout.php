<?php
// api/login.php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
       
        $path = explode('/', $_SERVER['REQUEST_URI']);
        
        if (!isset($path[5])) {
            http_response_code(400);
            $response = array(['status' => '0', 'message' => 'user session is invalid']);
        } else {
            $sql = "UPDATE users SET token=null WHERE id='$path[5]'";
            $querysql = mysqli_query($conn, $sql); 
            $response = array(['status' => '1', 'message' =>'logged out successfully.']); 
        }
        echo json_encode($response);
        break;
}

