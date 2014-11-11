<!DOCTYPE html>
<html xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" lang="{$lang254}" dir="LTR">
<head>
<title>{$pagetitle|stripslashes}</title>
<link rel="shortcut icon" href="{$baseurl}/favicon.ico" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta content="width=device-width; initial-scale=1.0;" name="viewport" />
    <script type="text/javascript">
        var BASE_URL		=	"{$baseurl}";
        var AVATAR_URL      = "{$membersprofilepicurl}";
        var ASSET_URL       = "{$asseturl}";
        var APP_FACEBOOK 	= 	"{$FACEBOOK_APP_ID}";
        {if $smarty.session.USERID ne ""}
        var CURRENT_USER_ID = "{$smarty.session.USERID|stripslashes}";
        {else}
        var CURRENT_USER_ID = "guest";
        {/if}
        var GA_ID = "{$ganalytics}";
    </script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    {if $penv eq "dev"}
        <link href="{$asseturl}/css/connect.css" media="screen,projection" rel="stylesheet" type="text/css" />
    {else}
        <link href="{$asseturl}/css/connect.css.gz" media="screen,projection" rel="stylesheet" type="text/css" />
    {/if}
</head>

<body id="page-signup">

<div class="signup-wrapper">
    <a class="signup-login-btn" href="{$baseurl}/login">{$lang10} {$lang11}</a>
    <div class="header">
        	<center><a href="{$baseurl}"><img src="{$asseturl}/images/logo-large.png" /></center>
    	<a href="{$baseurl}"><h1>{$site_name}</h1></a>
    </div>
    <div class="content">
    <div id="signup-desc" class="description">    
            <h2>{$lang12} {$site_name}</h2>
            <h3>{$lang9}<br/>{$lang13}.</h3>
            <div class="spcl-button-wrap">
            	<a class="spcl-button facebook badge-facebook-connect" label="LoginFormFacebookButton" next="" href="https://www.facebook.com/dialog/permissions.request?app_id={$FACEBOOK_APP_ID}&display=page&next={$baseurl}/&response_type=code&fbconnect=1&perms=email,user_birthday,user_about_me">{$lang14}</a><br>
				{if $TC eq "1"}
				<a class="spcl-button twitter" label="LoginFormTwitterButton" next="" href="{$baseurl}/twitter_signin.php">{$lang252}</a>
				{/if}
            </div>
            <p class="message">
                {$lang15}<br/>
                <a id="no-facebook-account" href="javascript:void(0);">{$lang16}</a>.
            </p>
        </div>
        
        <div id="signup-desc-done" class="description" style="display:none;">
            <h2>{$lang17}</h2>
            <h3>{$lang18}<br/>
            <a href="{$baseurl}">{$lang19}</a></h3>
        </div>
        
        <div id="request-invite-block" style="display:none;">
            <form id="form-signup-login" class="generic" action="">
            <div class="field">
                <label>{$lang20}</label>
                <input id="signup-request-email" type="email" class="text" placeholder="{$lang21}" maxlength="200"/>
                <input type="hidden" name="CSRFToken"  id="CSRFToken" value="1">
            </div>
            <div class="action">
            	<a id="get-email-invitation" class="button" href="javascript:void(0);">{$lang22}</a>
            </div>
            <p id="signup-msg" class="message red" style="display:none;"></p>
            </form>
        </div>
        <div id="request-invite-loading" style="display:none;">
        	<a class="button loading" href="javascript:void(0);"></a>
        </div>    
    </div>
</div>

<div id="fb-root"></div>

{if $penv eq "dev"}
    <script type="text/javascript" src="{$asseturl}/js/dev.app.js"></script>
{else}
    <script type="text/javascript" src="{$asseturl}/js/app.js.gz"></script>
{/if}

</body>
</html>