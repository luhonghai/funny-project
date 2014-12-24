<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 16:57:57
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:207882729854630a9abee505-38483516%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9d06e984ec59fb8bec08a6fac86e1f359a4735c5' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/index.tpl',
      1 => 1415781485,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '207882729854630a9abee505-38483516',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9aceb8b2_99875160',
  'variables' => 
  array (
    'topgags' => 0,
    'baseurl' => 0,
    'postfolder' => 0,
    'SEO' => 0,
    'purl' => 0,
    'lang171' => 0,
    'lang169' => 0,
    'lang170' => 0,
    'lang168' => 0,
    'thumbs' => 0,
    'lang258' => 0,
    'safemode' => 0,
    'eurl' => 0,
    'posts' => 0,
    'tpp' => 0,
    'lang166' => 0,
    'tnp' => 0,
    'lang167' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9aceb8b2_99875160')) {function content_54630a9aceb8b2_99875160($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_makeseo')) include '/Volumes/DATA/Development/funny-project/public/smarty/libs/plugins/modifier.makeseo.php';
?><?php if ($_smarty_tpl->tpl_vars['topgags']->value>0) {?>
<div class="feature-bar">
<ul>
<?php if (isset($_smarty_tpl->tpl_vars['smarty']->value['section']['f'])) unset($_smarty_tpl->tpl_vars['smarty']->value['section']['f']);
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['name'] = 'f';
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['loop'] = is_array($_loop=$_smarty_tpl->tpl_vars['topgags']->value) ? count($_loop) : max(0, (int) $_loop); unset($_loop);
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['show'] = true;
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['max'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['loop'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['step'] = 1;
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['start'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['step'] > 0 ? 0 : $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['loop']-1;
if ($_smarty_tpl->tpl_vars['smarty']->value['section']['f']['show']) {
    $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['total'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['loop'];
    if ($_smarty_tpl->tpl_vars['smarty']->value['section']['f']['total'] == 0)
        $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['show'] = false;
} else
    $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['total'] = 0;
if ($_smarty_tpl->tpl_vars['smarty']->value['section']['f']['show']):

            for ($_smarty_tpl->tpl_vars['smarty']->value['section']['f']['index'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['start'], $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['iteration'] = 1;
                 $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['iteration'] <= $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['total'];
                 $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['index'] += $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['step'], $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['iteration']++):
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['rownum'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['iteration'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['index_prev'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['index'] - $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['step'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['index_next'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['index'] + $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['step'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['first']      = ($_smarty_tpl->tpl_vars['smarty']->value['section']['f']['iteration'] == 1);
$_smarty_tpl->tpl_vars['smarty']->value['section']['f']['last']       = ($_smarty_tpl->tpl_vars['smarty']->value['section']['f']['iteration'] == $_smarty_tpl->tpl_vars['smarty']->value['section']['f']['total']);
?>
        <a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['topgags']->value[$_smarty_tpl->getVariable('smarty')->value['section']['f']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['topgags']->value[$_smarty_tpl->getVariable('smarty')->value['section']['f']['index']]['story']);?>
.html<?php }?>">
        <img src="<?php echo $_smarty_tpl->tpl_vars['purl']->value;?>
/t/s-<?php echo $_smarty_tpl->tpl_vars['topgags']->value[$_smarty_tpl->getVariable('smarty')->value['section']['f']['index']]['pic'];?>
" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['topgags']->value[$_smarty_tpl->getVariable('smarty')->value['section']['f']['index']]['story']);?>
">
        <span class="title"><?php echo $_smarty_tpl->tpl_vars['topgags']->value[$_smarty_tpl->getVariable('smarty')->value['section']['f']['index']]['story'];?>
</span>
        </a>
<?php endfor; endif; ?>
</ul>
</div>
<?php }?>
<div id="main">
    <div id="content-holder">        
        <div class="main-filter ">
			<div id="use-tips">
                <div id="view-info" class="list-tips">
                    <div id="shortcut-event-label" style="display:none"><?php echo $_smarty_tpl->tpl_vars['lang171']->value;?>
</div>
                    <span><b><?php echo $_smarty_tpl->tpl_vars['lang169']->value;?>
</b>: <?php echo $_smarty_tpl->tpl_vars['lang170']->value;?>
</span>
                    <a href="#keyboard" class="keyboard_link"><?php echo $_smarty_tpl->tpl_vars['lang168']->value;?>
</a>                    
                </div>
            </div>
			<?php if ($_smarty_tpl->tpl_vars['thumbs']->value=="1") {?>
			<a id="changeview" class="view_thumbs" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/hot?view=thumbs" title="Toggle Views"><?php echo $_smarty_tpl->tpl_vars['lang258']->value;?>
</a>
			<?php }?>
            <?php if ($_smarty_tpl->tpl_vars['safemode']->value=="1") {?>
			<?php if ($_SESSION['USERID']!='') {?>
                <?php if ($_SESSION['FILTER']=="1") {?>
                <a class="safe-mode-switcher on" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/safe?m=<?php echo $_smarty_tpl->tpl_vars['eurl']->value;?>
">&nbsp;</a>
                <?php } else { ?>
                <a class="safe-mode-switcher off" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/safe?m=<?php echo $_smarty_tpl->tpl_vars['eurl']->value;?>
&o=1">&nbsp;</a>
                <?php }?>
            <?php } else { ?>
            	<a class="safe-mode-switcher on" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/login">&nbsp;</a>
            <?php }?>
			<?php }?>
        </div>
        <div id="content" listPage="hot">
            <div id="entries-content" class="list">
                <ul id="entries-content-ul" class="col-1">
                    <?php if (isset($_smarty_tpl->tpl_vars['smarty']->value['section']['i'])) unset($_smarty_tpl->tpl_vars['smarty']->value['section']['i']);
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['name'] = 'i';
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['loop'] = is_array($_loop=$_smarty_tpl->tpl_vars['posts']->value) ? count($_loop) : max(0, (int) $_loop); unset($_loop);
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['show'] = true;
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['max'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['loop'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['step'] = 1;
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['start'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['step'] > 0 ? 0 : $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['loop']-1;
if ($_smarty_tpl->tpl_vars['smarty']->value['section']['i']['show']) {
    $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['total'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['loop'];
    if ($_smarty_tpl->tpl_vars['smarty']->value['section']['i']['total'] == 0)
        $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['show'] = false;
} else
    $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['total'] = 0;
if ($_smarty_tpl->tpl_vars['smarty']->value['section']['i']['show']):

            for ($_smarty_tpl->tpl_vars['smarty']->value['section']['i']['index'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['start'], $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['iteration'] = 1;
                 $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['iteration'] <= $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['total'];
                 $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['index'] += $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['step'], $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['iteration']++):
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['rownum'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['iteration'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['index_prev'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['index'] - $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['step'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['index_next'] = $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['index'] + $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['step'];
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['first']      = ($_smarty_tpl->tpl_vars['smarty']->value['section']['i']['iteration'] == 1);
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['last']       = ($_smarty_tpl->tpl_vars['smarty']->value['section']['i']['iteration'] == $_smarty_tpl->tpl_vars['smarty']->value['section']['i']['total']);
?>
                    <?php echo $_smarty_tpl->getSubTemplate ("posts_bit.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

                    <?php endfor; endif; ?>                    
                </ul>
            </div>	
            <div id="lastPostsLoader"></div>                

            <div id="paging-buttons" class="paging-buttons">
            	<?php if ($_smarty_tpl->tpl_vars['tpp']->value!='') {?>
                <a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/hot?page=<?php echo $_smarty_tpl->tpl_vars['tpp']->value;?>
" class="previous">&laquo; <?php echo $_smarty_tpl->tpl_vars['lang166']->value;?>
</a>
                <?php } else { ?>
                <a href="#" onclick="return false;" class="previous disabled">&laquo; <?php echo $_smarty_tpl->tpl_vars['lang166']->value;?>
</a>
                <?php }?>
                <?php if ($_smarty_tpl->tpl_vars['tnp']->value!='') {?>
                <a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/hot?page=<?php echo $_smarty_tpl->tpl_vars['tnp']->value;?>
" class="older"><?php echo $_smarty_tpl->tpl_vars['lang167']->value;?>
 &raquo;</a>
                <?php } else { ?>
                <a href="#" onclick="return false;" class="older disabled"><?php echo $_smarty_tpl->tpl_vars['lang167']->value;?>
 &raquo;</a>
                <?php }?>
            </div>
        </div>
    </div>
</div>
<?php echo $_smarty_tpl->getSubTemplate ('vote_js.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate ('right.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<div id="footer" class=""><?php }} ?>
