<?php /* Smarty version 2.6.6, created on 2014-10-13 08:34:25
         compiled from view.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'stripslashes', 'view.tpl', 79, false),array('modifier', 'date_format', 'view.tpl', 83, false),array('modifier', 'mb_truncate', 'view.tpl', 170, false),array('insert', 'get_fav_count', 'view.tpl', 85, false),array('insert', 'get_fav_status', 'view.tpl', 93, false),array('insert', 'get_short_url', 'view.tpl', 102, false),array('insert', 'return_fod', 'view.tpl', 138, false),array('function', 'math', 'view.tpl', 163, false),)), $this); ?>
<?php if ($this->_tpl_vars['p']['nsfw'] == '1' && $_SESSION['USERID'] == ""): ?>
	<div>
        <div class="post-next-prev">
            <?php if ($this->_tpl_vars['prev'] != ""): ?>
            <a id="prev_post" class="prev-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['prev']; ?>
" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            <?php else: ?>
            <a id="prev_post" class="prev-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            <?php endif; ?>
            <?php if ($this->_tpl_vars['next'] != ""): ?>
            <a id="next_post" class="next-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['next']; ?>
" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            <?php else: ?>
            <a id="next_post" class="next-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            <?php endif; ?>
        </div>
    </div>
    <div id="main" class="middle">
        <div id="content-holder">
            <div id="content-holder">
                <div id="content" class="nsfw">
                    <div class="content">
                        <img src="<?php echo $this->_tpl_vars['baseurl']; ?>
/images/nsfw.jpg" alt="NSFW" />
                    </div>
                    <div class="info">
                        <h1><?php echo $this->_tpl_vars['lang154']; ?>
</h1>
                        <p><?php echo $this->_tpl_vars['lang155']; ?>
</p>
                        <div class="message-box alt">
                            <div class="inline-message">
                            	<p><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/safe?m=<?php echo $this->_tpl_vars['eurl']; ?>
"><?php echo $this->_tpl_vars['lang156']; ?>
 &raquo;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer" class="middle">
<?php elseif ($this->_tpl_vars['p']['nsfw'] == '1' && $_SESSION['FILTER'] == '1'): ?>
	<div>
        <div class="post-next-prev">
            <?php if ($this->_tpl_vars['prev'] != ""): ?>
            <a id="prev_post" class="prev-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['prev']; ?>
" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            <?php else: ?>
            <a id="prev_post" class="prev-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
            <?php endif; ?>
            <?php if ($this->_tpl_vars['next'] != ""): ?>
            <a id="next_post" class="next-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['next']; ?>
" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            <?php else: ?>
            <a id="next_post" class="next-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
            <?php endif; ?>
        </div>
    </div>
    <div id="main" class="middle">
        <div id="content-holder">
            <div id="content-holder">
                <div id="content" class="nsfw">
                    <div class="content">
                        <img src="<?php echo $this->_tpl_vars['baseurl']; ?>
/images/nsfw.jpg" alt="NSFW" />
                    </div>
                    <div class="info">
                        <h1><?php echo $this->_tpl_vars['lang154']; ?>
</h1>
                        <p><?php echo $this->_tpl_vars['lang155']; ?>
</p>
                        <div class="message-box alt">
                            <div class="inline-message">
                            	<p><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/safe?m=<?php echo $this->_tpl_vars['eurl']; ?>
"><?php echo $this->_tpl_vars['lang156']; ?>
 &raquo;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer" class="middle">
<?php else: ?>
    <div id="main">
        <div id="content-holder">
            <div class="post-info-pad">
                <h1><?php echo ((is_array($_tmp=$this->_tpl_vars['p']['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</h1>
                <p>
                    <a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
"><?php echo ((is_array($_tmp=$this->_tpl_vars['p']['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</a>
                    <span class="seperator">|</span>
                    <?php echo ((is_array($_tmp=$this->_tpl_vars['p']['time_added'])) ? $this->_run_mod_handler('date_format', true, $_tmp) : smarty_modifier_date_format($_tmp)); ?>
 <?php echo ((is_array($_tmp=$this->_tpl_vars['p']['time_added'])) ? $this->_run_mod_handler('date_format', true, $_tmp, "%I:%M %p") : smarty_modifier_date_format($_tmp, "%I:%M %p")); ?>

                    <span class="comment"><fb:comments-count href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
"></fb:comments-count></span>
                    <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_fav_count', 'value' => 'var', 'assign' => 'fcount', 'PID' => $this->_tpl_vars['p']['PID'])), $this); ?>

                    <span class="loved"><span id="love_count" votes="<?php echo $this->_tpl_vars['fcount']; ?>
" ><?php echo $this->_tpl_vars['fcount']; ?>
</span></span>
                    <?php if ($this->_tpl_vars['owner'] == '1'): ?>
                    <span class="seperator">|</span>
                    <a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/deletepost.php?pid=<?php echo $this->_tpl_vars['p']['PID']; ?>
" class="delete" onclick="return confirm('<?php echo $this->_tpl_vars['lang147']; ?>
');"><?php echo $this->_tpl_vars['lang145']; ?>
</a>	
                    <?php endif; ?>										
                </p>
                <ul class="actions">
                	<li><?php if ($_SESSION['USERID'] != ""):  require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_fav_status', 'value' => 'var', 'assign' => 'isfav', 'PID' => $this->_tpl_vars['p']['PID'])), $this); ?>
<a id="post_view_love" rel="<?php echo $this->_tpl_vars['p']['PID']; ?>
" class="love <?php if ($this->_tpl_vars['isfav'] == '1'): ?>current<?php endif; ?>" href="javascript:void(0);"><?php echo $this->_tpl_vars['lang144']; ?>
</a><?php else: ?><a class="love" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/login"><?php echo $this->_tpl_vars['lang144']; ?>
</a><?php endif; ?></li>
                </ul>            
            </div>
        
            <div id="post-control-bar" class="spread-bar-wrap">
                <div class="spread-bar">
                    <div class="twitter-btn"><a href="https://twitter.com/share" class="twitter-share-button" data-text="<?php echo $this->_tpl_vars['p']['title']; ?>
" data-url="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
" data-count="horizontal" data-via="">&nbsp;</a> </div>
                    <div class="facebook-share-btn"><a class="facebook-share-button" name="fb_share" type="button_count" share_url="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
?ref=fb-share"></a> </div>
                    <div class="facebook-btn"><fb:like href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
?ref=fb" send="false" layout="button_count" width="90px" show_faces="false" font="" label="Post"></fb:like> </div>
                    <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_short_url', 'value' => 'a', 'assign' => 'tto', 'PID' => $this->_tpl_vars['p']['PID'], 'short' => $this->_tpl_vars['p']['short'])), $this); ?>

                    <?php if ($this->_tpl_vars['short_urls'] == '1'): ?>
                    <div class="google-btn"><g:plusone size="medium" href="<?php echo $this->_tpl_vars['tto']; ?>
"></g:plusone> </div>
                    <?php else: ?>
                    <div class="google-btn"><g:plusone size="medium" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
"></g:plusone> </div>
                    <?php endif; ?>
                    <div class="stumbleupon-btn"><su:badge layout="1" location="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
?ref=stumbleupon"></su:badge> <?php echo '<script type="text/javascript"> (function() { var li = document.createElement(\'script\'); li.type = \'text/javascript\'; li.async = true;  li.src = \'https://platform.stumbleupon.com/1/widgets.js\';  var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(li, s);  })(); </script>'; ?>
</div>
                    <?php if ($this->_tpl_vars['p']['pic'] != ""): ?>
                    <div class="stumbleupon-btn" style="padding-left:10px;"><a href="http://pinterest.com/pin/create/button/?url=<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
&media=<?php echo $this->_tpl_vars['purl']; ?>
/t/l-<?php echo $this->_tpl_vars['p']['pic']; ?>
&description=<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>
                    <?php endif; ?>
                </div>
                <div class="post-next-prev">
                	<?php if ($this->_tpl_vars['prev'] != ""): ?>
                	<a id="prev_post" class="prev-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['prev']; ?>
" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
                    <?php else: ?>
                    <a id="prev_post" class="prev-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Previous', 1]);"></a>
                    <?php endif; ?>
                    <?php if ($this->_tpl_vars['next'] != ""): ?>
                	<a id="next_post" class="next-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['next']; ?>
" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
                    <?php else: ?>
                    <a id="next_post" class="next-post" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random" onclick="_gaq.push(['_trackEvent', 'View-Post', 'Clicked', 'Next', 1]);"></a>
                    <?php endif; ?>
                </div>
            </div>
            <div id="content">
                <div class="post-container">
                    <div class="img-wrap">
                        <?php if ($this->_tpl_vars['p']['pic'] != ""): ?>
                        <a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/random"><img src="<?php echo $this->_tpl_vars['purl']; ?>
/t/l-<?php echo $this->_tpl_vars['p']['pic']; ?>
" alt="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
"/></a>
                        <?php else: ?>
                        	<?php if ($this->_tpl_vars['p']['youtube_key'] != ""): ?>
                            <center>
                            <iframe title="scriptolution video player" width="540" height="445" src="http://www.youtube.com/embed/<?php echo $this->_tpl_vars['p']['youtube_key']; ?>
?wmode=opaque&hl=en_US&fs=1" frameborder="0" allowfullscreen></iframe>
                            </center>
                            <?php else: ?>
                            <center>
                            <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'return_fod', 'value' => 'a', 'assign' => 'fod', 'fod' => $this->_tpl_vars['p']['fod_key'])), $this);  echo $this->_tpl_vars['fod']; ?>

                            </center>
                            <?php endif; ?>
                        <?php endif; ?>
                    </div>
                </div>            
                <div class="comment-section">
                    <h3 class="title" id="comments"><?php echo $this->_tpl_vars['lang143']; ?>
</h3>
                    <span class="report-and-source">
                    <p>
                        <a class="fix" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/fix/<?php echo $this->_tpl_vars['p']['PID']; ?>
"><?php echo $this->_tpl_vars['lang142']; ?>
</a>
                        <?php if ($this->_tpl_vars['owner'] != '1'): ?><span id="report-item-separator">|</span><a id="report-item-link" class="report report-item" entryId="<?php echo $this->_tpl_vars['p']['PID']; ?>
" href="javascript:void(0);"><?php echo $this->_tpl_vars['lang146']; ?>
</a><?php endif; ?>
                        <span id="report-item-separator">|</span><?php if ($this->_tpl_vars['p']['source'] == ""):  echo $this->_tpl_vars['lang141'];  else:  echo ((is_array($_tmp=$this->_tpl_vars['p']['source'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp));  endif; ?>
                    </p>
                    </span>
                    <div style="margin-left:10px">
                    	<fb:comments href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['p']['PID']; ?>
" num_posts="10" width="700"></fb:comments>				
                    </div>
                    <div id="fb-root"></div>                
                </div>
            	<br/>
            
                <div class="post-may-like">
                    <div id="entries-content" class="grid">  
                    	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['r']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['i']['show'] = true;
$this->_sections['i']['max'] = $this->_sections['i']['loop'];
$this->_sections['i']['step'] = 1;
$this->_sections['i']['start'] = $this->_sections['i']['step'] > 0 ? 0 : $this->_sections['i']['loop']-1;
if ($this->_sections['i']['show']) {
    $this->_sections['i']['total'] = $this->_sections['i']['loop'];
    if ($this->_sections['i']['total'] == 0)
        $this->_sections['i']['show'] = false;
} else
    $this->_sections['i']['total'] = 0;
if ($this->_sections['i']['show']):

            for ($this->_sections['i']['index'] = $this->_sections['i']['start'], $this->_sections['i']['iteration'] = 1;
                 $this->_sections['i']['iteration'] <= $this->_sections['i']['total'];
                 $this->_sections['i']['index'] += $this->_sections['i']['step'], $this->_sections['i']['iteration']++):
$this->_sections['i']['rownum'] = $this->_sections['i']['iteration'];
$this->_sections['i']['index_prev'] = $this->_sections['i']['index'] - $this->_sections['i']['step'];
$this->_sections['i']['index_next'] = $this->_sections['i']['index'] + $this->_sections['i']['step'];
$this->_sections['i']['first']      = ($this->_sections['i']['iteration'] == 1);
$this->_sections['i']['last']       = ($this->_sections['i']['iteration'] == $this->_sections['i']['total']);
?>                  
                        <ul id="grid-col-<?php if ($this->_sections['i']['iteration'] > 3): ?>2<?php else: ?>1<?php endif; ?>" class="col-<?php if ($this->_sections['i']['iteration'] > 3):  echo smarty_function_math(array('equation' => "x - 3",'x' => $this->_sections['i']['iteration']), $this); else:  echo $this->_sections['i']['iteration'];  endif; ?>">
                            <li class=" ">
                                <a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['r'][$this->_sections['i']['index']]['PID']; ?>
" class="jump_stop">
                                    <div style="" class="thimage">
                                        <?php if ($this->_tpl_vars['r'][$this->_sections['i']['index']]['nsfw'] == '1' && $_SESSION['FILTER'] != '0'): ?><img src="<?php echo $this->_tpl_vars['baseurl']; ?>
/images/nsfw_thumb.jpg" alt="<?php echo ((is_array($_tmp=$this->_tpl_vars['r'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" /><?php else: ?><img src="<?php echo $this->_tpl_vars['purl']; ?>
/t/s-<?php echo $this->_tpl_vars['r'][$this->_sections['i']['index']]['pic']; ?>
" alt="<?php echo ((is_array($_tmp=$this->_tpl_vars['r'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" /><?php endif; ?>
                                    </div>
                                </a>
                                <h1><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['r'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('mb_truncate', true, $_tmp, 20, "...", 'UTF-8') : smarty_modifier_mb_truncate($_tmp, 20, "...", 'UTF-8')); ?>
</h1>
                                <h4><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['r'][$this->_sections['i']['index']]['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
"><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['r'][$this->_sections['i']['index']]['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('mb_truncate', true, $_tmp, 20, "...", 'UTF-8') : smarty_modifier_mb_truncate($_tmp, 20, "...", 'UTF-8')); ?>
</a></h4>
                            </li>
                        </ul>
                        <?php endfor; endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'right.tpl', 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	<?php echo '
    <script type="text/javascript">
    var adloca=$(\'#moving-boxes\').offset().top; 
     $(window).scroll(function () { 
        var curloca=$(window).scrollTop();
        if(curloca>adloca){
            $(\'#moving-boxes\').css(\'position\',\'fixed\');
            $(\'#moving-boxes\').css(\'top\',\'55px\');
            $(\'#moving-boxes\').css(\'z-index\',\'200\');
        };
        if(curloca <= adloca){
            $(\'#moving-boxes\').css(\'position\',\'static\');
            $(\'#moving-boxes\').css(\'top\',\'!important\');
            $(\'#moving-boxes\').css(\'z-index\',\'!important\');
        };
        });    
    </script>
    <script type="text/javascript">
    $(\'#post_view_love\').click(function(){
        if( $(\'#post_view_love\').hasClass(\'current\')){
            $(\'#post_view_love\').removeClass(\'current\');
        likedeg(-1);
        }else{
            likedeg(1);
        $(\'#post_view_love\').addClass(\'current\');
        }
        });
    function likedeg(x){
        jQuery.ajax({
            type:\'POST\',
            url:\'';  echo $this->_tpl_vars['baseurl'];  echo '\'+ \'/likedeg.php\',
            data:\'art=\'+x+\'&pid=\' +  \'';  echo $this->_tpl_vars['p']['PID'];  echo '\' ,
            success:function(e){
                $(\'#love_count\').html(e);
                }
            });
        }
    </script>
    <script type="text/javascript">
         var barloc=$(\'#post-control-bar\').offset().top; 
         $(window).scroll(function () {
              var curloc=$(window).scrollTop();
              if(curloc>barloc){
        $(\'#post-control-bar\').addClass(\'topbarfixed\');
              }else{
                $(\'#post-control-bar\').removeClass(\'topbarfixed\'); 
                 }
         });
    </script>
    '; ?>

</div>
<div id="footer" class="">
<?php endif; ?>