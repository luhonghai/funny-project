{if $p.nsfw eq "1" AND $smarty.session.FILTER eq "1"}
	<div>
        <div class="post-next-prev">
            {if $prev != ""}
            <a id="prev_post" class="prev-post" href="{$baseurl}{$postfolder}{$prev}/{$prevstory|makeseo}.html" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {else}
            <a id="prev_post" class="prev-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {/if}
            {if $next ne ""}
            <a id="next_post" class="next-post" href="{$baseurl}{$postfolder}{$next}/{$nextstory|makeseo}.html" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
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
{elseif $p.nsfw eq "1" AND $smarty.session.USERID eq ""}
	<div>
        <div class="post-next-prev">
            {if $prev != ""}
            <a id="prev_post" class="prev-post" href="{$baseurl}{$postfolder}{$prev}/{$prevstory|makeseo}.html" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {else}
            <a id="prev_post" class="prev-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            {/if}
            {if $next ne ""}
            <a id="next_post" class="next-post" href="{$baseurl}{$postfolder}{$next}/{$nextstory|makeseo}.html" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
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
					{if $cname ne "" AND $channels eq "1"}
                    <span class="seperator">|</span>
                    {$lang269} : <a href="{$baseurl}/channels/{$cname|makeseo}/">{$cname}</a>

					{/if}
                    <span class="comment"><fb:comments-count href="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}"></fb:comments-count></span>
                    <span class="loved"><span id="love_count" votes="{$p.favclicks}" >{$p.favclicks}</span></span>
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
                    <div class="twitter-btn"><a href="https://twitter.com/share" class="twitter-share-button" data-text="{$p.story}" data-url="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}" data-count="horizontal" data-via="">&nbsp;</a> </div>
                    <div class="facebook-share-btn"><a class="facebook-share-button" name="fb_share" type="button_count" share_url="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}?ref=fb-share"></a> </div>
                    <div class="facebook-btn"><fb:like href="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}?ref=fb" send="false" layout="button_count" width="90px" show_faces="false" font="" label="Post"></fb:like> </div>
                    {insert name=get_short_url value=a assign=tto PID=$p.PID short=$p.short}
                    {if $short_urls eq "1"}
                    <div class="google-btn"><g:plusone size="medium" href="{$tto}"></g:plusone> </div>
                    {else}
                    <div class="google-btn"><g:plusone size="medium" href="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}"></g:plusone> </div>
                    {/if}
                    <div class="email-btn"><a class="email-button" href="mailto:?subject=Check%20out%20%22{$p.story|stripslashes}%22&amp;body=This%20is%20funny%2C%20You%20must%20check%20it%20out%20%3AD%0A{$p.story|stripslashes}%0A{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}"  target="_blank">Email</a></div>
					<div class="stumbleupon-btn"><su:badge layout="1" location="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}?ref=stumbleupon"></su:badge> {literal}<script type="text/javascript"> (function() { var li = document.createElement('script'); li.type = 'text/javascript'; li.async = true;  li.src = 'https://platform.stumbleupon.com/1/widgets.js';  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(li, s);  })(); </script>{/literal}</div>
					<div class="pinterest-btn"><a href="http://pinterest.com/pin/create/button/?url={$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}&media={$purl}/t/l-{$p.pic}" class="pin-it-button" count-layout="horizontal">Pin It</a></div>
                </div>
                <div class="post-next-prev">
                	{if $prev != ""}
                	<a id="prev_post" class="prev-post" href="{$baseurl}{$postfolder}{$prev}/{$prevstory|makeseo}.html" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
                    {else}
                    <a id="prev_post" class="prev-post" href="{$baseurl}/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
                    {/if}
                    {if $next ne ""}
                	<a id="next_post" class="next-post" href="{$baseurl}{$postfolder}{$next}/{$nextstory|makeseo}.html" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
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
                            {insert name=return_youtube value=a assign=youtube youtube=$p.youtube_key}{$youtube}
                            </center>
                            {elseif $p.fod_key != ""}
                            <center>
                            {insert name=return_fod value=a assign=fod fod=$p.fod_key}{$fod}
                            </center>
							{elseif $p.vfy_key != ""}
                            <center>
                            {insert name=return_vfy value=a assign=vfy vfy=$p.vfy_key}{$vfy}
                            </center>
							{elseif $p.vmo_key != ""}
                            <center>
                            {insert name=return_vmo value=a assign=vmo vmo=$p.vmo_key}{$vmo}
                            </center>
							{else}
							<center>
							{$lang143}
							</center>
                            {/if}
                        {/if}
                    </div>
                </div>            
				{if $displaywm eq "0" AND $p.pic ne ""}
				<div class="watermark-clear"></div>
				{/if}
                <div class="comment-section" {if $displaywm eq "0" AND $p.pic ne ""}style="margin-top:-70px;"{/if}>
                    <h3 class="title" id="comments">{$lang143}</h3>
                    <span class="report-and-source">
                    <p>
                        {if $fixenabled eq "1"}<a class="fix" href="{$baseurl}/fix/{$p.PID}">{$lang142}</a>{/if}
                        {if $owner ne "1"}<span id="report-item-separator">|</span><a id="report-item-link" class="report report-item" entryId="{$p.PID}" href="javascript:void(0);">{$lang146}</a>{/if}
                        <span id="report-item-separator">|</span>{if $p.source eq ""}{$lang141}{else}{$p.source|stripslashes}{/if}
                    </p>
                    </span>
                    <div style="margin-left:10px">
                    	<fb:comments href="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}" num_posts="10" width="700"></fb:comments>				
                    </div>
                    <div id="fb-root"></div>                
                </div>
            	<br/>
            {if $recommended eq "1"}
                <div class="post-may-like">
                    <div id="entries-content" class="grid">  
                    	{section name=i loop=$r}                  
                        <ul id="grid-col-{if $smarty.section.i.iteration GT 3}2{else}1{/if}" class="col-{if $smarty.section.i.iteration GT 3}{math equation="x - 3" x=$smarty.section.i.iteration}{else}{$smarty.section.i.iteration}{/if}">
                            <li class=" ">
                                <a href="{$baseurl}{$postfolder}{$r[i].PID}/{$r[i].story|makeseo}.html" class="jump_stop">
                                    <div style="" class="thimage">
                                        {if $r[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}<img src="{$baseurl}/images/nsfw_thumb.jpg" alt="{$r[i].story|stripslashes}" />{else}<img src="{$purl}/t/s-{$r[i].pic}" alt="{$r[i].story|stripslashes}" />{/if}
                                    </div>
                                </a>
                                <h1>{if $truncate eq "1"}{$r[i].story|stripslashes|truncate:20:"...":true}{else}{$r[i].story|stripslashes}{/if}</h1>
                                <h4><a href="{$baseurl}/user/{$r[i].username|stripslashes}">{$r[i].username|stripslashes|truncate:20:"...":true}</a></h4>
                            </li>
                        </ul>
                        {/section}
                    </div>
                </div>
			{/if}	
            </div>
        </div>
    </div>
    	
		
<div class="side-bar">
    {include file='right2.tpl'}

	{if $boxindexmax GT 0}
<div id="jsid-buzz-block" class="popular-block" data-boxIndex="0" data-boxIndexMax="{$boxindexmax}" data-boxSize="3">
	<h3>
        {$lang277}
		<span style="float: right; color: #999; font-size: 13px;">
        <a id="jsid-popular-prev" class="badge-buzz-more" data-change="-1" href="javascript:void(0);" style="color:grey;cursor:default;">&laquo; Prev</a> · 
        <a id="jsid-popular-next" class="badge-buzz-more" data-change="1" href="javascript:void(0);">Next &raquo;</a>
        </span>
            </h3>
	<ol>
		{section name=i loop=$popular}

	<li class="badge-buzz-post-batch badge-buzz-post-batch-{if $smarty.section.i.iteration GT "15"}5{elseif $smarty.section.i.iteration GT "12"}4{elseif $smarty.section.i.iteration GT "9"}3{elseif $smarty.section.i.iteration GT "6"}2{elseif $smarty.section.i.iteration GT "3"}1{else}0{/if}" {if $smarty.section.i.iteration GT "3"}style="display:none;"{/if} >
	<a class="wrap" href="{$baseurl}{$postfolder}{$popular[i].PID}/{if $SEO eq "1"}{$popular[i].story|makeseo}.html{/if}"  onclick="GAG.GA.track('RelatedContent', 'Clicked-Post-Sidebar', 'Position-1', 1);GAG.Track.event('clicked', 'psb.p', '0', '5665836');">
        <div class="mask">
            {if $popular[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}<img src="{$baseurl}/images/nsfw_thumb.jpg" alt="{$popular[i].story|stripslashes}" />{else}<img src="{$purl}/t/s-{$popular[i].pic}" alt="{$popular[i].story|stripslashes}" />{/if}
        </div>
		<h4>{if $truncate eq "1"}{$popular[i].story|stripslashes|truncate:20:"...":true}{else}{$popular[i].story|stripslashes}{/if}</h4>
		<p class="meta">
			<span class="comment"><fb:comments-count href="{$baseurl}{$postfolder}{$popular[i].PID}/{if $SEO eq "1"}{$popular[i].story|makeseo}.html{/if}"></fb:comments-count></span>
			<span class="loved">{$popular[i].favclicks}</span>
		</p>


	</a>
	</li>
	{/section}
	</ol>
</div>
{/if}

<div id="moving-boxes">
{if $recommended eq "2"}
<div id="post-gag-stay" class="_badge-sticky-elements" data-y="60">
    <div class="popular-block">
	<h3>{$lang276}</h3>
	<ol>
	{section name=i loop=$r}                  
	<a class="wrap" href="{$baseurl}{$postfolder}{$r[i].PID}/{if $SEO eq "1"}{$r[i].story|makeseo}.html{/if}"  onclick="GAG.GA.track('RelatedContent', 'Clicked-Post-Sidebar', 'Position-1', 1)"  >
		<li>
            {if $r[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}<img src="{$baseurl}/images/nsfw_thumb.jpg" alt="{$r[i].story|stripslashes}" />{else}<img src="{$purl}/t/s-{$r[i].pic}" alt="{$r[i].story|stripslashes}" />{/if}
			<h4>{if $truncate eq "1"}{$r[i].story|stripslashes|truncate:20:"...":true}{else}{$r[i].story|stripslashes}{/if}</h4>
			<h4><a href="{$baseurl}/user/{$r[i].username|stripslashes}">{$r[i].username|stripslashes|truncate:20:"...":true}</a></h4>
			<p class="meta"><span class="comment"><fb:comments-count href="{$baseurl}{$postfolder}{$r[i].PID}/{if $SEO eq "1"}{$r[i].story|makeseo}.html{/if}"></fb:comments-count></span><span class="loved">{$r[i].favclicks}</span>
			</p>
		</li>
	</a>
	{/section}
	</ol>
	</div>
</div>
{/if}
<div class="section-2" style="width:250px">
				<div class="wrap" style="width:250px">
				<ul class="sideinfo side-items-left" style="font-weight: bold; font-size: 11px; margin-bottom: 10px; padding-left: 5px;">
					<li><a href="http://www.best9gagclonescript.com" target="_blank"><b>Powered by best9gagclonescript.com</b></a></li><br>
					<li>{$site_name|stripslashes} &copy; 2012</li>
					<li>·<a class="badge-language-selector" href="javascript:void(0);">{if $smarty.session.language eq "ar"}العربية{elseif $smarty.session.language eq "en"}English{elseif $smarty.session.language eq "fr"}fran&#xE7;ais{elseif $smarty.session.language eq "de"}deutsch{elseif $smarty.session.language eq "es"}espa&ntilde;ol{elseif $smarty.session.language eq "pt"}portugu&#234;s{elseif $smarty.session.language eq "ru"}p??????{elseif $smarty.session.language eq "tr"}t&uuml;rk&ccedil;e{/if}</a></li>
				</ul>
				<ul class="sideinfo side-items-left" style="overflow: visible; width:400px">
					<li><a href="{$baseurl}/about">{$lang67}</a></li>
					<li>·<a href="{$baseurl}/rules">{$lang135}</a></li>
					<li>·<a href="{$baseurl}/faq">{$lang202}</a></li>
					<li>·<a href="{$baseurl}/terms_of_service">{$lang203}</a></li>
					<li>·<a href="{$baseurl}/privacy_policy">{$lang204}</a></li>
					<li>·<a href="{$baseurl}/contact">{$lang205}</a></li>
				</ul>
				</div>
			</div>
</div>
	

</div>

	{literal}
    <script type="text/javascript">
    var adloca=$('#moving-boxes').offset().top; 
     $(window).scroll(function () { 
        var curloca=$(window).scrollTop();
        if(curloca>adloca){
            $('#moving-boxes').css('position','fixed');
            $('#moving-boxes').css('top','55px');
            $('#moving-boxes').css('z-index','0');
        };
        if(curloca <= adloca){
            $('#moving-boxes').css('position','static');
            $('#moving-boxes').css('top','!important');
            $('#moving-boxes').css('z-index','!important');
        };
        });    
    </script>
	<script type="text/javascript">
    var adloca2=$('#post-control-bar').offset().top; 
     $(window).scroll(function () { 
        var curloca2=$(window).scrollTop();
        if(curloca2>adloca2){
            $('#post-control-bar').css('position','fixed');
            $('#post-control-bar').css('top','53px');
            $('#post-control-bar').css('z-index','10');
        };
        if(curloca2 <= adloca2){
            $('#post-control-bar').css('position','absolute');
            $('#post-control-bar').css('top','auto');
            $('#post-control-bar').css('z-index','!important');
        };
        });    
    </script>
    <script type="text/javascript">
    $('#post_view_love').click(function(){
        if( $('#post_view_love').hasClass('current')){
            $('#post_view_love').removeClass('current');
        likedeg({/literal}{$p.PID}{literal},-1,0);
        }else{
            likedeg({/literal}{$p.PID}{literal},1,0);
        $('#post_view_love').addClass('current');
        }
        });
    function likedeg(p,l,u){
        jQuery.ajax({
            type:'POST',
            url:'{/literal}{$baseurl}{literal}'+ '/likedeg.php',
			data:'l='+l+'&pid={/literal}{$p.PID}{literal}&u='+u,
            success:function(e){
                $('#love_count').html(e);}
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
	<script type="text/javascript">
		$('.badge-buzz-more').click(function()
			{
			var currIndex=parseInt($("#jsid-buzz-block").attr('data-boxIndex'),10);
			var maxIndex=parseInt($("#jsid-buzz-block").attr('data-boxIndexMax'),10);
			var change=parseInt($(this).attr('data-change'),10);
			var newIndex=currIndex+change;
			if(newIndex>=0&&newIndex<=maxIndex){
			$$("#jsid-buzz-block").set("data-boxIndex",newIndex);
			$$(".badge-buzz-post-batch").setStyle("display","none");
			$$(".badge-buzz-post-batch-"+newIndex).setStyle("display","");
			$$("#jsid-popular-prev").setStyle("color",newIndex===0?"grey":"#00A5F0");
			$$("#jsid-popular-prev").setStyle("cursor",newIndex===0?"default":"pointer");
			$$("#jsid-popular-next").setStyle("color",newIndex===maxIndex?"grey":"#00A5F0");
			$$("#jsid-popular-next").setStyle("cursor",newIndex===maxIndex?"default":"popular");
			}
			});
	</script>
    {/literal}
</div>
<div id="footer" class="">
{/if}