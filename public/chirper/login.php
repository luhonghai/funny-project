<?php
    /**
     * Created by PhpStorm.
     * User: longnguyen
     * Date: 11/29/14
     * Time: 7:45 PM
     */

    session_start();
    include 'db_connection.php';

    if(isset($_SESSION['id'])){
        echo '<script type="text/javascript"> window.open("index.php","_self");</script>';
    }

    if(isset($_POST['login'])){
        $user = $_POST['username'];
        $pass = $_POST['password'];

        $sql_query = "SELECT * FROM Users WHERE username = '$user' and password = '$pass'";

        $result = mysqli_query($con,$sql_query);
        if($row = mysqli_fetch_array($result))
        {
            $_SESSION['id'] = $row['username'];
            $_SESSION['image'] = $row['image'];
            $_SESSION['user_id'] = $row['user_id'];

            echo '<script type="text/javascript"> window.open("index.php","_self");</script>';
        }

        mysqli_close($con);
    }
?>
<!doctype html>
<!--[if lt IE 7 ]><html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]><html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="author" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title></title>

    <!-- main JS libs -->
    <script src="js/libs/modernizr.min.js"></script>
    <script src="js/libs/jquery-1.10.0.js"></script>
    <script src="js/libs/jquery-ui.min.js"></script>
    <script src="js/libs/bootstrap.min.js"></script>

    <!-- Style CSS -->
    <link href="css/bootstrap.css" media="screen" rel="stylesheet">
    <link href="css/style.css" media="screen" rel="stylesheet">

    <!-- scripts -->
    <script src="js/general.js"></script>

    <!-- Include all needed stylesheets and scripts here -->
    <link rel="stylesheet" href="css/chosen.css">
    <script src="js/jquery.chosen.min.js" type="text/javascript"></script>
    <script src="js/nicEdit.js"></script>

    <!-- Placeholders -->
    <script type="text/javascript" src="js/jquery.powerful-placeholder.min.js"></script>



    <!--[if lt IE 9]><script src="js/respond.min.js"></script><![endif]-->
    <!--[if gte IE 9]>
    <style type="text/css">
        .gradient {filter: none !important;}
    </style>
    <![endif]-->
</head>

<body>
<div class="body_wrap">
    <div class="container">
        <div class="col-sm-4"></div>
        <div class="col-sm-4" style="margin-top: 200px;">
            <img src="images/logo_chirper.png" style="width:100%;"/>
            <div class="widget-container widget_search boxed">
                <div class="inner">
                    <form id="login" method="post" action="">
                        <div class="clearfix">
                            <div>
                                <input class="inputField" name="username" type="text" id="txtUsername" placeholder="Username"/>
                            </div>
                            <br/>
                            <div>
                                <input class="inputField" name="password" type="password" id="txtPassword" placeholder="Password"/>
                            </div>
                            <br>
                            <div>
                                <span class="btn btn-small">
                                    <input type="submit" id="btnLogin" name="login" value="Login"/>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--/ container -->

</div>
</body>
</html>