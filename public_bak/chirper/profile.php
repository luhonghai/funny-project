<?php  session_start(); ?>
<?php
include 'db_connection.php';
if(!isset($_SESSION['id'])){
    $user = "Guest";
}else{
    $user = $_SESSION['id'];
}

if(!isset($_SESSION['user_id'])){
    $id = "0";
}else{
    $id = $_SESSION['user_id'];
}

if(!isset($_SESSION['image'])){
    $image = "";
}else {
    $image = $_SESSION['image'];
}
//echo $user;
$sql_select_profile = "SELECT * FROM Users WHERE user_id='$id'";
$result = mysqli_query($con, $sql_select_profile);
//mysqli_close($conn);
?>
<!doctype html>
<!--[if lt IE 7 ]><html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]><html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"> <![endif]-->
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

    <!-- Scroll Bars -->
    <script src="js/jquery.mousewheel.js"></script>
    <script src="js/jquery.jscrollpane.min.js"></script>

    <!-- Multiselect -->
    <link rel="stylesheet" href="css/chosen.css">
    <script src="js/jquery.chosen.min.js" type="text/javascript"></script>

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
        .field_text{width: 90% !important;}
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
            <div class="col-sm-2"></div>
            <!-- row -->
            <div class="row">
                <div class="col-sm-8" style="margin-top: 35px;">
                    <div class="boxed">
                        <div class="inner">
                            <h3 class="widget-title" style="margin:10px;">Profile</h3>
                            <input type="text" id="session_id" value="<?php echo $id ?>" style="display: none;">
                            <input type="text" id="user_type" value="<?php echo $user ?>" style="display: none;">
                        </div>
                    </div>
                    <?php
                    if($row = mysqli_fetch_array($result)){?>
                    <div class='tabs_framed styled'>
                        <div class='inner'>
                            <div class='tab-content clearfix'>
                                <div class='tab-pane clearfix fade in active' id='events'>
                                    <div class='tab_image'><img id ="ProfileImage" src="<?php echo $row['image'] ?>" alt='' /></div>
                                        <div class="comment-form">
                                            <form id="commentForm" class="ajax_form">
                                                <div class="form-inner" style="padding-top: 0px;padding-left: 194px;">
                                                    <div class="field_text">
                                                        <label for="title" class="label_title">Username:</label>
                                                        <input type="text" name="title" id="txtUsername" value="<?php echo $row['username'] ?>" placeholder="" class="inputtext input_middle"/>
                                                    </div>

                                                    <div class="field_text">
                                                        <label for="title" class="label_title">Password:</label>
                                                        <input type="password" name="title" id="txtPassword" value="<?php echo $row['password'] ?>" placeholder="" class="inputtext input_middle"/>
                                                    </div>

                                                    <div class="field_text">
                                                        <label for="title" class="label_title">Email:</label>
                                                        <input type="text" name="title" id="txtEmail" value="<?php echo $row['email'] ?>" placeholder="" class="inputtext input_middle"/>
                                                    </div>

                                                    <div class="field_text" style="padding-top: 10px;">
                                                        <label for="subject" class="label_title" style="width:78px;">Profile Image:</label>
                                                        <input type="file" name="subject" id="txtImage" value="" class="inputtext input_middle"/>
                                                        <div id="perImage" style="margin-top: -15px;float :right;font-size: 10px;display:none;">0%</div>
                                                    </div>


                                                    <div class="clear"></div>
                                                </div>

                                                <div class="rowSubmit" style="padding-left: 194px;">
                                                    <a onclick="document.getElementById('commentForm').reset();return false" href="#" class="link-reset btn btn-black"><span>Discard</span></a>
                                                    <span class="btn btn-send"><input type="button" id="send" value="Update"/></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
            <!--/ row -->
        </div>
    </div>
    <!--/ container -->
</div>
<script type="text/javascript">
    jQuery(document).ready(function () {
        var originalImage = "<?php echo $image ?>";

        var uploadImg = false;
        function _(el){
            return document.getElementById(el);
        }
        function uploadImage(){
            var file = _("txtImage").files[0];
            //console.log(file.name+" | "+file.size+" | "+file.type);
            if(file != null){
                if(file.size > 20*1024*1024){
                    alert("ERROR: Can not upload file greater than 20MB!");
                }else{
                    var formdata = new FormData();
                    formdata.append("file1", file);
                    var ajax = new XMLHttpRequest();
                    ajax.upload.addEventListener("progress", progressHandler, false);
                    ajax.addEventListener("load", completeHandler, false);
                    ajax.addEventListener("error", errorHandler, false);
                    ajax.addEventListener("abort", abortHandler, false);
                    ajax.open("POST", "handler/uploadImage.php");
                    ajax.send(formdata);
                }
            }
        }
        function progressHandler(event){
            var percent = (event.loaded / event.total) * 100;
            jQuery("#perImage").css("display","block");
            jQuery("#perImage").text(Math.round(percent) + " %");
            console.log(Math.round(percent));
        }
        function completeHandler(event){
            if(event.target.responseText.indexOf("ERROR") != -1){
                //console.log(event.target.responseText);
            }else{
                //console.log(event.target.responseText);
                uploadImg = true;
            }
        }
        function errorHandler(event){
            alert("Upload Failed");
        }
        function abortHandler(event){
            //alert("Upload Aborted");
            console.log("Upload Aborted");
        }

        function submit(){

            var user_id = jQuery("#session_id").val();
            var username = jQuery("#txtUsername").val();
            var password = jQuery("#txtPassword").val();
            var email = jQuery("#txtEmail").val();
            var profile_image = "";
            if(uploadImg){
                var fileImage = jQuery("#txtImage").val().substring(jQuery("#txtImage").val().lastIndexOf("\\")+1, jQuery("#txtImage").val().length);
                profile_image = "uploads/" + encodeURIComponent(fileImage);
            }else{
                profile_image = originalImage;
            }


            uploadProfile(user_id, username, password, email, profile_image);
        }

        function uploadProfile(user_id, username, password, email, image_url) {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            var data = "user_id=" + user_id + "&username=" + username + "&password=" + password + "&email=" + email + "&image=" + image_url;
            xhr.open("POST", "handler/updateProfile.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
            xhr.onreadystatechange = display_data;
            function display_data() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        //alert(xhr.responseText);
                        if(xhr.responseText == "Success"){
                            jQuery("#ProfileImage").attr("src", image_url);
                        }
                    } else {
                        alert('There was a problem with the request.');
                    }
                }
            }
        }

        jQuery("#send").click(function(){
            uploadImage();
            submit();
        });

    });
</script>
</body>
</html>
