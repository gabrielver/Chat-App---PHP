<?php
session_start();
if (isset($_SESSION['unique_id'])) {
    include_once "config.php";
    $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    $like_id = mysqli_real_escape_string($conn, $_POST['like']);
    $post_id = mysqli_real_escape_string($conn, $_POST['post_id']);




    $sql = mysqli_query($conn, "UPDATE post SET like_id = like_id + 1 WHERE post_id = $post_id") or die();
} else {
    header("location: ../login.php");
}
