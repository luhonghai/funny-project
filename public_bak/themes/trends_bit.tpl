                    <li class=" gag-link" data-url="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" data-text="{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}" gagId="{$posts[i].PID}" itemType="list" id="entry-{$posts[i].PID}">
                        <div class="content">
                            <div class="img-wrap">
                                {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
                                	<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$asseturl}/images/nsfw.jpg" alt="{$posts[i].story|stripslashes}" /></a>
                                {else}
                                	{if $posts[i].pic ne ""}
                                	<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$purl}/t/{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" /></a>
                                    {else}
                                        {if $posts[i].youtube_key != ""}
                                        <center>
                                        <a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}">
										<img style="max-width:460px" src="http://img.youtube.com/vi/{$posts[i].youtube_key}/0.jpg" alt="{$posts[i].story|stripslashes}" />
										<img style="position:relative;top:-200px;" src="{$asseturl}/images/play.png?v={$asset_version}" /></a>
                                        </center>
                                        {elseif $posts[i].contents != ""}{$posts[i].contents|strip_mq_gpc}
										{else}
										<a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"><img src="{$asseturl}/images/error.jpg?v={$asset_version}" alt="{$lang264}" /></a>
                                        {/if}
                                    {/if}
                                {/if}
                            </div>
                            {if $displaywm eq "0" AND $posts[i].pic ne ""}							
							{/if}
                        </div>
                        <div style="position:relative;width:220px;float:right">
                             <div class="info b9gcs-stop" id="action-{$posts[i].PID}">
                                <h1><a target="_blank" href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" class="jump_focus">{if $truncate eq "1"}{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}{else}{$posts[i].story|stripslashes|smiley} <span class="title2">{$p.story2|stripslashes|smiley}</span>{/if}</a></h1>
								<div class="userinfo">
									{insert name=get_user_likes assign=userlikes USERID=$posts[i].USERID}
									{insert name=get_member_profilepicture assign=profilepicture value=var USERID=$posts[i].USERID url=$membersprofilepicurl}
                                                                                  <p>{insert name=get_time_to_days_ago time=$posts[i].time_added}</p>									<div>
										<a href="{$baseurl}/user/{$posts[i].username|stripslashes}"><img src="{$membersprofilepicurl}/{$profilepicture}?{$smarty.now}" alt="{$p.username|stripslashes}"></a>
										<div class="uinfo">
											<a href="{$baseurl}/user/{$posts[i].username|stripslashes}">{$posts[i].username|fullname}</a>
											{insert name=get_user_level assign=alvl value=var POINT=$userlikes}
											<div class="user-bar">
											<div class="bar-blue" style="width:{$alvl[3]}%;"></div>
											<div class="bar-c">{$alvl[0]} / {$alvl[1]}</div>
											<div class="level">Lv: {$alvl[2]}</div>
											</div>
								
										</div>
										<div class="clear">  </div>

</div>
								</div>	
                                </h4>                                
                                <p>
                                    <span class="comment">
                                    	<fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"></fb:comments-count>
                                    </span>
                                    {insert name=get_fav_count value=var assign=fcount PID=$posts[i].PID}
                                    <span id="love_count_{$posts[i].PID}" class="loved" votes="{$posts[i].favclicks}" score="0">{$posts[i].favclicks}</span>
									<span class="viewed">{$posts[i].postviewed}</span>
                                </p>
                                <div class="sharing-box ">
                                    <hr class="arrow" />
                                    <ul class="sharing ">
                                        <li class="facebook" id="share1-{$posts[i].PID}">
                                            <div class="fb-like" data-href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}?ref=fb" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
                                        </li>
                                    </ul>
                                </div>

                                {if $fixenabled eq "1"}<a class="fix" href="{$baseurl}/fix/{$posts[i].PID}">{$lang142}</a>{/if}
                                <a class="report" entryId="{$posts[i].PID}" href="javascript:void(0);">{$lang146}</a>
                            </div>
                        </div>
                    </li>