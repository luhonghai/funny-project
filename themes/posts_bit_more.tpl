                    <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
                    {section name=i loop=$posts}
                    <li class=" gag-link" data-url="{$baseurl}/gag/{$posts[i].PID}" data-text="{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}" gagId="{$posts[i].PID}" itemType="list" id="entry-{$posts[i].PID}">
                        <div class="content">
                            <div class="img-wrap">
                                {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
                                	<a href="{$baseurl}/gag/{$posts[i].PID}"><img src="{$baseurl}/images/nsfw.jpg" alt="{$posts[i].story|stripslashes}" /></a>
                                {else}
                                	{if $posts[i].pic ne ""}
                                	<a href="{$baseurl}/gag/{$posts[i].PID}"><img src="{$purl}/t/{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" /></a>
                                    {else}
                                        {if $posts[i].youtube_key != ""}
                                        <center>
                                        {insert name=return_youtube2 value=a assign=youtube youtube=$posts[i].youtube_key}{$youtube}
                                        </center>
                                        {else}
                                        <center>
                                        {insert name=return_fod2 value=a assign=fod fod=$posts[i].fod_key}{$fod}
                                        </center>
                                        {/if}
                                    {/if}
                                {/if}
                            </div>
                            <div class="watermark-clear"></div>
                        </div>
                        <div style="position:relative;width:220px;float:right">
                            <div class="info scriptolution-stop" id="action-{$posts[i].PID}" >
                                <h1><a href="{$baseurl}/gag/{$posts[i].PID}" class="jump_focus">{$posts[i].story|stripslashes}</a></h1>
                                <h4>
                                    <a href="{$baseurl}/user/{$posts[i].username|stripslashes}">{$posts[i].username|stripslashes}</a>
                                    <p>{insert name=get_time_to_days_ago time=$posts[i].time_added}</p>
                                </h4>                                
                                <p>
                                    <span class="comment">
                                    <iframe frameborder="0" scrolling="no" src="{$baseurl}/fbcoms.php?id={$posts[i].PID}" width="20px" height="13"></iframe>
                                    </span>
                                    {insert name=get_fav_count value=var assign=fcount PID=$posts[i].PID}
                                    <span id="love_count_{$posts[i].PID}" class="loved" votes="{$fcount}" score="0">{$fcount}</span>
                                </p>
                                <ul class="actions"  style="">
                                    <li>
                                    	<a class="comment " href="{$baseurl}/gag/{$posts[i].PID}#comments" onclick="window.location =  '{$baseurl}/gag/{$posts[i].PID}#comments';"><span>{$lang165}</span></a>
                                    </li>
                                    <li>
                                    	{if $smarty.session.USERID ne ""}
                                        {insert name=get_fav_status value=var assign=isfav PID=$posts[i].PID}
                                        <a class="vote{$page} love {if $isfav eq "1"}loved{/if}" id="post_love_{$posts[i].PID}" rel="{$posts[i].PID}" href="javascript:void(0);"><span>{$lang144}</span></a>
                                        {else}
                                    	<a class="vote{$page} love " id="post_love_{$posts[i].PID}" rel="{$posts[i].PID}" href="{$baseurl}/login"><span>{$lang144}</span></a>
                                        {/if}
                                    </li>
                                </ul>
                                <div class="sharing-box ">
                                    <hr class="arrow" />
                                    <ul class="sharing ">
                                        <li class="facebook" id="share1-{$posts[i].PID}">
                                        	<span id="list-share-twitter-{$posts[i].PID}">
                                        	<a href="https://twitter.com/share" class="twitter-share-button" data-text="{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}" data-url="{$baseurl}/gag/{$posts[i].PID}" data-count="horizontal" data-via="">&nbsp;</a>		
                                            </span>
                                            <div style="float:right">
                                            <iframe frameborder="0" scrolling="no" src="{$baseurl}/share.php?id={$posts[i].PID}" width="80px"></iframe>                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a class="fix" href="{$baseurl}/fix/{$posts[i].PID}">{$lang142}</a>
                            </div>
                        </div>
                    </li>
                    {/section}
                    {literal}
					<script type="text/javascript">
                    $('.vote{/literal}{$page}{literal}').click(function(){
                        if( $(this).hasClass('loved')){
                            $(this).removeClass('loved');
                        likedeg(-1,$(this).attr('rel'));
                        }else{
                        likedeg(1,$(this).attr('rel'));
                        $(this).addClass('loved');
                        }
                        });
                    function likedeg(x,p){
                        jQuery.ajax({
                            type:'POST',
                            url:'{/literal}{$baseurl}{literal}'+ '/likedeg.php',
                            data:'art='+x+'&pid=' + p,
                            success:function(e){
                                $('#love_count_'+p).html(e);
                                }
                            });
                        }
                    </script>
                    {/literal}