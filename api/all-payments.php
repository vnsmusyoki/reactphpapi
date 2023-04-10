<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM `payments`";
        $querysql = mysqli_query($conn, $sql); 
        $queryrows = mysqli_num_rows($querysql);
        $payments = array();
 
        if ($queryrows > 0) { 
            while ($row = mysqli_fetch_assoc($querysql)) {
                $payments[] = $row;
            }
        }
        echo json_encode($payments);
        break;
}
