<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 14:22:03
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:17832891854630a9b28da38-89163144%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '88c8ffa7da568643f3f59f41fa513a3244eb8a02' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/footer.tpl',
      1 => 1415639805,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17832891854630a9b28da38-89163144',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'viewpage' => 0,
    'lang206' => 0,
    'lang207' => 0,
    'p' => 0,
    'lang208' => 0,
    'lang209' => 0,
    'lang210' => 0,
    'lang211' => 0,
    'baseurl' => 0,
    'lang119' => 0,
    'lang212' => 0,
    'lang213' => 0,
    'lang214' => 0,
    'lang215' => 0,
    'lang216' => 0,
    'lang217' => 0,
    'lang218' => 0,
    'lang219' => 0,
    'lang220' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9b350632_25420551',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9b350632_25420551')) {function content_54630a9b350632_25420551($_smarty_tpl) {?></div></div></div>
<div class="clear"> </div>
<div id="footer-container">
<div id="footer-nav">
<div id="footer-wrapper">

</div>
</div>
<div id="overlay-shadow" class="hide"></div>
<div id="overlay-container" class="hide" >
    <div id="scriptolution-soft-report" class="scriptolution-soft-box hide">
    	<?php if ($_smarty_tpl->tpl_vars['viewpage']->value=="1") {?> 	
        <div class="content">
            <a href="javascript:void(0);" class="close-btn"></a>
            <form id="form-scriptolution-soft-report" class="modal" action="#" onsubmit="return false" >
                <h3><?php echo $_smarty_tpl->tpl_vars['lang206']->value;?>
</h3>
                <h4><?php echo $_smarty_tpl->tpl_vars['lang207']->value;?>
</h4>
                <input id="report_entry_id" type="hidden" name="entryId" value="<?php echo $_smarty_tpl->tpl_vars['p']->value['PID'];?>
"/>
                <div class="field">
                    <label for="violation"><input id="violation" type="radio" name="report-reason" value="1"/><?php echo $_smarty_tpl->tpl_vars['lang208']->value;?>
</label>
                    <label for="solicitation"><input id="solicitation" type="radio" name="report-reason" value="2"/><?php echo $_smarty_tpl->tpl_vars['lang209']->value;?>
</label>
                    <label for="offensive"><input id="offensive" type="radio" name="report-reason" value="3"/><?php echo $_smarty_tpl->tpl_vars['lang210']->value;?>
</label>
                    <label for="repost"><input id="repost" type="radio" name="report-reason" value="4"/><?php echo $_smarty_tpl->tpl_vars['lang211']->value;?>
&darr;</label>
                </div>
                <div class="field">
                	<input id="repost_link" type="text" class="text " placeholder="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/post/<?php echo $_smarty_tpl->tpl_vars['p']->value['PID'];?>
" />
                </div>
            </form>
        </div>
        <?php } else { ?>
        <div class="content">
            <a href="javascript:void(0);" class="close-btn"></a>
            <form id="form-scriptolution-soft-report" class="modal" action="#" onsubmit="return false" >
                <h3><?php echo $_smarty_tpl->tpl_vars['lang206']->value;?>
</h3>
                <h4><?php echo $_smarty_tpl->tpl_vars['lang207']->value;?>
</h4>
                <input id="report_entry_id" type="hidden" name="entryId" value=""/>
                <div class="field">
                    <label for="violation"><input id="violation" type="radio" name="report-reason" value="1"/><?php echo $_smarty_tpl->tpl_vars['lang208']->value;?>
</label>
                    <label for="solicitation"><input id="solicitation" type="radio" name="report-reason" value="2"/><?php echo $_smarty_tpl->tpl_vars['lang209']->value;?>
</label>
                    <label for="offensive"><input id="offensive" type="radio" name="report-reason" value="3"/><?php echo $_smarty_tpl->tpl_vars['lang210']->value;?>
</label>
                    <label for="repost"><input id="repost" type="radio" name="report-reason" value="4"/><?php echo $_smarty_tpl->tpl_vars['lang211']->value;?>
&darr;</label>
                </div>
                <div class="field">
                	<input id="repost_link" type="text" class="text " placeholder="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/post/" />
                </div>
            </form>
        </div>
        <?php }?>
        <div class="actions">
            <ul class="buttons">
                <li><a class="cancel close-report" href="javascript:void(0);"><?php echo $_smarty_tpl->tpl_vars['lang119']->value;?>
</a></li>
                <li><a class="button submit-button" href="javascript:void(0);" id="report-submit"><?php echo $_smarty_tpl->tpl_vars['lang212']->value;?>
</a></li>
                <li class="hide"><a class="button loading" href="javascript:void(0);"></a></li>
            </ul>
        </div>
    </div>
    <div id="scriptolution-soft-share" class="scriptolution-soft-box hide">
        <div class="content">
            <a href="javascript:void(0);" class="close-btn"></a>
            <form id="form-scriptolution-soft-share" class="modal" action="">
            </form>
        </div>                
    </div>
	
    <div class="keyboard-instruction hide">
        <h3><?php echo $_smarty_tpl->tpl_vars['lang213']->value;?>
</h3>
        <div class="keyboard-img"></div>
        <ul class="key">
            <li><strong>R</strong> - <?php echo $_smarty_tpl->tpl_vars['lang214']->value;?>
</li>
            <li><strong>C</strong> - <?php echo $_smarty_tpl->tpl_vars['lang215']->value;?>
</li>
            <li><strong>H</strong> - <?php echo $_smarty_tpl->tpl_vars['lang216']->value;?>
</li>
            <li><strong>J</strong> - <?php echo $_smarty_tpl->tpl_vars['lang217']->value;?>
</li>
            <li><strong>K</strong> - <?php echo $_smarty_tpl->tpl_vars['lang218']->value;?>
</li>
            <li><strong>L</strong> - <?php echo $_smarty_tpl->tpl_vars['lang219']->value;?>
</li>
        </ul>
        <p><?php echo $_smarty_tpl->tpl_vars['lang220']->value;?>
</p>
    </div>
</div>
</div>
<?php echo '<script'; ?>
 type="text/javascript" src="//apis.google.com/js/plusone.js"><?php echo '</script'; ?>
>

<?php if ($_smarty_tpl->tpl_vars['viewpage']->value=="1") {?>
<?php echo $_smarty_tpl->getSubTemplate ('js4.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php } else { ?>
<?php echo $_smarty_tpl->getSubTemplate ('js5.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php }?>

<a href="javascript:void(0);" id="backtotop" title="Trollvd.com"><center><img src="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/images/gotop.png" /></center></a>


</div>
</body>
</html><?php }} ?>
