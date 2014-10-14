<?php /* Smarty version 2.6.6, created on 2014-10-13 08:28:16
         compiled from fbcoms.tpl */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
</head>
<body topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0" bgcolor="#FFFFFF" style="background-color:#FFF; margin:0;">
<div id="fb-root"></div>
<?php if ($this->_tpl_vars['enable_fc'] == '1'): ?>
<?php echo '
<script src="http://connect.facebook.net/en_US/all.js"></script>
<script>
  FB.init({appId: \'';  echo $this->_tpl_vars['FACEBOOK_APP_ID'];  echo '\', status: true,
           cookie: true, xfbml: true});
  FB.Event.subscribe(\'auth.login\', function(response) {
    window.location.reload();
  });	  
</script>
'; ?>

<?php endif; ?>
<div style="font-size:11px; color:#999; padding-top:2px;">
<fb:comments-count href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['PID']; ?>
"></fb:comments-count>
</div>
</body>
</html>