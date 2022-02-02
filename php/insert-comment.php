<?php
session_start();
if (isset($_SESSION['unique_id'])) {
    include_once "config.php";
    $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
    $postnb = mysqli_real_escape_string($conn, $_POST['postnb']);
    $comment = mysqli_real_escape_string($conn, $_POST['comment']);
    if (!empty($comment)) {
        $sql = mysqli_query($conn, "INSERT INTO comment (comment_post_id, comment_user_id, comment)
                                        VALUES ({$postnb}, {$outgoing_id},'{$comment}' )") or die();
    }
} else {
    header("location: ../login.php");
}
