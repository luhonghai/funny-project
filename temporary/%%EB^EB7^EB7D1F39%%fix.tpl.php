<?php /* Smarty version 2.6.6, created on 2014-10-13 08:34:00
         compiled from fix.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'stripslashes', 'fix.tpl', 11, false),)), $this); ?>
<?php if ($this->_tpl_vars['error'] != ""): ?>
<p class="form-message error"><?php echo $this->_tpl_vars['error']; ?>
</p>
<?php elseif ($this->_tpl_vars['message'] != ""): ?>
<p class="form-message success"><?php echo $this->_tpl_vars['message']; ?>
</p>
<?php endif; ?>
<div id="main">
    <div id="content-holder">
        <div id="scriptolution-soft-post" class="scriptolution-soft-box static">
            <div class="content form_photo">
                <form id="forma" class="modal" name="forma" action="#" enctype="multipart/form-data" method="post">
                    <h3><?php echo ((is_array($_tmp=$this->_tpl_vars['p']['story'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
 [Fixed]</h3>
                    <h4><?php echo $this->_tpl_vars['lang184']; ?>
 <?php echo $this->_tpl_vars['lang185']; ?>
</h4>
                    <div class="post-container">
                        <div class="img-wrap">
                        	<img src="<?php echo $this->_tpl_vars['purl']; ?>
/t/l-<?php echo $this->_tpl_vars['p']['pic']; ?>
"/>
                        </div>
                    </div>
                    <h4><?php echo $this->_tpl_vars['lang186']; ?>
 <?php echo $this->_tpl_vars['lang187']; ?>
</h4>
                    <div class="field">
                        <label>
                            <h4><?php echo $this->_tpl_vars['lang103']; ?>
</h4>                            
                            <input id="photo_file_upload" class="file text " type="file" name="image" style="display:block;"></input>
                        </label>
                    	<p class="info"><?php echo $this->_tpl_vars['lang107']; ?>
</p>
                    </div>
                    <div class="field">
                        <label>
                            <h4><?php echo $this->_tpl_vars['lang113']; ?>
<span>(<?php echo $this->_tpl_vars['lang114']; ?>
)</span></h4>
                            <input id="photo_tag_input" type="text" class="text tag_input tipped" name="tags" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['tags'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" />
                            <p class="info" style="visibility:hidden"><?php echo $this->_tpl_vars['lang118']; ?>
</p>
                        </label>
                    </div>
                    <hr />
                    <div class="field checkbox">
                    	<label for="submit-nsfw">
                    	<input id="submit-nsfw" type="checkbox" class="checkbox" name="nsfw" value="1" <?php if ($this->_tpl_vars['p']['nsfw'] == '1'): ?>checked="checked"<?php endif; ?> /><?php echo $this->_tpl_vars['lang117']; ?>
</label>
                    </div>
                    <input type="hidden" name="fixsub" id="fixsub" value="1" />
                </form>
            </div>        
            <div class="actions">
                <ul class="buttons">
                    <li class="loading-btn" style="visibility:hidden"><a class="button loading"></a></li>
                    <li class="form-btn"><a class="button" href="#" onclick="document.forma.submit();" ><?php echo $this->_tpl_vars['lang120']; ?>
</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="side-bar">
    <div class="msg-box notice">
    	<h3><?php echo $this->_tpl_vars['lang121']; ?>
</h3>
    	<p><?php echo $this->_tpl_vars['quota']; ?>
 <?php echo $this->_tpl_vars['lang122']; ?>
</p>
    </div>

    <div class="msg-box">
        <h3><?php echo $this->_tpl_vars['lang123']; ?>
</h3>
        <ul class="submit-info">
            <li><b><?php echo $this->_tpl_vars['lang181']; ?>
</b></li>
            <li><b><?php echo $this->_tpl_vars['lang182']; ?>
</b></li>
        </ul>
    </div>
</div>
<div id="footer" class="">