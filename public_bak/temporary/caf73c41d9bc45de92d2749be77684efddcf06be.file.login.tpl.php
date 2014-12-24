<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 15:23:55
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/login.tpl" */ ?>
<?php /*%%SmartyHeaderCode:5109615405463191ba6f604-70237699%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'caf73c41d9bc45de92d2749be77684efddcf06be' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/login.tpl',
      1 => 1415776152,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '5109615405463191ba6f604-70237699',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'lang254' => 0,
    'pagetitle' => 0,
    'asseturl' => 0,
    'baseurl' => 0,
    'membersprofilepicurl' => 0,
    'FACEBOOK_APP_ID' => 0,
    'ganalytics' => 0,
    'asset_version' => 0,
    'penv' => 0,
    'lang23' => 0,
    'site_name' => 0,
    'lang24' => 0,
    'lang91' => 0,
    'lang25' => 0,
    'error' => 0,
    'lang36' => 0,
    'lang20' => 0,
    'lang27' => 0,
    'lang2' => 0,
    'lang28' => 0,
    'lang273' => 0,
    'lang29' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5463191bb624f2_18252302',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5463191bb624f2_18252302')) {function content_5463191bb624f2_18252302($_smarty_tpl) {?><!DOCTYPE html>
<html xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" lang="<?php echo $_smarty_tpl->tpl_vars['lang254']->value;?>
" dir="LTR">
<head>
<title><?php echo stripslashes($_smarty_tpl->tpl_vars['pagetitle']->value);?>
</title>
<link rel="shortcut icon" href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/favicon/favicon.png" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta content="width=device-width; initial-scale=1.0;" name="viewport" />
    <?php echo '<script'; ?>
 type="text/javascript">
        var BASE_URL		=	"<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
";
        var AVATAR_URL      = "<?php echo $_smarty_tpl->tpl_vars['membersprofilepicurl']->value;?>
";
        var ASSET_URL       = "<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
";
        var APP_FACEBOOK 	= 	"<?php echo $_smarty_tpl->tpl_vars['FACEBOOK_APP_ID']->value;?>
";
        <?php if ($_SESSION['USERID']!='') {?>
        var CURRENT_USER_ID = "<?php echo stripslashes($_SESSION['USERID']);?>
";
        <?php } else { ?>
        var CURRENT_USER_ID = "guest";
        <?php }?>
        var GA_ID = "<?php echo $_smarty_tpl->tpl_vars['ganalytics']->value;?>
";
        var ASSET_VERSION  = "<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
";
    <?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><?php echo '</script'; ?>
>
    <?php if ($_smarty_tpl->tpl_vars['penv']->value=="dev") {?>
        <link href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/css/connect.css?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" media="screen,projection" rel="stylesheet" type="text/css" />
    <?php } else { ?>
        <link href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/css/connect.css.gz?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" media="screen,projection" rel="stylesheet" type="text/css" />
    <?php }?>
</head>

<body id="page-signup">
    <div class="signup-wrapper">
        <a class="signup-login-btn" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/signup"><?php echo $_smarty_tpl->tpl_vars['lang23']->value;?>
 <?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
? <?php echo $_smarty_tpl->tpl_vars['lang24']->value;?>
</a>
        <div class="header">
        	<center><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/logo-large.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" /></center>
        </div>
        <div class="content">
            <div class="description">
                <h2><?php echo $_smarty_tpl->tpl_vars['lang91']->value;?>
</h2>
				<h3></h3>
                <div class="spcl-button-wrap">
                	<a class="spcl-button facebook badge-facebook-connect" label="LoginFormFacebookButton" next="" <a class="spcl-button facebook badge-facebook-connect" label="LoginFormFacebookButton" next="" href="https://www.facebook.com/dialog/permissions.request?app_id=<?php echo $_smarty_tpl->tpl_vars['FACEBOOK_APP_ID']->value;?>
&display=page&next=<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/&response_type=code&fbconnect=1&perms=email,user_birthday,user_about_me"><?php echo $_smarty_tpl->tpl_vars['lang25']->value;?>
</a><br>
                </div>
                <p class="message"> </p>
            </div>
            <form id="form-signup-login" class="generic" action="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/login" method="post">
            	<?php if ($_smarty_tpl->tpl_vars['error']->value!='') {?>
                <p id="setup-msg" class="message red"><?php echo $_smarty_tpl->tpl_vars['error']->value;?>
</p>
                <?php }?>
                <div id="login-username-block" class="field">
                	<label><?php echo $_smarty_tpl->tpl_vars['lang36']->value;?>
</label>
                	<input id="login-username" type="text" class="text" name="username" placeholder="<?php echo $_smarty_tpl->tpl_vars['lang36']->value;?>
" tabindex="1" maxlength="200" value=""/>
                </div>
                <div id="login-email-block" class="field">
                    <label><?php echo $_smarty_tpl->tpl_vars['lang20']->value;?>
<span> (<a id="recover-to-login" href="#"><?php echo $_smarty_tpl->tpl_vars['lang27']->value;?>
</a>)</span>
                    </label>
                    <input id="login-email" type="text" class="text" name="email" placeholder="<?php echo $_smarty_tpl->tpl_vars['lang20']->value;?>
" tabindex="2" maxlength="200" value=""/>
                </div>
                <div id="login-password-block" class="field">
                    <label><?php echo $_smarty_tpl->tpl_vars['lang2']->value;?>

                    <span>(<a id="login-to-recover" href="#"><?php echo $_smarty_tpl->tpl_vars['lang28']->value;?>
<span class="badge-js" style="color:#a900f0;" key="?"></span></a>)</span>
                    </label>
                    <input id="login-password" type="password" class="text" name="password" placeholder="<?php echo $_smarty_tpl->tpl_vars['lang2']->value;?>
" tabindex="3" maxlength="32"/>
                </div>
				<div id="login-rememberme-block" class="field">
                    <label><?php echo $_smarty_tpl->tpl_vars['lang273']->value;?>
 : <input name="rememberme" type="checkbox" tabindex="4" />
                    </label>
                </div>
                <div class="action">
                	<input id="logsub" type="hidden" name="logsub" value="1"></input>
                	<input id="login-submit" type="submit" class="submit-button" value="<?php echo $_smarty_tpl->tpl_vars['lang29']->value;?>
"></input>
                </div>
            </form>
        </div>
    </div>
    <div id="fb-root"></div>

    <?php if ($_smarty_tpl->tpl_vars['penv']->value=="dev") {?>
        <?php echo '<script'; ?>
 type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/js/dev.app.js?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
"><?php echo '</script'; ?>
>
    <?php } else { ?>
        <?php echo '<script'; ?>
 type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/js/app.js.gz?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
"><?php echo '</script'; ?>
>
    <?php }?>

</body>
</html><?php }} ?>
