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

$redirect = stripslashes($_REQUEST['redirect']);
$r = base64_decode($redirect);
STemplate::assign('r',$r);

if ($_SESSION['USERID'] != "" && $redirect != "")
{
	header("Location:$redirect");exit;
}

if($_REQUEST['logsub']!="")
{
	$user_email = htmlentities(strip_tags($_REQUEST['email']), ENT_COMPAT, "UTF-8");
	if($user_email=="")
	{
		$error = $lang['46'];
	}
	elseif(!verify_valid_email($user_email))
	{
		$error = $lang['47'];
	}
	else
	{
		$query="SELECT USERID,username,pwd FROM members WHERE email='".mysql_real_escape_string($user_email)."'";
		$result=$conn->execute($query);
		$UID = intval($result->fields['USERID']);
		$pwd = $result->fields['pwd'];
		$un = $result->fields['username'];
		
		if($UID > 0)
		{
			// Send E-Mail Begin
			$sendto = $user_email;
			$sendername = $config['site_name'];
			$from = $config['site_email'];
			$subject = $lang['33'];
			$sendmailbody = stripslashes($un).",<br><br>";
			$sendmailbody .= $lang['34']."<br>";
			$sendmailbody .= $lang['35']." $pwd<br><br>";
			$sendmailbody .= $lang['32'].",<br>".stripslashes($sendername);
			mailme($sendto,$sendername,$from,$subject,$sendmailbody,$bcc="");
			// Send E-Mail End
		}
		$error .= $lang['31'];
	}
}

$pagetitle = $lang['11'];
STemplate::assign('pagetitle',$pagetitle);
STemplate::assign('error',$error);

//TEMPLATES BEGIN
STemplate::display('forgot.tpl');
//TEMPLATES END
?>