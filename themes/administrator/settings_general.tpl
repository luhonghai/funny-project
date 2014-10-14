		<div class="middle" id="anchor-content">
            <div id="page:main-container">
				<div class="columns ">
                
					<div class="side-col" id="page:left">
    					<h3>Settings</h3>
						
                        <ul id="isoft" class="tabs">
    						<li >
        						<a href="settings_general.php" id="isoft_group_1" name="group_1" title="Settings" class="tab-item-link ">
                                    <span>
                                        <span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        General Settings
                                    </span>
        						</a>
                                
        						<div id="isoft_group_1_content" style="display:none;">
                                	<div class="entry-edit">
                                        <div class="entry-edit-head">
                                            <h4 class="icon-head head-edit-form fieldset-legend">General Settings</h4>
                                            <div class="form-buttons">

                                            </div>
                                    	</div>

                                        <fieldset id="group_fields4">
                                            <div class="hor-scroll">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Website Name </label></td>
                                                        <td class="value">
                                                        	<input id="site_name" name="site_name" value="{$site_name}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[YOUR WEBSITE NAME]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="contact_email">Contact E-Mail </label></td>
                                                        <td class="value">
                                                        	<input id="contact_email" name="contact_email" value="{$contact_email}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[E-MAIL ADDRESS MAILS FROM THE CONTACT FORM ARE SENT TO]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Website E-Mail </label></td>
                                                        <td class="value">
                                                            <input id="site_email" name="site_email" value="{$site_email}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[WHERE E-MAILS ARE SENT FROM]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Items Per Page </label></td>
                                                        <td class="value">
                                                            <input id="items_per_page" name="items_per_page" value="{$items_per_page}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[MAXIMUM ITEMS TO LIST PER PAGE]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Upload Quota </label></td>
                                                        <td class="value">
                                                            <input id="quota" name="quota" value="{$quota}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[MAXIMUM NUMBER OF GAGS A USER CAN SUBMIT IN A DAY]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Gag Validation </label></td>
                                                        <td class="value">
                                                            <select id="approve_stories" name="approve_stories" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $approve_stories eq "1"}selected{/if}>Yes</option>
                											<option value="0" {if $approve_stories eq "0"}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[REQUIRE NEWLY POSTED GAGS TO BE APPROVED BEFORE BEING MADE PUBLIC]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Approvals Needed </label></td>
                                                        <td class="value">
                                                            <input id="myes" name="myes" value="{$myes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF FAVORITE CLICKS A GAG MUST GET BEFORE IT IS MOVED FROM THE VOTING PAGE TO THE TRENDING PAGE]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Deletions Needed </label></td>
                                                        <td class="value">
                                                            <input id="mno" name="mno" value="{$mno}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF "NO" VOTES A GAG MUST GET BEFORE IT IS DELETED FOREVER WHEN ON THE VOTING AND TRENDING PAGES]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="mtrend">Hot Votes </label></td>
                                                        <td class="value">
                                                            <input id="mtrend" name="mtrend" value="{$mtrend}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF FAVORITE CLICKS A GAG MUST GET BEFORE IT IS MOVED FROM THE TRENDING PAGE TO THE HOT PAGE]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Your Twitter Username </label></td>
                                                        <td class="value">
                                                            <input id="twitter" name="twitter" value="{$twitter}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[YOUR TWITTER ACCOUNT USERNAME IS LINKED WHEN USERS SHARE STORIES ON TWITTER]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Facebook Application ID </label></td>
                                                        <td class="value">
                                                            <input id="FACEBOOK_APP_ID" name="FACEBOOK_APP_ID" value="{$FACEBOOK_APP_ID}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[FACEBOOK APPLICATION ID YOU GOT WHEN YOU CREATED YOUR FACEBOOK APPLICATION]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Facebook Secret </label></td>
                                                        <td class="value">
                                                            <input id="FACEBOOK_SECRET" name="FACEBOOK_SECRET" value="{$FACEBOOK_SECRET}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[FACEBOOK APPLICATION SECRET YOU GOT WHEN YOU CREATED YOUR FACEBOOK APPLICATION]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="FACEBOOK_PROFILE">Facebook Profile </label></td>
                                                        <td class="value">
                                                            <input id="FACEBOOK_PROFILE" name="FACEBOOK_PROFILE" value="{$FACEBOOK_PROFILE}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[CREATE A FACEBOOK PAGE THEN ENTER YOUR USERNAME HERE, SO IF YOUR FACEBOOK PAGE WAS http://www.facebook.com/9gag YOU WOULD ENTER 9gag]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="FACEBOOK_ADMIN">Facebook Admin Profile ID </label></td>
                                                        <td class="value">
                                                            <input id="FACEBOOK_ADMIN" name="FACEBOOK_ADMIN" value="{$FACEBOOK_ADMIN}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[ENTER THE FACEBOOK PROFILE ID OF THE USER YOU WANT TO BE THE ADMIN, NEEDED FOR FACEBOOK LIKES]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Watermark Images? </label></td>
                                                        <td class="value">
                                                            <select id="wm" name="wm" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $wm eq "1"}selected{/if}>Yes</option>
                											<option value="0" {if $wm eq "0"}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[DO YOU WANT TO ADD YOUR LOGO TO UPLOADED IMAGES?]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Your Watermark </label></td>
                                                        <td class="value">
                                                            <input id="watermark" name="watermark" value="{$watermark}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NAME OF YOUR WATERMARK IMAGE, ENSURE YOU UPLOAD IT TO YOUR SERVER IMAGES FOLDER]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="infinity_paging">Paging Mode </label></td>
                                                        <td class="value">
                                                            <select id="infinity_paging" name="infinity_paging" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $infinity_paging eq "1"}selected{/if}>Infinity Paging</option>
                											<option value="0" {if $infinity_paging eq "0"}selected{/if}>Normal Paging</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[TYPE OF PAGING TO USE ON HOT, TRENDING AND VOTE PAGES]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="enable_featured">Show Featured Bar </label></td>
                                                        <td class="value">
                                                            <select id="enable_featured" name="enable_featured" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $enable_featured eq "1"}selected{/if}>Yes</option>
                											<option value="0" {if $enable_featured eq "0"}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[SHOW THE FEATURED GAGS BAR ON THE HOMEPAGE?]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="points_gag">Points Per Gag </label></td>
                                                        <td class="value">
                                                            <input id="points_gag" name="points_gag" value="{$points_gag}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF POINTS AWARDED FOR EACH NEW GAG]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="points_view">Points Per View </label></td>
                                                        <td class="value">
                                                            <input id="points_view" name="points_view" value="{$points_view}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF POINTS AWARDED FOR EACH GAG THE MEMBER VIEWS]</td>
                                                        <td><small></small></td>
                                                    </tr>

                                                </tbody>
                                                </table>
                                            </div>
                                        </fieldset>
									</div>
								</div>
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
                                <div id="isoft_group_11_content" style="display:none;"></div>
                            </li>
    
						</ul>
                        
						<script type="text/javascript">
                            isoftJsTabs = new varienTabs('isoft', 'main_form', 'isoft_group_1', []);
                        </script>
                        
					</div>
                    
					<div class="main-col" id="content">
						<div class="main-col-inner">
							<div id="messages">
                            {if $message ne "" OR $error ne ""}
                            	{include file="administrator/show_message.tpl"}
                            {/if}
                            </div>

                            <div class="content-header">
                               <h3 class="icon-head head-products">Settings - General Settings</h3>
                               <p class="content-buttons form-buttons">
                                    <button  id="id_be616be1324d8ae4516f276d17d34b9c" type="button" class="scalable save" onclick="document.main_form.submit();" style=""><span>Save Changes</span></button>			
                                </p>
                            </div>
                            
                            <form action="settings_general.php" method="post" id="main_form" name="main_form" enctype="multipart/form-data">
                            	<input type="hidden" id="submitform" name="submitform" value="1" >
                            	<div style="display:none"></div>
                            </form>
						</div>
					</div>
				</div>

                        </div>
        </div>