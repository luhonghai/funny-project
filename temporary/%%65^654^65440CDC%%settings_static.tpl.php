<?php /* Smarty version 2.6.6, created on 2014-10-13 08:44:51
         compiled from administrator/settings_static.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'stripslashes', 'administrator/settings_static.tpl', 56, false),array('modifier', 'htmlspecialchars', 'administrator/settings_static.tpl', 56, false),)), $this); ?>
		<div class="middle" id="anchor-content">
            <div id="page:main-container">
				<div class="columns ">
                
					<div class="side-col" id="page:left">
    					<h3>Settings</h3>
						
                        <ul id="isoft" class="tabs">
    						<li >
        						<a href="settings_general.php" id="isoft_group_1" name="group_1" title="General Settings" class="tab-item-link ">
                                    <span>
                                        <span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        General Settings
                                    </span>
        						</a>
                                <div id="isoft_group_1_content" style="display:none;"></div>
    						</li>
                            
                            <li >
                                <a href="settings_meta.php" id="isoft_group_9" name="group_9" title="Meta Settings" class="tab-item-link">
                                	<span>
                                    	<span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        Meta Settings
                                    </span>
                                </a>
                                <div id="isoft_group_9_content" style="display:none;"></div>
                            </li>
                            
                            <li >
                                <a href="settings_static.php" id="isoft_group_11" name="group_11" title="Static Pages" class="tab-item-link">
                                	<span>
                                    	<span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        Static Pages
                                    </span>
                                </a>
                                <div id="isoft_group_11_content" style="display:none;">
                                	<div class="entry-edit">
                                        <div class="entry-edit-head">
                                            <h4 class="icon-head head-edit-form fieldset-legend">Static Pages</h4>
                                            <div class="form-buttons">

                                            </div>
                                    	</div>

                                        <fieldset id="group_fields4">
                                            <div class="hor-scroll">
                                            	<form action="settings_static.php" method="post" id="main_form1" name="main_form1" enctype="multipart/form-data">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Terms Of Use Title </label></td>
                                                        <td class="value">
                                                            <input id="title" name="title" value="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static1']['title'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
" class=" required-entry required-entry input-text" type="text"  style="width:700px"/>
                                                        </td>
                                                    </tr>   
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Terms Of Use Data </label></td>
                                                        <td class="value">
                                                            <textarea id="value" name="value" class=" textarea" type="textarea" style="width:700px; height:400px;" ><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static1']['value'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
</textarea>
                                                        </td>
                                                    </tr>  
                                                    <tr class="hidden">
                                                        <td class="label">
                                                                <button type="button" class="scalable save" onclick="document.main_form1.submit();" style=""><span>Save Changes</span></button>			
                                                        </td>
                                                        <td class="value">
                                                        </td>
                                                    </tr>                                             
                                                </tbody>
                                                </table>
                                                <input type="hidden" id="submitform1" name="submitform1" value="1" >
                                                </form>
                                                
                                                <form action="settings_static.php" method="post" id="main_form2" name="main_form2" enctype="multipart/form-data">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Privacy Policy Title </label></td>
                                                        <td class="value">
                                                            <input id="title" name="title" value="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static2']['title'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
" class=" required-entry required-entry input-text" type="text"  style="width:700px"/>
                                                        </td>
                                                    </tr>   
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Privacy Policy Data </label></td>
                                                        <td class="value">
                                                            <textarea id="value" name="value" class=" textarea" type="textarea" style="width:700px; height:400px;" ><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static2']['value'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
</textarea>
                                                        </td>
                                                    </tr>  
                                                    <tr class="hidden">
                                                        <td class="label">
                                                                <button type="button" class="scalable save" onclick="document.main_form2.submit();" style=""><span>Save Changes</span></button>			
                                                        </td>
                                                        <td class="value">
                                                        </td>
                                                    </tr>                                             
                                                </tbody>
                                                </table>
                                                <input type="hidden" id="submitform2" name="submitform2" value="1" >
                                                </form>
                                                
                                                <form action="settings_static.php" method="post" id="main_form3" name="main_form3" enctype="multipart/form-data">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">About Us Title </label></td>
                                                        <td class="value">
                                                            <input id="title" name="title" value="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static3']['title'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
" class=" required-entry required-entry input-text" type="text"  style="width:700px"/>
                                                        </td>
                                                    </tr>   
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">About Us Data </label></td>
                                                        <td class="value">
                                                            <textarea id="value" name="value" class=" textarea" type="textarea" style="width:700px; height:400px;" ><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static3']['value'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
</textarea>
                                                        </td>
                                                    </tr>  
                                                    <tr class="hidden">
                                                        <td class="label">
                                                                <button type="button" class="scalable save" onclick="document.main_form3.submit();" style=""><span>Save Changes</span></button>			
                                                        </td>
                                                        <td class="value">
                                                        </td>
                                                    </tr>                                             
                                                </tbody>
                                                </table>
                                                <input type="hidden" id="submitform3" name="submitform3" value="1" >
                                                </form>
                                                
                                                <form action="settings_static.php" method="post" id="main_form4" name="main_form4" enctype="multipart/form-data">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">9 Rules Title </label></td>
                                                        <td class="value">
                                                            <input id="title" name="title" value="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static4']['title'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
" class=" required-entry required-entry input-text" type="text"  style="width:700px"/>
                                                        </td>
                                                    </tr>   
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">9 Rules Data </label></td>
                                                        <td class="value">
                                                            <textarea id="value" name="value" class=" textarea" type="textarea" style="width:700px; height:400px;" ><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static4']['value'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
</textarea>
                                                        </td>
                                                    </tr>  
                                                    <tr class="hidden">
                                                        <td class="label">
                                                                <button type="button" class="scalable save" onclick="document.main_form4.submit();" style=""><span>Save Changes</span></button>			
                                                        </td>
                                                        <td class="value">
                                                        </td>
                                                    </tr>                                             
                                                </tbody>
                                                </table>
                                                <input type="hidden" id="submitform4" name="submitform4" value="1" >
                                                </form>
                                                
                                                <form action="settings_static.php" method="post" id="main_form5" name="main_form5" enctype="multipart/form-data">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">FAQ Title </label></td>
                                                        <td class="value">
                                                            <input id="title" name="title" value="<?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static5']['title'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
" class=" required-entry required-entry input-text" type="text"  style="width:700px"/>
                                                        </td>
                                                    </tr>   
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">FAQ Data </label></td>
                                                        <td class="value">
                                                            <textarea id="value" name="value" class=" textarea" type="textarea" style="width:700px; height:400px;" ><?php echo ((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['static5']['value'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)))) ? $this->_run_mod_handler('htmlspecialchars', true, $_tmp) : htmlspecialchars($_tmp)); ?>
</textarea>
                                                        </td>
                                                    </tr>  
                                                    <tr class="hidden">
                                                        <td class="label">
                                                                <button type="button" class="scalable save" onclick="document.main_form5.submit();" style=""><span>Save Changes</span></button>			
                                                        </td>
                                                        <td class="value">
                                                        </td>
                                                    </tr>                                             
                                                </tbody>
                                                </table>
                                                <input type="hidden" id="submitform5" name="submitform5" value="1" >
                                                </form>
                                            </div>
                                        </fieldset>
									</div>
								</div>
                            </li>
    
						</ul>
                        
						<script type="text/javascript">
                            isoftJsTabs = new varienTabs('isoft', 'main_form', 'isoft_group_11', []);
                        </script>
                        
					</div>
                    
					<div class="main-col" id="content">
						<div class="main-col-inner">
							<div id="messages">
                            <?php if ($this->_tpl_vars['message'] != "" || $this->_tpl_vars['error'] != ""): ?>
                            	<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "administrator/show_message.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                            <?php endif; ?>
                            </div>

                            <div class="content-header">
                               <h3 class="icon-head head-products">Settings - Static Pages</h3>
                            </div>
                            
                            <div id="main_form">
                            </div>

						</div>
					</div>
				</div>

                        </div>
        </div>