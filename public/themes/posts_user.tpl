					<li class=" gag-link" data-url="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" data-text="{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}" gagId="{$posts[i].PID}" itemType="list" id="entry-{$posts[i].PID}">
                        <div class="content">
                            <div class="img-wrap">
                                {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
                                	<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$asseturl}/images/nsfw.jpg" alt="{$posts[i].story|stripslashes}" /></a>
                                {else}
                                	{if $posts[i].pic ne ""}
                                	<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$purl[i]}/t/{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" /></a>
                                    {else}
                                        {if $posts[i].youtube_key != ""}
                                        <center>
										<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}">
										<img style="max-width:460px" src="http://img.youtube.com/vi/{$posts[i].youtube_key}/0.jpg" alt="{$posts[i].story|stripslashes}" />
										<img style="position:relative;top:-200px;" src="{$asseturl}/images/play.png"/></a>
                                        </center>
                                        {elseif $posts[i].contents != ""}{$posts[i].contents|strip_mq_gpc}
										{else}
										<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$asseturl}/images/error.jpg" alt="{$lang264}" /></a>
										{/if}
                                    {/if}
                                {/if}
                            </div>
                            {if $displaywm eq "0" AND $posts[i].pic ne ""}
							{/if}
                        </div>
                        <div style="position:relative;width:220px;float:right">
                            <div class="info b9gcs-stop" id="action-{$posts[i].PID}" >
                               <h1><a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" class="jump_focus">{if $truncate eq "1"}{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}{else}{$posts[i].story|stripslashes|smiley} <span class="title2">{$p.story2|stripslashes|smiley}</span>{/if}</a></h1>
                                <h4>
                                    <a href="{$baseurl}/user/{$posts[i].USERID|stripslashes}">{$posts[i].username|stripslashes}</a>
                                    <p>{insert name=get_time_to_days_ago time=$posts[i].time_added}</p>
                                </h4>
                                <p>
                                    <span class="comment">
                                    <fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"></fb:comments-count>
                                    </span>
                                    <span id="love_count_{$posts[i].PID}" class="loved" votes="{$posts[i].favclicks}" score="0">{$posts[i].favclicks}</span>
									<span class="viewed">{$posts[i].postviewed}</span>
                                </p>
								<ul class="actions">
                                	{if $smarty.session.USERID ne ""}
                                        {insert name=get_fav_status value=var assign=isfav PID=$posts[i].PID}
                                        {if $isfav eq "1"}
                                        <li>
                                            <a id="vote-down-btn-{$posts[i].PID}" class="unlove badge-vote-down "  entryId="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang180}</span></a>
                                        </li>
                                        <li>
                                            <a class="vote love loved" id="post_love_{$posts[i].PID}" rel="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang144}</span></a>
                                        </li>
                                        {else}
                                        	{insert name=get_unfav_status value=var assign=isunfav PID=$posts[i].PID}
                                        	{if $isunfav eq "1"}
                                            <li>
                                                <a id="vote-down-btn-{$posts[i].PID}" class="unlove badge-vote-down unloved "  entryId="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang180}</span></a>
                                            </li>
                                            <li>
                                                <a class="vote love " id="post_love_{$posts[i].PID}" rel="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang144}</span></a>
                                            </li>
                                            {else}
                                            <li>
                                                <a id="vote-down-btn-{$posts[i].PID}" class="unlove badge-vote-down "  entryId="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang180}</span></a>
                                            </li>
                                        	<li>
                                                <a class="vote love " id="post_love_{$posts[i].PID}" rel="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang144}</span></a>
                                            </li>
                                            {/if}
                                    	{/if}
                                    {else}
                                    <li>
                                    	<a id="vote-down-btn-{$posts[i].PID}" class="unlove badge-vote-down " entryId="{$posts[i].PID}" href="{$baseurl}/login"><span>{$lang180}</span></a>
                                    </li>
                                    <li>
                                    	<a class="vote love " id="post_love_{$posts[i].PID}" rel="{$posts[i].PID}" href="{$baseurl}/login"><span>{$lang144}</span></a>
                                    </li>
                                    {/if}
                                </ul>
                                <div class="sharing-box ">
                                    <hr class="arrow" />
                                    <ul class="sharing">
                                        <li class="facebook" id="share1-{$posts[i].PID}">
                                            <div class="fb-like" data-href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}?ref=fb" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
                                        </li>
                                    </ul>
                                </div>
                                {if $fixenabled eq "1"}<a class="fix" href="{$baseurl}/fix/{$posts[i].PID}">{$lang142}</a>{/if}
                            </div>
                        </div>
                    </li>