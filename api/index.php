<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
       
        $name  = mysqli_real_escape_string($conn, $user->full_name);
        $email  = mysqli_real_escape_string($conn, $user->email);
        $category  = mysqli_real_escape_string($conn, $user->category);
        $password  = mysqli_real_escape_string($conn, $user->password);
        $passlength = strlen($password);
        if (empty($email) || empty($password) || empty($category) || empty($name)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to create a new account.'));
            exit();
        } elseif (!preg_match("/^[a-zA-z ]*$/", $name)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide a valid full name.'));
            exit();
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide valid email address.'));
            exit();
        } elseif ($passlength < 6) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please password with minimum of 6 characters.'));
            exit();
        } else {
            $checkemail = "SELECT * FROM `users` WHERE `email`= '$email'";
            $queryemail = mysqli_query($conn, $checkemail);
            $emailrows = mysqli_num_rows($queryemail);
            if ($emailrows >= 1) {
                http_response_code(400);
                echo json_encode(array('message' => 'Email already exists'));
                exit();
            } else {
                $password = md5($user->password); 
                $adduser = "INSERT INTO `users`(`full_names`, `email`, `category`, `password`) VALUES ('$user->full_name', '$user->email', '$user->category', '$password')";
                $queryadduser = mysqli_query($conn, $adduser);
                if ($queryadduser) {
                    $response = ['status' => '1', 'message' => 'Account created successfully'];
                    echo json_encode($response);
                }
                break;
            }
        }
}
