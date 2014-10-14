	<div class="side-bar">
    	{if $smarty.session.USERID eq ""}
        <li id="side-bar-signup">
        	<a class="spcl-button green" href="{$baseurl}/signup" label="Header">{$lang148}</a>
        </li>
        {/if}
        <div class="s-300">
        	{insert name=get_advertisement AID=2}
        </div>
        <div class="social-block">
            <h3>{$lang153} {$site_name}</h3>
            <div class="facebook-like">
                <iframe src="//www.facebook.com/plugins/like.php?href={$baseurl|urlencode}%2F&amp;send=false&amp;layout=standard&amp;width=270&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:270px; height:80px;" allowTransparency="true"></iframe>
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
            <div class="s-300" >            
            	{insert name=get_advertisement AID=1}
            </div>        
            <div class="msg-box">
            	<h3>{$lang151}</h3>
            	<p>{$lang152}</p>
            </div> 
            <div class="section-2" style="width:250px">
                <div class="wrap" style="width:250px">
                    <ul class="sideinfo side-items-left" style="font-weight:bold; font-size:11px;margin-bottom:10px;padding-left:5px">
                        <li>&copy; 2012 {$site_name|stripslashes}· <a class="badge-language-selector" href="javascript:void(0);" style="color:#00a5ef">{if $smarty.session.language eq "en"}english{elseif $smarty.session.language eq "fr"}fran&#xE7;ais{elseif $smarty.session.language eq "de"}deutsch{elseif $smarty.session.language eq "es"}espa&ntilde;ol{elseif $smarty.session.language eq "pt"}portugu&#234;s{elseif $smarty.session.language eq "ru"}pусский{elseif $smarty.session.language eq "tr"}t&uuml;rk&ccedil;e{/if}</a></li>
                    </ul>
                    <ul class="sideinfo side-items-left" style="overflow:visible; width:400px">
                        <li><a href="{$baseurl}/about">{$lang67}</a></li>
                        <li>·<a href="{$baseurl}/rules">{$lang135}</a></li>
                        <li>·<a href="{$baseurl}/faq">{$lang202}</a></li>
                        <li>·<a href="{$baseurl}/contact">{$lang205}</a></li>
                    </ul>
                    <ul class="sideinfo side-items-left" style="overflow:visible; width:400px">
                        <li><a href="{$baseurl}/terms_of_service">{$lang203}</a></li>
                        <li>·<a href="{$baseurl}/privacy_policy">{$lang204}</a></li>
                    </ul>
                    <div style="clear:both"></div>
                    <div style="padding-left:7px; padding-top:10px;">
                    <a href="http://www.9gagclonescript.com" target="_blank"><b>Powered by 9GagCloneScript.com</b></a>
                    </div>
                </div>
            </div>
        </div>
    </div>