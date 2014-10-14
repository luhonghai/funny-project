<?php /* Smarty version 2.6.6, created on 2014-10-13 08:45:56
         compiled from administrator/global_header.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'date_format', 'administrator/global_header.tpl', 49, false),)), $this); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Admin Panel - <?php echo $this->_tpl_vars['site_name']; ?>
</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<script type="text/javascript">
        var BLANK_URL = '<?php echo $this->_tpl_vars['adminurl']; ?>
/js/blank.html';
        var BLANK_IMG = '<?php echo $this->_tpl_vars['adminurl']; ?>
/js/spacer.gif';
        var BASE_URL = '<?php echo $this->_tpl_vars['adminurl']; ?>
/index.php';
        var SKIN_URL = '<?php echo $this->_tpl_vars['adminurl']; ?>
/js/';
    </script>
	
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/prototype.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/builder.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/effects.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/dragdrop.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/controls.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/slider.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/accordin.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/events.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/loader.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/tabs.js" type="text/javascript"></script>
    <script src="<?php echo $this->_tpl_vars['adminurl']; ?>
/js/tools.js" type="text/javascript"></script>
    
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

<body id="html-body">

	<div class="wrapper">
        <div class="header">
        
            <div class="header-top">
    			<a href="<?php echo $this->_tpl_vars['adminurl']; ?>
/home.php"><img src="<?php echo $this->_tpl_vars['adminurl']; ?>
/images/logo.png" alt="Logo" class="logo"/></a>
    			<div class="header-right">
                    <p class="super">
                        Logged in as <?php echo $_SESSION['ADMINUSERNAME']; ?>
<span class="separator">|</span><?php echo ((is_array($_tmp=time())) ? $this->_run_mod_handler('date_format', true, $_tmp, "%A, %B %e, %Y") : smarty_modifier_date_format($_tmp, "%A, %B %e, %Y")); ?>
<span class="separator">|</span><a href="logout.php" class="link-logout">Log Out</a>
                    </p>
            	</div>
			</div>
            
        	<div class="clear"></div>

            <div class="nav-bar">
            	<ul id="nav">
                	<li  class="  <?php if ($this->_tpl_vars['mainmenu'] == "" || $this->_tpl_vars['mainmenu'] == '1'): ?>active<?php endif; ?>  level0"> <a href="home.php" class="active"><span>Home</span></a></li>
                    <li onmouseover="Element.addClassName(this,'over')" onmouseout="Element.removeClassName(this,'over')" class="<?php if ($this->_tpl_vars['mainmenu'] == '2'): ?>active<?php endif; ?> parent level0"> <a href="#" onclick="return false" class=""><span>Settings</span></a>
                    	<ul >
                    		<li  class="   level1"> <a href="settings_general.php" class=""><span>General Settings</span></a></li>
                    		<li  class="   level1"> <a href="settings_meta.php"   class=""><span>Meta Settings</span></a></li>
                            <li  class="   last level1"> <a href="settings_static.php"   class=""><span>Static Pages</span></a></li>
                        </ul>
                    </li>
                    <li onmouseover="Element.addClassName(this,'over')" onmouseout="Element.removeClassName(this,'over')" class="<?php if ($this->_tpl_vars['mainmenu'] == '4'): ?>active<?php endif; ?>   parent level0"> <a href="#"  onclick="return false" class=""><span>Gags</span></a>
                    	<ul >
                            <li  class="   level1"> <a href="stories_manage.php"   class=""><span>Manage Gags</span></a></li>
                            <li  class="   level1"> <a href="stories_validate.php"   class=""><span>Validate Gags</span></a></li>
                            <li  class="   last level1"> <a href="stories_reported.php"   class=""><span>Reported Gags</span></a></li>
                        </ul>
                    </li>
                    <li onmouseover="Element.addClassName(this,'over')" onmouseout="Element.removeClassName(this,'over')" class="<?php if ($this->_tpl_vars['mainmenu'] == '7'): ?>active<?php endif; ?>   parent level0"> <a href="#"  onclick="return false" class=""><span>Members</span></a>
                    	<ul >
                            <li  class="   last level1"> <a href="members_manage.php"   class=""><span>Manage Members</span></a></li>
                        </ul>
                    </li>
                    <li onmouseover="Element.addClassName(this,'over')" onmouseout="Element.removeClassName(this,'over')" class="<?php if ($this->_tpl_vars['mainmenu'] == '11'): ?>active<?php endif; ?>   parent level0"> <a href="#"  onclick="return false" class=""><span>Advertisements</span></a>
                    	<ul >
                            <li  class="   level1"> <a href="ads_manage.php"   class=""><span>Standard Ads</span></a></li>
                            <li  class="   last level1"> <a href="ads_create.php"   class=""><span>Create Standard Ad</span></a></li>
                        </ul>
                    </li>
                    <li onmouseover="Element.addClassName(this,'over')" onmouseout="Element.removeClassName(this,'over')" class="<?php if ($this->_tpl_vars['mainmenu'] == '5'): ?>active<?php endif; ?>   parent level0"> <a href="#"  onclick="return false" class=""><span>Bans</span></a>
                    	<ul >
                            <li  class="   level1"> <a href="bans_ip.php"   class=""><span>IP Banning</span></a></li>
                            <li  class="   last level1"> <a href="bans_ip_add.php"   class=""><span>Add IP</span></a></li>
                        </ul>
                    </li>
					<li onmouseover="Element.addClassName(this,'over')" onmouseout="Element.removeClassName(this,'over')" class="<?php if ($this->_tpl_vars['mainmenu'] == '12'): ?>active<?php endif; ?>   parent level0"> <a href="#"  onclick="return false" class=""><span>Administrators</span></a>
                    	<ul >
                            <li  class="   level1"> <a href="admins_manage.php"   class=""><span>Manage Administrators</span></a></li>
                            <li  class="   last level1"> <a href="admins_create.php"   class=""><span>Create Administrator</span></a></li>
                        </ul>
                    </li>
                </ul>
			</div>
        </div>
		
        <?php global $config; echo @file_get_contents("http://www.scriptolution.com/updates/9gcs/index.php?v=".$config['ver']);  ?>