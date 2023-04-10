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
        $sql = "SELECT * FROM `user_enrolled_activities` WHERE `user_id`='$path[6]'";
        // print_r($path);
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
    case 'DELETE':
        $path = explode('/', $_SERVER['REQUEST_URI']);
        // print_r($path);
        $sqls = "SELECT * FROM `user_enrolled_activities` WHERE `id`='$path[6]'";
        $querysqls = mysqli_query($conn, $sqls);
        $rows = mysqli_num_rows($querysqls);
        if ($rows >= 1) {
            while ($fetchrow = mysqli_fetch_assoc($querysqls)) {
                $fetchacc = $fetchrow['activity_id'];
                
                $check = "SELECT * FROM activities WHERE `id`='$fetchacc'";
                $querycheck = mysqli_query($conn, $check);
                $querycheckrows = mysqli_num_rows($querycheck);
                if ($querycheckrows >= 1) {
                    while ($fetch = mysqli_fetch_assoc($querycheck)) {
                        $subscribers = $fetch['subscribers'];
                        $newcount = $subscribers - 1;
                        $updaterow = "UPDATE `activities` SET `subscribers`='$newcount' WHERE `id`='$fetchacc'";
                        $queryupdaterow = mysqli_query($conn, $updaterow);
                        if($queryupdaterow){
                            $delete = "DELETE FROM `user_enrolled_activities` WHERE `id`='$path[6]'";
                            $querydelete = mysqli_query($conn, $delete);
                            if($querydelete){
                                $response = ['status' => '1', 'message' => 'You have successfully enrolled out of this activity'];
                            }else{
                                $response = ['status' => '1', 'message' => 'You have successfully enrolled out of this activity'];
    
                            }
                        }
                    }
                }
            }
        }
}
