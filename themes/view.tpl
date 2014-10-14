{if $p.nsfw eq "1" AND $smarty.session.USERID eq ""}
	<div>
        <div class="post-next-prev">
            {if $prev != ""}
            <a id="prev_post" class="prev-post" href="{$baseurl}/gag/{$prev}" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {else}
            <a id="prev_post" class="prev-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {/if}
            {if $next ne ""}
            <a id="next_post" class="next-post" href="{$baseurl}/gag/{$next}" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            {else}
            <a id="next_post" class="next-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            {/if}
        </div>
    </div>
    <div id="main" class="middle">
        <div id="content-holder">
            <div id="content-holder">
                <div id="content" class="nsfw">
                    <div class="content">
                        <img src="{$baseurl}/images/nsfw.jpg" alt="NSFW" />
                    </div>
                    <div class="info">
                        <h1>{$lang154}</h1>
                        <p>{$lang155}</p>
                        <div class="message-box alt">
                            <div class="inline-message">
                            	<p><a href="{$baseurl}/safe?m={$eurl}">{$lang156} &raquo;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer" class="middle">
{elseif $p.nsfw eq "1" AND $smarty.session.FILTER eq "1"}
	<div>
        <div class="post-next-prev">
            {if $prev != ""}
            <a id="prev_post" class="prev-post" href="{$baseurl}/gag/{$prev}" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {else}
            <a id="prev_post" class="prev-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {/if}
            {if $next ne ""}
            <a id="next_post" class="next-post" href="{$baseurl}/gag/{$next}" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            {else}
            <a id="next_post" class="next-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            {/if}
        </div>
    </div>
    <div id="main" class="middle">
        <div id="content-holder">
            <div id="content-holder">
                <div id="content" class="nsfw">
                    <div class="content">
                        <img src="{$baseurl}/images/nsfw.jpg" alt="NSFW" />
                    </div>
                    <div class="info">
                        <h1>{$lang154}</h1>
                        <p>{$lang155}</p>
                        <div class="message-box alt">
                            <div class="inline-message">
                            	<p><a href="{$baseurl}/safe?m={$eurl}">{$lang156} &raquo;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer" class="middle">
{else}
    <div id="main">
        <div id="content-holder">
            <div class="post-info-pad">
                <h1>{$p.story|stripslashes}</h1>
                <p>
                    <a href="{$baseurl}/user/{$p.username|stripslashes}">{$p.username|stripslashes}</a>
                    <span class="seperator">|</span>
                    {$p.time_added|date_format} {$p.time_added|date_format:"%I:%M %p"}
                    <span class="comment"><fb:comments-count href="{$baseurl}/gag/{$p.PID}"></fb:comments-count></span>
                    {insert name=get_fav_count value=var assign=fcount PID=$p.PID}
                    <span class="loved"><span id="love_count" votes="{$fcount}" >{$fcount}</span></span>
                    {if $owner eq "1"}
                    <span class="seperator">|</span>
                    <a href="{$baseurl}/deletepost.php?pid={$p.PID}" class="delete" onclick="return confirm('{$lang147}');">{$lang145}</a>	
                    {/if}										
                </p>
                <ul class="actions">
                	<li>{if $smarty.session.USERID ne ""}{insert name=get_fav_status value=var assign=isfav PID=$p.PID}<a id="post_view_love" rel="{$p.PID}" class="love {if $isfav eq "1"}current{/if}" href="javascript:void(0);">{$lang144}</a>{else}<a class="love" href="{$baseurl}/login">{$lang144}</a>{/if}</li>
                </ul>            
            </div>
        
            <div id="post-control-bar" class="spread-bar-wrap">
                <div class="spread-bar">
                    <div class="twitter-btn"><a href="https://twitter.com/share" class="twitter-share-button" data-text="{$p.title}" data-url="{$baseurl}/gag/{$p.PID}" data-count="horizontal" data-via="">&nbsp;</a> </div>
                    <div class="facebook-share-btn"><a class="facebook-share-button" name="fb_share" type="button_count" share_url="{$baseurl}/gag/{$p.PID}?ref=fb-share"></a> </div>
                    <div class="facebook-btn"><fb:like href="{$baseurl}/gag/{$p.PID}?ref=fb" send="false" layout="button_count" width="90px" show_faces="false" font="" label="Post"></fb:like> </div>
                    {insert name=get_short_url value=a assign=tto PID=$p.PID short=$p.short}
                    {if $short_urls eq "1"}
                    <div class="google-btn"><g:plusone size="medium" href="{$tto}"></g:plusone> </div>
                    {else}
                    <div class="google-btn"><g:plusone size="medium" href="{$baseurl}/gag/{$p.PID}"></g:plusone> </div>
                    {/if}
                    <div class="stumbleupon-btn"><su:badge layout="1" location="{$baseurl}/gag/{$p.PID}?ref=stumbleupon"></su:badge> {literal}<script type="text/javascript"> (function() { var li = document.createElement('script'); li.type = 'text/javascript'; li.async = true;  li.src = 'https://platform.stumbleupon.com/1/widgets.js';  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(li, s);  })(); </script>{/literal}</div>
                    {if $p.pic ne ""}
                    <div class="stumbleupon-btn" style="padding-left:10px;"><a href="http://pinterest.com/pin/create/button/?url={$baseurl}/gag/{$p.PID}&media={$purl}/t/l-{$p.pic}&description={$p.story|stripslashes}" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>
                    {/if}
                </div>
                <div class="post-next-prev">
                	{if $prev != ""}
                	<a id="prev_post" class="prev-post" href="{$baseurl}/gag/{$prev}" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
                    {else}
                    <a id="prev_post" class="prev-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
                    {/if}
                    {if $next ne ""}
                	<a id="next_post" class="next-post" href="{$baseurl}/gag/{$next}" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
                    {else}
                    <a id="next_post" class="next-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
                    {/if}
                </div>
            </div>
            <div id="content">
                <div class="post-container">
                    <div class="img-wrap">
                        {if $p.pic ne ""}
                        <a href="{$baseurl}/random"><img src="{$purl}/t/l-{$p.pic}" alt="{$p.story|stripslashes}"/></a>
                        {else}
                        	{if $p.youtube_key != ""}
                            <center>
                            <iframe title="scriptolution video player" width="540" height="445" src="http://www.youtube.com/embed/{$p.youtube_key}?wmode=opaque&hl=en_US&fs=1" frameborder="0" allowfullscreen></iframe>
                            </center>
                            {else}
                            <center>
                            {insert name=return_fod value=a assign=fod fod=$p.fod_key}{$fod}
                            </center>
                            {/if}
                        {/if}
                    </div>
                </div>            
                <div class="comment-section">
                    <h3 class="title" id="comments">{$lang143}</h3>
                    <span class="report-and-source">
                    <p>
                        <a class="fix" href="{$baseurl}/fix/{$p.PID}">{$lang142}</a>
                        {if $owner ne "1"}<span id="report-item-separator">|</span><a id="report-item-link" class="report report-item" entryId="{$p.PID}" href="javascript:void(0);">{$lang146}</a>{/if}
                        <span id="report-item-separator">|</span>{if $p.source eq ""}{$lang141}{else}{$p.source|stripslashes}{/if}
                    </p>
                    </span>
                    <div style="margin-left:10px">
                    	<fb:comments href="{$baseurl}/gag/{$p.PID}" num_posts="10" width="700"></fb:comments>				
                    </div>
                    <div id="fb-root"></div>                
                </div>
            	<br/>
            
                <div class="post-may-like">
                    <div id="entries-content" class="grid">  
                    	{section name=i loop=$r}                  
                        <ul id="grid-col-{if $smarty.section.i.iteration GT 3}2{else}1{/if}" class="col-{if $smarty.section.i.iteration GT 3}{math equation="x - 3" x=$smarty.section.i.iteration}{else}{$smarty.section.i.iteration}{/if}">
                            <li class=" ">
                                <a href="{$baseurl}/gag/{$r[i].PID}" class="jump_stop">
                                    <div style="" class="thimage">
                                        {if $r[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}<img src="{$baseurl}/images/nsfw_thumb.jpg" alt="{$r[i].story|stripslashes}" />{else}<img src="{$purl}/t/s-{$r[i].pic}" alt="{$r[i].story|stripslashes}" />{/if}
                                    </div>
                                </a>
                                <h1>{$r[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}</h1>
                                <h4><a href="{$baseurl}/user/{$r[i].username|stripslashes}">{$r[i].username|stripslashes|mb_truncate:20:"...":'UTF-8'}</a></h4>
                            </li>
                        </ul>
                        {/section}
                    </div>
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
    <script type="text/javascript">
    $('#post_view_love').click(function(){
        if( $('#post_view_love').hasClass('current')){
            $('#post_view_love').removeClass('current');
        likedeg(-1);
        }else{
            likedeg(1);
        $('#post_view_love').addClass('current');
        }
        });
    function likedeg(x){
        jQuery.ajax({
            type:'POST',
            url:'{/literal}{$baseurl}{literal}'+ '/likedeg.php',
            data:'art='+x+'&pid=' +  '{/literal}{$p.PID}{literal}' ,
            success:function(e){
                $('#love_count').html(e);
                }
            });
        }
    </script>
    <script type="text/javascript">
         var barloc=$('#post-control-bar').offset().top; 
         $(window).scroll(function () {
              var curloc=$(window).scrollTop();
              if(curloc>barloc){
        $('#post-control-bar').addClass('topbarfixed');
              }else{
                $('#post-control-bar').removeClass('topbarfixed'); 
                 }
         });
    </script>
    {/literal}
</div>
<div id="footer" class="">
{/if}