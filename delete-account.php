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

include("include/config.php");
include("include/functions/import.php");

$SID = $_SESSION['USERID'];
if ($SID != "" && $SID >= 0 && is_numeric($SID))
{	
	$SID = intval($_SESSION['USERID']);
	if($_POST['delsub'] == "1")
	{
		$password = cleanit($_REQUEST['password']);	
		if($password != "")
		{
			$mpassword = md5($password);
			$query = "select USERID from members where USERID='".mysql_real_escape_string($SID)."' AND password='".mysql_real_escape_string($mpassword)."' limit 1"; 
			$executequery = $conn->execute($query);
			$USERID = intval($executequery->fields['USERID']);
			if($USERID > 0)
			{
				delete_user($USERID);
				header("Location:$config[baseurl]/log_out");exit;
			}
			else
			{
				$error = $lang['84'];
			}
		}
		else
		{
			$error = $lang['5'];
		}
	}
}
else
{
	header("Location:$config[baseurl]/login");exit;
}

//TEMPLATES BEGIN
STemplate::assign('error',$error);
STemplate::assign('message',$message);
STemplate::display('header.tpl');
STemplate::display('delete-account.tpl');
STemplate::display('footer.tpl');
//TEMPLATES END
?>