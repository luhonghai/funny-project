<?php
/**************************************************************************************************
| 9Gag Clone Script
| http://www.best9gagclonescript.com
| support@best9gagclonescript.com
|
|**************************************************************************************************
|
| By using this software you agree that you have read and acknowledged our End-User License 
| Agreement available at http://www.best9gagclonescript.com/eula.html and to be bound by it.
|
| Copyright (c) best9gagclonescript.com. All rights reserved.
|**************************************************************************************************/

include("include/config.php");
$theFACEBOOK_PROFILE = $config['FACEBOOK_PROFILE'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" onkeypress="keyfind(event)" lang="en" dir="LTR">
<head prefix="og: http://ogp.me/ns/fb#">
</head>
<body topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"  style="margin:0;">
<div id="fb-root"></div>
<script src="http://connect.facebook.net/ar_AR/all.js"></script>
<script>
  FB.init({appId: '<?php echo $config['FACEBOOK_APP_ID'] ?>', status: true,
           cookie: true, xfbml: true});
  FB.Event.subscribe('auth.login', function(response) {
    window.location.reload();
  });	  
</script>
<div class="fb-like" data-href="http://www.facebook.com/<?php echo $theFACEBOOK_PROFILE ?>" data-send="false" data-width="290" data-show-faces="true"></div>
<script src='http://static.ak.fbcdn.net/connect.php/js/FB.Share' type='text/javascript'></script>
</body>
</html>