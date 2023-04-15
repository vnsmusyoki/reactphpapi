<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once './phpmailer/src/Exception.php';
require_once './phpmailer/src/PhpMailer.php';
require_once './phpmailer/src/SMTP.php';
switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));

        $name  = mysqli_real_escape_string($conn, $user->full_name);
        $email  = mysqli_real_escape_string($conn, $user->email);
        $phonenumber  = mysqli_real_escape_string($conn, $user->phone_number);
        $category  = mysqli_real_escape_string($conn, $user->category);
        $password  = mysqli_real_escape_string($conn, $user->password);
        $passlength = strlen($password);
        $phonelength = strlen($phonenumber);
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
        } elseif ($phonelength !== 10) {
            http_response_code(400);
            echo json_encode(array('message' => 'Phone Number must have 10 digits.'));
            exit();
        } else {
            $checkemail = "SELECT * FROM `users` WHERE `email`= '$email' OR `phone_number`= '$phonenumber'";
            $queryemail = mysqli_query($conn, $checkemail);
            $emailrows = mysqli_num_rows($queryemail);
            if ($emailrows >= 1) {
                http_response_code(400);
                echo json_encode(array('message' => 'Email / Phone Number already exists'));
                exit();
            } else {
                $password = md5($user->password);
                $mail = new PHPMailer(true);
                 
                try {
                    $mail->isSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->SMTPAuth = true;
                    $mail->Username = 'aschool489@gmail.com';  //Your sender email address
                    $mail->Password = "kkacuunotbxwlbnc"; // your account password - not email password
                    $mail->SMTPSecure = 'ssl';
                    $mail->Port = '465';
                    $mail->setFrom('aschool489@gmail.com'); //sender email address
                    $mail->addAddress($email);
                    $mail->isHTML(true);
                    $mail->Subject = "Welcome your account created successfully.";
                    $mail->Body = "Welcome your account created successfully.";
                    $mail->send();
                    echo "Mail sent successfully.";
                } catch (Exception $e) {
                    echo "Message not sent because of an error. Please try again later. {$mail->ErrorInfo}";
                }

                $adduser = "INSERT INTO `users`(`full_names`, `email`, `category`, `password`, `phone_number`) VALUES ('$user->full_name', '$user->email', '$user->category', '$password', '$user->phone_number')";
                $queryadduser = mysqli_query($conn, $adduser);
                if ($queryadduser) {
                    $response = ['status' => '1', 'message' => 'Account created successfully'];
                    echo json_encode($response);
                }
                break;
            }
        }
}
