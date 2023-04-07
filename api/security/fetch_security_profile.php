<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
// include '../DbConnect.php';
// $objDb = new DbConnect;
// $conn = $objDb->connect();
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "SELECT * FROM users WHERE id='$path[6]'";
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
        $name  = mysqli_real_escape_string($conn, $user->full_names);
        $email  = mysqli_real_escape_string($conn, $user->email);
        $category  = mysqli_real_escape_string($conn, $user->category);
        if (empty($email) || empty($category) || empty($name)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  edit account.'));
            exit();
        } elseif (!preg_match("/^[a-zA-z ]*$/", $name)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide a valid full name.'));
            exit();
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide valid email address.'));
            exit();
        } else {
            $checkuser = "UPDATE  `users` SET `full_names`='$name', `category`='$category',`email`='$email'  WHERE `id`= '$path[6]'";
            $queryupdate = mysqli_query($conn, $checkuser);
            if ($queryupdate) {
                echo "record updated successfully";
                $response = ['status' => '1', 'message' => 'Account Updated successfully'];
                echo json_encode($response);
            } else {
                echo "record not updated successfully";
            }
        }
        echo json_encode($response);
        break;
}
