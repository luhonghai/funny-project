<div id="main">
    <div id="content-holder">		
        <div class="profile-pad">
            <div class="profile-image">
                <a href="{$baseurl}/user/{$p.username|stripslashes}">
                {insert name=get_member_profilepicture assign=profilepicture value=var USERID=$p.USERID}
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
                <li><a class="current" href="{$baseurl}/user/{$p.username|stripslashes}"><strong>{$lang192}</strong> ({$totalposts})</a></li>
                <li><a  href="{$baseurl}/user/{$p.username|stripslashes}/likes"><strong>{$lang193}</strong> ({$tl})</a></li>            
                <li><a class="" href="{$baseurl}/user/{$p.username|stripslashes}/messages"><strong>{$lang194}</strong> (<fb:comments-count href="{$baseurl}/user/{$p.username|stripslashes}/messages"></fb:comments-count>)</a></li>
            </ul>
			{if $safemode eq "1"}
        	{if $smarty.session.USERID ne ""}
                {if $smarty.session.FILTER eq "1"}
                <a class="safe-mode-switcher on" href="{$baseurl}/safe?m={$eurl}">&nbsp;</a>
                {else}
                <a class="safe-mode-switcher off" href="{$baseurl}/safe?m={$eurl}&o=1">&nbsp;</a>
                {/if}
            {else}
            	<a class="safe-mode-switcher on" href="{$baseurl}/login">&nbsp;</a>
            {/if}
			{/if}
        </div>
        <div id="content" listPage="">
            <div id="view-info" class="list-tips">
                <div id="shortcut-event-label" style="display:none">{$lang171}</div>
                <span><b>{$lang169}</b>: {$lang170}</span>
                <a href="#keyboard" class="keyboard_link">{$lang168}</a>                    
            </div>
            <div id="entries-content" class="list">
                <ul id="entries-content-ul" class="col-1">
                    {section name=i loop=$posts}
                    {include file="posts_bit.tpl"}
                    {/section}                    
                </ul>
            </div>
			<div id="paging-buttons" class="paging-buttons">
            	{if $tpp ne ""}
                <a href="{$baseurl}/user/{$p.username|stripslashes}?page={$tpp}" class="previous">&laquo; {$lang166}</a>
                {else}
                <a href="#" onclick="return false;" class="previous disabled">&laquo; {$lang166}</a>
                {/if}
                {if $tnp ne ""}
                <a href="{$baseurl}/user/{$p.username|stripslashes}?page={$tnp}" class="older">{$lang167} &raquo;</a>
                {else}
                <a href="#" onclick="return false;" class="older disabled">{$lang167} &raquo;</a>
                {/if}
            </div>
        </div>
    </div>
</div>
{include file='vote_js.tpl'}              
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