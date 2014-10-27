                    <li class=" gag-link" data-url="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" data-text="{$posts[i].story|stripslashes|truncate:20:"...":true}" gagId="{$posts[i].PID}" itemType="list" id="entry-{$posts[i].PID}">
                        <div class="content">
                            <div class="img-wrap">
                                {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
                                	<a href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$baseurl}/images/nsfw.jpg" alt="{$posts[i].story|stripslashes}" /></a>
                                {else}
                                	{if $posts[i].pic ne ""}
                                	<a href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$purl}/t/{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" /></a>
                                    {else}
                                        {if $posts[i].youtube_key != ""}
                                        <center>
                                        {insert name=return_youtube2 value=a assign=youtube youtube=$posts[i].youtube_key}{$youtube}
                                        </center>
                                        {elseif $posts[i].fod_key != ""}
										<center>
										{insert name=return_fod2 value=a assign=fod fod=$posts[i].fod_key}{$fod}
										</center>
										{elseif $posts[i].vfy_key != ""}
										<center>{insert name=return_vfy2 value=a assign=vfy vfy=$posts[i].vfy_key}{$vfy}</center>
										{elseif $posts[i].vmo_key != ""}
										<center>{insert name=return_vmo2 value=a assign=vmo vmo=$posts[i].vmo_key}{$vmo}</center>
										{else}
										<center>{$lang264}</center>
                                        {/if}
                                    {/if}
                                {/if}
                            </div>
                            {if $displaywm eq "0" AND $posts[i].pic ne ""}
							<div class="watermark-clear"></div>
							{/if}                        
                        </div>
                        <div style="position:relative;width:220px;float:right">
                            <div class="info b9gcs-stop" id="action-{$posts[i].PID}">
                                <h1><a href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" class="jump_focus">{if $truncate eq "1"}{$posts[i].story|stripslashes|truncate:20:"...":true}{else}{$posts[i].story|stripslashes}{/if}</a></h1>
                                <h4>
                                    <a href="{$baseurl}/user/{$posts[i].username|stripslashes}">{$posts[i].username|stripslashes}</a>
                                    <p>{insert name=get_time_to_days_ago time=$posts[i].time_added}</p>
                                </h4>                                
                                <p>
                                    <span class="comment">
                                    	<fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"></fb:comments-count>
                                    </span>
                                    <span id="love_count_{$posts[i].PID}" class="loved" votes="{$posts[i].favclicks}" score="0">{$posts[i].favclicks}</span>
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
                                    <ul class="sharing ">
                                        <li class="facebook" id="share1-{$posts[i].PID}">
                                        	<span id="list-share-twitter-{$posts[i].PID}">
												{if $share1 eq 1}
													<a href="https://twitter.com/share" class="twitter-share-button" data-text="{$posts[i].story|stripslashes|truncate:20:"...":true}" data-url="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" data-count="horizontal" data-via="">&nbsp;</a>		
												{elseif $share1 eq 2}
													<iframe frameborder="0" scrolling="no" src="{$baseurl}/fbsharer.php?gagid={$posts[i].PID}&gagstory={if $SEO eq "1"}{$posts[i].story|makeseo}{/if}" style="width:100px;height:20px;margin-right:-10px;padding-left:10px"></iframe>
												{else}
													<iframe frameborder="0" scrolling="no" src="{$baseurl}/fblike.php?gagid={$posts[i].PID}&gagstory={if $SEO eq "1"}{$posts[i].story|makeseo}{/if}" style="width:80px;height:20px;margin-right:10px;margin-left:10px;"></iframe>
												{/if}
                                            </span>
												{if $share2 eq 1}
													<a href="https://twitter.com/share" class="twitter-share-button" data-text="{$posts[i].story|stripslashes|truncate:20:"...":true}" data-url="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" data-count="horizontal" data-via="">&nbsp;</a>		
												{elseif $share2 eq 2}
													<iframe frameborder="0" scrolling="no" src="{$baseurl}/fbsharer.php?gagid={$posts[i].PID}&gagstory={if $SEO eq "1"}{$posts[i].story|makeseo}{/if}" style="width:90px;height:20px;margin-right:-10px;padding-left:10px"></iframe>
												{else}
													<iframe frameborder="0" scrolling="no" src="{$baseurl}/fblike.php?gagid={$posts[i].PID}&gagstory={if $SEO eq "1"}{$posts[i].story|makeseo}{/if}" style="width:80px;height:20px;margin-right:-10px;margin-left:20px;"></iframe>
												{/if}
                                        </li>
                                    </ul>
                                </div>
                                {if $fixenabled eq "1"}<a class="fix" href="{$baseurl}/fix/{$posts[i].PID}">{$lang142}</a>{/if}
                                <a class="report" entryId="{$posts[i].PID}" href="javascript:void(0);">{$lang146}</a>
                            </div>
                        </div>
                    </li>