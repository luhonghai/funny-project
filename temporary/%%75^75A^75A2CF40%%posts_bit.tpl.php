<?php /* Smarty version 2.6.6, created on 2014-10-13 08:28:15
         compiled from posts_bit.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'stripslashes', 'posts_bit.tpl', 1, false),array('modifier', 'mb_truncate', 'posts_bit.tpl', 1, false),array('insert', 'return_youtube2', 'posts_bit.tpl', 12, false),array('insert', 'return_fod2', 'posts_bit.tpl', 16, false),array('insert', 'get_time_to_days_ago', 'posts_bit.tpl', 29, false),array('insert', 'get_fav_count', 'posts_bit.tpl', 35, false),array('insert', 'get_fav_status', 'posts_bit.tpl', 44, false),)), $this); ?>
					<li class=" gag-link" data-url="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" data-text="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('mb_truncate', true, $_tmp, 20, "...", 'UTF-8') : smarty_modifier_mb_truncate($_tmp, 20, "...", 'UTF-8')); ?>
" gagId="<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" itemType="list" id="entry-<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
">
                        <div class="content">
                            <div class="img-wrap">
                                <?php if ($this->_tpl_vars['posts'][$this->_sections['i']['index']]['nsfw'] == '1' && $_SESSION['FILTER'] != '0'): ?>
                                	<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
"><img src="<?php echo $this->_tpl_vars['baseurl']; ?>
/images/nsfw.jpg" alt="<?php echo ((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" /></a>
                                <?php else: ?>
                                	<?php if ($this->_tpl_vars['posts'][$this->_sections['i']['index']]['pic'] != ""): ?>
                                	<a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
"><img src="<?php echo $this->_tpl_vars['purl']; ?>
/t/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['pic']; ?>
" alt="<?php echo ((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" /></a>
                                    <?php else: ?>
                                        <?php if ($this->_tpl_vars['posts'][$this->_sections['i']['index']]['youtube_key'] != ""): ?>
                                        <center>
                                        <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'return_youtube2', 'value' => 'a', 'assign' => 'youtube', 'youtube' => $this->_tpl_vars['posts'][$this->_sections['i']['index']]['youtube_key'])), $this);  echo $this->_tpl_vars['youtube']; ?>

                                        </center>
                                        <?php else: ?>
                                        <center>
                                        <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'return_fod2', 'value' => 'a', 'assign' => 'fod', 'fod' => $this->_tpl_vars['posts'][$this->_sections['i']['index']]['fod_key'])), $this);  echo $this->_tpl_vars['fod']; ?>

                                        </center>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                <?php endif; ?>
                            </div>
                            <div class="watermark-clear"></div>
                        </div>
                        <div style="position:relative;width:220px;float:right">
                            <div class="info scriptolution-stop" id="action-<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" >
                                <h1><a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" class="jump_focus"><?php echo ((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</a></h1>
                                <h4>
                                    <a href="<?php echo $this->_tpl_vars['baseurl']; ?>
/user/<?php echo ((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
"><?php echo ((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['username'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
</a>
                                    <p><?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_time_to_days_ago', 'time' => $this->_tpl_vars['posts'][$this->_sections['i']['index']]['time_added'])), $this); ?>
</p>
                                </h4>                                
                                <p>
                                    <span class="comment">
                                    <iframe frameborder="0" scrolling="no" src="<?php echo $this->_tpl_vars['baseurl']; ?>
/fbcoms.php?id=<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" width="20px" height="13"></iframe>
                                    </span>
                                    <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_fav_count', 'value' => 'var', 'assign' => 'fcount', 'PID' => $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID'])), $this); ?>

                                    <span id="love_count_<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" class="loved" votes="<?php echo $this->_tpl_vars['fcount']; ?>
" score="0"><?php echo $this->_tpl_vars['fcount']; ?>
</span>
                                </p>
                                <ul class="actions"  style="">
                                    <li>
                                    	<a class="comment " href="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
#comments" onclick="window.location =  '<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
#comments';"><span><?php echo $this->_tpl_vars['lang165']; ?>
</span></a>
                                    </li>
                                    <li>
                                    	<?php if ($_SESSION['USERID'] != ""): ?>
                                        <?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_fav_status', 'value' => 'var', 'assign' => 'isfav', 'PID' => $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID'])), $this); ?>

                                        <a class="vote love <?php if ($this->_tpl_vars['isfav'] == '1'): ?>loved<?php endif; ?>" id="post_love_<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" rel="<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" href="javascript:void(0);"><span><?php echo $this->_tpl_vars['lang144']; ?>
</span></a>
                                        <?php else: ?>
                                    	<a class="vote love " id="post_love_<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" rel="<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/login"><span><?php echo $this->_tpl_vars['lang144']; ?>
</span></a>
                                        <?php endif; ?>
                                    </li>
                                </ul>
                                <div class="sharing-box ">
                                    <hr class="arrow" />
                                    <ul class="sharing ">
                                        <li class="facebook" id="share1-<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
">
                                        	<span id="list-share-twitter-<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
">
                                        	<a href="https://twitter.com/share" class="twitter-share-button" data-text="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['posts'][$this->_sections['i']['index']]['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('mb_truncate', true, $_tmp, 20, "...", 'UTF-8') : smarty_modifier_mb_truncate($_tmp, 20, "...", 'UTF-8')); ?>
" data-url="<?php echo $this->_tpl_vars['baseurl']; ?>
/gag/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" data-count="horizontal" data-via="">&nbsp;</a>		
                                            </span>
                                            <div style="float:right">
                                            <iframe frameborder="0" scrolling="no" src="<?php echo $this->_tpl_vars['baseurl']; ?>
/share.php?id=<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
" width="80px"></iframe>                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a class="fix" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/fix/<?php echo $this->_tpl_vars['posts'][$this->_sections['i']['index']]['PID']; ?>
"><?php echo $this->_tpl_vars['lang142']; ?>
</a>
                            </div>
                        </div>
                    </li>