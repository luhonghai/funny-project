<?php /* Smarty version 2.6.6, created on 2014-10-13 08:20:32
         compiled from connect.tpl */ ?>
<!DOCTYPE html>
<html lang="en" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<title></title>
<link rel="shortcut icon" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/favicon.gif" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta content="width=device-width; initial-scale=1.0;" name="viewport" />
<link rel="stylesheet" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/css/connect.css" media="screen,projection" type="text/css" />
</head>

<body id="page-signup">
<div class="signup-wrapper">
	<div class="header">
		<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/"><h1 class="signup-wrapper"><?php echo $this->_tpl_vars['site_name']; ?>
</h1></a>
	</div>
	<div class="content">
		<div class="description">
			<h2><?php echo $this->_tpl_vars['lang0']; ?>
</h2>
		</div>
		<form id="form-signup-login" class="generic" action="<?php echo $this->_tpl_vars['baseurl']; ?>
/connect.php" method="post">
        	<?php if ($this->_tpl_vars['error'] != ""): ?>
			<p id="setup-msg" class="message red"><?php echo $this->_tpl_vars['error']; ?>
</p>
            <?php endif; ?>
			<div class="field">
				<label><?php echo $this->_tpl_vars['lang1']; ?>
</label>
				<input id="setup-username" type="text" class="text" name="username" placeholder="<?php echo $this->_tpl_vars['lang1']; ?>
" tabindex="1"/>
			</div>
			<div class="field">
				<label><?php echo $this->_tpl_vars['lang2']; ?>
</label>
				<input id="setup-password" type="password" class="text" name="password" placeholder="<?php echo $this->_tpl_vars['lang2']; ?>
" tabindex="2"/>
			</div>
			<div class="action">
            	<input type="hidden" id="jlog" name="jlog" value="1" />
				<input id="setup-submit" type="submit" class="submit-button" value="<?php echo $this->_tpl_vars['lang3']; ?>
"></input>
			</div>			
		</form>
	</div>
</div>
<div style="display:none;"></div>
<div id="fb-root"></div>
</body>
</html>