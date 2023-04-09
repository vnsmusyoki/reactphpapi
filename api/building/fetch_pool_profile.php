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
        $name = $user->full_names;
        $email =   $user->email;
        $phonenumber = $user->phone_number;
        $gender = $user->gender; 
        $idnumber = $user->id_number;
        $phonelength = strlen($phonenumber);
        $idlength = strlen($idnumber);
        if(empty($name) || empty($email) || empty($phonenumber)  || empty($gender) || empty($idnumber)){

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  create new  account.'));
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
            $checkuser = "UPDATE  `users` SET `full_names`='$name', `phone_number`='$phonenumber',`id_number`='$idnumber',`gender`='$gender',`email`='$email'  WHERE `id`= '$path[6]'";
            $queryupdate = mysqli_query($conn, $checkuser);
            if ($queryupdate) {

                $response = ['status' => '1', 'message' => 'Account Updated successfully'];
                // echo json_encode($response);
            } else {
                $response = ['status' => '0', 'message' => 'An error occurred while updating the account.'];
                // echo json_encode($response);
            }
        }
        echo json_encode($response);
        break;
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $checkuser = "DELETE  FROM `users` WHERE `id`='$path[6]'";
        $queryusers = mysqli_query($conn, $checkuser);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Pool Manager Account  deleted successfull.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'Account deletion failed.'];
            exit();
        }
        echo json_encode($response);
        break;
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $name = $user->full_names;
        $email =   $user->email;
        $phonenumber = $user->phone_number;
        $gender = $user->gender; 
        $idnumber = $user->id_number;
        $phonelength = strlen($phonenumber);
        $idlength = strlen($idnumber);
        if(empty($name) || empty($email) || empty($phonenumber)  || empty($gender) || empty($idnumber)){
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  add new  account.'));
            exit();
        }elseif(!preg_match("/^[a-zA-z ]*$/", $name)){
            http_response_code(400);
            echo json_encode(array('message' => 'Please a valid name characters.'));
            exit();
        }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            http_response_code(400);
            echo json_encode(array('message' => 'Please a valid email address.'));
            exit();
        }elseif($idlength !== 8){
            http_response_code(400);
            echo json_encode(array('message' => 'ID number must have 8  digits.'));
            exit();
        } elseif($phonelength !== 10){
            http_response_code(400);
            echo json_encode(array('message' => 'Phone number must have 10 digits.'));
            exit();
        }else{
            $checkphoneemail = "SELECT * FROM `users` WHERE `id_number`='$idnumber' OR `phone_number`='$phonenumber'";
            $querycheckphoneemail = mysqli_query($conn, $checkphoneemail);
            $queryrows = mysqli_num_rows($querycheckphoneemail);
            if($queryrows >= 1){
                http_response_code(400);
                echo json_encode(array('message' => 'Email Address /  Phone Number already exists.'));
                exit();
            }else{
                $password = md5("password");
                $category = "pool";
                $add = "INSERT INTO `users`(`full_names`, `email`, `category`, `password`, `gender`, `id_number`, `phone_number`) VALUES ('$name', '$email', '$category', '$password','$gender','$idnumber','$phonenumber')";
                $queryadd = mysqli_query($conn, $add);
                if($queryadd){
                    $response = ['status' => '1', 'message' => 'Pool Manager Account  created successfully.'];
                    exit();
                }else{
                    http_response_code(400);
                    echo json_encode(array('message' => 'An error occurred while creating this account.'));
                    exit();
                }
            }

        }
        echo json_encode($response);
        break;

}
