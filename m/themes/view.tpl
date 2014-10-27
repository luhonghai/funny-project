<div id="header">
        <h1 class="hooppps"> <a href='{$mobileurl}/'></a> </h1>
        <a id="nav_button" label="{$lang173}" class='nav' href='javascript:void(0);'>{$lang173}</a>
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
    
        <a href="{$mobileurl}{$postfolder}{$p.PID}"><h1>{$p.story|stripslashes}</h1></a>
		{if $p.pic ne ""}
            <a href="{$purl}/t/{$p.pic}">Click on the image to enlarge</a>
			<a href="{$purl}/t/{$p.pic}"><img alt="{$p.story|stripslashes}" src="{$purl}/t/{$p.pic}" /></a>
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
		
		
        <div class='stats-container'>
            <div class='stats-tooltip-border'></div>
            <div class='stats-tooltip'></div>
            <ul class='stats'>
				{if $smarty.session.USERID ne ""}
					{if $p.favorited eq "1"}
					<a href="{$mobileurl}/love.php?action=UL&PID={$p.PID}&section=view&page={$currentpage}"><li class='loved'>{$p.favclicks}</li></a>
					<a href="{$mobileurl}/love.php?action=H&PID={$p.PID}&section=view&page={$currentpage}"><li class='unlove'>&nbsp;</li></a>
					{else}
						{if $p.unfavorited eq "1"}
						<a href="{$mobileurl}/love.php?action=L&PID={$p.PID}&section=view&page={$currentpage}"><li class='love'>{$p.favclicks}</li></a>
						<a href="{$mobileurl}/love.php?action=UH&PID={$p.PID}&section=view&page={$currentpage}"><li class='unloved'>&nbsp;</li></a>
						{else}
						<a href="{$mobileurl}/love.php?action=L&PID={$p.PID}&section=view&page={$currentpage}"><li class='love'>{$p.favclicks}</li></a>
						<a href="{$mobileurl}/love.php?action=H&PID={$p.PID}&section=view&page={$currentpage}"><li class='unlove'>&nbsp;</li></a>
                    {/if}
				{/if}
				{else}
				<a href="{$mobileurl}/login"><li class='love'>{$p.favclicks}</li></a>
				<a href="{$mobileurl}/login"><li class='unlove'>&nbsp;</li></a>
				{/if}
				<li class='fblike'><fb:like href="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}?ref=fb" send="false" layout="button_count" width="90px" show_faces="false" font="" label="Post"></fb:like></li>
                <li class='view'>
                    <a class="badge-facebook-comments-toggler" entryId="{$p.PID}" data-url="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}" href="javascript:void(0);"><fb:comments-count href="{$baseurl}{$postfolder}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}"></fb:comments-count> {$lang143}</a>
                </li>
            </ul>
        </div>
        <div id="facebook-comments-{$p.PID}" class="facebook-comments inited">
            <fb:comments href="{$baseurl}{$postfolder}{$p.PID}{$p.PID}/{if $SEO eq "1"}{$p.story|makeseo}.html{/if}" num_posts="5" width="300" colorscheme="dark"></fb:comments>
        </div>
    
    </div>
    
    {include file='lang2.tpl'}