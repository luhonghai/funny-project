    <div id="main-bottom-ad-tray">
        <div>
        	{insert name=get_advertisement AID=3}
        </div>
    </div>
</div>
<div id="overlay-shadow" class="hide"></div>
<div id="overlay-container" class="hide" >
{if $owner eq "1"}
{if $viewpage eq "1" AND $error eq "" AND $new eq "1"}
{include file='js3.tpl'}
{/if}
{/if}
    <div id="scriptolution-soft-report" class="scriptolution-soft-box hide">
    	{if $viewpage eq "1"}
        <div class="content">
            <a href="javascript:void(0);" class="close-btn"></a>
            <form id="form-scriptolution-soft-report" class="modal" action="#" onsubmit="return false" >
                <h3>{$lang206}</h3>
                <h4>{$lang207}</h4>
                <input id="report_entry_id" type="hidden" name="entryId" value="{$p.PID}"/>
                <div class="field">
                    <label for="violation"><input id="violation" type="radio" name="report-reason" value="1"/>{$lang208}</label>
                    <label for="solicitation"><input id="solicitation" type="radio" name="report-reason" value="2"/>{$lang209}</label>
                    <label for="offensive"><input id="offensive" type="radio" name="report-reason" value="3"/>{$lang210}</label>
                    <label for="repost"><input id="repost" type="radio" name="report-reason" value="4"/>{$lang211}&darr;</label>
                </div>
                <div class="field">
                	<input id="repost_link" type="text" class="text " placeholder="{$baseurl}/gag/{$p.PID}" />
                </div>
            </form>
        </div>
        {else}
        <div class="content">
            <a href="javascript:void(0);" class="close-btn"></a>
            <form id="form-scriptolution-soft-report" class="modal" action="#" onsubmit="return false" >
                <h3>{$lang206}</h3>
                <h4>{$lang207}</h4>
                <input id="report_entry_id" type="hidden" name="entryId" value=""/>
                <div class="field">
                    <label for="violation"><input id="violation" type="radio" name="report-reason" value="1"/>{$lang208}</label>
                    <label for="solicitation"><input id="solicitation" type="radio" name="report-reason" value="2"/>{$lang209}</label>
                    <label for="offensive"><input id="offensive" type="radio" name="report-reason" value="3"/>{$lang210}</label>
                    <label for="repost"><input id="repost" type="radio" name="report-reason" value="4"/>{$lang211}&darr;</label>
                </div>
                <div class="field">
                	<input id="repost_link" type="text" class="text " placeholder="{$baseurl}/gag/" />
                </div>
            </form>
        </div>
        {/if}
        <div class="actions">
            <ul class="buttons">
                <li><a class="cancel close-report" href="javascript:void(0);">{$lang119}</a></li>
                <li><a class="button submit-button" href="javascript:void(0);" id="report-submit">{$lang212}</a></li>
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
    <div id="scriptolution-soft-language" class="scriptolution-soft-box hide">
        <div class="content">
            <a href="javascript:void(0);" class="close-btn badge-language-close"></a>
            <form id="form-scriptolution-soft-language" class="modal" action="" onsubmit="return false;">
                <h3>{$lang222}</h3>
                <h4>{$lang223}</h4>
                <div class="field">                
                    <label for="lang-en">
                    <input id="lang-en" type="radio" name="language" value="en" {if $smarty.session.language eq "en"}class="current" checked="checked"{/if}></input>english
                    </label>
                                    
                    <label for="lang-fr">
                    <input id="lang-fr" class="" type="radio" name="language" value="fr" {if $smarty.session.language eq "fr"}class="current" checked="checked"{/if}></input>fran&#xE7;ais
                    </label>
                                    
                    <label for="lang-de">
                    <input id="lang-de" class="" type="radio" name="language" value="de" {if $smarty.session.language eq "de"}class="current" checked="checked"{/if}></input>deutsch
                    </label>
                                    
                    <label for="lang-es">
                    <input id="lang-es" class="" type="radio" name="language" value="es" {if $smarty.session.language eq "es"}class="current" checked="checked"{/if}></input>espa&ntilde;ol
                    </label>
                                    
                    <label for="lang-pt">
                    <input id="lang-pt" class="" type="radio" name="language" value="pt" {if $smarty.session.language eq "pt"}class="current" checked="checked"{/if}></input>portugu&#234;s
                    </label>
                                    
                    <label for="lang-ru">
                    <input id="lang-ru" class="" type="radio" name="language" value="ru" {if $smarty.session.language eq "ru"}class="current" checked="checked"{/if}></input>pусский
                    </label>
                                    
                    <label for="lang-tr">
                    <input id="lang-tr" class="" type="radio" name="language" value="tr" {if $smarty.session.language eq "tr"}class="current" checked="checked"{/if}></input>t&uuml;rk&ccedil;e
                    </label>
                </div>
            </form>
        </div>
        <div class="actions">
            <ul class="buttons">
                <li><a id="badge-language-close" class="cancel badge-language-close" href="javascript:void(0);">{$lang119}</a></li>
                <li><a id="language-submit-button" class="button submit-button" href="javascript:void(0);">{$lang221}</a></li>
            </ul>
        </div>
    </div>
    <div class="keyboard-instruction hide">
        <h3>{$lang213}</h3>
        <div class="keyboard-img"></div>
        <ul class="key">
            <li><strong>R</strong> - {$lang214}</li>
            <li><strong>C</strong> - {$lang215}</li>
            <li><strong>H</strong> - {$lang216}</li>
            <li><strong>J</strong> - {$lang217}</li>
            <li><strong>K</strong> - {$lang218}</li>
            <li><strong>L</strong> - {$lang219}</li>
        </ul>
        <p>{$lang220}</p>
    </div>
