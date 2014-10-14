		<div class="middle" id="anchor-content">
            <div id="page:main-container">
				<div class="columns ">
                
					<div class="side-col" id="page:left">
    					<h3>Members</h3>
						
                        <ul id="isoft" class="tabs">
    						<li >
        						<a href="members_manage.php" id="isoft_group_1" name="group_1" title="Manage Members" class="tab-item-link ">
                                    <span>
                                        <span class="changed" title=""></span>
                                        <span class="error" title=""></span>
                                        Manage Members
                                    </span>
        						</a>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                <div id="isoft_group_1_content" style="display:none;">
                                	<div class="entry-edit">
                                        <div class="entry-edit-head">
                                            <h4 class="icon-head head-edit-form fieldset-legend">Edit Member</h4>
                                            <div class="form-buttons">

                                            </div>
                                    	</div>

                                        <fieldset id="group_fields4">
                                            <div class="hor-scroll">
                                                <table cellspacing="0" class="form-list">
                                                <tbody>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Member ID </label></td>
                                                        <td class="value">
                                                        	{$member.USERID}
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Username </label></td>
                                                        <td class="value">
                                                        	<input id="username" name="username" value="{$member.username|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[USERNAME OF THE MEMBER]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">E-Mail </label></td>
                                                        <td class="value">
                                                        	<input id="email" name="email" value="{$member.email|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[EMAIL ADDRESS OF THE MEMBER]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="fullname">Full Name </label></td>
                                                        <td class="value">
                                                        	<input id="fullname" name="fullname" value="{$member.fullname|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[FIRST NAME OF THE MEMBER]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">About Me </label></td>
                                                        <td class="value">
                                                        	<textarea id="vdescription" name="vdescription" class=" textarea" type="textarea" >{$member.description|stripslashes}</textarea>
                                                        </td>
                                                        <td class="scope-label">[DESCRIPTION OF THE MEMBER]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="fullname">Website </label></td>
                                                        <td class="value">
                                                        	<input id="website" name="website" value="{$member.website|stripslashes}" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[WEBSITE OF THE MEMBER]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Country </label></td>
                                                        <td class="value">
                                                        	<select name="country" id="country_selector">
                                                            <option value="">{$lang63}</option>
                                                            <option  {if $member.country eq "AF"}selected{/if} value="AF">Afghanistan</option>
                                                            <option  {if $member.country eq "AX"}selected{/if} value="AX">Åland Islands</option>
                                                            <option  {if $member.country eq "AL"}selected{/if} value="AL">Albania</option>
                                                            <option  {if $member.country eq "DZ"}selected{/if} value="DZ">Algeria</option>
                                                            <option  {if $member.country eq "AS"}selected{/if} value="AS">American Samoa</option>
                                                            <option  {if $member.country eq "AD"}selected{/if} value="AD">Andorra</option>
                                                            <option  {if $member.country eq "AO"}selected{/if} value="AO">Angola</option>
                                                            <option  {if $member.country eq "AI"}selected{/if} value="AI">Anguilla</option>
                                                            <option  {if $member.country eq "AQ"}selected{/if} value="AQ">Antarctica</option>
                                                            <option  {if $member.country eq "AG"}selected{/if} value="AG">Antigua and Barbuda</option>
                                                            <option  {if $member.country eq "AR"}selected{/if} value="AR">Argentina</option>
                                                            <option  {if $member.country eq "AM"}selected{/if} value="AM">Armenia</option>
                                                            <option  {if $member.country eq "AW"}selected{/if} value="AW">Aruba</option>
                                                            <option  {if $member.country eq "AU"}selected{/if} value="AU">Australia</option>
                                                            <option  {if $member.country eq "AT"}selected{/if} value="AT">Austria</option>
                                                            <option  {if $member.country eq "AZ"}selected{/if} value="AZ">Azerbaijan</option>
                                                            <option  {if $member.country eq "BS"}selected{/if} value="BS">Bahamas</option>
                                                            <option  {if $member.country eq "BH"}selected{/if} value="BH">Bahrain</option>
                                                            <option  {if $member.country eq "BD"}selected{/if} value="BD">Bangladesh</option>
                                                            <option  {if $member.country eq "BB"}selected{/if} value="BB">Barbados</option>
                                                            <option  {if $member.country eq "BY"}selected{/if} value="BY">Belarus</option>
                                                            <option  {if $member.country eq "BE"}selected{/if} value="BE">Belgium</option>
                                                            <option  {if $member.country eq "BZ"}selected{/if} value="BZ">Belize</option>
                                                            <option  {if $member.country eq "BJ"}selected{/if} value="BJ">Benin</option>
                                                            <option  {if $member.country eq "BM"}selected{/if} value="BM">Bermuda</option>
                                                            <option  {if $member.country eq "BT"}selected{/if} value="BT">Bhutan</option>
                                                            <option  {if $member.country eq "BO"}selected{/if} value="BO">Bolivia</option>
                                                            <option  {if $member.country eq "BA"}selected{/if} value="BA">Bosnia and Herzegovina</option>
                                                            <option  {if $member.country eq "BW"}selected{/if} value="BW">Botswana</option>
                                                            <option  {if $member.country eq "BV"}selected{/if} value="BV">Bouvet Island</option>
                                                            <option  {if $member.country eq "BR"}selected{/if} value="BR">Brazil</option>
                                                            <option  {if $member.country eq "IO"}selected{/if} value="IO">British Indian Ocean Territory</option>
                                                            <option  {if $member.country eq "BN"}selected{/if} value="BN">Brunei Darussalam</option>
                                                            <option  {if $member.country eq "BG"}selected{/if} value="BG">Bulgaria</option>
                                                            <option  {if $member.country eq "BF"}selected{/if} value="BF">Burkina Faso</option>
                                                            <option  {if $member.country eq "BI"}selected{/if} value="BI">Burundi</option>
                                                            <option  {if $member.country eq "KH"}selected{/if} value="KH">Cambodia</option>
                                                            <option  {if $member.country eq "CM"}selected{/if} value="CM">Cameroon</option>
                                                            <option  {if $member.country eq "CA"}selected{/if} value="CA">Canada</option>
                                                            <option  {if $member.country eq "CV"}selected{/if} value="CV">Cape Verde</option>
                                                            <option  {if $member.country eq "KY"}selected{/if} value="KY">Cayman Islands</option>
                                                            <option  {if $member.country eq "CF"}selected{/if} value="CF">Central African Republic</option>
                                                            <option  {if $member.country eq "TD"}selected{/if} value="TD">Chad</option>
                                                            <option  {if $member.country eq "CL"}selected{/if} value="CL">Chile</option>
                                                            <option  {if $member.country eq "CN"}selected{/if} value="CN">China</option>
                                                            <option  {if $member.country eq "CX"}selected{/if} value="CX">Christmas Island</option>
                                                            <option  {if $member.country eq "CC"}selected{/if} value="CC">Cocos (Keeling) Islands</option>
                                                            <option  {if $member.country eq "CO"}selected{/if} value="CO">Colombia</option>
                                                            <option  {if $member.country eq "KM"}selected{/if} value="KM">Comoros</option>
                                                            <option  {if $member.country eq "CG"}selected{/if} value="CG">Congo</option>
                                                            <option  {if $member.country eq "CD"}selected{/if} value="CD">Congo, The Democratic Republic of The</option>
                                                            <option  {if $member.country eq "CK"}selected{/if} value="CK">Cook Islands</option>
                                                            <option  {if $member.country eq "CR"}selected{/if} value="CR">Costa Rica</option>
                                                            <option  {if $member.country eq "CI"}selected{/if} value="CI">Cote D'ivoire</option>
                                                            <option  {if $member.country eq "HR"}selected{/if} value="HR">Croatia</option>
                                                            <option  {if $member.country eq "CU"}selected{/if} value="CU">Cuba</option>
                                                            <option  {if $member.country eq "CY"}selected{/if} value="CY">Cyprus</option>
                                                            <option  {if $member.country eq "CZ"}selected{/if} value="CZ">Czech Republic</option>
                                                            <option  {if $member.country eq "DK"}selected{/if} value="DK">Denmark</option>
                                                            <option  {if $member.country eq "DJ"}selected{/if} value="DJ">Djibouti</option>
                                                            <option  {if $member.country eq "DM"}selected{/if} value="DM">Dominica</option>
                                                            <option  {if $member.country eq "DO"}selected{/if} value="DO">Dominican Republic</option>
                                                            <option  {if $member.country eq "EC"}selected{/if} value="EC">Ecuador</option>
                                                            <option  {if $member.country eq "EG"}selected{/if} value="EG">Egypt</option>
                                                            <option  {if $member.country eq "SV"}selected{/if} value="SV">El Salvador</option>
                                                            <option  {if $member.country eq "GQ"}selected{/if} value="GQ">Equatorial Guinea</option>
                                                            <option  {if $member.country eq "ER"}selected{/if} value="ER">Eritrea</option>
                                                            <option  {if $member.country eq "EE"}selected{/if} value="EE">Estonia</option>
                                                            <option  {if $member.country eq "ET"}selected{/if} value="ET">Ethiopia</option>
                                                            <option  {if $member.country eq "FK"}selected{/if} value="FK">Falkland Islands (Malvinas)</option>
                                                            <option  {if $member.country eq "FO"}selected{/if} value="FO">Faroe Islands</option>
                                                            <option  {if $member.country eq "FJ"}selected{/if} value="FJ">Fiji</option>
                                                            <option  {if $member.country eq "FI"}selected{/if} value="FI">Finland</option>
                                                            <option  {if $member.country eq "FR"}selected{/if} value="FR">France</option>
                                                            <option  {if $member.country eq "GR"}selected{/if} value="GF">French Guiana</option>
                                                            <option  {if $member.country eq "PF"}selected{/if} value="PF">French Polynesia</option>
                                                            <option  {if $member.country eq "TF"}selected{/if} value="TF">French Southern Territories</option>
                                                            <option  {if $member.country eq "GA"}selected{/if} value="GA">Gabon</option>
                                                            <option  {if $member.country eq "GM"}selected{/if} value="GM">Gambia</option>
                                                            <option  {if $member.country eq "GE"}selected{/if} value="GE">Georgia</option>
                                                            <option  {if $member.country eq "DE"}selected{/if} value="DE">Germany</option>
                                                            <option  {if $member.country eq "GH"}selected{/if} value="GH">Ghana</option>
                                                            <option  {if $member.country eq "GI"}selected{/if} value="GI">Gibraltar</option>
                                                            <option  {if $member.country eq "GR"}selected{/if} value="GR">Greece</option>
                                                            <option  {if $member.country eq "GL"}selected{/if} value="GL">Greenland</option>
                                                            <option  {if $member.country eq "GD"}selected{/if} value="GD">Grenada</option>
                                                            <option  {if $member.country eq "GP"}selected{/if} value="GP">Guadeloupe</option>
                                                            <option  {if $member.country eq "GU"}selected{/if} value="GU">Guam</option>
                                                            <option  {if $member.country eq "GT"}selected{/if} value="GT">Guatemala</option>
                                                            <option  {if $member.country eq "GG"}selected{/if} value="GG">Guernsey</option>
                                                            <option  {if $member.country eq "GN"}selected{/if} value="GN">Guinea</option>
                                                            <option  {if $member.country eq "GW"}selected{/if} value="GW">Guinea-bissau</option>
                                                            <option  {if $member.country eq "GY"}selected{/if} value="GY">Guyana</option>
                                                            <option  {if $member.country eq "HT"}selected{/if} value="HT">Haiti</option>
                                                            <option  {if $member.country eq "HM"}selected{/if} value="HM">Heard Island and Mcdonald Islands</option>
                                                            <option  {if $member.country eq "VA"}selected{/if} value="VA">Holy See (Vatican City State)</option>
                                                            <option  {if $member.country eq "HN"}selected{/if} value="HN">Honduras</option>
                                                            <option  {if $member.country eq "HK"}selected{/if} value="HK">Hong Kong</option>
                                                            <option  {if $member.country eq "HU"}selected{/if} value="HU">Hungary</option>
                                                            <option  {if $member.country eq "IS"}selected{/if} value="IS">Iceland</option>
                                                            <option  {if $member.country eq "IN"}selected{/if} value="IN">India</option>
                                                            <option  {if $member.country eq "ID"}selected{/if} value="ID">Indonesia</option>
                                                            <option  {if $member.country eq "IR"}selected{/if} value="IR">Iran, Islamic Republic of</option>
                                                            <option  {if $member.country eq "IQ"}selected{/if} value="IQ">Iraq</option>
                                                            <option  {if $member.country eq "IE"}selected{/if} value="IE">Ireland</option>
                                                            <option  {if $member.country eq "IM"}selected{/if} value="IM">Isle of Man</option>
                                                            <option  {if $member.country eq "IL"}selected{/if} value="IL">Israel</option>
                                                            <option  {if $member.country eq "IT"}selected{/if} value="IT">Italy</option>
                                                            <option  {if $member.country eq "JM"}selected{/if} value="JM">Jamaica</option>
                                                            <option  {if $member.country eq "JP"}selected{/if} value="JP">Japan</option>
                                                            <option  {if $member.country eq "JE"}selected{/if} value="JE">Jersey</option>
                                                            <option  {if $member.country eq "JO"}selected{/if} value="JO">Jordan</option>
                                                            <option  {if $member.country eq "KZ"}selected{/if} value="KZ">Kazakhstan</option>
                                                            <option  {if $member.country eq "KE"}selected{/if} value="KE">Kenya</option>
                                                            <option  {if $member.country eq "KI"}selected{/if} value="KI">Kiribati</option>
                                                            <option  {if $member.country eq "KP"}selected{/if} value="KP">Korea, Democratic People's Republic of</option>
                                                            <option  {if $member.country eq "KR"}selected{/if} value="KR">Korea, Republic of</option>
                                                            <option  {if $member.country eq "KW"}selected{/if} value="KW">Kuwait</option>
                                                            <option  {if $member.country eq "KG"}selected{/if} value="KG">Kyrgyzstan</option>
                                                            <option  {if $member.country eq "LA"}selected{/if} value="LA">Lao People's Democratic Republic</option>
                                                            <option  {if $member.country eq "LV"}selected{/if} value="LV">Latvia</option>
                                                            <option  {if $member.country eq "LB"}selected{/if} value="LB">Lebanon</option>
                                                            <option  {if $member.country eq "LS"}selected{/if} value="LS">Lesotho</option>
                                                            <option  {if $member.country eq "LR"}selected{/if} value="LR">Liberia</option>
                                                            <option  {if $member.country eq "LY"}selected{/if} value="LY">Libyan Arab Jamahiriya</option>
                                                            <option  {if $member.country eq "LI"}selected{/if} value="LI">Liechtenstein</option>
                                                            <option  {if $member.country eq "LT"}selected{/if} value="LT">Lithuania</option>
                                                            <option  {if $member.country eq "LU"}selected{/if} value="LU">Luxembourg</option>
                                                            <option  {if $member.country eq "MO"}selected{/if} value="MO">Macao</option>
                                                            <option  {if $member.country eq "MK"}selected{/if} value="MK">Macedonia, The Former Yugoslav Republic of</option>
                                                            <option  {if $member.country eq "MG"}selected{/if} value="MG">Madagascar</option>
                                                            <option  {if $member.country eq "MW"}selected{/if} value="MW">Malawi</option>
                                                            <option  {if $member.country eq "MY"}selected{/if} value="MY">Malaysia</option>
                                                            <option  {if $member.country eq "MV"}selected{/if} value="MV">Maldives</option>
                                                            <option  {if $member.country eq "ML"}selected{/if} value="ML">Mali</option>
                                                            <option  {if $member.country eq "MT"}selected{/if} value="MT">Malta</option>
                                                            <option  {if $member.country eq "MH"}selected{/if} value="MH">Marshall Islands</option>
                                                            <option  {if $member.country eq "MQ"}selected{/if} value="MQ">Martinique</option>
                                                            <option  {if $member.country eq "MR"}selected{/if} value="MR">Mauritania</option>
                                                            <option  {if $member.country eq "MU"}selected{/if} value="MU">Mauritius</option>
                                                            <option  {if $member.country eq "YT"}selected{/if} value="YT">Mayotte</option>
                                                            <option  {if $member.country eq "MX"}selected{/if} value="MX">Mexico</option>
                                                            <option  {if $member.country eq "FM"}selected{/if} value="FM">Micronesia, Federated States of</option>
                                                            <option  {if $member.country eq "MD"}selected{/if} value="MD">Moldova, Republic of</option>
                                                            <option  {if $member.country eq "MC"}selected{/if} value="MC">Monaco</option>
                                                            <option  {if $member.country eq "MN"}selected{/if} value="MN">Mongolia</option>
                                                            <option  {if $member.country eq "ME"}selected{/if} value="ME">Montenegro</option>
                                                            <option  {if $member.country eq "MS"}selected{/if} value="MS">Montserrat</option>
                                                            <option  {if $member.country eq "MA"}selected{/if} value="MA">Morocco</option>
                                                            <option  {if $member.country eq "MZ"}selected{/if} value="MZ">Mozambique</option>
                                                            <option  {if $member.country eq "MM"}selected{/if} value="MM">Myanmar</option>
                                                            <option  {if $member.country eq "NA"}selected{/if} value="NA">Namibia</option>
                                                            <option  {if $member.country eq "NR"}selected{/if} value="NR">Nauru</option>
                                                            <option  {if $member.country eq "NP"}selected{/if} value="NP">Nepal</option>
                                                            <option  {if $member.country eq "NL"}selected{/if} value="NL">Netherlands</option>
                                                            <option  {if $member.country eq "AN"}selected{/if} value="AN">Netherlands Antilles</option>
                                                            <option  {if $member.country eq "NC"}selected{/if} value="NC">New Caledonia</option>
                                                            <option  {if $member.country eq "NZ"}selected{/if} value="NZ">New Zealand</option>
                                                            <option  {if $member.country eq "NI"}selected{/if} value="NI">Nicaragua</option>
                                                            <option  {if $member.country eq "NE"}selected{/if} value="NE">Niger</option>
                                                            <option  {if $member.country eq "NG"}selected{/if} value="NG">Nigeria</option>
                                                            <option  {if $member.country eq "NU"}selected{/if} value="NU">Niue</option>
                                                            <option  {if $member.country eq "NF"}selected{/if} value="NF">Norfolk Island</option>
                                                            <option  {if $member.country eq "MP"}selected{/if} value="MP">Northern Mariana Islands</option>
                                                            <option  {if $member.country eq "NO"}selected{/if} value="NO">Norway</option>
                                                            <option  {if $member.country eq "OM"}selected{/if} value="OM">Oman</option>
                                                            <option  {if $member.country eq "PK"}selected{/if} value="PK">Pakistan</option>
                                                            <option  {if $member.country eq "PW"}selected{/if} value="PW">Palau</option>
                                                            <option  {if $member.country eq "PS"}selected{/if} value="PS">Palestinian Territory, Occupied</option>
                                                            <option  {if $member.country eq "PA"}selected{/if} value="PA">Panama</option>
                                                            <option  {if $member.country eq "PG"}selected{/if} value="PG">Papua New Guinea</option>
                                                            <option  {if $member.country eq "PY"}selected{/if} value="PY">Paraguay</option>
                                                            <option  {if $member.country eq "PE"}selected{/if} value="PE">Peru</option>
                                                            <option  {if $member.country eq "PH"}selected{/if} value="PH">Philippines</option>
                                                            <option  {if $member.country eq "PN"}selected{/if} value="PN">Pitcairn</option>
                                                            <option  {if $member.country eq "PL"}selected{/if} value="PL">Poland</option>
                                                            <option  {if $member.country eq "PT"}selected{/if} value="PT">Portugal</option>
                                                            <option  {if $member.country eq "PR"}selected{/if} value="PR">Puerto Rico</option>
                                                            <option  {if $member.country eq "QA"}selected{/if} value="QA">Qatar</option>
                                                            <option  {if $member.country eq "RE"}selected{/if} value="RE">Reunion</option>
                                                            <option  {if $member.country eq "RO"}selected{/if} value="RO">Romania</option>
                                                            <option  {if $member.country eq "RU"}selected{/if} value="RU">Russian Federation</option>
                                                            <option  {if $member.country eq "RW"}selected{/if} value="RW">Rwanda</option>
                                                            <option  {if $member.country eq "SH"}selected{/if} value="SH">Saint Helena</option>
                                                            <option  {if $member.country eq "KN"}selected{/if} value="KN">Saint Kitts and Nevis</option>
                                                            <option  {if $member.country eq "LC"}selected{/if} value="LC">Saint Lucia</option>
                                                            <option  {if $member.country eq "PM"}selected{/if} value="PM">Saint Pierre and Miquelon</option>
                                                            <option  {if $member.country eq "VC"}selected{/if} value="VC">Saint Vincent and The Grenadines</option>
                                                            <option  {if $member.country eq "WS"}selected{/if} value="WS">Samoa</option>
                                                            <option  {if $member.country eq "SM"}selected{/if} value="SM">San Marino</option>
                                                            <option  {if $member.country eq "ST"}selected{/if} value="ST">Sao Tome and Principe</option>
                                                            <option  {if $member.country eq "SA"}selected{/if} value="SA">Saudi Arabia</option>
                                                            <option  {if $member.country eq "SN"}selected{/if} value="SN">Senegal</option>
                                                            <option  {if $member.country eq "RS"}selected{/if} value="RS">Serbia</option>
                                                            <option  {if $member.country eq "SC"}selected{/if} value="SC">Seychelles</option>
                                                            <option  {if $member.country eq "SL"}selected{/if} value="SL">Sierra Leone</option>
                                                            <option  {if $member.country eq "SG"}selected{/if} value="SG">Singapore</option>
                                                            <option  {if $member.country eq "SK"}selected{/if} value="SK">Slovakia</option>
                                                            <option  {if $member.country eq "SI"}selected{/if} value="SI">Slovenia</option>
                                                            <option  {if $member.country eq "SB"}selected{/if} value="SB">Solomon Islands</option>
                                                            <option  {if $member.country eq "SO"}selected{/if} value="SO">Somalia</option>
                                                            <option  {if $member.country eq "ZA"}selected{/if} value="ZA">South Africa</option>
                                                            <option  {if $member.country eq "GS"}selected{/if} value="GS">South Georgia and The South Sandwich Islands</option>
                                                            <option  {if $member.country eq "ES"}selected{/if} value="ES">Spain</option>
                                                            <option  {if $member.country eq "LK"}selected{/if} value="LK">Sri Lanka</option>
                                                            <option  {if $member.country eq "SD"}selected{/if} value="SD">Sudan</option>
                                                            <option  {if $member.country eq "SR"}selected{/if} value="SR">Suriname</option>
                                                            <option  {if $member.country eq "SJ"}selected{/if} value="SJ">Svalbard and Jan Mayen</option>
                                                            <option  {if $member.country eq "SZ"}selected{/if} value="SZ">Swaziland</option>
                                                            <option  {if $member.country eq "SE"}selected{/if} value="SE">Sweden</option>
                                                            <option  {if $member.country eq "CH"}selected{/if} value="CH">Switzerland</option>
                                                            <option  {if $member.country eq "SY"}selected{/if} value="SY">Syrian Arab Republic</option>
                                                            <option  {if $member.country eq "TW"}selected{/if} value="TW">Taiwan, Province of China</option>
                                                            <option  {if $member.country eq "TJ"}selected{/if} value="TJ">Tajikistan</option>
                                                            <option  {if $member.country eq "TZ"}selected{/if} value="TZ">Tanzania, United Republic of</option>
                                                            <option  {if $member.country eq "TH"}selected{/if} value="TH">Thailand</option>
                                                            <option  {if $member.country eq "TL"}selected{/if} value="TL">Timor-leste</option>
                                                            <option  {if $member.country eq "TG"}selected{/if} value="TG">Togo</option>
                                                            <option  {if $member.country eq "TK"}selected{/if} value="TK">Tokelau</option>
                                                            <option  {if $member.country eq "TO"}selected{/if} value="TO">Tonga</option>
                                                            <option  {if $member.country eq "TT"}selected{/if} value="TT">Trinidad and Tobago</option>
                                                            <option  {if $member.country eq "TN"}selected{/if} value="TN">Tunisia</option>
                                                            <option  {if $member.country eq "TR"}selected{/if} value="TR">Turkey</option>
                                                            <option  {if $member.country eq "TM"}selected{/if} value="TM">Turkmenistan</option>
                                                            <option  {if $member.country eq "TC"}selected{/if} value="TC">Turks and Caicos Islands</option>
                                                            <option  {if $member.country eq "TV"}selected{/if} value="TV">Tuvalu</option>
                                                            <option  {if $member.country eq "UG"}selected{/if} value="UG">Uganda</option>
                                                            <option  {if $member.country eq "UA"}selected{/if} value="UA">Ukraine</option>
                                                            <option  {if $member.country eq "AE"}selected{/if} value="AE">United Arab Emirates</option>
                                                            <option  {if $member.country eq "GB"}selected{/if} value="GB">United Kingdom</option>
                                                            <option  {if $member.country eq "US"}selected{/if} value="US">United States</option>
                                                            <option  {if $member.country eq "UM"}selected{/if} value="UM">United States Minor Outlying Islands</option>
                                                            <option  {if $member.country eq "UY"}selected{/if} value="UY">Uruguay</option>
                                                            <option  {if $member.country eq "UZ"}selected{/if} value="UZ">Uzbekistan</option>
                                                            <option  {if $member.country eq "VA"}selected{/if} value="VU">Vanuatu</option>
                                                            <option  {if $member.country eq "VE"}selected{/if} value="VE">Venezuela</option>
                                                            <option  {if $member.country eq "VN"}selected{/if} value="VN">Viet Nam</option>
                                                            <option  {if $member.country eq "VG"}selected{/if} value="VG">Virgin Islands, British</option>
                                                            <option  {if $member.country eq "VI"}selected{/if} value="VI">Virgin Islands, U.S.</option>
                                                            <option  {if $member.country eq "WF"}selected{/if} value="WF">Wallis and Futuna</option>
                                                            <option  {if $member.country eq "EH"}selected{/if} value="EH">Western Sahara</option>
                                                            <option  {if $member.country eq "YE"}selected{/if} value="YE">Yemen</option>
                                                            <option  {if $member.country eq "ZM"}selected{/if} value="ZM">Zambia</option>
                                                            <option  {if $member.country eq "ZW"}selected{/if} value="ZW">Zimbabwe</option>   
                                                            </select>                      
                                                        </td>
                                                        <td class="scope-label">[MEMBER COUNTRY]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Date Joined </label></td>
                                                        <td class="value">
                                                        	{$member.addtime|date_format:"%b %e, %Y"}
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Last Login </label></td>
                                                        <td class="value">
                                                        	{$member.lastlogin|date_format:"%b %e, %Y"}
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Verified E-Mail </label></td>
                                                        <td class="value">
                                                        	<select name="verified" id="verified">
                                                            <option value="1" {if $member.verified eq 1}selected{/if}>Yes</option>
                                                            <option value="0" {if $member.verified eq 0}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[CONFIRMED E-MAIL ADDRESS]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="status">Active </label></td>
                                                        <td class="value">
                                                        	<select name="status" id="status">
                                                            <option value="1" {if $member.status eq 1}selected{/if}>Yes</option>
                                                            <option value="0" {if $member.status eq 0}selected{/if}>No</option>
                                                            </select>
                                                        </td>
                                                        <td class="scope-label">[ACTIVE MEMBER ACCOUNT]</td>
                                                        <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">New Password </label></td>
                                                        <td class="value">
                                                        	<input id="newpass2" name="newpass2" value="" class=" required-entry required-entry input-text" type="text"/>
                                                        </td>
                                                        <td class="scope-label">[ONLY FILL THIS OUT IF YOU WISH TO CHANGE THE MEMBER'S CURRENT PASSWORD]</td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Signup IP </label></td>
                                                        <td class="value">
                                                        	<a href="{$adminurl}/bans_ip_add.php?add={$member.ip}" target="_blank">{$member.ip}</a>
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                    <tr class="hidden">
                                                        <td class="label"><label for="name">Last IP </label></td>
                                                        <td class="value">
                                                        	<a href="{$adminurl}/bans_ip_add.php?add={$member.lip}" target="_blank">{$member.lip}</a>
                                                        </td>
                                                        <td class="scope-label"></td>
                                                            <td><small></small></td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                        </fieldset>
									</div>
								</div>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                               
                                
                                
                                
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
                               <h3 class="icon-head head-products">Members - Edit Member</h3>
                               <p class="content-buttons form-buttons">
                                    <button  id="id_be616be1324d8ae4516f276d17d34b9c" type="button" class="scalable save" onclick="document.main_form.submit();" style=""><span>Save Changes</span></button>			
                                </p>
                            </div>
                            
                            <form action="members_edit.php?USERID={$smarty.request.USERID}" method="post" id="main_form" name="main_form" enctype="multipart/form-data">
                            	<input type="hidden" id="submitform" name="submitform" value="1" >
                            	<div style="display:none"></div>
                            </form>
						</div>
					</div>
				</div>

                        </div>
        </div>