<?php /* Smarty version 2.6.6, created on 2014-10-13 08:43:40
         compiled from settings.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('insert', 'get_member_profilepicture', 'settings.tpl', 18, false),array('modifier', 'stripslashes', 'settings.tpl', 32, false),)), $this); ?>
<?php if ($this->_tpl_vars['error'] != ""): ?>
<p class="form-message error middle"><?php echo $this->_tpl_vars['error']; ?>
<br /></p>
<?php elseif ($this->_tpl_vars['message'] != ""): ?>
<p class="form-message success middle"><?php echo $this->_tpl_vars['message']; ?>
<br /></p>
<?php endif; ?>
<div id="main" class="middle">
    <div id="content-holder">
        <div class="content-title">
        	<h3><?php echo $this->_tpl_vars['lang45']; ?>
</h3>
        </div>                      
                                          
        <div id="content">
            <form id="form-settings" class="page" action="" method="post" enctype="multipart/form-data" name="formsettings">
                <div class="field profile-pic">
                    <h4><?php echo $this->_tpl_vars['lang53']; ?>
</h4>
                    <div class="wrap">
                        <div class="image-wrap">
                        	<?php require_once(SMARTY_CORE_DIR . 'core.run_insert_handler.php');
echo smarty_core_run_insert_handler(array('args' => array('name' => 'get_member_profilepicture', 'assign' => 'profilepicture', 'value' => 'var', 'USERID' => $_SESSION['USERID'])), $this); ?>

                        	<img id="uploaded_img" width="160px" src="<?php echo $this->_tpl_vars['membersprofilepicurl']; ?>
/thumbs/<?php echo $this->_tpl_vars['profilepicture']; ?>
?<?php echo time(); ?>
" alt="avatar" />
                        </div>
                        <input class="file" type="file" name="gphoto"  />
                        <p class="info"><?php echo $this->_tpl_vars['lang54']; ?>
</p>
                        <p class="remove-avatar"><label><input type="checkbox" name="remove_avatar" value="1"/><?php echo $this->_tpl_vars['lang55']; ?>
</label></p>
                    </div>
                </div>                
                
                <div class="field colors">
                    <h4><?php echo $this->_tpl_vars['lang56']; ?>
</h4>
                    <div class="wrap">
                        <div class="profile">                        
                        	<a id="color_display1" class="color-picker" href="#" style="background-color:#;"><img class="mask" src="<?php echo $this->_tpl_vars['baseurl']; ?>
/images/color-mask.png"/></a>                        
                        	<input id="color_picker1" type="text" class="text color" style="color:#993366;" name="profile_color" maxlength="6" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['color1'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" />
                        </div>
                        <div class="links">
                        	<a id="color_display2" class="color-picker" href="#" style="background-color:#;"><img class="mask" src="<?php echo $this->_tpl_vars['baseurl']; ?>
/images/color-mask.png"/></a>
                        	<input id="color_picker2" type="text" class="text color" style="color:#993366;" name="link_color" maxlength="6" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['color2'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" />
                        </div>
                    </div>
                    <?php echo '
                    <script type="text/javascript">
                    $(\'#color_display1\').click(function(){
                    $(\'#color_picker1\').trigger(\'focus\');
                    });
                    $(\'#color_display2\').click(function(){
                    $(\'#color_picker2\').trigger(\'focus\');
                    });
                    $(\'#color_picker1\').change(function(){
                    $(\'#color_display1\').css(\'background-color\',"#"+$(\'#color_picker1\').val());
                    });
                    $(\'#color_picker2\').change(function(){
                    $(\'#color_display2\').css(\'background-color\',"#"+$(\'#color_picker2\').val());
                    });		
                    </script>
                    '; ?>

                    <p class="info"><?php echo $this->_tpl_vars['lang57']; ?>
</p>
                    <p class="info last"><?php echo $this->_tpl_vars['lang58']; ?>
</p>
                </div>
                <hr/>

                <div class="field">
                    <label><h4><?php echo $this->_tpl_vars['lang59']; ?>
</h4><input type="text" class="text tipped" name="fname" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['fullname'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" maxlength="100" /></label>
                    <p class="info" style="visibility:hidden"><?php echo $this->_tpl_vars['lang60']; ?>
</p>
                </div>
                
                <div class="field">
                    <label><h4><?php echo $this->_tpl_vars['lang20']; ?>
</h4><input type="text" class="text tipped" name="email" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['email'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" maxlength="200"/></label>
                    <p class="info" style="visibility:hidden"><?php echo $this->_tpl_vars['lang61']; ?>
</p>
                </div>
                <div class="field locale">
                    <h4><?php echo $this->_tpl_vars['lang62']; ?>
</h4>
                    <div class="wrap">
                        <div class="country">
                            <select name="country" id="country_selector">
                            <option value=""><?php echo $this->_tpl_vars['lang63']; ?>
</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AF'): ?>selected<?php endif; ?> value="AF">Afghanistan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AX'): ?>selected<?php endif; ?> value="AX">Åland Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AL'): ?>selected<?php endif; ?> value="AL">Albania</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'DZ'): ?>selected<?php endif; ?> value="DZ">Algeria</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AS'): ?>selected<?php endif; ?> value="AS">American Samoa</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AD'): ?>selected<?php endif; ?> value="AD">Andorra</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AO'): ?>selected<?php endif; ?> value="AO">Angola</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AI'): ?>selected<?php endif; ?> value="AI">Anguilla</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AQ'): ?>selected<?php endif; ?> value="AQ">Antarctica</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AG'): ?>selected<?php endif; ?> value="AG">Antigua and Barbuda</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AR'): ?>selected<?php endif; ?> value="AR">Argentina</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AM'): ?>selected<?php endif; ?> value="AM">Armenia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AW'): ?>selected<?php endif; ?> value="AW">Aruba</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AU'): ?>selected<?php endif; ?> value="AU">Australia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AT'): ?>selected<?php endif; ?> value="AT">Austria</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AZ'): ?>selected<?php endif; ?> value="AZ">Azerbaijan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BS'): ?>selected<?php endif; ?> value="BS">Bahamas</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BH'): ?>selected<?php endif; ?> value="BH">Bahrain</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BD'): ?>selected<?php endif; ?> value="BD">Bangladesh</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BB'): ?>selected<?php endif; ?> value="BB">Barbados</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BY'): ?>selected<?php endif; ?> value="BY">Belarus</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BE'): ?>selected<?php endif; ?> value="BE">Belgium</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BZ'): ?>selected<?php endif; ?> value="BZ">Belize</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BJ'): ?>selected<?php endif; ?> value="BJ">Benin</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BM'): ?>selected<?php endif; ?> value="BM">Bermuda</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BT'): ?>selected<?php endif; ?> value="BT">Bhutan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BO'): ?>selected<?php endif; ?> value="BO">Bolivia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BA'): ?>selected<?php endif; ?> value="BA">Bosnia and Herzegovina</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BW'): ?>selected<?php endif; ?> value="BW">Botswana</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BV'): ?>selected<?php endif; ?> value="BV">Bouvet Island</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BR'): ?>selected<?php endif; ?> value="BR">Brazil</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IO'): ?>selected<?php endif; ?> value="IO">British Indian Ocean Territory</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BN'): ?>selected<?php endif; ?> value="BN">Brunei Darussalam</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BG'): ?>selected<?php endif; ?> value="BG">Bulgaria</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BF'): ?>selected<?php endif; ?> value="BF">Burkina Faso</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'BI'): ?>selected<?php endif; ?> value="BI">Burundi</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KH'): ?>selected<?php endif; ?> value="KH">Cambodia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CM'): ?>selected<?php endif; ?> value="CM">Cameroon</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CA'): ?>selected<?php endif; ?> value="CA">Canada</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CV'): ?>selected<?php endif; ?> value="CV">Cape Verde</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KY'): ?>selected<?php endif; ?> value="KY">Cayman Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CF'): ?>selected<?php endif; ?> value="CF">Central African Republic</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TD'): ?>selected<?php endif; ?> value="TD">Chad</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CL'): ?>selected<?php endif; ?> value="CL">Chile</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CN'): ?>selected<?php endif; ?> value="CN">China</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CX'): ?>selected<?php endif; ?> value="CX">Christmas Island</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CC'): ?>selected<?php endif; ?> value="CC">Cocos (Keeling) Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CO'): ?>selected<?php endif; ?> value="CO">Colombia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KM'): ?>selected<?php endif; ?> value="KM">Comoros</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CG'): ?>selected<?php endif; ?> value="CG">Congo</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CD'): ?>selected<?php endif; ?> value="CD">Congo, The Democratic Republic of The</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CK'): ?>selected<?php endif; ?> value="CK">Cook Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CR'): ?>selected<?php endif; ?> value="CR">Costa Rica</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CI'): ?>selected<?php endif; ?> value="CI">Cote D'ivoire</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'HR'): ?>selected<?php endif; ?> value="HR">Croatia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CU'): ?>selected<?php endif; ?> value="CU">Cuba</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CY'): ?>selected<?php endif; ?> value="CY">Cyprus</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CZ'): ?>selected<?php endif; ?> value="CZ">Czech Republic</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'DK'): ?>selected<?php endif; ?> value="DK">Denmark</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'DJ'): ?>selected<?php endif; ?> value="DJ">Djibouti</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'DM'): ?>selected<?php endif; ?> value="DM">Dominica</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'DO'): ?>selected<?php endif; ?> value="DO">Dominican Republic</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'EC'): ?>selected<?php endif; ?> value="EC">Ecuador</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'EG'): ?>selected<?php endif; ?> value="EG">Egypt</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SV'): ?>selected<?php endif; ?> value="SV">El Salvador</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GQ'): ?>selected<?php endif; ?> value="GQ">Equatorial Guinea</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ER'): ?>selected<?php endif; ?> value="ER">Eritrea</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'EE'): ?>selected<?php endif; ?> value="EE">Estonia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ET'): ?>selected<?php endif; ?> value="ET">Ethiopia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'FK'): ?>selected<?php endif; ?> value="FK">Falkland Islands (Malvinas)</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'FO'): ?>selected<?php endif; ?> value="FO">Faroe Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'FJ'): ?>selected<?php endif; ?> value="FJ">Fiji</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'FI'): ?>selected<?php endif; ?> value="FI">Finland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'FR'): ?>selected<?php endif; ?> value="FR">France</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GR'): ?>selected<?php endif; ?> value="GF">French Guiana</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PF'): ?>selected<?php endif; ?> value="PF">French Polynesia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TF'): ?>selected<?php endif; ?> value="TF">French Southern Territories</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GA'): ?>selected<?php endif; ?> value="GA">Gabon</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GM'): ?>selected<?php endif; ?> value="GM">Gambia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GE'): ?>selected<?php endif; ?> value="GE">Georgia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'DE'): ?>selected<?php endif; ?> value="DE">Germany</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GH'): ?>selected<?php endif; ?> value="GH">Ghana</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GI'): ?>selected<?php endif; ?> value="GI">Gibraltar</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GR'): ?>selected<?php endif; ?> value="GR">Greece</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GL'): ?>selected<?php endif; ?> value="GL">Greenland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GD'): ?>selected<?php endif; ?> value="GD">Grenada</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GP'): ?>selected<?php endif; ?> value="GP">Guadeloupe</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GU'): ?>selected<?php endif; ?> value="GU">Guam</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GT'): ?>selected<?php endif; ?> value="GT">Guatemala</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GG'): ?>selected<?php endif; ?> value="GG">Guernsey</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GN'): ?>selected<?php endif; ?> value="GN">Guinea</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GW'): ?>selected<?php endif; ?> value="GW">Guinea-bissau</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GY'): ?>selected<?php endif; ?> value="GY">Guyana</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'HT'): ?>selected<?php endif; ?> value="HT">Haiti</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'HM'): ?>selected<?php endif; ?> value="HM">Heard Island and Mcdonald Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VA'): ?>selected<?php endif; ?> value="VA">Holy See (Vatican City State)</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'HN'): ?>selected<?php endif; ?> value="HN">Honduras</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'HK'): ?>selected<?php endif; ?> value="HK">Hong Kong</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'HU'): ?>selected<?php endif; ?> value="HU">Hungary</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IS'): ?>selected<?php endif; ?> value="IS">Iceland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IN'): ?>selected<?php endif; ?> value="IN">India</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ID'): ?>selected<?php endif; ?> value="ID">Indonesia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IR'): ?>selected<?php endif; ?> value="IR">Iran, Islamic Republic of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IQ'): ?>selected<?php endif; ?> value="IQ">Iraq</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IE'): ?>selected<?php endif; ?> value="IE">Ireland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IM'): ?>selected<?php endif; ?> value="IM">Isle of Man</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IL'): ?>selected<?php endif; ?> value="IL">Israel</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'IT'): ?>selected<?php endif; ?> value="IT">Italy</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'JM'): ?>selected<?php endif; ?> value="JM">Jamaica</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'JP'): ?>selected<?php endif; ?> value="JP">Japan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'JE'): ?>selected<?php endif; ?> value="JE">Jersey</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'JO'): ?>selected<?php endif; ?> value="JO">Jordan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KZ'): ?>selected<?php endif; ?> value="KZ">Kazakhstan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KE'): ?>selected<?php endif; ?> value="KE">Kenya</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KI'): ?>selected<?php endif; ?> value="KI">Kiribati</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KP'): ?>selected<?php endif; ?> value="KP">Korea, Democratic People's Republic of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KR'): ?>selected<?php endif; ?> value="KR">Korea, Republic of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KW'): ?>selected<?php endif; ?> value="KW">Kuwait</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KG'): ?>selected<?php endif; ?> value="KG">Kyrgyzstan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LA'): ?>selected<?php endif; ?> value="LA">Lao People's Democratic Republic</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LV'): ?>selected<?php endif; ?> value="LV">Latvia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LB'): ?>selected<?php endif; ?> value="LB">Lebanon</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LS'): ?>selected<?php endif; ?> value="LS">Lesotho</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LR'): ?>selected<?php endif; ?> value="LR">Liberia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LY'): ?>selected<?php endif; ?> value="LY">Libyan Arab Jamahiriya</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LI'): ?>selected<?php endif; ?> value="LI">Liechtenstein</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LT'): ?>selected<?php endif; ?> value="LT">Lithuania</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LU'): ?>selected<?php endif; ?> value="LU">Luxembourg</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MO'): ?>selected<?php endif; ?> value="MO">Macao</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MK'): ?>selected<?php endif; ?> value="MK">Macedonia, The Former Yugoslav Republic of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MG'): ?>selected<?php endif; ?> value="MG">Madagascar</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MW'): ?>selected<?php endif; ?> value="MW">Malawi</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MY'): ?>selected<?php endif; ?> value="MY">Malaysia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MV'): ?>selected<?php endif; ?> value="MV">Maldives</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ML'): ?>selected<?php endif; ?> value="ML">Mali</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MT'): ?>selected<?php endif; ?> value="MT">Malta</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MH'): ?>selected<?php endif; ?> value="MH">Marshall Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MQ'): ?>selected<?php endif; ?> value="MQ">Martinique</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MR'): ?>selected<?php endif; ?> value="MR">Mauritania</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MU'): ?>selected<?php endif; ?> value="MU">Mauritius</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'YT'): ?>selected<?php endif; ?> value="YT">Mayotte</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MX'): ?>selected<?php endif; ?> value="MX">Mexico</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'FM'): ?>selected<?php endif; ?> value="FM">Micronesia, Federated States of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MD'): ?>selected<?php endif; ?> value="MD">Moldova, Republic of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MC'): ?>selected<?php endif; ?> value="MC">Monaco</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MN'): ?>selected<?php endif; ?> value="MN">Mongolia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ME'): ?>selected<?php endif; ?> value="ME">Montenegro</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MS'): ?>selected<?php endif; ?> value="MS">Montserrat</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MA'): ?>selected<?php endif; ?> value="MA">Morocco</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MZ'): ?>selected<?php endif; ?> value="MZ">Mozambique</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MM'): ?>selected<?php endif; ?> value="MM">Myanmar</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NA'): ?>selected<?php endif; ?> value="NA">Namibia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NR'): ?>selected<?php endif; ?> value="NR">Nauru</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NP'): ?>selected<?php endif; ?> value="NP">Nepal</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NL'): ?>selected<?php endif; ?> value="NL">Netherlands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AN'): ?>selected<?php endif; ?> value="AN">Netherlands Antilles</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NC'): ?>selected<?php endif; ?> value="NC">New Caledonia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NZ'): ?>selected<?php endif; ?> value="NZ">New Zealand</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NI'): ?>selected<?php endif; ?> value="NI">Nicaragua</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NE'): ?>selected<?php endif; ?> value="NE">Niger</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NG'): ?>selected<?php endif; ?> value="NG">Nigeria</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NU'): ?>selected<?php endif; ?> value="NU">Niue</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NF'): ?>selected<?php endif; ?> value="NF">Norfolk Island</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'MP'): ?>selected<?php endif; ?> value="MP">Northern Mariana Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'NO'): ?>selected<?php endif; ?> value="NO">Norway</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'OM'): ?>selected<?php endif; ?> value="OM">Oman</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PK'): ?>selected<?php endif; ?> value="PK">Pakistan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PW'): ?>selected<?php endif; ?> value="PW">Palau</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PS'): ?>selected<?php endif; ?> value="PS">Palestinian Territory, Occupied</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PA'): ?>selected<?php endif; ?> value="PA">Panama</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PG'): ?>selected<?php endif; ?> value="PG">Papua New Guinea</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PY'): ?>selected<?php endif; ?> value="PY">Paraguay</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PE'): ?>selected<?php endif; ?> value="PE">Peru</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PH'): ?>selected<?php endif; ?> value="PH">Philippines</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PN'): ?>selected<?php endif; ?> value="PN">Pitcairn</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PL'): ?>selected<?php endif; ?> value="PL">Poland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PT'): ?>selected<?php endif; ?> value="PT">Portugal</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PR'): ?>selected<?php endif; ?> value="PR">Puerto Rico</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'QA'): ?>selected<?php endif; ?> value="QA">Qatar</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'RE'): ?>selected<?php endif; ?> value="RE">Reunion</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'RO'): ?>selected<?php endif; ?> value="RO">Romania</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'RU'): ?>selected<?php endif; ?> value="RU">Russian Federation</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'RW'): ?>selected<?php endif; ?> value="RW">Rwanda</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SH'): ?>selected<?php endif; ?> value="SH">Saint Helena</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'KN'): ?>selected<?php endif; ?> value="KN">Saint Kitts and Nevis</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LC'): ?>selected<?php endif; ?> value="LC">Saint Lucia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'PM'): ?>selected<?php endif; ?> value="PM">Saint Pierre and Miquelon</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VC'): ?>selected<?php endif; ?> value="VC">Saint Vincent and The Grenadines</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'WS'): ?>selected<?php endif; ?> value="WS">Samoa</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SM'): ?>selected<?php endif; ?> value="SM">San Marino</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ST'): ?>selected<?php endif; ?> value="ST">Sao Tome and Principe</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SA'): ?>selected<?php endif; ?> value="SA">Saudi Arabia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SN'): ?>selected<?php endif; ?> value="SN">Senegal</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'RS'): ?>selected<?php endif; ?> value="RS">Serbia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SC'): ?>selected<?php endif; ?> value="SC">Seychelles</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SL'): ?>selected<?php endif; ?> value="SL">Sierra Leone</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SG'): ?>selected<?php endif; ?> value="SG">Singapore</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SK'): ?>selected<?php endif; ?> value="SK">Slovakia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SI'): ?>selected<?php endif; ?> value="SI">Slovenia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SB'): ?>selected<?php endif; ?> value="SB">Solomon Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SO'): ?>selected<?php endif; ?> value="SO">Somalia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ZA'): ?>selected<?php endif; ?> value="ZA">South Africa</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GS'): ?>selected<?php endif; ?> value="GS">South Georgia and The South Sandwich Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ES'): ?>selected<?php endif; ?> value="ES">Spain</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'LK'): ?>selected<?php endif; ?> value="LK">Sri Lanka</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SD'): ?>selected<?php endif; ?> value="SD">Sudan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SR'): ?>selected<?php endif; ?> value="SR">Suriname</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SJ'): ?>selected<?php endif; ?> value="SJ">Svalbard and Jan Mayen</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SZ'): ?>selected<?php endif; ?> value="SZ">Swaziland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SE'): ?>selected<?php endif; ?> value="SE">Sweden</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'CH'): ?>selected<?php endif; ?> value="CH">Switzerland</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'SY'): ?>selected<?php endif; ?> value="SY">Syrian Arab Republic</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TW'): ?>selected<?php endif; ?> value="TW">Taiwan, Province of China</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TJ'): ?>selected<?php endif; ?> value="TJ">Tajikistan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TZ'): ?>selected<?php endif; ?> value="TZ">Tanzania, United Republic of</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TH'): ?>selected<?php endif; ?> value="TH">Thailand</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TL'): ?>selected<?php endif; ?> value="TL">Timor-leste</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TG'): ?>selected<?php endif; ?> value="TG">Togo</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TK'): ?>selected<?php endif; ?> value="TK">Tokelau</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TO'): ?>selected<?php endif; ?> value="TO">Tonga</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TT'): ?>selected<?php endif; ?> value="TT">Trinidad and Tobago</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TN'): ?>selected<?php endif; ?> value="TN">Tunisia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TR'): ?>selected<?php endif; ?> value="TR">Turkey</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TM'): ?>selected<?php endif; ?> value="TM">Turkmenistan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TC'): ?>selected<?php endif; ?> value="TC">Turks and Caicos Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'TV'): ?>selected<?php endif; ?> value="TV">Tuvalu</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'UG'): ?>selected<?php endif; ?> value="UG">Uganda</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'UA'): ?>selected<?php endif; ?> value="UA">Ukraine</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'AE'): ?>selected<?php endif; ?> value="AE">United Arab Emirates</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'GB'): ?>selected<?php endif; ?> value="GB">United Kingdom</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'US'): ?>selected<?php endif; ?> value="US">United States</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'UM'): ?>selected<?php endif; ?> value="UM">United States Minor Outlying Islands</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'UY'): ?>selected<?php endif; ?> value="UY">Uruguay</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'UZ'): ?>selected<?php endif; ?> value="UZ">Uzbekistan</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VA'): ?>selected<?php endif; ?> value="VU">Vanuatu</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VE'): ?>selected<?php endif; ?> value="VE">Venezuela</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VN'): ?>selected<?php endif; ?> value="VN">Viet Nam</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VG'): ?>selected<?php endif; ?> value="VG">Virgin Islands, British</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'VI'): ?>selected<?php endif; ?> value="VI">Virgin Islands, U.S.</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'WF'): ?>selected<?php endif; ?> value="WF">Wallis and Futuna</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'EH'): ?>selected<?php endif; ?> value="EH">Western Sahara</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'YE'): ?>selected<?php endif; ?> value="YE">Yemen</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ZM'): ?>selected<?php endif; ?> value="ZM">Zambia</option>
                            <option  <?php if ($this->_tpl_vars['p']['country'] == 'ZW'): ?>selected<?php endif; ?> value="ZW">Zimbabwe</option>   
                            </select>                        
                        </div>
                        <div class="language">
                            <select name="language">
                                <option value=""><?php echo $this->_tpl_vars['lang64']; ?>
</option>
                                <option  value="en" <?php if ($this->_tpl_vars['p']['mylang'] == 'en'): ?>selected<?php endif; ?>>english</option>
                                <option  value="fr" <?php if ($this->_tpl_vars['p']['mylang'] == 'fr'): ?>selected<?php endif; ?>>fran&#xE7;ais</option>
                                <option  value="de" <?php if ($this->_tpl_vars['p']['mylang'] == 'de'): ?>selected<?php endif; ?>>deutsch</option>
                                <option  value="es" <?php if ($this->_tpl_vars['p']['mylang'] == 'es'): ?>selected<?php endif; ?>>espa&ntilde;ol</option>
                                <option  value="pt" <?php if ($this->_tpl_vars['p']['mylang'] == 'pt'): ?>selected<?php endif; ?>>portugu&#234;s</option>
                                <option  value="ru" <?php if ($this->_tpl_vars['p']['mylang'] == 'ru'): ?>selected<?php endif; ?>>pусский</option>
                                <option  value="tr" <?php if ($this->_tpl_vars['p']['mylang'] == 'tr'): ?>selected<?php endif; ?>>t&uuml;rk&ccedil;e</option>
                            </select>
                        </div>
                    </div>
                    <p class="info"><?php echo $this->_tpl_vars['lang65']; ?>
</p>
                    <p class="info last"><?php echo $this->_tpl_vars['lang66']; ?>
</p>
                </div>
                <div class="field">
                    <label><h4><?php echo $this->_tpl_vars['lang67']; ?>
 / <?php echo $this->_tpl_vars['lang68']; ?>
</h4><input type="text" class="text tipped" name="details" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['description'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" maxlength="120"/></label>
                    <p class="info" style="visibility:hidden"><?php echo $this->_tpl_vars['lang69']; ?>
</p>
                </div>
                
                <div class="field">
                    <label><h4><?php echo $this->_tpl_vars['lang70']; ?>
</h4><input type="text" class="text tipped" name="website" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['p']['website'])) ? $this->_run_mod_handler('stripslashes', true, $_tmp) : stripslashes($_tmp)); ?>
" maxlength="200"/></label>
                    <p class="info" style="visibility:hidden"><?php echo $this->_tpl_vars['lang71']; ?>
</p>
                </div>
                <hr />
                <div class="field password">
                    <h4><?php echo $this->_tpl_vars['lang72']; ?>
</h4>
                    <div class="wrap">
                        <div class="first">
                        	<input type="password" class="text tipped" name="new_password" maxlength="32"/>
                        </div>
                        <div class="second">
                        	<input type="password" class="text tipped" name="new_password_repeat" maxlength="32"/>
                        </div>
                    </div>
                    <div class="fix-password">
                    <p class="info" style="visibility:hidden"><?php echo $this->_tpl_vars['lang72']; ?>
</p>
                    <p class="info last" style="visibility:hidden"><?php echo $this->_tpl_vars['lang73']; ?>
</p>
                    </div>
                </div>
                <hr />
                <div class="field checkbox">
                    <h4><?php echo $this->_tpl_vars['lang74']; ?>
</h4>
                    <ul>                    
                        <li>
                        	<label><input type="checkbox" name="news" value="1" <?php if ($this->_tpl_vars['p']['news'] == '1'): ?>checked="checked"<?php endif; ?>  /><?php echo $this->_tpl_vars['lang75']; ?>
</label>
                        </li>
                    </ul>
                </div>
                <input type="hidden" name="subform" value="1" />
            </form>
            <div class="setting-actions">
            	<a class="deactivate" href="<?php echo $this->_tpl_vars['baseurl']; ?>
/delete-account"><?php echo $this->_tpl_vars['lang76']; ?>
</a>
                <ul class="buttons">
                	<li><a id="settings_submit" class="button" href="#" onClick="document.formsettings.submit();"><?php echo $this->_tpl_vars['lang77']; ?>
</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="<?php echo $this->_tpl_vars['baseurl']; ?>
/js/jscolor.js"></script>
<div id="footer" class="middle">