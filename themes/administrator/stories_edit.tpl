		<div class="middle" id="anchor-content">
            <div id="page:main-container">
				<div class="columns ">
                
					<div class="side-col" id="page:left">
    					<h3>Gags</h3>
						
                        <ul id="isoft" class="tabs">
    						<li >
        						<a href="stories_manage.php" id="isoft_group_1" name="group_1" title="Manage Gags" class="tab-item-link ">
                                    <span>
                                        <span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        Manage Gags
                                    </span>
        						</a>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                <div id="isoft_group_1_content" style="display:none;">
                                	<div class="entry-edit">
                                        <div class="entry-edit-head">
                                            <h4 class="icon-head head-edit-form fieldset-legend">Edit Gag</h4>
                                            <div class="form-buttons">

                                            </div>
                                    	</div>

                                        <fieldset id="group_fields4">
                                            <div class="hor-scroll">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Gag ID </label></td>
                                                        <td class="value">
                                                        	{$story.PID}
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="USERID">Owner </label></td>
                                                        <td class="value">
                                                        	<select name="USERID" id="USERID">
                                                            {insert name=get_all_users assign=listallcats}
                                                            {section name=i loop=$listallcats}
                                                            <option value="{$listallcats[i].USERID}" {if $story.USERID eq $listallcats[i].USERID}selected{/if}>{$listallcats[i].username|stripslashes}</option>
                                                            {/section}
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[OWNER OF THE GAG]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Title </label></td>
                                                        <td class="value">
                                                        	<input id="story" name="story" value="{$story.story|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[TITLE OF THE GAG]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Tags </label></td>
                                                        <td class="value">
                                                        	<input id="tags" name="tags" value="{$story.tags|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[TAGS OF THE GAG]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Source </label></td>
                                                        <td class="value">
                                                        	<input id="source" name="source" value="{$story.source|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[SOURCE OF THE GAG]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="nsfw">UnSafe For Work? </label></td>
                                                        <td class="value">
                                                        	<select name="nsfw" id="nsfw">
                                                            <option value="1" {if $story.nsfw eq 1}selected{/if}>Yes</option>
                                                            <option value="0" {if $story.nsfw eq 0}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[IS THIS GAG UNSAFE FOR WORK?]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Date Added </label></td>
                                                        <td class="value">
                                                        	{$story.time_added|date_format:"%b %e, %Y"}
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="favclicks">Like Count </label></td>
                                                        <td class="value">
                                                        	<input id="favclicks" name="favclicks" value="{$story.favclicks}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF TIMES LIKE WAS CLICKED]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="unfavclicks">Dislike Count </label></td>
                                                        <td class="value">
                                                        	<input id="unfavclicks" name="unfavclicks" value="{$story.unfavclicks}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[NUMBER OF TIMES DISLIKE WAS CLICKED]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Active </label></td>
                                                        <td class="value">
                                                        	<select name="active" id="active">
                                                            <option value="1" {if $story.active eq 1}selected{/if}>Yes</option>
                                                            <option value="0" {if $story.active eq 0}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[GAG STATUS]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Last Viewed </label></td>
                                                        <td class="value">
                                                        	{$story.last_viewed|date_format:"%b %e, %Y"}
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">IP Posted With </label></td>
                                                        <td class="value">
                                                        	<a href="{$adminurl}/bans_ip_add.php?add={$story.pip}" target="_blank">{$story.pip}</a>
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="feat">Featured </label></td>
                                                        <td class="value">
                                                        	<select name="feat" id="feat">
                                                            <option value="1" {if $story.feat eq 1}selected{/if}>Yes</option>
                                                            <option value="0" {if $story.feat eq 0}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[FEATURED GAGS SHOW UP ON THE FEATURED BAR ON THE HOMEPAGE]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="phase">Section </label></td>
                                                        <td class="value">
                                                        	<select name="phase" id="phase">
                                                            <option value="2" {if $story.phase eq 2}selected{/if}>Hot</option>
                                                            <option value="1" {if $story.phase eq 1}selected{/if}>Trending</option>
                                                            <option value="0" {if $story.phase eq 0}selected{/if}>Vote</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[SECTION THE GAG SHOWS UP IN]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Photo/Video </label></td>
                                                        <td class="value" colspan="3">
                                                        	<center>
                                                            {if $story.pic ne ""}
                                                            <a href="{$baseurl}/random"><img src="{$purl}/t/l-{$story.pic}" alt="{$story.story|stripslashes}"/></a>
                                                            {else}
                                                                {if $story.youtube_key != ""}
                                                                <center>
                                                                {insert name=return_youtube value=a assign=youtube youtube=$story.youtube_key}{$youtube}
                                                                </center>
                                                                {else}
                                                                <center>
                                                                {insert name=return_fod value=a assign=fod fod=$story.fod_key}{$fod}
                                                                </center>
                                                                {/if}
                                                            {/if}
                                                            </center>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                        </fieldset>
									</div>
								</div>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                               
                                
                                
                                
    						</li>
                            
                            <li >
                                <a href="stories_validate.php" id="isoft_group_2" name="group_2" title="Validate Gags" class="tab-item-link">
                                	<span>
                                    	<span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        Validate Gags
                                    </span>
                                </a>
                                <div id="isoft_group_2_content" style="display:none;"></div>
                            </li>
                            
                            <li >
                                <a href="stories_reported.php" id="isoft_group_4" name="group_4" title="Reported Gags" class="tab-item-link">
                                	<span>
                                    	<span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        Reported Gags
                                    </span>
                                </a>
                                <div id="isoft_group_4_content" style="display:none;"></div>
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
                               <h3 class="icon-head head-products">Gags - Edit Gag</h3>
                               <p class="content-buttons form-buttons">
                                    <button  id="id_be616be1324d8ae4516f276d17d34b9c" type="button" class="scalable save" onclick="document.main_form.submit();" style=""><span>Save Changes</span></button>			
                                </p>
                            </div>
                            
                            <form action="stories_edit.php?PID={$smarty.request.PID}" method="post" id="main_form" name="main_form" enctype="multipart/form-data">
                            	<input type="hidden" id="submitform" name="submitform" value="1" >
                            	<div style="display:none"></div>
                            </form>
						</div>
					</div>
				</div>

                        </div>
        </div>