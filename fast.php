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
		
$query = "SELECT * FROM posts WHERE active='1' AND nsfw='0' AND pic!='' order by rand() limit 1";
$executequery = $conn->execute($query);
$parray = $executequery->getarray();
STemplate::assign('p',$parray[0]);	
$USERID = $parray[0]['USERID'];
$PID = $parray[0]['PID'];
if($PID > 0)
{
	STemplate::assign('pagetitle',stripslashes($parray[0]['story']));
	update_last_viewed($PID);
	update_your_viewed($USERID);
	if (session_verification())
	{
		$SID = $_SESSION['USERID'];
		update_you_viewed($SID);
	}
	
	$query="SELECT PID FROM posts WHERE PID!='".mysql_real_escape_string($pid)."' AND PID>'".mysql_real_escape_string($pid)."' AND active='1' order by PID asc limit 1";
	$executequery=$conn->execute($query);
	$next = $executequery->fields['PID'];
	STemplate::assign('next',$next);
	$query="SELECT PID FROM posts WHERE PID!='".mysql_real_escape_string($pid)."' AND PID<'".mysql_real_escape_string($pid)."' AND active='1' order by PID desc limit 1";
	$executequery=$conn->execute($query);
	$prev = $executequery->fields['PID'];
	STemplate::assign('prev',$prev);
}

//TEMPLATES BEGIN
STemplate::assign('error',$error);
STemplate::assign('message',$message);
STemplate::display('fast.tpl');
//TEMPLATES END
?>