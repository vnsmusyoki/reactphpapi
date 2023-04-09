<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include '../db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'PUT':
        $user = json_decode(file_get_contents('php://input'));
        $path = explode('/', $_SERVER['REQUEST_URI']);
        print_r($user);
        $message = $user->message;
        $receiver =   $path[6];
        $sender = $path[7];

        $checkreceiver = "SELECT * FROM `users` WHERE `id`='$receiver'";
        $querycheckreceiver = mysqli_query($conn, $checkreceiver);
        $queryrreceiverrows = mysqli_num_rows($querycheckreceiver);
        if ($queryrreceiverrows >= 1) {
             while($row = mysqli_fetch_assoc($querycheckreceiver)){
                $r_names = $row['full_names'];

             }
        } 
        $checksender = "SELECT * FROM `users` WHERE `id`='$sender'";
        $querychecksender = mysqli_query($conn, $checksender);
        $queryrsenderrows = mysqli_num_rows($querychecksender);
        if ($queryrsenderrows >= 1) {
             while($srow = mysqli_fetch_assoc($querychecksender)){
                $s_names = $srow['full_names'];
             }
        } 
        $add = "INSERT INTO `chats`(`sender_id`, `receiver_id`, `sender_name`, `receiver_name`, `message`) VALUES ('$sender', '$receiver', '$s_names', '$r_names','$message')";
        $queryadd  = mysqli_query($conn, $add);
        if($queryadd){
            $response = ['status' => '1', 'message' => 'Message Sent successfully.'];
        }
        echo json_encode($response);
        break;
    case 'GET':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        // print_r($path);
        // $sql = "SELECT * FROM chats WHERE id='$path[6]'";
        $sql = "SELECT * FROM chats
        WHERE (`sender_id` = '$path[6]' AND `receiver_id` = '$path[7]') OR (`sender_id` = '$path[7]' AND `receiver_id` = '$path[6]')
        ORDER BY date_created ASC;";
        $querysql = mysqli_query($conn, $sql);
        $queryrows = mysqli_num_rows($querysql);
        $messages = array();

        if ($queryrows > 0) {
            while ($row = mysqli_fetch_assoc($querysql)) {
                $messages[] = $row;
            }
        }
        echo json_encode($messages);
        break;
    // case 'PUT':
    //     $path = explode('/', $_SERVER['REQUEST_URI']);
    //     $pool = json_decode(file_get_contents('php://input'));
    //     $name = $pool->pool_name;
    //     $capacity =   $pool->capacity;
    //     $status = $pool->status;
    //     if (empty($name) || empty($capacity) || empty($status)) {

    //         http_response_code(400);
    //         echo json_encode(array('message' => 'Please provide all the details required to  edit Pool Profile.'));
    //         exit();
    //     } else {
    //         $checkuser = "UPDATE  `pools` SET `pool_name`='$name', `capacity`='$capacity',`status`='$status' WHERE `id`= '$path[6]'";
    //         $queryupdate = mysqli_query($conn, $checkuser);
    //         if ($queryupdate) {

    //             $response = ['status' => '1', 'message' => 'Pool Profile Updated successfully'];
    //             // echo json_encode($response);
    //         } else {
    //             $response = ['status' => '0', 'message' => 'An error occurred while updating the details for this pool.'];
    //             // echo json_encode($response);
    //         }
    //     }
    //     echo json_encode($response);
    //     break;
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user = json_decode(file_get_contents('php://input'));
        $checkuser = "DELETE  FROM `pools` WHERE `id`='$path[6]'";
        $queryusers = mysqli_query($conn, $checkuser);
        if ($queryusers) {
            $response = ['status' => '1', 'message' => 'Pool Account deleted successfully.'];
            exit();
        } else {
            $response = ['status' => '0', 'message' => 'Pool deletion failed.'];
            exit();
        }
        echo json_encode($response);
        break;
}
