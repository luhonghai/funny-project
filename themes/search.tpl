<div id="main">
    <div id="content-holder">
        <div class="search-bar">
            <form id="searchbar" action="{$baseurl}/search" method="get">
                <div class="field search">
                	<input id="page_search" type="text" name="query" class="search search_input" value="{$query}" placeholder="{$lang190}" />
                </div>
            </form>
        </div>
        <div id="content">
            <div id="view-controller">
                <div id="view-info">
                	<p>{$total} {$lang191}</p>
                </div>
            </div>
            <div id="entries-content" class="grid">
            	{section name=i loop=$posts}
                <ul id="grid-col-1" class="col-{if $smarty.section.i.iteration GT 9}{math equation="x - 9" x=$smarty.section.i.iteration}{elseif $smarty.section.i.iteration GT 6}{math equation="x - 6" x=$smarty.section.i.iteration}{elseif $smarty.section.i.iteration GT 3}{math equation="x - 3" x=$smarty.section.i.iteration}{else}{$smarty.section.i.iteration}{/if}">
                   <li class=" ">
                        <a href="{$baseurl}{$postfolder}{$posts[i].PID}/" class="jump_stop">
                            <div style="" class="thimage">
                            	{if $posts[i].youtube_key ne ""}
                                <img src="http://img.youtube.com/vi/{$posts[i].youtube_key}/0.jpg" alt="{$posts[i].story|stripslashes}" style="max-width:215px" />
                                {elseif $posts[i].fod_key ne ""}
                                <img src="http://www.funnyordie.com/media/{$posts[i].fod_key}/thumbnail/large.jpg" alt="{$posts[i].story|stripslashes}" style="max-width:215px" />
                                {elseif $posts[i].vfy_key != ""}
								 <img src="{$baseurl}/images/9gag-logo-large.png" alt="{$posts[i].story|stripslashes}" />
								{elseif $posts[i].vmo_key != ""}
								<img src="{$baseurl}/images/9gag-logo-large.png" alt="{$posts[i].story|stripslashes}" />
								{elseif $posts[i].txt != ""}
								 <font size="3" color="black"><br><br><br>{$posts[i].story|stripslashes}</font>
								{else}
                            	{if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}<img src="{$baseurl}/images/nsfw_thumb.jpg" alt="{$posts[i].story|stripslashes}" />{else}<img src="{$purl}/t/s-{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" />{/if}
                                {/if}
                            </div>
                        </a>
                    	<h1>{$posts[i].story|stripslashes|truncate:20:"...":true}</h1>
                        <h4><a href="{$baseurl}/user/{$posts[i].username|stripslashes}">{$posts[i].username|stripslashes|truncate:20:"...":true}</a></h4>
                    </li>
                </ul>
                {/section}            
            </div>
            <div id="paging-buttons" class="paging-buttons">
            	{if $tpp ne ""}
                <a href="{$baseurl}/search?page={$tpp}&query={$query}" class="previous">&laquo; {$lang166}</a>
                {else}
                <a href="#" onclick="return false;" class="previous disabled">&laquo; {$lang166}</a>
                {/if}
                {if $tnp ne ""}
                <a href="{$baseurl}/search?page={$tnp}&query={$query}" class="older">{$lang167} &raquo;</a>
                {else}
                <a href="#" onclick="return false;" class="older disabled">{$lang167} &raquo;</a>
                {/if}
            </div>
        </div>
    </div>
</div>
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