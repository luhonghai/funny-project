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
	$username = htmlentities(strip_tags($_REQUEST['username']), ENT_COMPAT, "UTF-8");
	$password = htmlentities(strip_tags($_REQUEST['password']), ENT_COMPAT, "UTF-8");

	if($username=="")
	{
		$error=$lang['4'];
	}
	elseif($password=="")
	{
		$error=$lang['5'];
	}
	else
	{
		if(!verify_valid_email($username))
		{				
			$encryptedpassword = md5($password);
			$query="SELECT status,USERID,email,username,verified,filter,mylang from members WHERE username='".mysql_real_escape_string($username)."' and password='".mysql_real_escape_string($encryptedpassword)."'";
			$result=$conn->execute($query);
			
			if($result->recordcount()<1)
			{
				$error=$lang['26'];
			}
			elseif($result->fields['status']=="0")
			{
				$error = $lang['30'];
			}
	
			if($error=="")
			{
				$query="update members set lastlogin='".time()."', lip='".$_SERVER['REMOTE_ADDR']."' WHERE username='".mysql_real_escape_string($username)."'";
				$conn->execute($query);
				$_SESSION['USERID']=$result->fields['USERID'];
				$_SESSION['EMAIL']=$result->fields['email'];
				$_SESSION['USERNAME']=$result->fields['username'];
				$_SESSION['VERIFIED']=$result->fields['verified'];
				$_SESSION['FILTER']=$result->fields['filter'];
				$setlang = $result->fields['mylang'];
				if($setlang != "")
				{
					$addlang = "?language=".$setlang;	
				}
				if($_REQUEST["remember"]=="yes")
				{
					create_slrememberme();
				}
				
				if($redirect == "")
				{
					header("Location:$config[baseurl]/settings".$addlang);exit;
				}
				else
				{
					header("Location:$redirect");exit;
				}
	
			}
		}
		else
		{
			$encryptedpassword = md5($password);
			$query="SELECT status,USERID,email,username,verified,filter,mylang from members WHERE email='".mysql_real_escape_string($username)."' and password='".mysql_real_escape_string($encryptedpassword)."'";
			$result=$conn->execute($query);
			
			if($result->recordcount()<1)
			{
				$error=$lang['37'];
			}
			elseif($result->fields['status']=="0")
			{
				$error = $lang['30'];
			}
	
			if($error=="")
			{
				$query="update members set lastlogin='".time()."', lip='".$_SERVER['REMOTE_ADDR']."' WHERE username='".mysql_real_escape_string($username)."'";
				$conn->execute($query);
				$_SESSION['USERID']=$result->fields['USERID'];
				$_SESSION['EMAIL']=$result->fields['email'];
				$_SESSION['USERNAME']=$result->fields['username'];
				$_SESSION['VERIFIED']=$result->fields['verified'];
				$_SESSION['FILTER']=$result->fields['filter'];
				$setlang = $result->fields['mylang'];
				if($setlang != "")
				{
					$addlang = "?language=".$setlang;	
				}
				if($_REQUEST["remember"]=="yes")
				{
					create_slrememberme();
				}
				
				if($redirect == "")
				{
					header("Location:$config[baseurl]/settings".$addlang);exit;
				}
				else
				{
					header("Location:$redirect");exit;
				}
	
			}
		}
	}
}

$pagetitle = $lang['11'];
STemplate::assign('pagetitle',$pagetitle);
STemplate::assign('error',$error);

//TEMPLATES BEGIN
STemplate::display('login.tpl');
//TEMPLATES END
?>