<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml" onkeypress="keyfind(event)" lang="{$lang254}" dir="LTR">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
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

<link href="//assets.trollvd.com/css/app.css.gz" media="screen" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<link rel="icon" href="{$baseurl}/favicon.ico" />
<link rel="shortcut icon" href="{$baseurl}/favicon.ico" />


{if $RSS eq "1"}
<link rel="alternate" type="application/rss+xml" title="RSS - {$site_name}" href="{$baseurl}/rss.php" />
{/if}
<script type="text/javascript">
	var BASE_URL		=	"{$baseurl}";
    var AVATAR_URL      = "{$membersprofilepicurl}";
	var APP_FACEBOOK 	= 	'287482141376893';
</script>
    <script type="text/javascript" src="//assets.trollvd.com/js/app.js.gz"></script>
{literal}
{/literal}
{literal}


{/literal}
</head>
<body id="page-landing" class="main-body ">
<div id="fb-root"></div>
{if $enable_fc eq "1"}
{if $smarty.session.language eq "vi"}
{literal}
<script src="http://connect.facebook.net/vi_VN/all.js"></script>
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
<div id="header">
	<div class="wauto">
<a href="{$baseurl}" class="logo"> </a>
           <form action="{$baseurl}/search">
       <div class="search"><input id="sitebar_search_header" type="text" class="search search_input" name="query" tabindex="1" placeholder="{$lang189}"/>
                    </form></div>
        <ul class="buser">
            <li class="z"><a href="/comic">Chế comic</a></li>
            <li class="z k"><a href="/topusers">Top Thành Viên</a></li>      
<li class="z v"><a href="{$baseurl}/submit"><s class="upload"></s>Đăng bài</a></li>
                  <div id="headerRight">		

{if $smarty.session.USERID ne ""}			
			<a href="{$baseurl}/user/{$smarty.session.USERID|stripslashes}/messages" class="notiButton" title="Tin nhắn"></a>
			<div class="avatar noNoti">
				<a id="profile-username" href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}" class="avatarLink" title="{$smarty.session.USERNAME|stripslashes}">
				{insert name=get_member_profilepicture assign=profilepicture value=var USERID=$smarty.session.USERID url=$membersprofilepicurl}
				<img src="{$membersprofilepicurl}/{$profilepicture}?{$smarty.now}" width="40px" height="40px" />
				</a>
				<ul>
					<li><a href="{$baseurl}/user/{$smarty.session.USERNAME|stripslashes}">Ảnh của bạn</a></li>
                    <li><a href="{$baseurl}/settings">{$lang45}</a></li>
                    <li><a href="{$baseurl}/logout">{$lang198}</a></li>
			</ul>
			</div>
			{else}
<li class="login"><div id="_login" class="uibutton-group">
		<a href="{$baseurl}/login"><s class="uibutton-group"></s>Đăng nhập</a></li>	
			</div>
			{/if}
		</div>
</ul>
    </div>
</div>
{literal}
<script type="text/javascript" >
    $(document).ready(function(){


        $(function () {

            $(window).scroll(function () {

                if ($(this).scrollTop() > 20) {

                    $('#nav').css("position","fixed").css("top","0").css("box-shadow","0 2px 4px #333");

                }

                else{

                    $('#nav').css("position","relative").css("box-shadow","none");

                }

            });

        });

    });

</script>
{/literal}

<div id="nav">
<div id="menuBar">
<div class="trollvd">
    	<li{if $menu eq 1} class="selected"{/if}><a href="{$baseurl}/trending">{$lang173}</a></li>
			<li{if $menu eq 2} class="selected"{/if}><a href="{$baseurl}/hot">{$lang172}</a></li>
			<li{if $menu eq 3} class="selected"{/if}><a href="{$baseurl}/vote">{$lang174}</a></li>
                        <li{if $menu eq 4} class="selected"{/if}><a href="{$baseurl}/tag/anh-dep">&#7842;nh &#273;&#7865;p</a></li>

<li{if $menu eq 5} class="selected"{/if}><a href="{$baseurl}/channels/girls-xinh">Girl xinh</a></li>
<li{if $menu eq 6} class="selected"{/if}><a href="{$baseurl}/channels/tin-hot">Tin hot</a></li>
<li{if $menu eq 7} class="selected"{/if}><a href="{$baseurl}/channels/anh-bua-18-+">Ảnh bựa</a></li>
<li{if $menu eq 8} class="selected"{/if}><a href="{$baseurl}/channels/hinh-anh">&#7842;nh vui</a></li>
<li{if $menu eq 9} class="selected"{/if}><a href="{$baseurl}/channels/video-clip">Video clip</a></li>
			<li{if $menu eq 11} class="selected"{/if}><a href="{$baseurl}/top-posts">{$lang278}</a></li>
<li{if $menu eq 11} class="selected"{/if}><a href="{$baseurl}/kiem-tien-online.html">{$lang67}</a></li>
		   </ul>
</div>
</div>	
		<div class="clear"></div>
	</div>
</div>
{literal}
<script type="text/javascript">
$('.searchButton').click(function(){
    $('#header_searchbar').toggle('slow');
    });
</script>
{/literal}              
<div id="container">
{if $viewpage eq "1"}
{include file='js1.tpl'}
{else}
{include file='js.tpl'}
{/if}