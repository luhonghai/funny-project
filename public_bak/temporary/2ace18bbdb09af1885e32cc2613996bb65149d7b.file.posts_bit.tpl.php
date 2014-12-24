<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 16:57:58
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/posts_bit.tpl" */ ?>
<?php /*%%SmartyHeaderCode:146277489254630a9acf3274-70684867%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2ace18bbdb09af1885e32cc2613996bb65149d7b' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/posts_bit.tpl',
      1 => 1415781485,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '146277489254630a9acf3274-70684867',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9af27558_54276949',
  'variables' => 
  array (
    'baseurl' => 0,
    'postfolder' => 0,
    'posts' => 0,
    'SEO' => 0,
    'asseturl' => 0,
    'purl' => 0,
    'asset_version' => 0,
    'lang264' => 0,
    'displaywm' => 0,
    'truncate' => 0,
    'p' => 0,
    'membersprofilepicurl' => 0,
    'profilepicture' => 1,
    'userlikes' => 1,
    'fixenabled' => 0,
    'lang142' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9af27558_54276949')) {function content_54630a9af27558_54276949($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_makeseo')) include '/Volumes/DATA/Development/funny-project/public/smarty/libs/plugins/modifier.makeseo.php';
if (!is_callable('smarty_modifier_mb_truncate')) include '/Volumes/DATA/Development/funny-project/public/smarty/libs/plugins/modifier.mb_truncate.php';
?>					<li class=" gag-link" data-url="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>" data-text="<?php echo smarty_modifier_mb_truncate(stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']),20,"...",'UTF-8');?>
" gagId="<?php echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
" itemType="list" id="entry-<?php echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
">
                        <div class="content">
                            <div class="img-wrap">
                              <?php if ($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['nsfw']=="1"&&$_SESSION['FILTER']!="0") {?>
                              <a target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>"><img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/nsfw.jpg" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" /></a>
                                <?php } else { ?>
                                	<?php if ($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['pic']!='') {?>
                                	<a target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>"><img src="<?php echo $_smarty_tpl->tpl_vars['purl']->value;?>
/t/<?php echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['pic'];?>
" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" /></a>
                                    <?php } else { ?>
                                        <?php if ($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['youtube_key']!='') {?>
                                        <center>
										<a target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>">
										<img style="max-width:460px" src="http://img.youtube.com/vi/<?php echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['youtube_key'];?>
/0.jpg" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
" />
										<img style="position:relative;top:-200px;" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/play.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
"></img></a>
                                        </center>
                                        <?php } elseif ($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['contents']!='') {
echo strip_mq_gpc($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['contents']);?>

										                                                                                          <?php } else { ?>										<a target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>"><img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/images/error.jpg" alt="<?php echo $_smarty_tpl->tpl_vars['lang264']->value;?>
" /></a>


























										<?php }?>
                                    <?php }?>
                                <?php }?>
                            </div>
                            <?php if ($_smarty_tpl->tpl_vars['displaywm']->value=="0"&&$_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['pic']!='') {?>
							<?php }?>
                        </div>
                         <div style="position:relative;width:220px;float:right">
                             <div class="info b9gcs-stop" id="action-<?php echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
">
                                <h1><a target="_blank" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>" class="jump_focus"><?php if ($_smarty_tpl->tpl_vars['truncate']->value=="1") {
echo smarty_modifier_mb_truncate(stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']),20,"...",'UTF-8');
} else {
echo smiley(stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']));?>
 <span class="title2"><?php echo smiley(stripslashes($_smarty_tpl->tpl_vars['p']->value['story2']));?>
</span><?php }?></a></h1>
								<div class="userinfo">
									<?php $_smarty_tpl->assign('userlikes' , insert_get_user_likes (array('USERID' => $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['USERID']),$_smarty_tpl), true);?>
									<?php $_smarty_tpl->assign('profilepicture' , insert_get_member_profilepicture (array('value' => 'var', 'USERID' => $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['USERID'], 'url' => $_smarty_tpl->tpl_vars['membersprofilepicurl']->value),$_smarty_tpl), true);?>
                                    <div>
										<a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/user/<?php echo stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['username']);?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['membersprofilepicurl']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['profilepicture']->value;?>
?<?php echo time();?>
" alt="<?php echo stripslashes($_smarty_tpl->tpl_vars['p']->value['username']);?>
"></a>
										<div class="uinfo">
											<a href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/user/<?php echo stripslashes($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['username']);?>
"><?php echo fullname($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['username']);?>
</a>
											<?php $_smarty_tpl->assign('alvl' , insert_get_user_level (array('value' => 'var', 'POINT' => $_smarty_tpl->tpl_vars['userlikes']->value),$_smarty_tpl), true);?>
                                            <p>Đăng <?php echo insert_get_time_to_days_ago(array('time' => $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['time_added']),$_smarty_tpl);?>
</p>

										</div>
										<div class="clear">  </div>

                                                                        </div>
								</div>
                                </h4>
                                <div class="new-sharing-box">
                                    <div class="fb-like" data-href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;
echo $_smarty_tpl->tpl_vars['postfolder']->value;
echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
/<?php if ($_smarty_tpl->tpl_vars['SEO']->value=="1") {
echo smarty_modifier_makeseo($_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['story']);?>
.html<?php }?>?ref=fb" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
                                </div>

                                <?php if ($_smarty_tpl->tpl_vars['fixenabled']->value=="1") {?><a class="fix" href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/fix/<?php echo $_smarty_tpl->tpl_vars['posts']->value[$_smarty_tpl->getVariable('smarty')->value['section']['i']['index']]['PID'];?>
"><?php echo $_smarty_tpl->tpl_vars['lang142']->value;?>
</a><?php }?>
                            </div>
                        </div>
                    </li><?php }} ?>
