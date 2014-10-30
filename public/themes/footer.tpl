</div></div></div>
<div class="clear"> </div>
<div id="footer-container">
<div id="footer-nav">
<div id="footer-wrapper">

</div>
</div>
<div id="overlay-shadow" class="hide"></div>
<div id="overlay-container" class="hide" >
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
                	<input id="repost_link" type="text" class="text " placeholder="{$baseurl}/post/{$p.PID}" />
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
                	<input id="repost_link" type="text" class="text " placeholder="{$baseurl}/post/" />
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
</div>
<script type="text/javascript" src="//apis.google.com/js/plusone.js"></script>

{if $viewpage eq "1"}
{include file='js4.tpl'}
{else}
{include file='js5.tpl'}
{/if}
{literal}
<a style="width:55px;height:46px; position:fixed; bottom:0; {/literal}{if $smarty.session.language eq "ar"}left{else}right{/if}{literal}:20px; background:#eeeeee;-webkit-border-top-left-radius: 5px;
-webkit-border-top-right-radius: 5px;
-moz-border-radius-topleft: 5px;
-moz-border-radius-topright: 5px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
-webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
-moz-box-shadow:    0px 0px 2px rgba(0, 0, 0, 0.4);
box-shadow:         0px 0px 2px rgba(0, 0, 0, 0.4);
padding:12px 6px 0 6px;
font-size:14px;
font-weight:bold;
border: 1px #FFF solid;
color:#000;display:none
" href="javascript:void(0);" onclick="
if($.browser.safari || $.browser.chrome){ bodyelem = $(body) } else{ bodyelem = $(html) }
bodyelem.animate({scrollTop : 0},'slow');
"id="backtotop" title="Trollvd.com"><center><img src="{/literal}{$baseurl}{literal}/images/gotop.png" /></center></a>s
{/literal}

{if $ganalytics ne ""}
{literal}
{/if}
	<script>
		var viewpage = 1;
    </script>
{/literal}
{else}
{literal}
	<script>
		var viewpage = 0;
    </script>
{/literal}
{/if}
{literal}

	<script>
		$('.search-button').click(function () {
			$('#header_searchbar').toggle('slow')
		});
		$("#backtotop").hide();
		$(function () {
					$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#backtotop').fadeIn()
				} else {
					$('#backtotop').fadeOut()
				}
			});
			$('#backtotop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false
			});
		});
    </script>
{/literal}
{if !in_array($menu,array(5,11,15))}
{/if}
</div>
</body>
</html>