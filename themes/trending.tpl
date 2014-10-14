<script type="text/javascript" src="{$baseurl}/js/scroll.jquery.js"></script>
<div id="main">
    <div id="content-holder">        
        <div class="main-filter ">
            <ul class="content-type">
                <li> <a class="" href="{$baseurl}/hot"><strong>{$lang172}</strong></a></li>
                <li> <a class="current" href="{$baseurl}/trending"><strong>{$lang173}</strong></a></li>
                <li> <a class="" href="{$baseurl}/vote"><strong>{$lang174}</strong></a></li>                
            </ul>
            <a id="changeview" class="view_thumbs" href="{$baseurl}/trending?show=thumbs">{$lang258}</a>
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
            <div id="entries-content" class="list">
                <ul id="entries-content-ul" class="col-1"> 
                	{section name=i loop=$posts}               
                    <li class=" gag-link" data-url="{$baseurl}/gag/{$posts[i].PID}" data-text="{$posts[i].story|stripslashes}" gagId="{$posts[i].PID}" itemType="list" id="entry-{$posts[i].PID}">
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
                            <div class="info scriptolution-stop" id="action-{$posts[i].PID}">
                                <h1><a href="{$baseurl}/gag/{$posts[i].PID}" class="jump_focus">{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}</a></h1>
                                <h4>
                                    <a href="{$baseurl}/user/{$posts[i].username|stripslashes}">{$posts[i].username|stripslashes}</a>
                                    <p>{insert name=get_time_to_days_ago time=$posts[i].time_added}</p>
                                </h4>                                
                                <p>
                                    <span class="comment">
                                    	<fb:comments-count href="{$baseurl}/gag/{$posts[i].PID}"></fb:comments-count>
                                    </span>
                                    {insert name=get_fav_count value=var assign=fcount PID=$posts[i].PID}
                                    <span id="love_count_{$posts[i].PID}" class="loved" votes="{$fcount}" score="0">{$fcount}</span>
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
                                        	<a href="https://twitter.com/share" class="twitter-share-button" data-text="{$posts[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}" data-url="{$baseurl}/gag/{$posts[i].PID}" data-count="horizontal" data-via="">&nbsp;</a>		
                                            </span>
                                        	<div style="float:right">
                                            <iframe frameborder="0" scrolling="no" src="{$baseurl}/share.php?id={$posts[i].PID}" width="80px"></iframe>                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a class="fix" href="{$baseurl}/fix/{$posts[i].PID}">{$lang142}</a>
                                <a class="report" entryId="{$posts[i].PID}" href="javascript:void(0);">{$lang146}</a>
                            </div>
                        </div>
                    </li>
                    {/section}                
                </ul>
                <div id="lastPostsLoader"><img src="{$imageurl}/loading.gif" /></div>
                {literal}
                <script type="text/javascript">
				var tpage = 1;
				$(function(){
					$('#entries-content-ul').scrollPagination({
						'contentPage': '{/literal}{$baseurl}/{literal}trendingmore.php',
						'contentData': {page:function() {return tpage}},
						'scrollTarget': $(window),
						'heightOffset': 10,
						'beforeLoad': function(){
							$('#lastPostsLoader').fadeIn();	
							tpage = tpage+1;
						},
						'afterLoad': function(elementsLoaded){
							 $('#lastPostsLoader').fadeOut();
							 var i = 0;
							 $(elementsLoaded).fadeIn();
						 	$('#backtotop').show();
						}
					});
				});
				</script>
                {/literal}
            </div>		
        </div>
        {literal}
        <script type="text/javascript">
        $('.unlove').click(function(){
        var id=$(this).attr('entryId');
        if( $(this).hasClass('unloved')){
        $(this).removeClass('unloved');
        ulikedeg($(this).attr('entryId'),0,-1);
        }else{
        $(this).addClass('unloved');
        if($('#post_love_'+id).hasClass('loved')){
        ulikedeg($(this).attr('entryId'),-1,1);	
        $('#post_love_'+id).removeClass('loved');
        }else{
        ulikedeg($(this).attr('entryId'),0,1);	
        }
        }
        });
        $('.vote').click(function(){
        var id=$(this).attr('rel');
        if( $(this).hasClass('loved')){
        $(this).removeClass('loved');
        ulikedeg($(this).attr('rel'),-1,0);
        }else{
        $(this).addClass('loved');
        if($('#vote-down-btn-'+id).hasClass('unloved')){
        $('#vote-down-btn-'+id).removeClass('unloved');
        ulikedeg($(this).attr('rel'),1,-1);
        }else{
        ulikedeg($(this).attr('rel'),1,0);
        }
        }
        });        
        function ulikedeg(p,l,u){
        jQuery.ajax({
        type:'POST',
        url:'{/literal}{$baseurl}{literal}'+ '/trendgag.php',
        data:'l='+l+'&pid=' + p +'&u='+u,
        success:function(e){
        $('#love_count_'+p).html(e);
        }
        });
        }        
        </script>
        {/literal}
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