<?php
    /**
     * Created by PhpStorm.
     * User: longnguyen
     * Date: 11/29/14
     * Time: 7:45 PM
     */
    session_start();

    session_destroy();

    echo '<script type="text/javascript"> window.open("index.php","_self");</script>';
?>