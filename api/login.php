<?php
// api/login.php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'db-connection.php';
// Authenticate user and generate access token
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get user credentials from request body
    $username = $_POST['email'];
    $password = $_POST['password'];
    $newpassword = md5($password);
    $check = "SELECT *  FROM `users` WHERE `email` = '$username'";
    $query = mysqli_query($conn, $check);
    $rows = mysqli_num_rows($query);
    if ($rows >= 1) {
        while ($fetch = mysqli_fetch_assoc($query)) {
            $dbpassword = $fetch['password'];
            $rank = $fetch['category'];
            if ($newpassword == $dbpassword) {
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
                $token = generateToken($username);

                // Store token in database or cache
                saveToken($username, $token);
 
                echo json_encode(array('token' => $token));
            } else {
                http_response_code(400);
                echo json_encode(array('message' => 'Invalid email or password.'));
                exit();
            }
        }
    } else {

        $message = "<script>
    toastr.error('Details not found')
  </script>";
    }
    // Validate user credentials
    if (validateUser($username, $password)) {
        // Generate access token
        $token = generateToken($username);

        // Store token in database or cache
        saveToken($username, $token);

        // Return token to client
        echo json_encode(array('token' => $token));
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Invalid email or password.'));
        exit();
        // Invalid credentials
        header('HTTP/1.1 401 Unauthorized');
        echo 'Invalid username or password';
    }
}

// Validate user credentials
function validateUser($username, $password)
{
    // Check if username and password match in database
    // Return true if valid, false if invalid
}

// Generate access token
function generateToken($username)
{
    // Generate a unique token based on user ID and current time
    // Return token string
}

// Store token in database or cache
function saveToken($username, $token)
{
    // Store the token in a database or cache for later verification
}
