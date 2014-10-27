	<div class="side-bar">
		{if $smarty.session.USERID ne ""}
			<div class="user-block">
				<h3>{$lang257} <a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}">{$smarty.session.USERNAME|stripslashes}</a></h3>
				{insert name=get_member_profilepicture assign=profilepicture value=var USERID=$smarty.session.USERID}
				<img id="uploaded_img" src="{$membersprofilepicurl}/thumbs/{$profilepicture}?{$smarty.now}" alt="avatar" style="border: 2px solid rgb(187, 187, 187); float: left; margin-right: 10px;width:80px;height:50px" />
				<div class="userinfoblock"> 
					<a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}">{$lang192}</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}/likes">{$lang193}</a><br>
					<a href="{$baseurl}/settings">{$lang45}</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}/messages">{$lang194}</a><br>
				</div>
			<div style="clear: both;"></div>
				{literal}
                <script type="text/javascript">
                function loadContent(elementSelector, sourceURL) {
                $(""+elementSelector+"").load(""+sourceURL+"");
                }
                </script>
                {/literal}
                <div id="loadme"></div>
			<div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid rgb(187, 187, 187);">
				<a href="javascript:loadContent('#loadme', '{$baseurl}/log_out');">{$lang198}</a>
				<div style="clear: both;"></div>
			</div>
			</div>
		{else}  
			<div class="social-block">
				<h3>{$lang9}</h3>
				<div id="signup-desc" class="description">
				<div class="spcl-button-wrap">
				<a class="spcl-button green" href="{$baseurl}/signup" label="Header">{$lang148}</a><br>
				{if $TC eq "1"}
				<a class="spcl-button facebook badge-facebook-connect" label="LoginFormFacebookButton" next="" href="https://www.facebook.com/dialog/permissions.request?app_id={$FACEBOOK_APP_ID}&display=page&next={$baseurl}/&response_type=code&fbconnect=1&perms=email,user_birthday,user_about_me">{$lang14}</a><br>
				<a class="spcl-button twitter" label="LoginFormTwitterButton" next="" href="{$baseurl}/twitter_signin.php">{$lang252}</a>
				{/if}
				</div>
				</div>
			</div>
		{/if}
        <div class="s-300" id="top-s300">
        	{if $smarty.session.FILTER eq "0" AND $NSFWADS}
        	{insert name=get_advertisement AID=5}
            {else}
        	{insert name=get_advertisement AID=2}
			{/if}
        </div>
		{if $channels eq "1"}
        <div class="social-block">
            <h3>{$lang272}</h3>
			{section name=i loop=8}
			{if $c[i].ctotal GT "0"}
				<font size=3><a href="{$baseurl}/channels/{$c[i].chname|makeseo}/">{$c[i].chname} </a> <b>{$c[i].ctotal} </b> pictures </font><br />
			{/if}
            {/section} 
			</div>
		{/if}
        <div class="social-block">
            <h3>{$lang153} {$site_name}</h3>
            <div class="facebook-like">
				<div class="fb-like" data-href="http://www.facebook.com/{$FACEBOOK_PROFILE}" data-send="false" data-width="290" data-show-faces="true"></div>
			</div>
            <div class="twitter-follow">
            	<a href="http://twitter.com/{$twitter}" class="twitter-follow-button">{$lang149} @{$twitter}</a>
            </div>            
            <div class="google-plus">
            	<p>{$lang150}</p>
            	<g:plusone size="medium" href="{$baseurl}"></g:plusone>
            </div>
        </div>
        <div id="moving-boxes">
            <div class="s-300" id="bottom-s300">            
            	{if $smarty.session.FILTER eq "0" AND $NSFWADS}
        	{insert name=get_advertisement AID=4}
            {else}
        	{insert name=get_advertisement AID=1}
			{/if}
            </div>

{if $r[0].PID ne "" AND $rhome eq "1"}
<div id="post-gag-stay" class="_badge-sticky-elements" data-y="60">
	<div class="popular-block">
	<h3>{$lang251}</h3>
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