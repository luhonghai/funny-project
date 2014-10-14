<?php /* Smarty version 2.6.6, created on 2014-10-13 08:16:36
         compiled from administrator/index.tpl */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en">
<head>
    <title><?php echo $this->_tpl_vars['site_name']; ?>
 Admin Panel</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" ></meta>
    <link type="text/css" rel="stylesheet" href="<?php echo $this->_tpl_vars['adminurl']; ?>
/css/reset.css" media="all"></link>
    <link type="text/css" rel="stylesheet" href="<?php echo $this->_tpl_vars['adminurl']; ?>
/css/boxes.php" media="all"></link>
    <link type="text/css" rel="stylesheet" href="<?php echo $this->_tpl_vars['adminurl']; ?>
/css/menu.php" media="screen, projection"></link>
    <!--[if IE]>
    <link type="text/css" rel="stylesheet" href="<?php echo $this->_tpl_vars['adminurl']; ?>
/css/iestyles.css" media="all"></link>
    <![endif]-->
    <!--[if lt IE 7]>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/iehover-fix.js" type="text/javascript"></script>
    <link type="text/css" rel="stylesheet" href="<?php echo $this->_tpl_vars['adminurl']; ?>
/css/below_ie7.css" media="all"></link>
    <![endif]-->
    <!--[if IE 7]>
    <link type="text/css" rel="stylesheet" href="<?php echo $this->_tpl_vars['adminurl']; ?>
/css/ie7.php" media="all"></link>
    <![endif]-->
</head>
<body id="page-login" onload="document.forms.loginForm.username.focus();">
    <div class="login-container">
        <div class="login-box">
            <form method="post" action="" id="loginForm">

                <fieldset class="login-form">
                    <h2>Log in to Admin Panel</h2>
                    <div id="messages">
                    	<?php if ($this->_tpl_vars['error'] != ""): ?>
                        <ul class="messages"><li class="error-msg"><ul><li><?php echo $this->_tpl_vars['error']; ?>
</li></ul></li></ul> 
                        <?php endif; ?>                   
                    </div>
                    <div class="input-box input-left"><label for="username">User Name:</label><br/>
                        <input type="text" id="username" name="username" value="" class="required-entry input-text"/></div>
                    <div class="input-box input-right"><label for="login">Password:</label><br/>

                        <input type="password" id="password" name="password" class="required-entry input-text" value="" /></div>
                    <div class="clear"></div>
                    <div class="form-buttons" style="margin-right:8px;">
                        <a class="left" href="<?php echo $this->_tpl_vars['baseurl']; ?>
">[ Back To 9Gag Clone Script ]</a>
                        <input onclick="loginForm.submit()" type="submit" name="login" id="login" class="form-button" src="<?php echo $this->_tpl_vars['adminurl']; ?>
/images/btn_login.gif" value="Login"/></div>
                </fieldset>
                <p class="legal">Copyright &copy; 2012 9GagCloneScript.com.</p>
				<input type="hidden" name="login" value="Login" />
            </form>
            <div class="bottom"></div>
        </div>
    </div>
</body>
</html>