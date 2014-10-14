<?php /* Smarty version 2.6.6, created on 2014-10-13 08:20:54
         compiled from messages.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'stripslashes', 'messages.tpl', 5, false),array('insert', 'get_member_profilepicture', 'messages.tpl', 6, false),array('insert', 'country_code_to_country', 'messages.tpl', 12, false),)), $this); ?>
<div id="main">
    <div id="content-holder">		
        <div class="profile-pad">
            <div class="profile-image">
                <a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
">
                <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_member_profilepicture', 'assign' => 'profilepicture', 'value' => 'var', 'USERID' => $_SESSION['USERID'])), $this); ?>

                <img src="<?php echo $this->_tpl_vars['membersprofilepicurl']; ?>
/<?php echo $this->_tpl_vars['profilepicture']; ?>
?<?php echo time(); ?>
" alt="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" />
                </a>
            </div>
            <div class="profile-info" href="#" style="background:#<?php echo $this->_tpl_vars['p']['color1']; ?>
">
                <h3><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
"><?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</a></h3>
                <h4><?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'country_code_to_country', 'value' => 'a', 'assign' => 'country', 'code' => $this->_tpl_vars['p']['country'])), $this);  echo $this->_tpl_vars['country']; ?>
</h4>
                <p><?php echo ((is_array($_tmp=$this->_tpl_vars['p']['description'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</p>  
                <p><a href="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['website'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" target="_blank" style="color:#<?php echo $this->_tpl_vars['p']['color2']; ?>
"><?php echo ((is_array($_tmp=$this->_tpl_vars['p']['website'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</a></p>              
                <a class="friendship" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
/messages">Messages</a>
            </div>
        </div>
        <div class="main-filter with-topping">
            <ul class="content-type">            
                <li><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
"><strong><?php echo $this->_tpl_vars['lang192']; ?>
</strong> (<?php echo $this->_tpl_vars['tl']; ?>
)</a></li>
                <li><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
/likes"><strong><?php echo $this->_tpl_vars['lang193']; ?>
</strong> (<?php echo $this->_tpl_vars['tf']; ?>
)</a></li>            
                <li><a class="current" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
/messages"><strong><?php echo $this->_tpl_vars['lang194']; ?>
</strong> (<fb:comments-count href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
/messages"></fb:comments-count>)</a></li>
            </ul>
        </div>
        <div id="content">
            <div id="view-info">
            	<p><?php echo $this->_tpl_vars['lang195']; ?>
</p>
            </div>
            <div class="profile-comment-wrapper">
            <div class="fb-comments" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
/messages" data-num-posts="5" data-width="700"></div>
            </div>
        </div>    
    </div>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'right.tpl', 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php echo '
<script type="text/javascript">
var adloca=$(\'#moving-boxes\').offset().top; 
 $(window).scroll(function () { 
    var curloca=$(window).scrollTop();
    if(curloca>adloca){
        $(\'#moving-boxes\').css(\'position\',\'fixed\');
        $(\'#moving-boxes\').css(\'top\',\'55px\');
        $(\'#moving-boxes\').css(\'z-index\',\'200\');
    };
    if(curloca <= adloca){
        $(\'#moving-boxes\').css(\'position\',\'static\');
        $(\'#moving-boxes\').css(\'top\',\'!important\');
        $(\'#moving-boxes\').css(\'z-index\',\'!important\');
    };
    });
</script> 
'; ?>
   
<div id="footer" class="">