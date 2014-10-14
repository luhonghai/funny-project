<div id="main">
    <div id="content-holder">        
        <div class="main-filter ">
            <ul class="content-type">
                <li> <a class="" href="{$baseurl}/hot"><strong>{$lang172}</strong></a></li>
                <li> <a class="current" href="{$baseurl}/trending"><strong>{$lang173}</strong></a></li>
                <li> <a class="" href="{$baseurl}/vote"><strong>{$lang174}</strong></a></li>                
            </ul>
            <a id="changeview" class="view_thumbs" href="{$baseurl}/trending">{$lang259}</a>
            {if $smarty.session.USERID ne ""}
                {if $smarty.session.FILTER eq "1"}
                <a class="safe-mode-switcher on" href="{$baseurl}/safe?m={$eurl}">&nbsp;</a>
                {else}
                <a class="safe-mode-switcher off" href="{$baseurl}/safe?m={$eurl}&o=1">&nbsp;</a>
                {/if}
            {else}
            	<a class="safe-mode-switcher on" href="{$baseurl}/login">&nbsp;</a>
            {/if}
        </div>
        <div id="content" listPage="hot">            
            <div id="use-tips">
                <div id="view-info" class="list-tips">
                    <div id="shortcut-event-label" style="display:none">{$lang171}</div>
                    <span><b>{$lang169}</b>: {$lang170}</span>
                    <a href="#keyboard" class="keyboard_link">{$lang168}</a>                    
                </div>
            </div>
            <div id="entries-content" class="grid"> 
            	{section name=i loop=$posts}
                                    
                <ul id="grid-col-{if $smarty.section.i.iteration GT 3}{math equation="ceil(x / 3)" x=$smarty.section.i.iteration}{else}1{/if}" class="col-{if $smarty.section.i.iteration GT 3}{math equation="x % 3" x=$smarty.section.i.iteration assign=remin}{if $remin eq "0"}3{else}{$remin}{/if}{else}{$smarty.section.i.iteration}{/if}">
                
                    <li style="height:213px">
                        <a href="{$baseurl}/gag/{$posts[i].PID}" class="jump_stop">
                            <div style="" class="thimage">
                            	{if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
								<img src="{$purl}/t/{$posts[i].pic}" alt="{$baseurl}/images/nsfw_thumb.jpg" />
                                {else}
                                <img src="{$purl}/t/s-{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" />
                                {/if}
							</div>
                        </a>
                        <p>
                            <span class="comment">
                                <fb:comments-count href="{$baseurl}/gag/{$posts[i].PID}"></fb:comments-count>
                            </span>
                            {insert name=get_fav_count value=var assign=fcount PID=$posts[i].PID}
                            <span id="love_count_{$posts[i].PID}" class="loved" votes="{$fcount}" score="0">{$fcount}</span>
                        </p>
                        <h1>{$posts[i].story|stripslashes}</h1>
                        <h4></h4>
                    </li>
                    
                </ul>
                                      
                {/section}   
            </div>	
            <div id="paging-buttons" class="paging-buttons">
            	{if $tpp ne ""}
                <a href="{$baseurl}/trending?show=thumbs&page={$tpp}" class="previous">&laquo; {$lang166}</a>
                {else}
                <a href="#" onclick="return false;" class="previous disabled">&laquo; {$lang166}</a>
                {/if}
                {if $tnp ne ""}
                <a href="{$baseurl}/trending?show=thumbs&page={$tnp}" class="older">{$lang167} &raquo;</a>
                {else}
                <a href="#" onclick="return false;" class="older disabled">{$lang167} &raquo;</a>
                {/if}
            </div>
        </div>
    </div>
</div>
{include file='vote_js.tpl'}
{include file='right.tpl'}
{literal}
<script type="text/javascript">
var adloca=$('#moving-boxes').offset().top; 
 $(window).scroll(function () { 
    var curloca=$(window).scrollTop();
    if(curloca>adloca){
        $('#moving-boxes').css('position','fixed');
        $('#moving-boxes').css('top','55px');
        $('#moving-boxes').css('z-index','200');
    };
    if(curloca <= adloca){
        $('#moving-boxes').css('position','static');
        $('#moving-boxes').css('top','!important');
        $('#moving-boxes').css('z-index','!important');
    };
    });
</script> 
{/literal}   
<div id="footer" class="">