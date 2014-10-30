<!DOCTYPE html>
<html lang="en" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
	<title>{if $pagetitle ne ""}{$pagetitle} - {/if}{$site_name}</title>
	<meta name="description" content="{if $pagetitle ne ""}{$pagetitle} - {/if}{if $metadescription ne ""}{$metadescription} - {/if}{$site_name}" />
	<meta name="keywords" content="{if $pagetitle ne ""}{$pagetitle},{/if}{if $metakeywords ne ""}{$metakeywords},{/if}{$site_name}">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;' name='viewport'>
	
	<meta property="og:title" content="{if $pagetitle ne ""}{$pagetitle} - {/if}{$site_name}"/>
	<meta property="og:site_name" content="{$site_name}"/>
	{if $p.pic ne ""}
	<meta property="og:url" content="{$baseurl}{$postfolder}{$p.PID}/"/>
	{elseif $p.youtube_key != ""}
	<meta property="og:url" content="{$baseurl}{$postfolder}{$p.PID}/"/>
	{else}
	<meta property="og:url" content="{$baseurl}/"/>
	{/if}
	<meta property="og:description" content="{$metadescription}"/>
	<meta property="og:type" content="blog" />
	{if $p.pic ne ""}
	<meta property="og:image" content="{$purl}/t/s-{$p.pic}" />
	{elseif $p.youtube_key != ""}
	<meta property="og:image" content="http://img.youtube.com/vi/{$p.youtube_key}/0.jpg" />
	{else}
	<meta property="og:image" content="{$baseurl}/images/image.png" />
	{/if}
	<meta property="fb:app_id" content="{$FACEBOOK_APP_ID}"/>
	
	<link href="{$mobileurl}/css/style.css" media="screen" rel="stylesheet" type="text/css" />
        <link rel="icon" href="$mobileurl}/favicon.ico" />
        <link rel="shortcut icon" href="$mobileurl}/favicon.ico" />
	<link rel="apple-touch-icon-precomposed" href="{$mobileurl}/images/gagviet.png" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
	<script src="{$mobileurl}/js/mobile.js" type="text/javascript"></script>
</head>
<body>
	<div id="fb-root"></div>
    {if $enable_fc eq "1"}
	{if $smarty.session.language eq "vi"}
	{literal}
	<script src="http://connect.facebook.net/vi_VN/all.js"></script>
	<script>
	FB.init({appId: '{/literal}{$FACEBOOK_APP_ID}{literal}', status: true, cookie: true, xfbml: true});
	FB.Event.subscribe('auth.login', function(response) {
		window.location.reload();
	});	  
</script>
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56177541-1', 'auto');
  ga('send', 'pageview');

</script>
	{/literal}
	{else}
    {literal}
	<script src="http://connect.facebook.net/en_US/all.js"></script>
	<script>
	FB.init({appId: '{/literal}{$FACEBOOK_APP_ID}{literal}', status: true, cookie: true, xfbml: true});
	FB.Event.subscribe('auth.login', function(response) {
    window.location.reload();
	});	  
	</script>
	{/literal}
    {/if}
	{/if}