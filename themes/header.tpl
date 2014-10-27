<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" onkeypress="keyfind(event)" lang="{$lang254}" dir="{$lang255}">
<head prefix="og: http://ogp.me/ns/fb#">
<title>{if $pagetitle ne ""}{$pagetitle} - {/if}{$site_name}</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="{if $pagetitle ne ""}{$pagetitle} - {/if}{if $metadescription ne ""}{$metadescription} - {/if}{$site_name}">
<meta name="keywords" content="{if $pagetitle ne ""}{$pagetitle},{/if}{if $metakeywords ne ""}{$metakeywords},{/if}{$site_name}">
<meta name="title" content="{if $pagetitle ne ""}{$pagetitle} - {/if}{$site_name}" />

<meta property="og:title" content="{if $pagetitle ne ""}{$pagetitle} - {/if}{$site_name}"/>
<meta property="og:site_name" content="{$site_name}"/>
{if $p.pic ne ""}
<meta property="og:url" content="{$baseurl}{$postfolder}{$p.PID}/"/>
{elseif $p.youtube_key != ""}
<meta property="og:url" content="{$baseurl}{$postfolder}{$p.PID}/"/>
{elseif $p.fod_key != ""}
<meta property="og:url" content="{$baseurl}{$postfolder}{$p.PID}/"/>
{elseif $p.vmo_key != ""}
<meta property="og:url" content="{$baseurl}{$postfolder}{$p.PID}/"/>
{else}
<meta property="og:url" content="{$baseurl}/"/>
{/if}
{if $p.pic ne ""}
<meta property="og:image" content="{$purl}/t/s-{$p.pic}" />
{elseif $p.youtube_key != ""}
<meta property="og:image" content="http://img.youtube.com/vi/{$p.youtube_key}/0.jpg" />
{elseif $p.fod_key != ""}
<meta property="og:image" content="http://www.funnyordie.com/media/{$p.fod_key}/thumbnail/large.jpg" />
{elseif $p.vfy_key != ""}
<meta property="og:image" content="{$baseurl}/images/9gag-logo-large.png" />
{elseif $p.vmo_key != ""}
<meta property="og:image" content="{$baseurl}/images/9gag-logo-large.png" />
{/if}
<meta property="og:type" content="blog" />
<meta property="fb:app_id" content="{$FACEBOOK_APP_ID}"/>
<meta property="fb:admins" content="{$FACEBOOK_ADMIN}"/>

<link href="{$baseurl}/css/style_{$lang255}.css" media="screen" rel="stylesheet" type="text/css" />
<link rel="icon" href="{$baseurl}/favicon.ico" />
<link rel="shortcut icon" href="{$baseurl}/favicon.ico" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/mootools/1.3.1/mootools-yui-compressed.js"></script>
<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="{$baseurl}/js/jquery.scrollTo-1.4.2-min.js"></script>
{if $RSS eq "1"}
<link rel="alternate" type="application/rss+xml" title="RSS For {$site_name}" href="{$baseurl}/rss.php" />
{/if}
</head>
<body id="page-landing" class="main-body ">
<div id="fb-root"></div>
{if $enable_fc eq "1"}
{if $smarty.session.language eq "ar"}
{literal}
<script src="http://connect.facebook.net/ar_AR/all.js"></script>
<script>
  FB.init({appId: '{/literal}{$FACEBOOK_APP_ID}{literal}', status: true,
           cookie: true, xfbml: true});
  FB.Event.subscribe('auth.login', function(response) {
    window.location.reload();
  });	  
</script>
{/literal}
{else}
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
{/if}
<div id="tmp-img" style="display:none"></div>
{literal}
<script type="text/javascript"> 
function rmt(l) { var img = new Image(); img.src = l; document.getElementById('tmp-img').appendChild(img); } 
function myWindow(location, address, gaCategory, gaAction, entryLink) { var w = 640; var h = 460; var sTop = window.screen.height/2-(h/2); var sLeft = window.screen.width/2-(w/2); var sharer = window.open(address, "Share on Facebook", "status=1,height="+h+",width="+w+",top="+sTop+",left="+sLeft+",resizable=0"); }
</script>
{/literal}
<div id="head-wrapper">

    <div id="searchbar_container">
        <div id="searchbar_wrapper">
            <div id="header_searchbar"  style="display:none;">
                <div id="search_wrapper">
                    <form action="{$baseurl}/search">
                        <input id="sitebar_search_header" type="text" class="search search_input" name="query" tabindex="1" placeholder="{$lang189}"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="head-bar">
        <h1><a class="snowman" href="http://www.facebook.com/{$FACEBOOK_PROFILE}" target="_blank" >Facebook</a><a href="{$baseurl}/">{$site_name}</a></h1>
        <ul id="nav" class="main-menu" style="overflow:visible">            
            <li><a class="{if $menu eq 1}current{/if}" href="{$baseurl}/hot">{$lang201}</a></li>
            <li><a class="{if $menu eq 2}current{/if}" href="{$baseurl}/fast" onclick="_gaq.push(['_trackEvent', 'Lab', 'Clicked', 'Go', 1]); ">{$lang200}</a></li>
            <li><a class="{if $menu eq 4}current{/if}" href="{$baseurl}/top-users">{$lang260}</a></li>
            {if $topposts EQ 1}<li><a class="{if $menu eq 6}current{/if}" href="{$baseurl}/top-posts">{$lang278}</a></li>{/if}
            <li><a class="add-post {if $menu eq 3}current{/if}" href="{$baseurl}/submit" onclick="_gaq.push(['_trackEvent', 'New-Post', 'Clicked', 'Headbar', 1]);">{$lang199}</a></li>            
            {if $allchannels}
			<li><a class="{if $menu eq 5}current{/if}">{$lang274}</a>
				<ul>
					{section name=i loop=$allchannels}
                    <li><a href="{$baseurl}/channels/{$allchannels[i].cname|makeseo}">{$allchannels[i].cname}</a></li>
                    {/section} 
				</ul>
			</li>
			{/if}
        </ul>
        <ul class="main-2-menu">
            {if $smarty.session.USERID ne ""}
            <li>
                {literal}
                <script type="text/javascript">
                function loadContent(elementSelector, sourceURL) {
                $(""+elementSelector+"").load(""+sourceURL+"");
                }
                </script>
                {/literal}
                <div id="loadme"></div>
                <div id="profile-menu" class="profile-menu">
                <a id="profile-username" href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}" class="profile-button">{$smarty.session.USERNAME|stripslashes}</a>
                <ul>
                    <li><a href="{$baseurl}/settings">{$lang45}</a></li>
                    <li><a href="javascript:loadContent('#loadme', '{$baseurl}/log_out');">{$lang198}</a></li>
                </ul>
                </div>
            </li>
            {else}         
            <li id="side-bar-signup">
            <a class="signup-button green" href="{$baseurl}/signup" label="Header">{$lang148}</a>
            </li>            
            <li><a href="{$baseurl}/login" class="button">{$lang197}</a></li>            
            {/if}
            <li><a class="random-button" href="{$baseurl}/random" id="rand-but"><strong>{$lang196}</strong></a></li>
            <li><a class="search-button search-toggler" href="javascript:void(0);"><strong>{$lang189}</strong></a></li>
        </ul>
    </div>
</div>
{literal}
<script type="text/javascript">
$('.search-button').click(function(){
    $('#header_searchbar').toggle('slow');
    });
</script>
{/literal}              
<div id="container" style="">
{if $viewpage eq "1"}
{include file='js1.tpl'}
{else}
{include file='js.tpl'}
{/if}