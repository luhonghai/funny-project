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
                                                        <td class="label"><label for="status">Connect via Twitter </label></td>
                                                        <td class="value">
                                                            <select id="TC" name="TC" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $TC eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $TC eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable Thumbnails view]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Twitter Application ID </label></td>
                                                        <td class="value">
                                                            <input id="TWITTER_APP_ID" name="TWITTER_APP_ID" value="{$TWITTER_APP_ID}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[TWITTER  APPLICATION ID YOU GOT WHEN YOU CREATED YOUR TWITTER  APPLICATION]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Twitter Application Secret </label></td>
                                                        <td class="value">
                                                            <input id="TWITTER_APP_SECRET" name="TWITTER_APP_SECRET" value="{$TWITTER_APP_SECRET}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[TWITTER  APPLICATION SECRET YOU GOT WHEN YOU CREATED YOUR TWITTER APPLICATION]</td>
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
                                                        <td class="label"><label for="FACEBOOK_ADMIN">Facebook Admin </label></td>
                                                        <td class="value">
                                                            <input id="FACEBOOK_ADMIN" name="FACEBOOK_ADMIN" value="{$FACEBOOK_ADMIN}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[THE PROFILE ID OF THE FACEBOOK USER WHO'LL BE ABLE TO ADMIN COMMENTS IN YOUR WEBSITE]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Logo Waterwark </label></td>
                                                        <td class="value">
                                                            <select id="lwm" name="lwm" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $lwm eq "1"}selected{/if}>Yes</option>
                											<option value="0" {if $lwm eq "0"}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[YOU'LL FIND THE LOGO WATERMARK FILE IN IMAGES DIRECTORY]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Text Watermark </label></td>
                                                        <td class="value">
                                                            <select id="twm" name="twm" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $twm eq "1"}selected{/if}>Yes</option>
                											<option value="0" {if $twm eq "0"}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[REQUIRES IMAGICK TO BE INSTALLED ON THE SERVER OR ELSE IT WON'T WORK]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Watermark Font </label></td>
                                                        <td class="value">
                                                            <input id="wmfont" name="wmfont" value="{$wmfont}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[REQUIRES IMAGICK TO BE INSTALLED ON THE SERVER OR ELSE IT WON'T WORK]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Watermark Font Size </label></td>
                                                        <td class="value">
                                                            <input id="fsize" name="fsize" value="{$fsize}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[REQUIRES IMAGICK TO BE INSTALLED ON THE SERVER OR ELSE IT WON'T WORK]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Watermark hieght </label></td>
                                                        <td class="value">
                                                            <input id="wmhieght" name="wmhieght" value="{$wmhieght}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[REQUIRES IMAGICK TO BE INSTALLED ON THE SERVER OR ELSE IT WON'T WORK]</td>
                                                        <td><small></small></td>
                                                    </tr>
																										
													<tr class="hidden">
                                                        <td class="label"><label for="status">Watermark background RBG </label></td>
                                                        <td class="value">
                                                          R: <input id="blackr" name="blackr" value="{$blackr}" class=" required-entry required-entry input-text" type="text"/>
														  B: <input id="blackb" name="blackb" value="{$blackb}" class=" required-entry required-entry input-text" type="text"/>
														  G: <input id="blackg" name="blackg" value="{$blackg}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[REQUIRES IMAGICK TO BE INSTALLED ON THE SERVER OR ELSE IT WON'T WORK]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Watermark TEXT RBG </label></td>
                                                        <td class="value">
                                                          R: <input id="whiter" name="whiter" value="{$whiter}" class=" required-entry required-entry input-text" type="text"/>
														  B: <input id="whiteb" name="whiteb" value="{$whiteb}" class=" required-entry required-entry input-text" type="text"/>
														  G: <input id="whiteg" name="whiteg" value="{$whiteg}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[REQUIRES IMAGICK TO BE INSTALLED ON THE SERVER OR ELSE IT WON'T WORK]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Display/Hide Watermark </label></td>
                                                        <td class="value">
                                                            <select id="displaywm" name="displaywm" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $displaywm eq "1"}selected{/if}>Display</option>
                											<option value="0" {if $displaywm eq "0"}selected{/if}>Hide</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Display or hide watermark from visitors like 9gag.com]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Autoscroll </label></td>
                                                        <td class="value">
                                                            <select id="AUTOSCROLL" name="AUTOSCROLL" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $AUTOSCROLL eq "1"}selected{/if}>Yes</option>
                											<option value="0" {if $AUTOSCROLL eq "0"}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable autoscroll, disabling it will restore pagination]</td>
                                                        <td><small></small></td>
                                                    </tr>

													<tr class="hidden">
                                                        <td class="label"><label for="status">Thumbnails View </label></td>
                                                        <td class="value">
                                                            <select id="thumbs" name="thumbs" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $thumbs eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $thumbs eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable Thumbnails view]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Safemode </label></td>
                                                        <td class="value">
                                                            <select id="safemode" name="safemode" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $safemode eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $safemode eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable Safemode]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="ganalytics">Google Analytics ID </label></td>
                                                        <td class="value">
                                                            <input id="ganalytics" name="ganalytics" value="{$ganalytics}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[LEAVING THIS FIELD BLANK WILL DISABLE THIS FEATURE, TO ENABLE ADD YOUR ANALYTICS ID ONLY EXAMPLE : UA-12345678-1 ]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Video Upload </label></td>
                                                        <td class="value">
                                                            <select id="vupload" name="vupload" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $vupload eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $vupload eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable uploading videos]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">RSS </label></td>
                                                        <td class="value">
                                                            <select id="RSS" name="RSS" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $RSS eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $RSS eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable RSS]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Fix Gags </label></td>
                                                        <td class="value">
                                                            <select id="fixenabled" name="fixenabled" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $fixenabled eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $fixenabled eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable fixing gags by other members]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Featured Gags Within </label></td>
                                                        <td class="value">
                                                            <select id="topgags" name="topgags" class=" required-entry required-entry select" type="select">
                                                            <option value="3" {if $topgags eq "3"}selected{/if}>Month</option>
                                                            <option value="2" {if $topgags eq "2"}selected{/if}>Week</option>
                                                            <option value="1" {if $topgags eq "1"}selected{/if}>Day</option>
                											<option value="0" {if $topgags eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[The period when Top gags are selected]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Trending Page </label></td>
                                                        <td class="value">
                                                            <select id="trendingenabled" name="trendingenabled" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $trendingenabled eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $trendingenabled eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Enable or disable Trending Page : Gags will move directly to hot page]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Non-Registered Users can see VOTE page? </label></td>
                                                        <td class="value">
                                                            <select id="voteforvisitor" name="voteforvisitor" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $voteforvisitor eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $voteforvisitor eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[IF ENABLED, NON-REGISTERED USERS WILL BE ABLE TO SEE GAGS IN VOTE PAGE BUT WON'T BE ABLE TO VOTE.]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Search Engine Optimization </label></td>
                                                        <td class="value">
                                                            <select id="SEO" name="SEO" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $SEO eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $SEO eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[CREATE SEARCH ENGINES FRIENDLY URL TO GAIN MORE VISITORS FROM SEARCH ENGINES]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">SITEMAP </label></td>
                                                        <td class="value">
                                                            <select id="SITEMAP" name="SITEMAP" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $SITEMAP eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $SITEMAP eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[CREATE SITEMAP FOR GOOGLE FOR BETTER SEARCH ENGINE APPEARANCE]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Truncate Gags Title </label></td>
                                                        <td class="value">
                                                            <select id="truncate" name="truncate" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $truncate eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $truncate eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[TRUNCATE GAGS TITLE TO KEEP THE STYLE FIXED (INCOMPATIBLE WITH SOME LANGUAGES)]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Auto Facebook Post </label></td>
                                                        <td class="value">
                                                            <select id="autoFBpost" name="autoFBpost" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $autoFBpost eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $autoFBpost eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Automatically post new gags to Facebook Fan page and Twitter account]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Recommended Gags </label></td>
                                                        <td class="value">
                                                            <select id="recommended" name="recommended" class=" required-entry required-entry select" type="select">
                                                            <option value="0" {if $recommended eq "0"}selected{/if}>Disabled</option>
                											<option value="1" {if $recommended eq "1"}selected{/if}>Under Post</option>
                											<option value="2" {if $recommended eq "2"}selected{/if}>At Right Side</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Automatically post new gags to Facebook Fan page and Twitter account]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Channels </label></td>
                                                        <td class="value">
                                                            <select id="channels" name="channels" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $channels eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $channels eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Automatically post new gags to Facebook Fan page and Twitter account]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Recommended in HOMEPAGE </label></td>
                                                        <td class="value">
                                                            <select id="rhome" name="rhome" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $rhome eq "1"}selected{/if}>Enabled</option>
                											<option value="0" {if $rhome eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Automatically post new gags to Facebook Fan page and Twitter account]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Redirection after registeration </label></td>
                                                        <td class="value">
                                                            <select id="regedirect" name="regedirect" class=" required-entry required-entry select" type="select">
                                                            <option value="0" {if $regedirect eq "1"}selected{/if}>Index</option>
                											<option value="1" {if $regedirect eq "2"}selected{/if}>Settings</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Which page should load after successful registeration.]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Index Page </label></td>
                                                        <td class="value">
                                                            <select id="index" name="index" class=" required-entry required-entry select" type="select">
                                                            <option value="0" {if $index eq "0"}selected{/if}>Hot</option>
                											<option value="1" {if $index eq "1"}selected{/if}>Trending</option>
                											<option value="2" {if $index eq "2"}selected{/if}>Vote</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Which page should be used as index]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">/gag/ folder </label></td>
                                                        <td class="value">
                                                            <input id="postfolder" name="postfolder" value="{$postfolder}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label"><font color="red"><b>[ALWAYS KEEP THE BACKSLASH EXAMPLE : /gag/ - ALSO DON'T FORGET TO UPDATE THE .HTACCESS FILE OR ELSE YOU'LL GET 404 ERRORS]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">New post points </label></td>
                                                        <td class="value">
                                                            <input id="up_points" name="up_points" value="{$up_points}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[Points will be added to the user for uploading new post]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">View post points </label></td>
                                                        <td class="value">
                                                            <input id="view_points" name="view_points" value="{$view_points}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[Points will be added to the user for every post view]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Share button #1 </label></td>
                                                        <td class="value">
                                                            <select id="share1" name="share1" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $share1 eq "1"}selected{/if}>Twitter Button</option>
                											<option value="2" {if $share1 eq "2"}selected{/if}>Facebook Sharer</option>
                											<option value="3" {if $share1 eq "3"}selected{/if}>Facebook Like</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Which social network should be used in the first share buttons?]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Share button #2 </label></td>
                                                        <td class="value">
                                                            <select id="share2" name="share2" class=" required-entry required-entry select" type="select">
                                                            <option value="1" {if $share2 eq "1"}selected{/if}>Twitter Button</option>
                											<option value="2" {if $share2 eq "2"}selected{/if}>Facebook Sharer</option>
                											<option value="3" {if $share2 eq "3"}selected{/if}>Facebook Like</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Which social network should be used in the second share buttons?]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">NSFW ADS </label></td>
                                                        <td class="value">
                                                            <select id="NSFWADS" name="NSFWADS" class=" required-entry required-entry select" type="select">
                                                            <option value="0" {if $NSFWADS eq "0"}selected{/if}>Disabled</option>
                											<option value="1" {if $NSFWADS eq "1"}selected{/if}>Enabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[Showing special ads for NSFW-activated users]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">9Gag Clone Script Replacement </label></td>
                                                        <td class="value">
                                                            <input id="website_name" name="website_name" value="{$website_name}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[The text which will replace 9Gag Clone Script texts all over the website]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Popular Posts Within </label></td>
                                                        <td class="value">
                                                            <select id="populargags" name="populargags" class=" required-entry required-entry select" type="select">
                                                            <option value="3" {if $populargags eq "3"}selected{/if}>Month</option>
                                                            <option value="2" {if $populargags eq "2"}selected{/if}>Week</option>
                                                            <option value="1" {if $populargags eq "1"}selected{/if}>Day</option>
                											<option value="0" {if $populargags eq "0"}selected{/if}>Disabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[The period when Popular gags are selected]</td>
                                                        <td><small></small></td>
                                                    </tr>
													
													<tr class="hidden">
                                                        <td class="label"><label for="status">Top Posts </label></td>
                                                        <td class="value">
                                                            <select id="topposts" name="topposts" class=" required-entry required-entry select" type="select">
                                                            <option value="0" {if $topposts eq "0"}selected{/if}>Disabled</option>
                											<option value="1" {if $topposts eq "1"}selected{/if}>Enabled</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[ENABLE / DISABLE TOP POSTS PAGE]</td>
                                                        <td><small></small></td>
                                                    </tr>
													<tr class="hidden">
	<td class="label"><label for="status">Enable Mobile Module </label></td>
	<td class="value">
		<select id="mobilemode" name="mobilemode" class=" required-entry required-entry select" type="select">
		<option value="1" {if $mobilemode eq "1"}selected{/if}>Enabled</option>
		<option value="0" {if $mobilemode eq "0"}selected{/if}>Disabled</option>
		</select>
	</td>
	<td class="scope-label">[REDIRECT USERS ON MOBILE DEVICES AUTOMATICALLY TO MOBILE URL]</td>
	<td><small></small></td>
</tr>

<tr class="hidden">
	<td class="label"><label for="status">Mobile URL  </label></td>
	<td class="value">
		<input id="m_url" name="m_url" value="{$m_url}" class=" required-entry required-entry input-text" type="text"/>
	</td>
	<td class="scope-label">[YOUR MOBILE WEBSITE URL]</td>
	<td><small></small></td>
</tr>

<tr class="hidden">
	<td class="label"><label for="status">Num. posts/page in Mobile Module  </label></td>
	<td class="value">
		<input id="mobile_per_page" name="mobile_per_page" value="{$mobile_per_page}" class=" required-entry required-entry input-text" type="text"/>
	</td>
	<td class="scope-label">[YOUR MOBILE WEBSITE URL]</td>
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