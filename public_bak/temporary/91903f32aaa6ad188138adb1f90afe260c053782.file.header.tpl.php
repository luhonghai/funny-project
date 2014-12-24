<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 16:49:27
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:57524207054630a9a8af536-68123349%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '91903f32aaa6ad188138adb1f90afe260c053782' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/header.tpl',
      1 => 1415781485,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '57524207054630a9a8af536-68123349',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9ab3a900_06120328',
  'variables' => 
  array (
    'lang254' => 0,
    'pagetitle' => 0,
    'site_name' => 0,
    'metadescription' => 0,
    'metakeywords' => 0,
    'p' => 0,
    'baseurl' => 0,
    'postfolder' => 0,
    'purl' => 0,
    'asseturl' => 0,
    'asset_version' => 0,
    'FACEBOOK_APP_ID' => 0,
    'penv' => 0,
    'RSS' => 0,
    'membersprofilepicurl' => 0,
    'ganalytics' => 0,
    'enable_fc' => 0,
    'lang189' => 0,
    'profilepicture' => 1,
    'lang45' => 0,
    'lang198' => 0,
    'menu' => 0,
    'lang173' => 0,
    'lang172' => 0,
    'lang174' => 0,
    'lang278' => 0,
    'lang67' => 0,
    'viewpage' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9ab3a900_06120328')) {function content_54630a9ab3a900_06120328($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml" onkeypress="keyfind(event)" lang="<?php echo $_smarty_tpl->tpl_vars['lang254']->value;?>
" dir="LTR">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<title><?php if ($_smarty_tpl->tpl_vars['pagetitle']->value!='') {
echo $_smarty_tpl->tpl_vars['pagetitle']->value;?>
 - <?php }
echo $_smarty_tpl->tpl_vars['site_name']->value;?>
</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="<?php if ($_smarty_tpl->tpl_vars['pagetitle']->value!='') {
echo $_smarty_tpl->tpl_vars['pagetitle']->value;?>
 - <?php }
if ($_smarty_tpl->tpl_vars['metadescription']->value!='') {
echo $_smarty_tpl->tpl_vars['metadescription']->value;?>
 - <?php }
echo $_smarty_tpl->tpl_vars['site_name']->value;?>
">
<meta name="keywords" content="<?php if ($_smarty_tpl->tpl_vars['pagetitle']->value!='') {
echo $_smarty_tpl->tpl_vars['pagetitle']->value;?>
,<?php }
if ($_smarty_tpl->tpl_vars['metakeywords']->value!='') {
echo $_smarty_tpl->tpl_vars['metakeywords']->value;?>
,<?php }
echo $_smarty_tpl->tpl_vars['site_name']->value;?>
">
<meta name="title" content="<?php if ($_smarty_tpl->tpl_vars['pagetitle']->value!='') {
echo $_smarty_tpl->tpl_vars['pagetitle']->value;?>
 - <?php }
echo $_smarty_tpl->tpl_vars['site_name']->value;?>
" />

<meta property="og:title" content="<?php if ($_smarty_tpl->tpl_vars['pagetitle']->value!='') {
echo $_smarty_tpl->tpl_vars['pagetitle']->value;?>
 - <?php }
echo $_smarty_tpl->tpl_vars['site_name']->value;?>
"/>
<meta property="og:site_name" content="<?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
"/>
<?php if ($_smarty_tpl->tpl_vars['p']->value['pic']!='') {?>
<meta property="og:url" content="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['p']->value['PID'];?>
/"/>
<?php } elseif ($_smarty_tpl->tpl_vars['p']->value['youtube_key']!='') {?>
<meta property="og:url" content="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['p']->value['PID'];?>
/"/>
<?php } else { ?>
<meta property="og:url" content="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/"/>
<?php }?>
<meta property="og:description" content="<?php echo $_smarty_tpl->tpl_vars['metadescription']->value;?>
"/>
<meta property="og:type" content="blog" />
<?php if ($_smarty_tpl->tpl_vars['p']->value['pic']!='') {?>
<meta property="og:image" content="<?php echo $_smarty_tpl->tpl_vars['purl']->value;?>
/t/s-<?php echo $_smarty_tpl->tpl_vars['p']->value['pic'];?>
" />
<?php } elseif ($_smarty_tpl->tpl_vars['p']->value['youtube_key']!='') {?>
<meta property="og:image" content="http://img.youtube.com/vi/<?php echo $_smarty_tpl->tpl_vars['p']->value['youtube_key'];?>
/0.jpg" />
<?php } else { ?>
<meta property="og:image" content="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/image.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
<?php }?>
<meta property="fb:app_id" content="<?php echo $_smarty_tpl->tpl_vars['FACEBOOK_APP_ID']->value;?>
"/>

    <?php if ($_smarty_tpl->tpl_vars['penv']->value=="dev") {?>
        <link href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/css/app.css?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" media="screen" rel="stylesheet" type="text/css" />
    <?php } else { ?>
        <link href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/css/app.css.gz?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" media="screen" rel="stylesheet" type="text/css" />
    <?php }?>

    <?php echo '<script'; ?>
 type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><?php echo '</script'; ?>
