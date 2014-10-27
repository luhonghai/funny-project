    	{if $smarty.session.USERID ne ""}
			<div class="user-block">
				<h3>{$lang257} <a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}">{$smarty.session.USERNAME|stripslashes}</a></h3>
				{insert name=get_member_profilepicture assign=profilepicture value=var USERID=$smarty.session.USERID}
				<img id="uploaded_img" src="{$membersprofilepicurl}/thumbs/{$profilepicture}?{$smarty.now}" alt="avatar" style="border: 2px solid rgb(187, 187, 187); float: left; margin-right: 10px;width:80px;height:50px" />
				<div class="userinfoblock"> 
					<a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}">{$lang192}</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}/likes">{$lang193}</a><br>
					<a href="{$baseurl}/settings">{$lang45}</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}/messages">{$lang194}</a><br>
				</div>
				{literal}
                <script type="text/javascript">
                function loadContent(elementSelector, sourceURL) {
                $(""+elementSelector+"").load(""+sourceURL+"");
                }
                </script>
                {/literal}
                <div id="loadme"></div>
			<div style="clear: both;"></div>
			<div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid rgb(187, 187, 187);">
				{$lang198} | <a href="javascript:loadContent('#loadme', '{$baseurl}/log_out');">{$lang198}</a>
				<div style="clear: both;"></div>
			</div>
			</div>
		{else}  
			<div class="social-block">
				<h3>{$lang153} {$site_name}</h3>
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