	<div class="side-bar">
		<div class="msg-box notice" style="font-size:12px;">
			<b>Vào Facebook để duyệt sướng hơn! Bạn không vào được? Xem hướng dẫn <a href="{$baseurl}/cach-vao-facebook-khi-bi-chan-moi-nhat-nam-2014.html">cách vào Facebook</a>.</b>
		</div>
		<div>
			<a class="bts spaceBottom" href="{$baseurl}/submit" style="float: left; width: 278px; color: white">Click để bắt đầu chia sẻ những bức ảnh vui!</a>
			<div class="clear"></div>
		</div>

<div id="tabs">
          <ul>
            <li><a data="tuan">Tuần</a></li>
            <li><a data="thang">Tháng</a></li>
            <li><a data="nam">Năm</a></li>
          </ul>
          <span id="slogo">
            <a href="{$baseurl}/topusers"><label for="slogo">Bảng Xếp Hạng</label></a>
            <img alt="Top Overs" src="{$asseturl}/images/top-logo.png" width="21" height="21" />
          </span>
          <div class="current">
          </div>
        </div>
				<div class="social-block">
            <h3>{$lang153}</h3>
            <div class="facebook-like">
                <div class="fb-like-box" data-href="http://www.facebook.com/{$FACEBOOK_PROFILE}" data-width="290" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
			</div>
        </div>
		
        <div id="moving-boxes">
            <div class="s-300" id="bottom-s300">            
            	{if $smarty.session.FILTER eq "1" AND $NSFWADS}
        	{insert name=get_advertisement AID=10}
            {else}
        	{insert name=get_advertisement AID=10}
			{/if}
            </div>
{if $r[0].PID ne "" AND $rhome eq "1"}
<div id="post-gag-stay" class="_badge-sticky-elements" data-y="60">
	<div class="popular-block">
	<h3>{$lang251}</h3>
	<ol>
	{section name=i loop=$r}
	<a class="wrap" href="{$baseurl}{$postfolder}{$r[i].PID}/{if $SEO eq "1"}{$r[i].story|makeseo}.html{/if}" >
		<li>
            {if $r[i].nsfw eq "1" AND $smarty.session.FILTER ne "0"}
				<img src="{$asseturl}/images/nsfw_thumb.jpg" alt="{$r[i].story|stripslashes}" />
			{else}
				{if $r[i].pic ne ""}
					<img src="{$purl[i]}/t/s-{$r[i].pic}" alt="{$r[i].story|stripslashes}" />
				{else}
					{if $r[i].youtube_key != ""}
						<img src="http://img.youtube.com/vi/{$r[i].youtube_key}/0.jpg" alt="{$r[i].story|stripslashes}" />
                                     	{elseif $r[i].contents != ""}
						<img src="{$asseturl}/images/s-text.png" alt="{$r[i].story|stripslashes}" />
					{else}
						<img src="{$asseturl}/images/s-error.jpg" alt="Không tìm thấy dữ liệu" />
					{/if}
				{/if}
			{/if}
			<h4>{if $truncate eq "1"}{$r[i].story|stripslashes|mb_truncate:20:"...":'UTF-8'}{else}{$r[i].story|stripslashes}{/if}</h4>
         		<h4><a href="{$baseurl}/user/{$r[i].username|stripslashes}">{$r[i].username|stripslashes|truncate:20:"...":true}</a></h4>
			<p class="meta"><span class="comment"><fb:comments-count href="{$baseurl}{$postfolder}{$r[i].PID}/{if $SEO eq "1"}{$r[i].story|makeseo}.html{/if}"></fb:comments-count></span><span class="loved">{$r[i].favclicks}</span><span class="viewed">{$r[i].postviewed}</span>
			</p>
		</li>
	</a>
	{/section}
	</ol>
	</div>
</div>
{/if}
</div>
</div>