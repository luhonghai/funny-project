    <div id="main">
        <div id="content-holder">
            <div class="post-info-pad">
                <h1>{$lang260}</h1>
            </div>
        
            <div id="content">
            <div id="entries-content" class="list">
						
					{section name=i loop=$users}               
										
					<div style="margin-bottom: 15px; background: none repeat scroll 0% 0% rgb(248, 248, 248); border-radius: 5px 5px 5px 5px; padding: 15px; text-shadow: 0pt 1px rgb(255, 255, 255);"><img src="{$membersprofilepicurl}/thumbs/{if $users[i].profilepicture eq ""}noprofilepicture.jpg{else}{$users[i].profilepicture}{/if}?{$smarty.now}" style="border: 2px solid rgb(187, 187, 187); float: left; margin-right: 10px;width:80px;height:50px;">
              
					<div style="margin: 0pt 15px 0pt 60px;">
					<a href="{$baseurl}/user/{$users[i].username}" style="font-size: 16px; font-weight: bold; padding-bottom: 5px; margin-bottom: 6px; border-bottom: 1px solid rgb(242, 242, 242); display: block;">{$users[i].username}</a>
					<a href="{$baseurl}/user/{$users[i].username}" style="font-size: 12px; color: rgb(68, 68, 68);">Rank: {$users[i].rank}&nbsp;&nbsp;<span style="color: rgb(238, 238, 238);">|</span>&nbsp;&nbsp;Posts: {$users[i].posts}&nbsp;&nbsp;<span style="color: rgb(238, 238, 238);">|</span>&nbsp;&nbsp;Views: {$users[i].yourviewed}&nbsp;&nbsp;<span style="color: rgb(238, 238, 238);">|</span>&nbsp;&nbsp;Points: {$users[i].points}</a>
					</div>
					<div class="clear"></div>
              
					</div>

                    {/section}             
						
						
						
                </div>            

            	<br/>
            <div id="paging-buttons" class="paging-buttons">
            	{if $tpp ne ""}
                <a href="{$baseurl}/top-users?page={$tpp}" class="previous">&laquo; {$lang261}</a>
                {else}
                <a href="#" onclick="return false;" class="previous disabled">&laquo; {$lang261}</a>
                {/if}
                {if $tnp ne ""}
                <a href="{$baseurl}/top-users?page={$tnp}" class="older">{$lang262} &raquo;</a>
                {else}
                <a href="#" onclick="return false;" class="older disabled">{$lang262} &raquo;</a>
                {/if}
            </div>	
            </div>
        </div>
    </div>
    	
		
<div class="side-bar">
    {include file='right2.tpl'}
	
<div id="moving-boxes">
<!-- Ads Num. 1
            <div class="s-300" >            
            	{insert name=get_advertisement AID=1}
            </div>        
-->

</div>
	

</div>

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
 
    <script type="text/javascript">
         var barloc=$('#post-control-bar').offset().top; 
         $(window).scroll(function () {
              var curloc=$(window).scrollTop();
              if(curloc>barloc){
        $('#post-control-bar').addClass('topbarfixed');
              }else{
                $('#post-control-bar').removeClass('topbarfixed'); 
                 }
         });
    </script>
    {/literal}
</div>
<div id="footer" class="">