>
<link rel="icon" href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/favicon/favicon.png" />
<link rel="shortcut icon" id="dynamic-favicon" href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/favicon/favicon.png" />

<?php if ($_smarty_tpl->tpl_vars['RSS']->value=="1") {?>
<link rel="alternate" type="application/rss+xml" title="RSS - <?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/rss.php" />
<?php }?>
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
    var CURRENT_USER_ID = "<?php echo stripslashes($_SESSION['USERNAME']);?>
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
</head>
<body id="page-landing" class="main-body ">
<?php if ($_smarty_tpl->tpl_vars['enable_fc']->value=="1") {?>
    <div id="fb-root"></div>
<?php }?>
<div id="tmp-img" style="display:none"></div>
<div id="header">
	<div class="wauto">
<a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
" class="logo"> </a>
           <form action="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/search">
       <div class="search"><input id="sitebar_search_header" type="text" class="search search_input" name="query" tabindex="1" placeholder="<?php echo $_smarty_tpl->tpl_vars['lang189']->value;?>
"/>
                    </form></div>
        <ul class="buser">
            <li class="z"><a href="/comic">Chế comic</a></li>
            <li class="z k"><a href="/topusers">Top Thành Viên</a></li>      
<li class="z v"><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/submit"><s class="upload"></s>Đăng bài</a></li>
                  <div id="headerRight">		

<?php if ($_SESSION['USERID']!='') {?>			
			<a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/user/<?php echo stripslashes($_SESSION['USERID']);?>
/messages" class="notiButton" title="Tin nhắn"></a>
			<div class="avatar noNoti">
				<a id="profile-username" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/user/<?php echo stripslashes($_SESSION['USERNAME']);?>
" class="avatarLink" title="<?php echo stripslashes($_SESSION['USERNAME']);?>
">
				<?php $_smarty_tpl->assign('profilepicture' , insert_get_member_profilepicture (array('value' => 'var', 'USERID' => $_SESSION['USERID'], 'url' => $_smarty_tpl->tpl_vars['membersprofilepicurl']->value),$_smarty_tpl), true);?>
				<img src="<?php echo $_smarty_tpl->tpl_vars['membersprofilepicurl']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['profilepicture']->value;?>
?<?php echo time();?>
" width="40px" height="40px" />
				</a>
				<ul>
					<li><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/user/<?php echo stripslashes($_SESSION['USERNAME']);?>
">Ảnh của bạn</a></li>
                    <li><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/settings"><?php echo $_smarty_tpl->tpl_vars['lang45']->value;?>
</a></li>
                    <li><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/logout"><?php echo $_smarty_tpl->tpl_vars['lang198']->value;?>
</a></li>
			</ul>
			</div>
			<?php } else { ?>
<li class="login"><div id="_login" class="uibutton-group">
		<a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/login"><s class="uibutton-group"></s>Đăng nhập</a></li>	
			</div>
			<?php }?>
		</div>
</ul>
    </div>
</div>
<div id="nav">
<div id="menuBar">
<div class="trollvd">
    	<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==1) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/trending"><?php echo $_smarty_tpl->tpl_vars['lang173']->value;?>
</a></li>
			<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==2) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/hot"><?php echo $_smarty_tpl->tpl_vars['lang172']->value;?>
</a></li>
			<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==3) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/vote"><?php echo $_smarty_tpl->tpl_vars['lang174']->value;?>
</a></li>
                        <li<?php if ($_smarty_tpl->tpl_vars['menu']->value==4) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/tag/anh-dep">&#7842;nh &#273;&#7865;p</a></li>

<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==5) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/channels/girls-xinh">Girl xinh</a></li>
<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==6) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/channels/tin-hot">Tin hot</a></li>
<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==7) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/channels/anh-bua-18-+">Ảnh bựa</a></li>
<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==8) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/channels/hinh-anh">&#7842;nh vui</a></li>
<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==9) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/channels/video-clip">Video clip</a></li>
			<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==11) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/top-posts"><?php echo $_smarty_tpl->tpl_vars['lang278']->value;?>
</a></li>
<li<?php if ($_smarty_tpl->tpl_vars['menu']->value==11) {?> class="selected"<?php }?>><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/kiem-tien-online.html"><?php echo $_smarty_tpl->tpl_vars['lang67']->value;?>
</a></li>
		   </ul>
</div>
</div>	
		<div class="clear"></div>
	</div>
</div>
<div id="container">
<?php if ($_smarty_tpl->tpl_vars['viewpage']->value=="1") {?>
<?php echo $_smarty_tpl->getSubTemplate ('js1.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php } else { ?>
<?php echo $_smarty_tpl->getSubTemplate ('js.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php }?><?php }} ?>
