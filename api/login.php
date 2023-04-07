<?php
// api/login.php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        if (empty($user->password) || empty($user->email)) {
            http_response_code(400);
            $response = ['status' => '0', 'message' => 'Provide all the details.'];
        } else {
            $email  = mysqli_real_escape_string($conn, $user->email);
            $password  = mysqli_real_escape_string($conn, $user->password);
            $newpassword = md5($password);
            $check = "SELECT *  FROM `users` WHERE `email` = '$email'";
            $query = mysqli_query($conn, $check);
            $rows = mysqli_num_rows($query);
            if ($rows >= 1) {
                while ($fetch = mysqli_fetch_assoc($query)) {
                    $dbpassword = $fetch['password'];
                    $category = $fetch['category'];
                    $id = $fetch['id'];
                    if ($newpassword == $dbpassword) {
                        // http_response_code(400);

                        // if ($rank == "trader") {
                        //     $_SESSION['trader'] = $username;
                        //     echo "<script>window.location.replace('trader/index.php');</script>";
                        // } elseif ($rank == "customer") {
                        //     $_SESSION['customer'] = $username;

                        //     echo "<script>window.location.href='customer/index.php';</script>";
                        // } else {
                        //     $_SESSION['username'] = $username;
                        //     echo "<script>window.location.replace('admin/index.php');</script>";
                        // }
                        // Generate access token
                        $token = generateToken($email);

                        // Store token in database or cache
                        saveToken($email, $token);
                        echo json_encode(array('token' => $token, 'message' => 'Login success.', 'status' => '1', 'category' => $category, 'id' => $id));
                    } else {
                        http_response_code(400);
                        echo json_encode(array('message' => 'Invalid email or password.nekkedme'));
                    }
                }
            } else {
            }
        }
        break;
}

// Validate user credentials
function validateUser($username, $password)
{
    // Check if username and password match in database
    // Return true if valid, false if invalid
}

// Generate access token
function generateToken($email)
{
    return hash('sha256', $email);
    // Generate a unique token based on user ID and current time
    // Return token string
}

// Store token in database or cache
function saveToken($email, $token)
{
    include 'db-connection.php';

    $update = "UPDATE `users` SET `token` = '$token' WHERE `email` = '$email'";
    $queryupdate = mysqli_query($conn, $update);

    // Store the token in a database or cache for later verification
}
