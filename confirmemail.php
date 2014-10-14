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

if ($_REQUEST['c'] != "")
{
	if (strlen($_REQUEST['c']) != "15")
	{
		$error = $lang['88'];
	}
	else
	{
		$code = htmlentities(strip_tags($_REQUEST['c']), ENT_COMPAT, "UTF-8");
		$query="SELECT USERID from members_verifycode WHERE code='".mysql_real_escape_string($code)."'";
		$result=$conn->execute($query);
		
		if($result->recordcount()>=1)
		{
			$userid = $result->fields['USERID'];
			$query="SELECT verified from members WHERE USERID='$userid'";
			$result=$conn->execute($query);
			$verified = $result->fields['verified'];
			if ($verified == "1")
			{
				$error = $lang['89'];
			}
			else
			{
				$query="UPDATE members SET verified='1' WHERE USERID='$userid'";
				$result=$conn->execute($query);
				$message = $lang['90'];
				if ($_SESSION['USERID'] == $userid)
				{
					$_SESSION['VERIFIED'] = "1";
				}
			}
		}
		else
		{
			$error = $lang['88'];;
		}
	}
}

$pagetitle = $lang['85'];
STemplate::assign('pagetitle',$pagetitle);
STemplate::assign('message',$message);
STemplate::assign('error',$error);

//TEMPLATES BEGIN
STemplate::display('header.tpl');
STemplate::display('confirmemail.tpl');
STemplate::display('footer.tpl');
//TEMPLATES END
?>