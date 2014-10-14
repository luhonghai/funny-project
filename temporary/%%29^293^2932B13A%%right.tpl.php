<?php /* Smarty version 2.6.6, created on 2014-10-13 10:03:50
         compiled from right.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('insert', 'get_advertisement', 'right.tpl', 8, false),array('modifier', 'urlencode', 'right.tpl', 13, false),array('modifier', 'stripslashes', 'right.tpl', 34, false),)), $this); ?>
	<div class="side-bar">
    	<?php if ($_SESSION['USERID'] == ""): ?>
        <li id="side-bar-signup">
        	<a class="spcl-button green" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/signup" label="Header"><?php echo $this->_tpl_vars['lang148']; ?>
</a>
        </li>
        <?php endif; ?>
        <div class="s-300">
        	<?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_advertisement', 'AID' => 2)), $this); ?>

        </div>
        <div class="social-block">
            <h3><?php echo $this->_tpl_vars['lang153']; ?>
 <?php echo $this->_tpl_vars['site_name']; ?>
</h3>
            <div class="facebook-like">
                <iframe src="//www.facebook.com/plugins/like.php?href=<?php echo ((is_array($_tmp=$this->_tpl_vars['baseurl'])) ? $this->_run_mod_handler('urlencode', true, $_tmp) : urlencode($_tmp)); ?>
%2F&amp;send=false&amp;layout=standard&amp;width=270&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:270px; height:80px;" allowTransparency="true"></iframe>
            </div>
            <div class="twitter-follow">
            	<a href="http://twitter.com/<?php echo $this->_tpl_vars['twitter']; ?>
" class="twitter-follow-button"><?php echo $this->_tpl_vars['lang149']; ?>
 @<?php echo $this->_tpl_vars['twitter']; ?>
</a>
            </div>            
            <div class="google-plus">
            	<p><?php echo $this->_tpl_vars['lang150']; ?>
</p>
            	<g:plusone size="medium" href="<?php echo $this->_tpl_vars['baseurl']; ?>
"></g:plusone>
            </div>
        </div>
        <div id="moving-boxes">
            <div class="s-300" >            
            	<?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_advertisement', 'AID' => 1)), $this); ?>

            </div>        
            <div class="msg-box">
            	<h3><?php echo $this->_tpl_vars['lang151']; ?>
</h3>
            	<p><?php echo $this->_tpl_vars['lang152']; ?>
</p>
            </div> 
            <div class="section-2" style="width:250px">
                <div class="wrap" style="width:250px">
                    <ul class="sideinfo side-items-left" style="font-weight:bold; font-size:11px;margin-bottom:10px;padding-left:5px">
                        <li>&copy; 2012 <?php echo ((is_array($_tmp=$this->_tpl_vars['site_name'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
· <a class="badge-language-selector" href="javascript:void(0);" style="color:#00a5ef"><?php if ($_SESSION['language'] == 'en'): ?>english<?php elseif ($_SESSION['language'] == 'fr'): ?>fran&#xE7;ais<?php elseif ($_SESSION['language'] == 'de'): ?>deutsch<?php elseif ($_SESSION['language'] == 'es'): ?>espa&ntilde;ol<?php elseif ($_SESSION['language'] == 'pt'): ?>portugu&#234;s<?php elseif ($_SESSION['language'] == 'ru'): ?>pусский<?php elseif ($_SESSION['language'] == 'tr'): ?>t&uuml;rk&ccedil;e<?php endif; ?></a></li>
                    </ul>
                    <ul class="sideinfo side-items-left" style="overflow:visible; width:400px">
                        <li><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/about"><?php echo $this->_tpl_vars['lang67']; ?>
</a></li>
                        <li>·<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/rules"><?php echo $this->_tpl_vars['lang135']; ?>
</a></li>
                        <li>·<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/faq"><?php echo $this->_tpl_vars['lang202']; ?>
</a></li>
                        <li>·<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/contact"><?php echo $this->_tpl_vars['lang205']; ?>
</a></li>
                    </ul>
                    <ul class="sideinfo side-items-left" style="overflow:visible; width:400px">
                        <li><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/terms_of_service"><?php echo $this->_tpl_vars['lang203']; ?>
</a></li>
                        <li>·<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/privacy_policy"><?php echo $this->_tpl_vars['lang204']; ?>
</a></li>
                    </ul>
                    <div style="clear:both"></div>
                    <div style="padding-left:7px; padding-top:10px;">
                    <a href="http://www.9gagclonescript.com" target="_blank"><b>Powered by 9GagCloneScript.com</b></a>
                    </div>
                </div>
            </div>
        </div>
    </div>