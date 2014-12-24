{if $topgags GT 0}
<div class="feature-bar">
<ul>
{section name=f loop=$topgags}
        <a href="{$baseurl}{$postfolder}{$topgags[f].PID}/{if $SEO eq "1"}{$topgags[f].story|makeseo}.html{/if}">
        <img src="{$purl}/t/s-{$topgags[f].pic}" alt="{$topgags[f].story|stripslashes}">
        <span class="title">{$topgags[f].story}</span>
        </a>
{/section}
</ul>
</div>
{/if}
<div id="main">
    <div id="content-holder">
        <div class="main-filter ">
			<div id="use-tips">
                <div id="view-info" class="list-tips">
                    <div id="shortcut-event-label" style="display:none">{$lang171}</div>
                    <span><b>{$lang169}</b>: {$lang170}</span>
                    <a href="#keyboard" class="keyboard_link">{$lang168}</a>
                </div>
            </div>
			<a id="changeview" class="view_list" href="{$baseurl}/channels/{$cname2}/?view=list" title="Toggle Views">{$lang259}</a>
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
            <div id="entries-content" class="grid">
				{section name=i loop=$posts}
                    <ul id="grid-col-{if $smarty.section.i.iteration GT 3}{math equation="ceil(x / 3)" x=$smarty.section.i.iteration}{else}1{/if}" class="col-{if $smarty.section.i.iteration GT 3}{math equation="x % 3" x=$smarty.section.i.iteration assign=remin}{if $remin eq "0"}3{else}{$remin}{/if}{else}{$smarty.section.i.iteration}{/if}">
                        <li class=" ">
                            <a href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" class="jump_stop">
                                <div style="" class="thimage">
                                    {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
										<img src="{$asseturl}/images/nsfw_thumb.jpg?v={$asset_version}" alt="{$posts[i].story|stripslashes}" />
									{else}
										{if $posts[i].pic ne ""}
											<img src="{$purl}/t/s-{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" />
										{elseif $posts[i].youtube_key != ""}
											<img src="http://img.youtube.com/vi/{$posts[i].youtube_key}/0.jpg" alt="{$posts[i].story|stripslashes}" style="max-width:215px" />
										{elseif $posts[i].contents != ""}
											<img src="{$asseturl}/images/s-text.png?v={$asset_version}" alt="{$posts[i].story|stripslashes}" />
										{else}
											<img src="{$asseturl}/images/s-error.jpg?v={$asset_version}" alt="{$lang264}" />
										{/if}
									{/if}
                                </div>
                            </a>
                            <p>
                                <span class="comment">
                                    <fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts.story|makeseo}.html{/if}"></fb:comments-count>
                                </span>
                                <span id="love_count_{$posts[i].PID}" class="loved" votes="{$posts[i].favclicks}" score="0">{$posts[i].favclicks}</span>
								<span class="viewed">{$posts[i].postviewed}</span>
                            </p>
                            <h1>{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'} - {$posts[i].username|stripslashes|truncate:20:"...":true}</h1>
                        </li>
                    </ul>
                {/section}			
			</div>
            <div id="lastPostsLoader"></div>                

            <div id="paging-buttons" class="paging-buttons">
            	{if $tpp ne ""}
                <a href="{$baseurl}/channels/{$cname2}/?page={$tpp}" class="previous">&laquo; {$lang166}</a>
                {else}
                <a href="#" onclick="return false;" class="previous disabled">&laquo; {$lang166}</a>
                {/if}
                {if $tnp ne ""}
                <a href="{$baseurl}/channels/{$cname2}/?page={$tnp}" class="older">{$lang167} &raquo;</a>
                {else}
                <a href="#" onclick="return false;" class="older disabled">{$lang167} &raquo;</a>
                {/if}
            </div>
        </div>
    </div>
</div>
{include file='right.tpl'}
<div id="footer" class="">