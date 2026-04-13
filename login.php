<?php
$servername = "localhost";
$username = "root";
$password = ""; // Default for XAMPP
$database = "learnix"; // Replace with your actual DB name

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get email and password from form
$email = $_POST['email'];
$pass = $_POST['password'];

// Check credentials
$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$pass'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
  echo "success";
} else {
  echo "invalid";
}

$conn->close();
?>
