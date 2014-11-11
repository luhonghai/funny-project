<div id="main">
    <div id="content-holder">
        <div class="search-bar">
            <form id="searchbar" action="{$baseurl}/search" method="get">
			<h1> <br />{$total} {$lang191} </h1>
        </div>
        <div id="content">
            <div id="entries-content" class="grid">
            	{section name=i loop=$posts}
                <ul id="grid-col-1" class="col-{if $smarty.section.i.iteration GT 9}{math equation="x - 9" x=$smarty.section.i.iteration}{elseif $smarty.section.i.iteration GT 6}{math equation="x - 6" x=$smarty.section.i.iteration}{elseif $smarty.section.i.iteration GT 3}{math equation="x - 3" x=$smarty.section.i.iteration}{else}{$smarty.section.i.iteration}{/if}">
                   <li class=" ">
                        <a href="{$baseurl}{$postfolder}{$posts[i].PID}/{$posts[i].story|makeseo}.html" class="jump_stop">
                            <div style="" class="thimage">
                                {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
									<img src="{$asseturl}/images/nsfw_thumb.jpg" alt="{$posts[i].story|stripslashes}" />
								{else}
									{if $posts[i].pic ne ""}
										<img src="{$purl}/t/s-{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" />
									{else}
										{if $posts[i].youtube_key != ""}
											<img src="http://img.youtube.com/vi/{$posts[i].youtube_key}/0.jpg" alt="{$posts[i].story|stripslashes}" style="max-width:215px" />
										{elseif $posts[i].contents != ""}
											<img src="{$asseturl}/images/s-text.png" alt="{$posts[i].story|stripslashes}" />
										{else}
											<img src="{$asseturl}/images/s-error.jpg" alt="Không tìm thấy dữ liệu" />
										{/if}
									{/if}
								{/if}
                            </div>
                        </a>
						<p>
                            <span class="comment"><fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{$posts[i].story|makeseo}.html"></fb:comments-count></span>
                            <span id="love_count_{$posts[i].PID}" class="loved" votes="{$posts[i].favclicks}" score="0">{$posts[i].favclicks}</span>
							<span class="viewed">{$posts[i].postviewed}</span>
                        </p>
                        <h1>{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'} - {$posts[i].username|stripslashes|truncate:20:"...":true}</h1>
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
<div id="footer" class="">