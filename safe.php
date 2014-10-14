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
	$m = cleanit($_REQUEST['m']);
	$o = intval(cleanit($_REQUEST['o']));

	if($o == "1")
	{
		if($SID > 0 && $m != "")
		{
			if($_SESSION['FILTER'] != "1")
			{
				$query = "UPDATE members SET filter='1' WHERE USERID='".mysql_real_escape_string($SID)."' limit 1"; 
				$executequery = $conn->execute($query);
				$_SESSION['FILTER'] = 1;
			}
		}
	}
	else
	{
		if($SID > 0 && $m != "")
		{
			if($_SESSION['FILTER'] != "0")
			{
				$query = "UPDATE members SET filter='0' WHERE USERID='".mysql_real_escape_string($SID)."' limit 1"; 
				$executequery = $conn->execute($query);
				$_SESSION['FILTER'] = 0;
			}
		}
	}	
	
	$goto = base64_decode($m);
	header("Location:$config[baseurl]".$goto);exit;
}
else
{
	header("Location:$config[baseurl]/login");exit;
}
?>