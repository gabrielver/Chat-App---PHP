<?php
session_start();
if (isset($_SESSION['unique_id'])) {
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];

    $output = "";

    $sql = "SELECT * FROM comment LEFT JOIN post ON post.post_id = comment.comment_post_id ORDER BY comment_post_id DESC";
    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query) > 0) {
        while ($row = mysqli_fetch_assoc($query)) {

            $output .= '<div class="chat incoming">
            <div class="user" name="post_id" value=' . $row['post_id'] . '>
            <img src="php/images/' . $row['img'] . '" alt=""> 
            <span>' . $row['fname'] . " " . $row['lname'] . '</span>
            <p>' . $row['date'] . '</p>
            </div>
            <div class="details">
                <p>' . $row['post'] . '</p>
                <button><i  class="far fa-thumbs-up"></i></button>
                <span >' . $row['like_nb'] . '</span>
                <button classe="like"><i  class="far fa-thumbs-down"></i></button>
                <span >' . $row['dislike_nb'] . '</span>
            </div>
            <div class="comment">
            <form action="#" class="typing-comment">
                <input type="text" name="outgoing_id" value="' . $_SESSION['unique_id'] . '" hidden>
                <input type="text" name="comment" class="input-comment" placeholder="Type a comment here..." autocomplete="off">
                <button><i class="fab fa-telegram-plane"></i></button>
                
            </div>
            </div>';
        }
    } else {
        $output .= '<div class="text">No messages are available. Once you send message they will appear here.</div>';
    }
    echo $output;
} else {
    header("location: ../login.php");
}
