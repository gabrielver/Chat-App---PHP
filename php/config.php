<?php

$host = "localhost";
$user = "root";
$password = "root";
$db = "chat";
$port = 3307;

$conn = mysqli_connect($host, $user, $password, $db, $port);
if (!$conn) {
   echo "Database connection error" . mysqli_connect_error();
}
