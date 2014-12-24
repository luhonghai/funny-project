<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 16:55:39
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/right.tpl" */ ?>
<?php /*%%SmartyHeaderCode:36807833454630a9b12c7d2-91105549%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e33926fa463d88a6f12db0dfc35cb78062b4512c' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/right.tpl',
      1 => 1415781485,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '36807833454630a9b12c7d2-91105549',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9b27e081_40220517',
  'variables' => 
  array (
    'baseurl' => 0,
    'asseturl' => 0,
    'asset_version' => 0,
    'lang153' => 0,
    'FACEBOOK_PROFILE' => 0,
    'NSFWADS' => 0,
    'r' => 0,
    'rhome' => 0,
    'lang251' => 0,
    'postfolder' => 0,
    'SEO' => 0,
    'purl' => 0,
    'truncate' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9b27e081_40220517')) {function content_54630a9b27e081_40220517($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_makeseo')) include '/Volumes/DATA/Development/funny-project/public/smarty/libs/plugins/modifier.makeseo.php';
if (!is_callable('smarty_modifier_mb_truncate')) include '/Volumes/DATA/Development/funny-project/public/smarty/libs/plugins/modifier.mb_truncate.php';
if (!is_callable('smarty_modifier_truncate')) include '/Volumes/DATA/Development/funny-project/public/smarty/libs/plugins/modifier.truncate.php';
?>	<div class="side-bar">
		<div class="msg-box notice" style="font-size:12px;">
			<b>Vào Facebook để duyệt sướng hơn! Bạn không vào được? Xem hướng dẫn <a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/cach-vao-facebook-khi-bi-chan-moi-nhat-nam-2014.html">cách vào Facebook</a>.</b>
		</div>
		<div>
			<a class="bts spaceBottom" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/submit" style="float: left; width: 278px; color: white">Click để bắt đầu chia sẻ những bức ảnh vui!</a>
			<div class="clear"></div>
		</div>

<div id="tabs">
          <ul>
            <li><a data="tuan">Tuần</a></li>
            <li><a data="thang">Tháng</a></li>
            <li><a data="nam">Năm</a></li>
          </ul>
          <span id="slogo">
            <a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/topusers"><label for="slogo">Bảng Xếp Hạng</label></a>
            <img alt="Top Overs" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/top-logo.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" width="21" height="21" />
          </span>
          <div class="current">
          </div>
        </div>
				<div class="social-block">
            <h3><?php echo $_smarty_tpl->tpl_vars['lang153']->value;?>
</h3>
            <div class="facebook-like">
                <div class="fb-like-box" data-href="http://www.facebook.com/<?php echo $_smarty_tpl->tpl_vars['FACEBOOK_PROFILE']->value;?>
" data-width="290" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
			</div>
        </div>
		
        <div id="moving-boxes">
            <div class="s-300" id="bottom-s300">            
            	<?php if ($_SESSION['FILTER']=="1"&&$_smarty_tpl->tpl_vars['NSFWADS']->value) {?>
        	<?php echo insert_get_advertisement(array('AID' => 10),$_smarty_tpl);?>

            <?php } else { ?>
        	<?php echo insert_get_advertisement(array('AID' => 10),$_smarty_tpl);?>

			<?php }?>
            </div>
<?php if ($_smarty_tpl->tpl_vars['r']->value[0]['PID']!=''&&$_smarty_tpl->tpl_vars['rhome']->value=="1") {?>
<div id="post-gag-stay" class="_badge-sticky-elements" data-y="60">
	<div class="popular-block">
	<h3><?php echo $_smarty_tpl->tpl_vars['lang251']->value;?>
</h3>
	<ol>
	<?php if (isset($_smarty_tpl->tpl_vars['smarty']->value['section']['i'])) unset($_smarty_tpl->tpl_vars['smarty']->value['section']['i']);
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['name'] = 'i';
$_smarty_tpl->tpl_vars['smarty']->value['section']['i']['loop'] = is_array($_loop=$_smarty_tpl->tpl_vars['r']->value) ? count($_loop) : max(0, (int) $_loop); unset($_loop);
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
	<a class="wrap" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>" >
		<li>
            <?php if ($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['nsfw']=="1"&&$_SESSION['FILTER']!="0") {?>
				<img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/nsfw_thumb.jpg?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" />
			<?php } else { ?>
				<?php if ($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['pic']!='') {?>
					<img src="<?php echo $_smarty_tpl->tpl_vars['purl']->value;?>
/t/s-<?php echo $_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['pic'];?>
" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" />
				<?php } else { ?>
					<?php if ($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['youtube_key']!='') {?>
						<img src="http://img.youtube.com/vi/<?php echo $_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['youtube_key'];?>
/0.jpg" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" />
                                     	<?php } elseif ($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['contents']!='') {?>
						<img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/s-text.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" />
					<?php } else { ?>
						<img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/s-error.jpg?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" alt="Không tìm thấy dữ liệu" />
					<?php }?>
				<?php }?>
			<?php }?>
			<h4><?php if ($_smarty_tpl->tpl_vars['truncate']->value=="1") {
echo smarty_modifier_mb_truncate(stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']),20,"...",'UTF-8');
} else {
echo stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);
}?></h4>
         		<h4><a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/user/<?php echo stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['username']);?>
"><?php echo smarty_modifier_truncate(stripslashes($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['username']),20,"...",true);?>
</a></h4>
			<p class="meta"><span class="comment"><fb:comments-count href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>"></fb:comments-count></span><span class="loved"><?php echo $_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['favclicks'];?>
</span><span class="viewed"><?php echo $_smarty_tpl->tpl_vars['r']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['postviewed'];?>
</span>
			</p>
		</li>
	</a>
	<?php endfor; endif; ?>
	</ol>
	</div>
</div>
<?php }?>
</div>
</div><?php }} ?>
