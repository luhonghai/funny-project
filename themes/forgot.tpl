<!DOCTYPE html>
<html lang="en" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<title>{$pagetitle|stripslashes}</title>
<link rel="shortcut icon" href="{$baseurl}/favicon.ico" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta content="width=device-width; initial-scale=1.0;" name="viewport" />
<link rel="stylesheet" href="{$baseurl}/css/connect.css" media="screen,projection" type="text/css" />
</head>

<body id="page-signup">
    <div class="signup-wrapper">
        <a class="signup-login-btn" href="{$baseurl}/signup">{$lang23}<b>{$lang24}</b></a>
        <div class="header">
        	<a href="{$baseurl}"><h1></h1></a>
        </div>
        <div class="content">
            <div class="description">
                <h2>{$lang91}</h2>
                <div class="spcl-button-wrap">
                	<a class="spcl-button facebook badge-facebook-connect" label="LoginFormFacebookButton" next="" <a class="spcl-button facebook badge-facebook-connect" label="LoginFormFacebookButton" next="" href="https://www.facebook.com/dialog/permissions.request?app_id={$FACEBOOK_APP_ID}&display=page&next={$baseurl}/&response_type=code&fbconnect=1&perms=email,user_birthday,user_about_me">{$lang25}</a>
                </div>
                <p class="message"> </p>
            </div>
            <form id="form-signup-login" class="generic" action="{$baseurl}/forgot" method="post">
            	{if $error ne ""}
                <p id="setup-msg" class="message red">{$error}</p>
                {/if}
                <div id="login-email" class="field">
                    <label>{$lang20}<span> (<a href="{$baseurl}/login">{$lang27}</a>)</span>
                    </label>
                    <input id="login-email" type="text" class="text" name="email" placeholder="{$lang20}" tabindex="2" maxlength="200" value=""/>
                </div>
                <div class="action">
                	<input id="logsub" type="hidden" name="logsub" value="1"></input>
                	<input id="login-submit" type="submit" class="submit-button" value="{$lang29}"></input>
                </div>
            </form>
        </div>
    </div>
    <div id="fb-root"></div>
    <script type="text/javascript" src="{$baseurl}/js/connect.js"></script>
</body>
</html>