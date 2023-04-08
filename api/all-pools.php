<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM `pools`";
        $querysql = mysqli_query($conn, $sql); 
        $queryrows = mysqli_num_rows($querysql);
        $pools = array();
 
        if ($queryrows > 0) { 
            while ($row = mysqli_fetch_assoc($querysql)) {
                $pools[] = $row;
            }
        }
        echo json_encode($pools);
        break;
}