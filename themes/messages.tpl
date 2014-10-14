<div id="main">
    <div id="content-holder">		
        <div class="profile-pad">
            <div class="profile-image">
                <a href="{$baseurl}/user/{$p.username|stripslashes}">
                {insert name=get_member_profilepicture assign=profilepicture value=var USERID=$smarty.session.USERID}
                <img src="{$membersprofilepicurl}/{$profilepicture}?{$smarty.now}" alt="{$p.username|stripslashes}" />
                </a>
            </div>
            <div class="profile-info" href="#" style="background:#{$p.color1}">
                <h3><a href="{$baseurl}/user/{$p.username|stripslashes}">{$p.username|stripslashes}</a></h3>
                <h4>{insert name=country_code_to_country value=a assign=country code=$p.country}{$country}</h4>
                <p>{$p.description|stripslashes}</p>  
                <p><a href="{$p.website|stripslashes}" target="_blank" style="color:#{$p.color2}">{$p.website|stripslashes}</a></p>              
                <a class="friendship" href="{$baseurl}/user/{$p.username|stripslashes}/messages">Messages</a>
            </div>
        </div>
        <div class="main-filter with-topping">
            <ul class="content-type">            
                <li><a href="{$baseurl}/user/{$p.username|stripslashes}"><strong>{$lang192}</strong> ({$tl})</a></li>
                <li><a href="{$baseurl}/user/{$p.username|stripslashes}/likes"><strong>{$lang193}</strong> ({$tf})</a></li>            
                <li><a class="current" href="{$baseurl}/user/{$p.username|stripslashes}/messages"><strong>{$lang194}</strong> (<fb:comments-count href="{$baseurl}/user/{$p.username|stripslashes}/messages"></fb:comments-count>)</a></li>
            </ul>
        </div>
        <div id="content">
            <div id="view-info">
            	<p>{$lang195}</p>
            </div>
            <div class="profile-comment-wrapper">
            <div class="fb-comments" href="{$baseurl}/user/{$p.username|stripslashes}/messages" data-num-posts="5" data-width="700"></div>
            </div>
        </div>    
    </div>
</div>
{include file='right.tpl'}
{literal}
<script type="text/javascript">
var adloca=$('#moving-boxes').offset().top; 
 $(window).scroll(function () { 
    var curloca=$(window).scrollTop();
    if(curloca>adloca){
        $('#moving-boxes').css('position','fixed');
        $('#moving-boxes').css('top','55px');
        $('#moving-boxes').css('z-index','200');
    };
    if(curloca <= adloca){
        $('#moving-boxes').css('position','static');
        $('#moving-boxes').css('top','!important');
        $('#moving-boxes').css('z-index','!important');
    };
    });
</script> 
{/literal}   
<div id="footer" class="">