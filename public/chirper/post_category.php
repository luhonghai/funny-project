<?php session_start(); ?>
<?php
    include 'db_connection.php';
    if (!isset($_SESSION['id'])) {
        $user = "Guest";
    } else {
        $user = $_SESSION['id'];
    }

    if (!isset($_SESSION['user_id'])) {
        $id = "0";
    } else {
        $id = $_SESSION['user_id'];
    }

    if (!isset($_SESSION['image'])) {
        $image = "";
    } else {
        $image = $_SESSION['image'];
    }
    if (isset($_GET['type'])) {
        $cat = $_GET['type'];
    }
    //echo $user;
    $sql_select_post = "SELECT Post.post_id, Post.title, Post.post_date, Post.content, Post.image_url, Post.music_url, Post.category_id, Category.title as category, Post.user_id, Users.email, Users.image, Users.username \n"
        . "FROM `Post` \n"
        . "INNER JOIN `Users` ON Post.user_id = Users.user_id \n"
        . "INNER JOIN `Category` ON Post.category_id = Category.category_id WHERE Post.category_id='$cat' ORDER BY Post.post_date DESC";
    $result = mysqli_query($con, $sql_select_post);

    $sql_music = "SELECT title,image_url,song_name,music_url FROM Post WHERE category_id='$cat' ORDER BY post_date DESC LIMIT 5";
    $result_music = mysqli_query($con, $sql_music);
    //mysqli_close($conn);
?>
<!doctype html>
<!--[if lt IE 7 ]>
<html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>
<html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>
<html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>
<html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->
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
    <script src="js/index.js"></script>
    <!-- Style CSS -->
    <link href="css/bootstrap.css" media="screen" rel="stylesheet">
    <link href="css/style.css" media="screen" rel="stylesheet">

    <!-- scripts -->
    <script src="js/general.js"></script>
    <!-- styled select -->
    <link rel="stylesheet" href="css/cusel.css">
    <script src="js/cusel-min.js"></script>
    <!-- custom input -->
    <script src="js/jquery.customInput.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
    <!-- Placeholders -->
    <script type="text/javascript" src="js/jquery.powerful-placeholder.min.js"></script>
    <!-- Progress Bars -->
    <script src="js/progressbar.js"></script>
    <!-- Calendar -->
    <link href="css/jquery-ui-1.8.20.custom.css" rel="stylesheet">
    <script src="js/jquery-ui.multidatespicker.js"></script>

    <!-- range sliders -->
    <script src="js/jquery.slider.bundle.js"></script>
    <script src="js/jquery.slider.js"></script>
    <link rel="stylesheet" href="css/jslider.css">
    <!-- Visual Text Editor -->
    <script src="js/nicEdit.js"></script>
    <!-- Volume, Balance -->
    <script type="text/javascript" src="js/knobRot-0.2.2.js"></script>
    <!-- Video Player -->
    <link href="css/video-js.css" rel="stylesheet">
    <script src="js/video.js"></script>
    <!-- Audio Player  -->
    <link href="css/jplayer.css" rel="stylesheet">
    <script src="js/jquery.jplayer.min.js"></script>
    <script src="js/jplayer.playlist.min.js"></script>
    <script type="text/javascript">
        //<![CDATA[
        $(document).ready(function () {

            new jPlayerPlaylist({
                jPlayer: "#jquery_jplayer_1",
                cssSelectorAncestor: "#jp_container_1"
            }, [
                <?php
                    while($row1 = mysqli_fetch_array($result_music)){
                        echo "{";
                        echo "title:\"<img src='" .$row1['image_url']. "' alt='' /><ul><li class='item-artist'><span>01.</span>".$row1['title']."</li><li class='item-song'>".$row1['song_name']."</li></ul>\",";
                        echo "mp3:\"".$row1['music_url']."\"";
                        echo "},";
                    }
                ?>
                //{
                //    title:"<img src='images/temp/music-player3.png' alt='' /><ul><li class='item-artist'><span>03.</span>Justin Timberlake</li><li class='item-song'>Mirrors</li><li class='item-album'>20/20 Experience | 2013</li></ul>",
                //    mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
                //    oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
                //}
            ], {
                swfPath: "js",
                supplied: "oga, mp3",
                wmode: "window",
                smoothPlayBar: false,
                keyEnabled: false
            });
        });
        //]]>
    </script>

    <!-- Scroll Bars -->
    <script src="js/jquery.mousewheel.js"></script>
    <script src="js/jquery.jscrollpane.min.js"></script>
    <script type="text/javascript">
        jQuery(function () {
            jQuery('.scrollbar').jScrollPane({
                verticalDragMaxHeight: 39,
                verticalDragMinHeight: 39
            });

            jQuery('.scrollbar.style2').jScrollPane({
                verticalDragMaxHeight: 36,
                verticalDragMinHeight: 36
            });
        });
    </script>

    <!-- Multiselect -->
    <link rel="stylesheet" href="css/chosen.css">
    <script src="js/jquery.chosen.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery('#txtCategory').chosen({ width: "100%" });
        });
    </script>

    <!--[if lt IE 9]>
    <script src="js/respond.min.js"></script><![endif]-->
    <!--[if gte IE 9]>
    <style type="text/css">
        .gradient {
            filter: none !important;
        }
    </style>
    <![endif]-->
</head>

