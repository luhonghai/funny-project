<?php
/**************************************************************************************************
| 9Gag Clone Script
| http://www.9gagclonescript.com
| webmaster@9gagclonescript.com
|
|**************************************************************************************************
|
| By using this software you agree that you have read and acknowledged our End-User License 
| Agreement available at http://www.9gagclonescript.com/eula.html and to be bound by it.
|
| Copyright (c) 9GagCloneScript.com. All rights reserved.
|**************************************************************************************************/

include("../include/config.php");
include_once("../include/functions/import.php");
verify_login_admin();

if($_POST['submitform'] == "1")
{
	$arr = array("site_name", "contact_email", "site_email", "items_per_page", "quota", "mtrend", "approve_stories", "myes", "mno", "twitter", "FACEBOOK_APP_ID", "FACEBOOK_SECRET", "FACEBOOK_PROFILE", "FACEBOOK_ADMIN", "wm", "watermark", "infinity_paging", "enable_featured", "points_gag", "points_view");
	foreach ($arr as $value)
	{
		$sql = "update config set value='".mysql_real_escape_string($_POST[$value])."' where setting='$value'";
		$conn->execute($sql);
		Stemplate::assign($value,strip_mq_gpc($_POST[$value]));
	}
	$message = "General Settings Successfully Saved.";
	Stemplate::assign('message',$message);
}

$mainmenu = "2";
$submenu = "1";
Stemplate::assign('mainmenu',$mainmenu);
Stemplate::assign('submenu',$submenu);
STemplate::display("administrator/global_header.tpl");
STemplate::display("administrator/settings_general.tpl");
STemplate::display("administrator/global_footer.tpl");
?>