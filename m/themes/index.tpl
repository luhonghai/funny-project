	<div id="header">
        <h1 class="hooppps"> <a href='{$mobileurl}/'></a> </h1>
        <a id="nav_button" label="{$lang172}" class='nav' href='javascript:void(0);'>{$lang172}</a>
        {include file='lang.tpl'}
    </div>
	<div id="header">
       <div id="search_wrapper">
                    <form action="{$mobileurl}/search">
                        <input id="sitebar_search_header" type="text" class="search search_input" name="query" tabindex="1" placeholder="{$lang189}"/>
                    </form>
        </div>
		<a href='{$mobileurl}/submit' class='submit'>submit</a>
    </div>
    <div class="post-leaderboard-ads">
    	<center>
    	{insert name=get_advertisement AID=1}
        </center>
    </div>

    <div id="content">
    
    	{section name=i loop=$posts}
        <a href="{$mobileurl}{$postfolder}{$posts[i].PID}"> 
            <h1>{$posts[i].story|stripslashes}</h1>
		</a>
		{if $posts[i].pic ne ""}
			<a href="{$mobileurl}{$postfolder}{$posts[i].PID}"> 
				<img alt="{$posts[i].story|stripslashes}" src="{$purl}/t/{$posts[i].pic}" border="0" />
			</a>
        {else}
            {if $posts[i].youtube_key != ""}
            <center>
            {insert name=return_youtube value=a assign=youtube youtube=$posts[i].youtube_key}{$youtube}
            </center>
            {elseif $posts[i].fod_key != ""}
            <center>
            {insert name=return_fod value=a assign=fod fod=$posts[i].fod_key}{$fod}
            </center>
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
			{$lang143}
			</center>
            {/if}
        {/if}
		
        <div class='stats-container'>
            <div class='stats-tooltip-border'></div>
            <div class='stats-tooltip'></div>
            <ul class='stats'>
				{if $smarty.session.USERID ne ""}
					{if $posts[i].favorited eq "1"}
					<a href="{$mobileurl}/love.php?action=UL&PID={$posts[i].PID}&section={$section}&page={$currentpage}"><li class='loved'>{$posts[i].favclicks}</li></a>
					<a href="{$mobileurl}/love.php?action=H&PID={$posts[i].PID}&section={$section}&page={$currentpage}"><li class='unlove'>&nbsp;</li></a>
					{else}
						{if $posts[i].unfavorited eq "1"}
						<a href="{$mobileurl}/love.php?action=L&PID={$posts[i].PID}&section={$section}&page={$currentpage}"><li class='love'>{$posts[i].favclicks}</li></a>
						<a href="{$mobileurl}/love.php?action=UH&PID={$posts[i].PID}&section={$section}&page={$currentpage}"><li class='unloved'>&nbsp;</li></a>
						{else}
						<a href="{$mobileurl}/love.php?action=L&PID={$posts[i].PID}&section={$section}&page={$currentpage}"><li class='love'>{$posts[i].favclicks}</li></a>
						<a href="{$mobileurl}/love.php?action=H&PID={$posts[i].PID}&section={$section}&page={$currentpage}"><li class='unlove'>&nbsp;</li></a>
                    {/if}
				{/if}
				{else}
				<a href="{$mobileurl}/login"><li class='love'>{$posts[i].favclicks}</li></a>
				<a href="{$mobileurl}/login"><li class='unlove'>&nbsp;</li></a>
				{/if}
				<li class='fblike'><fb:like href="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}?ref=fb" send="false" layout="button_count" width="90px" height="20px" show_faces="false" font="" label="Post"></fb:like></li>
                <li class='view'>
                    <a class="badge-facebook-comments-toggler" entryId="{$posts[i].PID}" data-url="{$baseurl}{$postfolder}{$posts[i].PID}/{if $SEO eq "1"}{$posts[i].story|makeseo}.html{/if}" href="javascript:void(0);"><fb:comments-count href="{$baseurl}{$postfolder}{$posts[i].PID}/{if SEO eq "1"}{$posts[i].story|makeseo}.html{/if}"></fb:comments-count> {$lang143}</a>
                </li>
				
            </ul>
        </div>
        <div id="facebook-comments-{$posts[i].PID}" class="facebook-comments" style="display:none"></div>
       	{/section}
    
    </div>
    
    <div style="text-align:center">
        <div id="pagination" class="flip">
        	{if $tpp ne ""}
            <a id="jump_next" class='pagebuttons' href="{$mobileurl}/?page={$tpp}">&laquo; {$lang166}</a>
            {else}
        	<a href="#" onclick="return false;" class="pagebuttons disabled">&laquo; {$lang166}</a>
            {/if}
            {if $tnp ne ""}
         	<a id="jump_next" class='pagebuttons' href="{$mobileurl}/?page={$tnp}">{$lang167} &raquo;</a>	
            {else}
            <a href="#" onclick="return false;" class="pagebuttons disabled">{$lang167} &raquo;</a>
            {/if}												
        </div>
    </div>
			
    <div id='nav'>
        <ul>
            <div class='tip-border'></div>
            <li><a href="{$mobileurl}/">{$lang172}</a></li>
            <li><a href="{$mobileurl}/trending">{$lang173}</a></li>
            <li><a href="{$mobileurl}/vote">{$lang174}</a></li>
        </ul>
    </div>
    
    {literal}
    <script type="text/javascript">
    $(function() {
    $('.nav').toggle(
    function() {    
    $('.nav').text("x");
    $('#nav').css({ display: 'block', opacity: 1}); 
    },
    function() {
    $('.nav').html($('#nav_button').attr('label'));
    $('#nav').css({ display: ''});
    }
    );
    });
    </script>
    {/literal}
    
    {include file='lang2.tpl'}