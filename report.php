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

$pid = intval(cleanit($_REQUEST['pid']));
$reason = intval(cleanit($_REQUEST['number']));
$repost_link = cleanit($_REQUEST['repost_link']);

if($pid > 0 && $reason > 0)
{
	$query="INSERT INTO posts_reports SET PID='".mysql_real_escape_string($pid)."', reason='".mysql_real_escape_string($reason)."', time='".time()."', ip='".$_SERVER['REMOTE_ADDR']."'";
	$result=$conn->execute($query);
}
?>