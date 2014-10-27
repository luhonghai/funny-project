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

include("include/config.php");
include("include/functions/import.php");

$pid = intval(cleanit($_REQUEST['pid']));
$reason = intval(cleanit($_REQUEST['number']));
$repost_link = cleanit($_REQUEST['repost_link']);

if($pid > 0 && $reason > 0)
{
	$query="INSERT INTO posts_reports SET PID='".mysql_real_escape_string($pid)."', reason='".mysql_real_escape_string($reason)."', time='".time()."', ip='".$_SERVER['REMOTE_ADDR']."'";
	$result=$conn->execute($query);
}
?>