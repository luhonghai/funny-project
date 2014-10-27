<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
<head>
	<title>{if $pagetitle ne ""}{$pagetitle} - {/if}{$site_name}</title>
	<meta name="description" content="{if $pagetitle ne ""}{$pagetitle} - {/if}{if $metadescription ne ""}{$metadescription} - {/if}{$site_name}" />
	<meta name="keywords" content="{if $pagetitle ne ""}{$pagetitle},{/if}{if $metakeywords ne ""}{$metakeywords},{/if}{$site_name}">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;' name='viewport'>
	<link href="{$mobileurl}/css/style.css" media="screen" rel="stylesheet" type="text/css" />
	<link rel="apple-touch-icon-precomposed" href="{$mobileurl}/images/gag.png" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
	<script src="{$mobileurl}/js/mobile.js" type="text/javascript"></script>
    <html xmlns:fb="http://ogp.me/ns/fb#">
</head>
<body>
	<div id="fb-root"></div>
    {if $enable_fc eq "1"}
    {literal}
<script src="http://connect.facebook.net/en_US/all.js"></script>
<script>
  FB.init({appId: '{/literal}{$FACEBOOK_APP_ID}{literal}', status: true,
           cookie: true, xfbml: true});
  FB.Event.subscribe('auth.login', function(response) {
    window.location.reload();
  });	  
</script>
{/literal}
    {/if}