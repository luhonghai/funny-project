<?php
/**************************************************************************************************
| 9Gag Clone Script
| http://www.best9gagclonescript.com
| support@best9gagclonescript.com
|
|**************************************************************************************************
|
| By using this software you agree that you have read and acknowledged our End-User License 
| 
|
| Copyright (c) best9gagclonescript.com. All rights reserved.
|**************************************************************************************************/

include("../include/config.php");
include_once("../include/functions/import.php");
verify_login_admin();

if($_POST['submitform'] == "1")
{
	$cname = $_POST[cname];
	if($cname == "")
	{
		$error = "Error: Please enter a channel name.";
	}
	else
	{
		$sql = "insert channels set cname='".mysql_real_escape_string($cname)."'";
		$conn->execute($sql);
		$message = "Channel Successfully Added.";
		Stemplate::assign('message',$message);
	}
}

$mainmenu = "6";
$submenu = "1";
Stemplate::assign('error',$error);
Stemplate::assign('mainmenu',$mainmenu);
Stemplate::assign('submenu',$submenu);
STemplate::display("administrator/global_header.tpl");
STemplate::display("administrator/ch_create.tpl");
STemplate::display("administrator/global_footer.tpl");
?>