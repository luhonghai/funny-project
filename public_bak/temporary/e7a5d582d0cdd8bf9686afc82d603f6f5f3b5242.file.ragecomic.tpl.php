<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 16:50:53
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/ragecomic.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10862192555463107b170dd1-11022758%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e7a5d582d0cdd8bf9686afc82d603f6f5f3b5242' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/ragecomic.tpl',
      1 => 1415785845,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10862192555463107b170dd1-11022758',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5463107b228905_84972344',
  'variables' => 
  array (
    'penv' => 0,
    'asseturl' => 0,
    'asset_version' => 0,
    'lang287' => 0,
    'FACEBOOK_PROFILE' => 0,
    'baseurl' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5463107b228905_84972344')) {function content_5463107b228905_84972344($_smarty_tpl) {?><?php echo '<script'; ?>
 src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"><?php echo '</script'; ?>
>

<?php if ($_smarty_tpl->tpl_vars['penv']->value=="dev") {?>
    <?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/js/dev.comic.js?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" type="text/javascript"><?php echo '</script'; ?>
>
<?php } else { ?>
    <?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/js/comic.js.gz?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" type="text/javascript"><?php echo '</script'; ?>
>
<?php }?>


<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />

<?php if ($_smarty_tpl->tpl_vars['penv']->value=="dev") {?>
    <link href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/css/comic/comic.css?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" media="screen" rel="stylesheet" type="text/css" />
<?php } else { ?>
    <link href="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/css/comic/comic.css.gz?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" media="screen" rel="stylesheet" type="text/css" />
<?php }?>



<div class="box infoBox rageBuilderContainer">
    <div id="blank_content">
        <div>
            <div class="dock" id="toolbar">
                <div class="dock-container" title="Click để thêm hình ảnh.">
                </div>
            </div>
        </div>
        <div id='promptContainer' title='Chèn ảnh'>
			<p class='errorText'></p>
            <p>Nhập đường dẫn (URL) của ảnh.</p>
            <div>
                <strong>URL: </strong>
                <input type='text' id='txtImportUrl' value='' /></div>
			 <p>Hoặc tải lên từ máy tính của bạn.</p>
			<div>
                <strong>File: </strong>
                <input type="file" id="fileToUpload" style="width: 164px;" /></div>
        </div>
        <div id='startUpMessageContainer' title='Pro-tip'>
        </div>
        <div id='exportContainer' title='Kiểm tra lại nào'>
            <div>
                <div style='float: left'>
                    <img alt="" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/packs/neutral/images/Thoughtful.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" style="width: 66px;" /></div>
                <div>
                    Bạn đã xong thật chưa? Nếu xác nhận bạn sẽ không thể tiếp tục sửa ảnh này. Sau đó
                    bạn có thể đăng lên trollvd.com hoặc lưu ảnh về máy.
                </div>
                <div style='clear: both'>
                </div>
            </div>
        </div>
        <div id="canvasContainer">
            <div id="controllers" class="ui-widget-header ui-corner-all">
                <div id="templateController" class="controllerSubset" style="border-left: none; padding-left: 3px;">
                    <select id="drpPacks" title="Chọn bộ ảnh" style="margin: 0;">
                    </select>
                </div>
                <div id="toolsController" class="controllerSubset">
                    <strong style='padding-right: 5px'>Công cụ:</strong> <span title='Chèn chữ' id='addTextCtrl'
                        class='menuIcon'>
                        <img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/text_dropcaps.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span><span title='Chèn ảnh từ URL' id='importImage' class='menuIcon'>
                        <img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/photo_add.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span>
                </div>
                <div id="brushController" class="controllerSubset">
                    <strong style='padding-right: 5px'>Bút vẽ:</strong> <span title='Chọn màu bút' id="customWidget"
                        class='menuIcon'>
                        <img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/color_wheel.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span><span title='Chọn kích thước bút' id="brushSize" class='menuIcon'>
                        <img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/paintbrush.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span><span title="Undo thao tác bút vẽ hoặc 'Dính vào khung' cuối cùng" id="undoBrush"
                        class='menuIcon'>
                        <img src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/arrow_undo.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span>
                    <div id="brushSizeSlider">
                    </div>
                </div>
                <div id="panelController" class="controllerSubset" style="float: right">
                    <strong style='padding-right: 5px'>Khung:</strong> <span title='Thêm dòng' id='addFrameCtrl'
                        class='menuIcon'>
                        <img alt="" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/add.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span><span title='Xóa dòng cuối' id='removeFrameCtrl' class='menuIcon'>
                        <img alt="" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/delete.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" />
                    </span>
                </div>
                <div id="canvasControllerDiv" class="controllerSubset">
                    <span title='Hoàn thành' id='exportCanvas' class='menuIcon'>
                        <img alt="" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/disk.png?v=<?php echo $_smarty_tpl->tpl_vars['asset_version']->value;?>
" /></span>
                </div>
                <div style="clear: both">
                </div>
            </div>
            <div id='drawingCanvasContainer'>
                <canvas id="drawingCanvasInterface"></canvas>
                <canvas id="drawingCanvas"></canvas>
                <img id="watermark" src="<?php echo $_smarty_tpl->tpl_vars['asseturl']->value;?>
/comic/cdn/img/ragecomic/watermark.png"
                     style="display: none;" />
            </div>
        </div>
    </div>
	<div style="margin:5px auto;width:800px;">
        <div class="likeonfb">
            <h4><?php echo $_smarty_tpl->tpl_vars['lang287']->value;?>
</h4>
            <div class="fb-like" data-href="http://www.facebook.com/<?php echo $_smarty_tpl->tpl_vars['FACEBOOK_PROFILE']->value;?>
" data-send="false" data-width="600" data-show-faces="false" data-font="arial"></div>
        </div>
		<div class="fb-comments" data-href="<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/comic/" data-width="800"></div>
	</div>
</div>

	<?php echo '<script'; ?>
 type="text/javascript">  

        $(document).ready(function () {
            RageComic.initialize({
                packRoot: ASSET_URL + "/comic/",
                siteUrl: "",
                builderUrl: BASE_URL + "/comic",
                cdnRoot: ASSET_URL + "/comic/cdn/"
            });
        });
        window.onbeforeunload = confirmExit;
		function confirmExit() {
            return "Ảnh của bạn chưa được lưu. Bạn có chắc muốn thoát không?";
        }
    <?php echo '</script'; ?>
>
<?php }} ?>
