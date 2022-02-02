<?php
session_start();
if (isset($_SESSION['unique_id'])) {
    include_once "config.php";
    $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    if (!empty($message)) {
        $sql = mysqli_query($conn, "INSERT INTO post (post_user_id, post, like_id, dislike_id, like_nb, dislike_nb)
                                        VALUES ({$outgoing_id}, '{$message}',  '0', '0', '0', '0' )") or die();
    }
} else {
    header("location: ../login.php");
}