</div>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script src="{$baseurl}/js/fbshare.js" type="text/javascript"></script>
{literal}
<script type="text/javascript">
function sendlang(lang){
jQuery.ajax({
type:'POST',
url:' {/literal}{$baseurl}{literal}'+ '/changelang.php',
data:'language='+lang,
success:function(e){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
$('#scriptolution-soft-language').addClass('hide');
location.reload();
}
});
}
$('.badge-language-selector').click(function(){
$("#overlay-shadow").removeClass("hide");
$("#overlay-container").removeClass("hide");
$("#scriptolution-soft-language").removeClass("hide");
$("#language-submit-button").click(function(){
sendlang($('input[name=language]:checked').val());
});
$("#badge-language-close").click(function(){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
$('#scriptolution-soft-language').addClass('hide');
});
});
$('.close-report').click(function(){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
});
</script>
{/literal}
{if $viewpage eq "1"}
{include file='js4.tpl'}
{else}
{include file='js5.tpl'}
{/if}

{literal}
<a style="width:55px;height:46px; position:fixed; bottom:0; right:20px; background:#eeeeee;-webkit-border-top-left-radius: 5px; -webkit-border-top-right-radius: 5px;-moz-border-radius-topleft: 5px;-moz-border-radius-topright: 5px;border-top-left-radius: 5px;border-top-right-radius: 5px;-webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);-moz-box-shadow:    0px 0px 2px rgba(0, 0, 0, 0.4);box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);padding:12px 6px 0 6px;font-size:14px;font-weight:bold;border: 1px #FFF solid;color:#000;display:none;" href="javascript:void(0);" onclick="if($.browser.safari || $.browser.chrome){ bodyelem = $(body) } else{ bodyelem = $(html) }bodyelem.animate({scrollTop : 1},'slow'); $('#backtotop').hide();"  id="backtotop"><center>{/literal}{$lang251}{literal}</center></a>
{/literal}
{if $viewpage eq "1"}
<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>
{/if}
</body>
</html>