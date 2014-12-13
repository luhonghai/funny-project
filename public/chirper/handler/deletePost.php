<?php
/**
 * Created by PhpStorm.
 * User: longnguyen
 * Date: 12/8/14
 * Time: 10:05 PM
 */

    include '../db_connection.php';
    if (isset($_POST['post_id'])) {
        $post_id = $_POST['post_id'];

    }

    $sql_query_del_post = "DELETE FROM Post WHERE post_id='$post_id'";

    $result = mysqli_query($con,$sql_query_del_post);
    if($result)
    {
        echo "Success";
    }
    else
    {
        echo $sql_query_del_post ." - Error";
    }
    mysqli_close($con);
?>