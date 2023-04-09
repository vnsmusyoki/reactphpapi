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
        $sql = "SELECT * FROM visitors WHERE id='$path[6]'";
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
        $visiting_area =   $user->visiting_area;
        $phonenumber = $user->phone_number;
        $gender = $user->gender;
        $phonelength = strlen($phonenumber);
        if (empty($name) || empty($visiting_area) || empty($phonenumber)  || empty($gender)) {

            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  create new  account.'));
            exit();
        } elseif (!preg_match("/^[a-zA-z ]*$/", $name)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide a valid full name.'));
            exit();
        } elseif ($phonelength !== 10) {
            http_response_code(400);
            echo json_encode(array('message' => 'Phone number must have 10 digits.'));
            exit();
        } else {
            $checkupdateuser = "UPDATE `visitors` SET `full_names`='$name',`phone_number`='$phonenumber',`visiting_area`='$visiting_area',`gender`='$gender'WHERE `id`= '$path[6]'";
            $queryupdatevisitor = mysqli_query($conn, $checkupdateuser);
            if ($queryupdatevisitor) {

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
        $checkuser = "DELETE  FROM `visitors` WHERE `id`='$path[6]'";
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
        $visiting_area =   $user->visiting_area;
        $phonenumber = $user->phone_number;
        $gender = $user->gender;
        $phonelength = strlen($phonenumber);
        if (empty($name) || empty($visiting_area) || empty($phonenumber)  || empty($gender)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please provide all the details required to  add new  visitor.'));
            exit();
        } elseif (!preg_match("/^[a-zA-z ]*$/", $name)) {
            http_response_code(400);
            echo json_encode(array('message' => 'Please a valid name characters.'));
            exit();
        } elseif ($phonelength !== 10) {
            http_response_code(400);
            echo json_encode(array('message' => 'Phone number must have 10 digits.'));
            exit();
        } else {
            $time = date("M, d Y, h:i:s A");
            $add = "INSERT INTO `visitors`(`full_names`, `phone_number`, `visiting_area`, `check_in`,`gender`) VALUES ('$name', '$phonenumber', '$visiting_area', '$time', '$gender')";
            $queryadd = mysqli_query($conn, $add);
            if ($queryadd) {
                $response = ['status' => '1', 'message' => 'Visitor checked in successfully.'];
                exit();
            } else {
                http_response_code(400);
                echo json_encode(array('message' => 'An error occurred while creating this account.'));
                exit();
            }
        }
        echo json_encode($response);
        break;
}
