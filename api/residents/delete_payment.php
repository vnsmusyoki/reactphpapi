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
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $check = "SELECT * FROM payments WHERE `id`='$path[6]'";
        $querycheck = mysqli_query($conn, $check);
        $querycheckrows = mysqli_num_rows($querycheck);
        if ($querycheckrows >= 1) {
            while ($fetch = mysqli_fetch_assoc($querycheck)) {
                $status = $fetch['status'];
                if ($status !== "Confirmed" || $status !== "confirmed") {
                    $checkuser = "DELETE  FROM `payments` WHERE `id`='$path[6]'";
                    $queryusers = mysqli_query($conn, $checkuser);
                    if ($queryusers) {
                        $response = ['status' => '1', 'message' => 'Payment deleted successfully'];
                        exit();
                    } else {
                        http_response_code(400);
                        echo json_encode(array('message' => 'An error occurred and payment was not deleted.'));
                        exit();
                    }
                } else {
                    http_response_code(400);
                    echo json_encode(array('message' => 'This payment has already been processed.'));
                    exit();
                }
            }
        }
      
        echo json_encode($response);
        break;
}
