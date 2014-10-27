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
            <ul class="content-type">
                <li> <a class="" href="{$baseurl}/hot"><strong>{$lang172}</strong></a></li>
                {if $trendingenabled eq "1"}<li> <a class="current" href="{$baseurl}/trending"><strong>{$lang173}</strong></a></li>{/if}
                <li> <a class="" href="{$baseurl}/vote"><strong>{$lang174}</strong></a></li>                
            </ul>
			<a id="changeview" class="view_list" href="{$baseurl}/trending?view=list" title="Toggle Views">{$lang259}</a>			
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
            <div id="use-tips" style="display:none;">
                <div id="view-info" class="list-tips">
                    <div id="shortcut-event-label" style="display:none">{$lang171}</div>
                    <span><b>{$lang169}</b>: {$lang170}</span>
                    <a href="#keyboard" class="keyboard_link">{$lang168}</a>                    
                </div>
            </div>        
                   <div id="entries-content" class="grid"> 
					{section name=i loop=$posts}                  
					<ul id="grid-col-{if $smarty.section.i.iteration GT 3}{math equation="ceil(x / 3)" x=$smarty.section.i.iteration}{else}1{/if}" class="col-{if $smarty.section.i.iteration GT 3}{math equation="x % 3" x=$smarty.section.i.iteration assign=remin}{if $remin eq "0"}3{else}{$remin}{/if}{else}{$smarty.section.i.iteration}{/if}">

						<li class=" ">
                                <a href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" class="jump_stop">
                                    <div style="" class="thimage">
                                        {if $posts[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}<img src="{$baseurl}/images/nsfw_thumb.jpg" alt="{$posts[i].story|stripslashes}" />{else}
										
{if $posts[i].pic ne ""}
<img src="{$purl}/t/s-{$posts[i].pic}" alt="{$posts[i].story|stripslashes}" />
{elseif $posts[i].youtube_key != ""}
<img src="http://img.youtube.com/vi/{$posts[i].youtube_key}/0.jpg" alt="{$posts[i].story|stripslashes}" style="max-width:215px" />
{elseif $posts[i].fod_key != ""}
<img src="http://www.funnyordie.com/media/{$posts[i].fod_key}/thumbnail/large.jpg" alt="{$posts[i].story|stripslashes}" style="max-width:215px" />
{elseif $posts[i].vfy_key != ""}
<center>
{insert name=return_vfy value=a assign=vfy vfy=$posts[i].vfy_key}{$vfy}
</center>
{elseif $posts[i].vmo_key != ""}
<center>
{insert name=return_vmo value=a assign=vmo vmo=$posts[i].vmo_key}{$vmo}
</center>
{else}
<center>
{$lang264}
</center>
{/if}	
										{/if}
                                    </div>
                                </a>
								<p>
                                    <span class="comment">
                                    	<fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"></fb:comments-count>
                                    </span>
                                    <span id="love_count_{$posts[i].PID}" class="loved" votes="{$posts[i].favclicks}" score="0">{$posts[i].favclicks}</span>
                                </p>
                                <h1>{$posts[i].story|stripslashes|truncate:20:"...":true} - {$posts[i].username|stripslashes|truncate:20:"...":true}</h1>
                                <h4></h4>
                            </li>
                        </ul>
                    {/section}			
				</div>
            <div id="lastPostsLoader"></div>                
			{literal}
                <script type="text/javascript">
				$(document).ready(function(){
	$(window).scroll(function(){
	if (document.documentElement.scrollTop)
	{ var  curloc = document.documentElement.scrollTop; }
	else
	{ var curloc=$(window).scrollTop(); }
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var  scrolltrigger = 0.95;
				 
	if  ((wintop/(docheight-winheight)) > scrolltrigger) {
	 lastAddedLiveFunc();
	 tpage = tpage+1;
	};
	if(curloc>$(window).height()){$('#backtotop').slideDown();}else{$('#backtotop').slideUp();};
});
});
</script>
				{/literal}
            <div id="paging-buttons" class="paging-buttons">
            	{if $tpp ne ""}
                <a href="{$baseurl}/trending?page={$tpp}" class="previous">&laquo; {$lang166}</a>
                {else}
                <a href="#" onclick="return false;" class="previous disabled">&laquo; {$lang166}</a>
                {/if}
                {if $tnp ne ""}
                <a href="{$baseurl}/trending?page={$tnp}" class="older">{$lang167} &raquo;</a>
                {else}
                <a href="#" onclick="return false;" class="older disabled">{$lang167} &raquo;</a>
                {/if}
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
        $('#moving-boxes').css('z-index','0');
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