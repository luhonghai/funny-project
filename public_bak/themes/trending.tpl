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
			{if $thumbs eq "1"}
			<a id="changeview" class="view_thumbs" href="{$baseurl}/trending?view=thumbs" title="Toggle Views">{$lang258}</a>			
			{/if}
            {if $safemode eq "1"}
			{if $smarty.session.USERID ne ""}
                {if $smarty.session.FILTER eq "1"}
                <a class="safe-mode-switcher on" href="{$baseurl}/safe?m={$eurl}">&nbsp;</a>
                {else}
                <a class="safe-mode-switcher off" href="{$baseurl}/safe?m={$eurl}&o=1">&nbsp;</a>
                {/if}
            {else}
            	<a class="safe-mode-switcher on" href="{$baseurl}/login">&nbsp;</a>
            {/if}
			{/if}
        </div>
        <div id="content" listPage="hot">
           <div id="entries-content" class="list">
                <ul id="entries-content-ul" class="col-1">
                    {section name=i loop=$posts}
                    {include file="trends_bit.tpl"}
                    {/section}                    
                </ul>
            </div>
            <div id="lastPostsLoader"></div>                

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
<div id="footer" class="">