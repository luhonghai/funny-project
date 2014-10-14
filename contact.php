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
$thebaseurl = $config['baseurl'];

if($_REQUEST['msgsub'] == "1")
{
	$topic = cleanit($_REQUEST['topic']);
	$subject = cleanit($_REQUEST['subject']);
	$msg = cleanit($_REQUEST['msg']);
	$name = cleanit($_REQUEST['name']);
	$email = cleanit($_REQUEST['email']);
	$username = cleanit($_REQUEST['username']);
	$os = cleanit($_REQUEST['os']);
	$imagecode = cleanit($_REQUEST['imagecode']);
	STemplate::assign('topic',$topic);
	STemplate::assign('subject',$subject);
	STemplate::assign('msg',$msg);
	STemplate::assign('name',$name);
	STemplate::assign('email',$email);
	STemplate::assign('username',$username);
	STemplate::assign('os',$os);
	
	if($topic == "")
	{
		$error = 	$lang['243'];
	}
	elseif($subject == "")
	{
		$error = 	$lang['244'];
	}
	elseif($msg == "")
	{
		$error = 	$lang['245'];
	}
	elseif($name == "")
	{
		$error = 	$lang['246'];
	}
	elseif($email == "")
	{
		$error = $lang['46'];
	}
	elseif(!verify_valid_email($email))
	{
		$error = $lang['47'];
	}
	elseif($imagecode != $_SESSION['imagecode'])
	{
		$error = $lang['247'];
	}
	else
	{
		// Send E-Mail Begin
		$sendto = $config['contact_email'];
		$sendername = $config['site_name'];
		$from = $config['site_email'];
		$sub = $lang['249'];
		$sendmailbody = $lang['250'].",<br><br>";
		$sendmailbody .= $lang['227'].": ".$topic." <br><br>";
		$sendmailbody .= $lang['233'].": ".$subject." <br><br>";
		$sendmailbody .= $lang['235'].": ".$msg." <br><br>";
		$sendmailbody .= $lang['237'].": ".$name." <br><br>";
		$sendmailbody .= $lang['238'].": ".$email." <br><br>";
		$sendmailbody .= $lang['1'].": ".$username." <br><br>";
		$sendmailbody .= $lang['240'].": ".$os." <br><br>";		
		$sendmailbody .= $lang['32'].",<br>".stripslashes($sendername);
		mailme($sendto,$sendername,$from,$sub,$sendmailbody,$bcc="");
		// Send E-Mail End
		$message = $lang['248'];
		STemplate::assign('topic',"");
		STemplate::assign('subject',"");
		STemplate::assign('msg',"");
		STemplate::assign('name',"");
		STemplate::assign('email',"");
		STemplate::assign('username',"");
		STemplate::assign('os',"");
	}
}

$templateselect = "contact.tpl";
$pagetitle = $lang['205'];
STemplate::assign('pagetitle',$pagetitle);

//TEMPLATES BEGIN
STemplate::assign('error',$error);
STemplate::assign('message',$message);
STemplate::display('header.tpl');
STemplate::display($templateselect);
STemplate::display('footer.tpl');
//TEMPLATES END
?>