<?php
/**
 * Created by PhpStorm.
 * User: longnguyen
 * Date: 11/29/14
 * Time: 9:53 PM
 */

    include '../db_connection.php';
    if (isset($_POST['user_id'])) {
        $user_id = $_POST['user_id'];

    }
    if (isset($_POST['username'])) {
        $username = $_POST['username'];

    }
    if (isset($_POST['password'])) {
        $password = $_POST['password'];

    }
    if (isset($_POST['email'])) {
        $email = $_POST['email'];

    }
    if (isset($_POST['image'])) {
        $image = $_POST['image'];

    }

    $sql_query_add = "INSERT INTO Users(user_id, username, password, email, image) VALUES ('$user_id','$username','$password','$email','$image')";

    $result = mysqli_query($con,$sql_query_add);
    if($result)
    {
        echo "Success";
    }
    else
    {
        echo $sql_query_add. " Error";
    }
    mysqli_close($con);

?>