<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>

{if $penv eq "dev"}
    <script src="{$asseturl}/js/dev.comic.js?v={$asset_version}" type="text/javascript"></script>
{else}
    <script src="{$asseturl}/js/comic.js.gz?v={$asset_version}" type="text/javascript"></script>
{/if}


<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />

{if $penv eq "dev"}
    <link href="{$asseturl}/css/comic/comic.css?v={$asset_version}" media="screen" rel="stylesheet" type="text/css" />
{else}
    <link href="{$asseturl}/css/comic/comic.css.gz?v={$asset_version}" media="screen" rel="stylesheet" type="text/css" />
{/if}



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
                    <img alt="" src="{$asseturl}/comic/packs/neutral/images/Thoughtful.png?v={$asset_version}" style="width: 66px;" /></div>
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
                        <img src="{$asseturl}/comic/cdn/img/ragecomic/text_dropcaps.png?v={$asset_version}" />
                    </span><span title='Chèn ảnh từ URL' id='importImage' class='menuIcon'>
                        <img src="{$asseturl}/comic/cdn/img/ragecomic/photo_add.png?v={$asset_version}" />
                    </span>
                </div>
                <div id="brushController" class="controllerSubset">
                    <strong style='padding-right: 5px'>Bút vẽ:</strong> <span title='Chọn màu bút' id="customWidget"
                        class='menuIcon'>
                        <img src="{$asseturl}/comic/cdn/img/ragecomic/color_wheel.png?v={$asset_version}" />
                    </span><span title='Chọn kích thước bút' id="brushSize" class='menuIcon'>
                        <img src="{$asseturl}/comic/cdn/img/ragecomic/paintbrush.png?v={$asset_version}" />
                    </span><span title="Undo thao tác bút vẽ hoặc 'Dính vào khung' cuối cùng" id="undoBrush"
                        class='menuIcon'>
                        <img src="{$asseturl}/comic/cdn/img/ragecomic/arrow_undo.png?v={$asset_version}" />
                    </span>
                    <div id="brushSizeSlider">
                    </div>
                </div>
                <div id="panelController" class="controllerSubset" style="float: right">
                    <strong style='padding-right: 5px'>Khung:</strong> <span title='Thêm dòng' id='addFrameCtrl'
                        class='menuIcon'>
                        <img alt="" src="{$asseturl}/comic/cdn/img/ragecomic/add.png?v={$asset_version}" />
                    </span><span title='Xóa dòng cuối' id='removeFrameCtrl' class='menuIcon'>
                        <img alt="" src="{$asseturl}/comic/cdn/img/ragecomic/delete.png?v={$asset_version}" />
                    </span>
                </div>
                <div id="canvasControllerDiv" class="controllerSubset">
                    <span title='Hoàn thành' id='exportCanvas' class='menuIcon'>
                        <img alt="" src="{$asseturl}/comic/cdn/img/ragecomic/disk.png?v={$asset_version}" /></span>
                </div>
                <div style="clear: both">
                </div>
            </div>
            <div id='drawingCanvasContainer'>
                <canvas id="drawingCanvasInterface"></canvas>
                <canvas id="drawingCanvas"></canvas>
                <img id="watermark" src="{$asseturl}/comic/cdn/img/ragecomic/watermark.png?v={$asset_version}"
                     style="display: none;" />
            </div>
        </div>
    </div>
	<div style="margin:5px auto;width:800px;">
        <div class="likeonfb">
            <h4>{$lang287}</h4>
            <div class="fb-like" data-href="http://www.facebook.com/{$FACEBOOK_PROFILE}" data-send="false" data-width="600" data-show-faces="false" data-font="arial"></div>
        </div>
		<div class="fb-comments" data-href="{$baseurl}/comic/" data-width="800"></div>
	</div>
</div>
{literal}
	<script type="text/javascript">  

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
    </script>
{/literal}