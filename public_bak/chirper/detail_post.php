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
    if (isset($_GET['post_id'])) {
        $post_id = $_GET['post_id'];
    }

    $sql_select_comment = "SELECT Comment.comment_id, Comment.comment_date, Comment.content, Users.user_id, Users.username, Users.image\n"
        . "FROM Comment\n"
        . "INNER JOIN Users ON Comment.user_id = Users.user_id\n"
        . "WHERE Comment.post_id = '$post_id' ORDER BY Comment.comment_date ASC";
    $result_comments = mysqli_query($con, $sql_select_comment);

    $member_id = "";
    $sql_select_post = "SELECT title,content,post_date,image_url,song_name,music_url,user_id FROM Post WHERE Post.post_id='".$post_id."'";
    $result_post = mysqli_query($con, $sql_select_post);
    if($row_post = mysqli_fetch_array($result_post)){
        $post_title = $row_post['title'];
        $post_content = $row_post['content'];
        $post_date = $row_post['post_date'];
        $post_image = $row_post['image_url'];
        $post_song = $row_post['song_name'];
        $post_music = $row_post['music_url'];
        $member_id = $row_post['user_id'];
    }

    $member_name = "";
    $member_image = "";
    $sql_user_info = "SELECT * FROM Users WHERE user_id = '".$member_id."'";
    $result_info = mysqli_query($con, $sql_user_info);
    if($row_info = mysqli_fetch_array($result_info)){
        $member_name = $row_info['username'];
        $member_image = $row_info['image'];
    }

    $comments = "0";
    $post = "0";
    $cats = "0";
    $sql_count_comment = "SELECT count(*) as comments FROM Comment WHERE user_id='".$member_id."'";
    $result_count_comments = mysqli_query($con, $sql_count_comment);
    if($count_comment = mysqli_fetch_array($result_count_comments)){
        $comments = $count_comment['comments'];
    }

    $sql_count_post = "SELECT count(*) as posts FROM Post WHERE user_id='".$member_id."'";
    $result_count_posts = mysqli_query($con, $sql_count_post);
    if($count_post = mysqli_fetch_array($result_count_posts)){
        $posts = $count_post['posts'];
    }

    $sql_count_category = "SELECT count(DISTINCT category_id) as cats from Post WHERE user_id='".$member_id."'";
    $result_count_cats = mysqli_query($con, $sql_count_category);
    if($count_cats = mysqli_fetch_array($result_count_cats)){
        $cats = $count_cats['cats'];
    }
    //mysqli_close($conn);
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
    <!--<script src="js/index.js"></script>-->
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
                    echo "{";
                    echo "title:\"<img src='" .$post_image. "' alt='' /><ul><li class='item-artist'><span>01.</span>".$post_title."</li><li class='item-song'>".$post_song."</li></ul>\",";
                    echo "mp3:\"".$post_music."\"";
                    echo "}";
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
    <style>
        .add-comment.styled label {
            width: 71px !important;
        }

        .form-inner {
            padding-left: 60px !important;
        }
    </style>
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
                <?php if ($user != "Guest") {
                    echo "<li class='menu-level-0'><a href='profile.php'><span>Profile</span></a></li>";
                    echo "<li class='menu-level-0'><a href='my_post.php?user_id=" . $id . "'><span>MyPost</span></a></li>";
                    echo "<li class='menu-level-0'><a href='#'><span>SignUp</span></a></li>";
                    echo "<li class='menu-level-0'><a href='logout.php'><span>Logout</span></a></li>";
                } else {
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
            <h3 class="widget-title" style="margin:10px;">Post - <?php echo $post_title ?></h3>
            <input type="text" id="session_id" value="<?php echo $id ?>" style="display: none;">
            <input type="text" id="user_type" value="<?php echo $user ?>" style="display: none;">
            <input type="text" id="post_id" value="<?php echo $post_id ?>" style="display: none;">
            <input type="text" id="user_image" value="<?php echo $image ?>" style="display: none;">
        </div>
    </div>

    <div class="tab-content clearfix" id="divContent">
        <div class="tab-pane clearfix fade in active" id="events" style="height:auto;">
            <?php
                echo "<h4>".$post_date."</h4>";
                echo "<p>".$post_content."</p>";
            ?>

            <?php
                while($row_comment = mysqli_fetch_array($result_comments)){
                    echo "<div class='comment-list clearfix'>";
                    echo "<ol>";
                    echo "<li class='comment'>";
                    echo "       <div class='comment-body'>";
                    echo "            <div class='inner'>";
                    echo "                <div class='comment-arrow'></div>";
                    echo "                <div class='comment-avatar'>";
                    echo "                    <div class='avatar'>";
                    echo "                        <img src='".$row_comment['image']."' alt='' />";
                    echo "                    </div>";
                    echo "                </div>";
                    echo "                <div class='comment-text'>";
                    echo "                    <div class='comment-author clearfix'>";
                    echo "                        <a href='#' class='link-author'>".$row_comment['username']."</a>";
                    echo "                        <span class='comment-date'>".$row_comment['comment_date']."</span> |";
                    echo "                        <a href='#' class='link-reply anchor'>Reply</a>";
                    echo "                    </div>";
                    echo "                    <div class='comment-entry'>";
                    echo                          $row_comment['content'];
                    echo "                    </div>";
                    echo "               </div>";
                    echo "                <div class='clear'></div>";
                    echo "            </div>";
                    echo "        </div>";
                    echo "    </li>";
                    echo "</ol>";
                    echo "</div>";
                }
            ?>
             <!--   <div class="comment-list clearfix">
                    <ol>
                        <li class="comment">
                            <div class="comment-body">
                                <div class="inner">
                                    <div class="comment-arrow"></div>
                                    <div class="comment-avatar">
                                        <div class="avatar">
                                            <img src="images/temp/avatar1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="comment-text">
                                        <div class="comment-author clearfix">
                                            <a href="#" class="link-author">Justin Timberlake</a>
                                            <span class="comment-date">June 26, 2013</span> |
                                            <a href="#addcomments" class="link-reply anchor">Reply</a>
                                        </div>
                                        <div class="comment-entry">
                                            He made his film debut with a minor part in Back to the Future Part II (1989), then landed a succession.
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>-->
        </div>
    </div>
</div>

<div class="col-sm-4 col-md-4">

    <!-- Profile -->
    <div class="widget-container widget_profile boxed-velvet" style="margin-top: 35px;">
        <div class="inner">
            <div class="widget_profile_top clearfix">
                <div class="avatar"><img src="<?php echo $member_image ?>" alt="" style="width:100%;"/></div>
                <h5><?php echo $member_name ?></h5>
                <span class="subtitle">Poster</span>
                <div class="follow"><a href="#" class="btn btn-follow"><span>Follow</span></a></div>
            </div>
            <ul class="counters clearfix">
                <li class="first"><a href="#"><p><?php echo $posts ?></p><span>Posts</span></a></li>
                <li><a href="#"><p><?php echo $comments ?></p><span>Comments</span></a></li>
                <li class="last"><a href="#"><p><?php echo $cats ?></p><span>Category</span></a></li>
            </ul>
        </div>
    </div>
    <!--/ Profile -->

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

    <!-- comment form -->
    <div class="add-comment add-comment-velvet styled" id="addcomments">
        <div class="add-comment-title"><h3>Reply</h3></div>
        <div class="comment-form">
            <script type="text/javascript">
                bkLib.onDomLoaded(function () {
                    var myNicEditor = new nicEditor({
                        buttonList: [
                            'bold',
                            'italic',
                            'underline',
                            'forecolor',
                            'left',
                            'center',
                            'right',
                            'justify'
                        ]
                    });
                    myNicEditor.setPanel('edit_buttons');
                    myNicEditor.addInstance('styled_message');
                });
                setTimeout(function () {
                    var nic_width = $('#edit_buttons').width();
                    $('.nicEdit-container').css('width', nic_width);
                    $('.nicEdit-main').css('width', nic_width - 24);
                    $('.nicEdit-main').css('color', '#ffffff');
                    $('.nicEdit-main').attr('id','txtType');
                }, 500);
                $(window).resize(function () {
                    var nic_width = $('#edit_buttons').width();
                    $('.nicEdit-container').css('width', nic_width);
                    $('.nicEdit-main').css('width', nic_width - 24);
                });
            </script>
            <form id="commentForm" class="ajax_form">
                <div class="form-inner">
                    <div class="clear"></div>
                    <div class="field_text field_textarea">
                        <div id="edit_buttons" class="edit_buttons"></div>
                        <label for="styled_message" class="label_title">Content:</label>
                        <textarea cols="30" rows="10" name="styled_message" id="styled_message" class="textarea textarea_middle"></textarea>
                    </div>
                    <div class="clear"></div>
                    <div id="characterLeft" style="margin-top:10px;"></div>
                </div>

                <div class="rowSubmit">
                    <a onclick="document.getElementById('commentForm').reset();return false" href="#" class="link-reset btn btn-black"><span>Discard</span></a>
                    <span class="btn btn-send"><input type="button" id="send" value="Comment"/></span>
                </div>
            </form>
        </div>
    </div>
    <!--/ comment form -->
</div>
</div>
<!--/ row -->

<!--<div id="postTable" class="col-sm-9">

</div>-->
</div>
</div>
<!--/ container -->
</div>
<script>
    jQuery(document).ready(function () {
        function getDateTime(){
            var fullDate = new Date();
            var twoDigitMonth = fullDate.getMonth() + 1 + "";
            if (twoDigitMonth.length == 1)  twoDigitMonth = "0" + twoDigitMonth;
            var twoDigitDate = fullDate.getDate() + "";
            if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
            var twoDigitHour = fullDate.getHours() + "";
            if (twoDigitHour.length == 1) twoDigitHour = "0" + twoDigitHour;
            var twoDigitMin = fullDate.getMinutes() + "";
            if (twoDigitMin.length == 1) twoDigitMin = "0" + twoDigitMin;
            var currentDate = fullDate.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDate + " @ " + twoDigitHour + ":" + twoDigitMin;
            return currentDate;
        }

        jQuery('#characterLeft').text('140 characters left');

        setTimeout(function () {
            jQuery('#txtType').keydown(function () {
                //console.log("yeah");
                var max = 140;
                var len = jQuery(this).text().length;
                if (len >= max) {
                    jQuery('#characterLeft').text(' You have reached the limit');
                } else {
                    var ch = max - len;
                    jQuery('#characterLeft').text(ch + ' characters left');
                }
            });
        }, 1000);

        jQuery("#send").click(function(){
            var comment_id = 0;
            var comment_date = getDateTime();
            var content = jQuery('#txtType').text();
            var user_id = jQuery('#session_id').val();
            var post_id = jQuery('#post_id').val();
            if(jQuery('#txtType').text().length <= 140){
                addComment(comment_id, comment_date, content, user_id, post_id);
            }
        });

        function addComment(comment_id, comment_date, content, user_id, post_id) {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            var data = "comment_id=" + comment_id + "&comment_date=" + comment_date + "&content=" + content + "&user_id=" + user_id + "&post_id=" + post_id;
            xhr.open("POST", "handler/handlerComment.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
            xhr.onreadystatechange = display_data;
            function display_data() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        if(xhr.responseText == "Success"){
                            appendDiv(comment_date, content);
                        }else{
                            alert("error");
                        }
                    } else {
                        alert('There was a problem with the request.');
                    }
                }
            }
        }

        function appendDiv(date, content){
            var image = jQuery('#user_image').val();
            var name = jQuery('#user_type').val();
            var html = "<div class='comment-list clearfix'>"+
                       "<ol>"+
                       "<li class='comment'>"+
                       "       <div class='comment-body'>"+
                       "            <div class='inner'>"+
                       "                <div class='comment-arrow'></div>"+
                       "                <div class='comment-avatar'>"+
                       "                    <div class='avatar'>"+
                       "                        <img src='"+ image +"' alt='' />"+
                       "                    </div>"+
                       "                </div>"+
                       "                <div class='comment-text'>"+
                       "                    <div class='comment-author clearfix'>"+
                       "                        <a href='#' class='link-author'>"+name+"</a>"+
                       "                        <span class='comment-date'>"+ date +"</span> |"+
                       "                        <a href='#' class='link-reply anchor'>Reply</a>"+
                       "                    </div>"+
                       "                    <div class='comment-entry'>"+
                                                 content +
                       "                    </div>"+
                       "               </div>"+
                       "                <div class='clear'></div>"+
                       "            </div>"+
                       "        </div>"+
                       "    </li>"+
                       "</ol>"+
                       "</div>";
            jQuery("#divContent").append(html);
        }
    });
</script>
</body>
</html>