<body>
<div class="body_wrap">
<div class="container">
<div class="content " role="main">
<!-- row -->
<div class="row">
    <div class="col-sm-4">
        <!-- logo -->
        <img src="images/logo_chirper.png" style="width:100%;"/>
        <!--/ logo -->
    </div>

    <div class="col-sm-8">
        <!-- Website Menu -->
        <div style="margin-bottom: 10px; float:right;">
            Welcome <span style="color:#cc7b4c;"><?php echo $user ?></span> to Chirper!
        </div>
        <div class="dropdown-wrap boxed-velvet">
            <ul class="dropdown inner clearfix">
                <li class="menu-level-0"><a href="index.php"><span>Home</span></a></li>
                <li class="menu-level-0"><a href="#"><span>Music</span></a>
                    <ul class="submenu-1">
                        <li class="menu-level-1"><a href="post_category.php?type=1">Rock</a></li>
                        <li class="menu-level-1"><a href="post_category.php?type=2">Pop</a></li>
                        <li class="menu-level-1"><a href="post_category.php?type=3">Jazz</a></li>
                        <li class="menu-level-1"><a href="post_category.php?type=4">Alternative</a></li>
                        <li class="menu-level-1"><a href="post_category.php?type=5">Rap</a></li>
                    </ul>
                </li>
                <?php if($user != "Guest"){
                    echo "<li class='menu-level-0'><a href='profile.php'><span>Profile</span></a></li>";
                    echo "<li class='menu-level-0'><a href='my_post.php?user_id=".$id."'><span>MyPost</span></a></li>";
                    echo "<li class='menu-level-0'><a href='#'><span>SignUp</span></a></li>";
                    echo "<li class='menu-level-0'><a href='logout.php'><span>Logout</span></a></li>";
                }else{
                    echo "<li class='menu-level-0'><a href='#'><span>Profile</span></a></li>";
                    echo "<li class='menu-level-0'><a href='#'><span>MyPost</span></a></li>";
                    echo "<li class='menu-level-0'><a href='register.php'><span>SignUp</span></a></li>";
                    echo "<li class='menu-level-0'><a href='login.php'><span>Login</span></a></li>";
                }?>
            </ul>
        </div>
        <!--/ Website Menu -->
    </div>
</div>
<!--/ row -->

<!-- row -->
<div class="row">
    <div class="col-sm-8" style="margin-top: 35px;">
        <div class="boxed">
            <div class="inner">
                <h3 class="widget-title" style="margin:10px;">Post By Category</h3>
                <input type="text" id="session_id" value="<?php echo $id ?>" style="display: none;">
                <input type="text" id="user_type" value="<?php echo $user ?>" style="display: none;">
            </div>
        </div>
        <?php
        while ($row = mysqli_fetch_array($result)) {
            echo "<div class='tabs_framed styled'>";
            echo "<div class='inner'>";
            echo "<div class='tab-content clearfix'>";
            echo "<div class='tab-pane clearfix fade in active' id='events'>";
            echo "<div class='tab_image'><img src=" .$row['image_url']. " alt='' /></div>";
            echo "<div style='float:right;font-size:11px;'>";
            echo "Poster: <a href='my_post.php?user_id=".$row['user_id']."'><span>" .$row['username']. "</span></a><br/>";
            echo "<span>".$row['post_date']."</span>";
            echo "</div>";
            echo "<h4 style='width:80%;'>" .$row['title']. "</h4>";
            echo "<p style='height:90px;'>" .$row['content']."</p>";

            echo "<a href='detail_post.php?post_id=".$row['post_id']."' class='see-more' style=''><span>More</span></a>";
            echo "<div class='tagcloud' style='float:right;'>";
            echo "<a href='post_category.php?type=".$row['category_id']."' class='tag-link-1' style='margin-bottom: 3px;'><span>" .$row['category']. "</span></a>";
            echo "</div>";
            echo "</div>";
            echo "</div>";
            echo "</div>";
            echo "</div>";
        }
        ?>
    </div>

    <div class="col-sm-4">
        <!-- Widget Audio Player -->
        <div class="widget-container widget-audio" style="margin-top:35px;">
            <div class="inner">
                <!-- jplayer-->
                <div id="jquery_jplayer_1" class="jp-jplayer"></div>
                <div id="jp_container_1" class="jp-audio">
                    <div class="jp-type-playlist">
                        <div class="jp-playlist">
                            <ul class="jp-playlist-inner">
                                <li></li>
                            </ul>
                        </div>
                        <div class="jp-gui jp-interface">
                            <div class="song_title_wrap">
                                <div class="song_title"></div>
                            </div>
                            <div class="jp-controls-wrap">
                                <div class="jp-progress">
                                    <div class="jp-seek-bar">
                                        <div class="jp-play-bar"></div>
                                    </div>
                                </div>
                                <ul class="jp-controls">
                                    <li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-previous disabled" tabindex="1">previous</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-next" tabindex="1">next</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-shuffle" tabindex="1" title="shuffle">shuffle</a></li>
                                    <!--
                                                                                            -->
                                    <li><a href="javascript:;" class="jp-shuffle-off" tabindex="1" title="shuffle off">shuffle off</a></li>
                                </ul>
                                <div class="jp-volume-bar">
                                    <div class="jp-volume-bar-value"></div>
                                </div>
                                <div class="jp-current-time"></div>
                                <div class="jp-duration"></div>
                            </div>
                        </div>
                        <div class="jp-no-solution">
                            <span>Update Required</span>
                            To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/"
                                                                                                                                target="_blank">Flash plugin</a>.
                        </div>
                    </div>
                </div>
                <!--/ jplayer-->
            </div>
        </div>
        <!-- Widget Audio Player -->
    </div>
</div>
<!--/ row -->


</div>
</div>
<!--/ container -->
</div>
</body>
</html>
