<?php
/**
 * Created by PhpStorm.
 * User: longnguyen
 * Date: 11/29/14
 * Time: 9:40 PM
 */

    include '../db_connection.php';
    if (isset($_POST['comment_id'])) {
        $comment_id = $_POST['comment_id'];
    }
    if (isset($_POST['comment_date'])) {
        $comment_date = $_POST['comment_date'];
    }
    if (isset($_POST['content'])) {
        $content = mysqli_real_escape_string($con, $_POST['content']);
    }
    if (isset($_POST['user_id'])) {
        $user_id = $_POST['user_id'];
    }
    if (isset($_POST['post_id'])) {
        $post_id = $_POST['post_id'];
    }

    $sql_query_add_comment = "INSERT INTO Comment(comment_id, comment_date, content, user_id, post_id) VALUES ('$comment_id','$comment_date','$content','$user_id','$post_id')";

    $result = mysqli_query($con,$sql_query_add_comment);
    if($result)
    {
        echo "Success";
    }
    else
    {
        echo $sql_query_add_comment . " - Error";
    }
    mysqli_close($con);

?>