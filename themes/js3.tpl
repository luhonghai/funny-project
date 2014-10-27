    <div id="b9gcs-soft-share" class="b9gcs-soft-box ">
        <div class="content">
            <a href="javascript:void(0);" class="close-btn"></a>
            <form id="form-b9gcs-soft-share" class="modal" action="">
                <h3>{$lang266}<span id="post-share-dismiss-counter"></span></h3>
                <h4>{$lang267}</h4>
                <div class="facebook-share">
                	<a href="javascript:myWindow('Facebook Share', 'http://www.facebook.com/sharer/sharer.php?u={$baseurl}{$postfolder}{$p.PID}/{$p.story|makeseo}.html', 'Facebook-Share-After-User-Post', 'Clicked');"></a>					
                </div>
                <div class="other-social">
                    <div class="twitter-tweet">
                    	<a href="https://twitter.com/share" class="twitter-share-button" data-text="{$p.story|stripslashes}" data-url="{$baseurl}{$postfolder}{$p.PID}/{$p.story|makeseo}.html" data-count="horizontal" data-via="">&nbsp;</a>						
                    </div>
                    <div class="google-plus">
                    	<g:plusone size="medium" href="{$baseurl}{$postfolder}{$p.PID}/{$p.story|makeseo}.html"></g:plusone>	
                    </div>                    
                    <div class="facebook-button">
                    	<fb:like href="{$baseurl}{$postfolder}{$p.PID}/{$p.story|makeseo}.html?ref=fb" send="false" layout="button_count" width="90" show_faces="false" font="" label="PostShare"></fb:like>
                    </div>
                    <div class="stumbleupon-button">
                    	<su:badge layout="1" location="{$baseurl}{$postfolder}{$p.PID}/{$p.story|makeseo}.html?ref=stumbleupon"></su:badge> {literal}<script type="text/javascript"> (function() { var li = document.createElement('script'); li.type = 'text/javascript'; li.async = true;  li.src = 'https://platform.stumbleupon.com/1/widgets.js';  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(li, s);  })(); </script>{/literal}						
                    </div>                
                </div>
                <div class="field">
                	<p>{$lang268}:</p>
                	<input id="post-share-entry-url" type="text" class="text" value="{$baseurl}{$postfolder}{$p.PID}/{$p.story|makeseo}.html" placeholder="/{$p.story|makeseo}.html" />
                </div>
            </form>
        </div>                
    </div>
</div>
{literal}
<script type="text/javascript">
$('#overlay-shadow').removeClass('hide');
$('#overlay-container').removeClass('hide');  
$('.close-btn').click(function(){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
});
var i=10;		
function delayedAlert()  
{  
timeoutID = window.setTimeout(decrease, 1000);  
}  
function decrease()  
{  
$('#post-share-dismiss-counter').html('('+i+')');
i--;
if(i==-1){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide'); 
}else{
delayedAlert() ;	  
};
}  
delayedAlert(); 
function clearAlert()  
{  
window.clearTimeout(timeoutID);  
}
</script>
{/literal}