<?php
/**
 * Created by PhpStorm.
 * User: longnguyen
 * Date: 11/29/14
 * Time: 9:40 PM
 */

    include '../db_connection.php';
    if (isset($_POST['post_id'])) {
        $post_id = $_POST['post_id'];

    }
    if (isset($_POST['title'])) {
        $title = $_POST['title'];

    }
    if (isset($_POST['date'])) {
        $date = $_POST['date'];

    }
    if (isset($_POST['content'])) {
        $content = $_POST['content'];

    }
    if (isset($_POST['image_url'])) {
        $image_url = $_POST['image_url'];

    }
    if (isset($_POST['music_url'])) {
        $music_url = mysqli_real_escape_string($con, $_POST['music_url']);

    }
    if (isset($_POST['song'])) {
        $song = mysqli_real_escape_string($con, $_POST['song']);
    }
    if (isset($_POST['category_id'])) {
        $category_id = $_POST['category_id'];

    }
    if (isset($_POST['user_id'])) {
        $user_id = $_POST['user_id'];

    }

    $sql_query_add_post = "INSERT INTO Post(post_id, title, post_date, content, image_url, music_url, song_name, category_id, user_id) VALUES ('$post_id','$title','$date','$content','$image_url','$music_url','$song','$category_id','$user_id')";

    $result = mysqli_query($con,$sql_query_add_post);
    if($result)
    {
        echo "Success";
    }
    else
    {
        echo $sql_query_add_post ." - Error";
    }
    mysqli_close($con);

?>