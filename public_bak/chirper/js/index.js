/**
 * Created by longnguyen on 11/29/14.
 */
jQuery(document).ready(function() {
    var cat = "";
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

    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    function guid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4()+ S4() + S4());
    };
    function randomString() {
        return guid();
    }

    function _(el){
        return document.getElementById(el);
    }

    jQuery("#send").click(function uploadImage(){
        var user_type = jQuery("#user_type").val();
        if(user_type != "Guest"){

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
            }else{
                alert("ERROR: Please choose file to upload!");
            }


        }else{
            alert("Please login to make a post");
        }
    });

    function progressHandler(event){
        var percent = (event.loaded / event.total) * 100;
        jQuery("#perImage").css("display","block");
        jQuery("#perImage").text(Math.round(percent) + " %");
        console.log(Math.round(percent));
    }
    function completeHandler(event){
        if(event.target.responseText.indexOf("ERROR") != -1){
            console.log(event.target.responseText);
        }else{
            console.log(event.target.responseText);
            uploadMusic();
        }
    }
    function errorHandler(event){
        alert("Upload Failed");
    }
    function abortHandler(event){
        //alert("Upload Aborted");
        console.log("Upload Aborted");
    }

    function uploadMusic(){
        var music = _("txtMusic").files[0];
        //console.log(music.name+" | "+music.size+" | "+music.type);
        if(music != null){
            if(music.size > 20*1024*1024){
                alert("ERROR: Can not upload file greater than 20MB!");
            }else{
                var formdata = new FormData();
                formdata.append("file2", music);
                var ajax = new XMLHttpRequest();
                ajax.upload.addEventListener("progress", progressMusic, false);
                ajax.addEventListener("load", completeMusic, false);
                ajax.addEventListener("error", errorMusic, false);
                ajax.addEventListener("abort", abortMusic, false);
                ajax.open("POST", "handler/uploadFile.php");
                ajax.send(formdata);
            }
        }else{
            alert("ERROR: Please choose file to upload!");
        }
    }

    function progressMusic(event){
        var percent = (event.loaded / event.total) * 100;
        jQuery("#perMusic").css("display","block");
        jQuery("#perMusic").text(Math.round(percent) + " %");
        console.log(Math.round(percent));
    }
    function completeMusic(event){
        if(event.target.responseText.indexOf("ERROR") != -1){
            console.log(event.target.responseText);
        }else{
            console.log(event.target.responseText);
            handlerPost();
        }
    }
    function errorMusic(event){
        alert("Upload Failed");
    }
    function abortMusic(event){
        //alert("Upload Aborted");
        console.log("Upload Aborted");
    }

    function handlerPost(){
        var post_id = randomString();
        var title = jQuery("#txtTitle").val();
        var post_date = getDateTime();
        var content = jQuery(".nicEdit-main").text();

        var fileImage = jQuery("#txtImage").val().substring(jQuery("#txtImage").val().lastIndexOf("\\")+1, jQuery("#txtImage").val().length);
        var image_url = "uploads/" + encodeURIComponent(fileImage);

        var fileMusic = jQuery("#txtMusic").val().substring(jQuery("#txtMusic").val().lastIndexOf("\\")+1, jQuery("#txtMusic").val().length);
        var music_url = "uploads/" + encodeURIComponent(fileMusic);

        var song_name = jQuery("#txtSong").val();
        var category_id = jQuery("#txtCategory").val();
            cat = jQuery("#txtCategory option[value='"+category_id+"']").text();
        var user_id = jQuery("#session_id").val();
        if(title.length == 0 || content.length == 0 || song_name.length == 0){
            alert("Please fill in the form");
        }else{
            if(content.length > 140){
                //alert("Please input 140 characters in content field");
            }else{
                uploadFileServer(post_id, title, post_date, content, image_url, music_url, song_name, category_id, user_id);
            }

        }

    }

    function uploadFileServer(post_id, title, post_date, content, image_url, music_url, song_name, category_id, user_id) {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var data = "post_id=" + post_id + "&title=" + title + "&date=" + post_date + "&content=" + content + "&image_url=" + image_url + "&music_url=" + music_url + "&song=" + song_name + "&category_id=" + category_id + "&user_id=" + user_id;
        xhr.open("POST", "handler/handlerPost.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = display_data;
        function display_data() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if(xhr.responseText == "Success"){
                        appendDiv(image_url, post_date, title, content, post_id, category_id, cat);
                    }else{
                        alert("error");
                    }
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
    }

    function appendDiv(image, date, title, content, post_id, cat_id, cat){
        var html = "<div class='tabs_framed styled'>"+
                   "<div class='inner'>"+
                   "<div class='tab-content clearfix'>"+
                   "<div class='tab-pane clearfix fade in active' id='events'>"+
                   "<div class='tab_image'><img src=" + image + " alt='' /></div>"+
                   "<div style='float:right;margin-top:-15px;margin-right: -5px;'>"+
                   "<a href='#' class='del_post' post_id='"+post_id+"'><img src='images/close.png' style='width:20px;' title='Delete Post'></a>"+
                   "</div>"+
                   "<div style='float:right;font-size:11px;margin-top:10px;margin-right:-20px;'>"+
                   "<span>" + date + "</span>"+
                   "</div>"+
                   "<h4 style='width:80%;'>" + title + "</h4>"+
                   "<p style='height:90px;'>" + content + "</p>"+

                   "<a href='detail_post.php?post_id=" +post_id + "' class='see-more' style=''><span>More</span></a>"+
                   "<div class='tagcloud' style='float:right;'>"+
                   "<a href='post_category.php?type=" + cat_id + "' class='tag-link-1' style='margin-bottom: 3px;'><span>" + cat + "</span></a>"+
                   "</div>"+
                   "</div>"+
                   "</div>"+
                   "</div>"+
                   "</div>";
        jQuery("#divContent").append(html);
    }

    jQuery(".del_post").click(function(){
        var post_id = jQuery(this).attr("post_id");
        jQuery.ajax({
            type: "POST",
            url: "handler/deletePost.php",
            data: "post_id="+post_id
        }).done(function( msg ) {
              if(msg == "Success"){
                  jQuery("#"+post_id).remove();
              }else{
                  alert("Cannot delete this post");
              }
        });

    });
});