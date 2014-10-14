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

$love = cleanit($_REQUEST['l']);
$unlove = cleanit($_REQUEST['u']);
$pid = cleanit($_REQUEST['pid']);
$SID = intval($_SESSION['USERID']);
if(($SID > 0) && ($pid > 0))
{
	if($love == "1")
	{
		$query="INSERT INTO posts_favorited SET PID='".mysql_real_escape_string($pid)."', USERID='".mysql_real_escape_string($SID)."'";
		$result=$conn->execute($query);
		
		$cname = $pid;
		if($pid > 0 && !isset($_COOKIE[$cname]))
		{
			$query="UPDATE posts SET favclicks=favclicks+1 WHERE PID='".mysql_real_escape_string($pid)."'";
			$result=$conn->execute($query);
			$expire=time()+60*60*24;
			setcookie($cname, "yes", $expire);
		}
		$query="DELETE FROM posts_unfavorited WHERE PID='".mysql_real_escape_string($pid)."' AND USERID='".mysql_real_escape_string($SID)."'";
		$result=$conn->execute($query);
	}
	elseif($love == "-1")
	{
		$query="DELETE FROM posts_favorited WHERE PID='".mysql_real_escape_string($pid)."' AND USERID='".mysql_real_escape_string($SID)."'";
		$result=$conn->execute($query);
	}
	if($unlove == "1")
	{
		$query="INSERT INTO posts_unfavorited SET PID='".mysql_real_escape_string($pid)."', USERID='".mysql_real_escape_string($SID)."'";
		$result=$conn->execute($query);
		$cname = "D".$pid;
		if($pid > 0 && !isset($_COOKIE[$cname]))
		{
			$query="UPDATE posts SET unfavclicks=unfavclicks+1 WHERE PID='".mysql_real_escape_string($pid)."'";
			$result=$conn->execute($query);
			$expire=time()+60*60*24;
			setcookie($cname, "yes", $expire);
		}
		$query="DELETE FROM posts_favorited WHERE PID='".mysql_real_escape_string($pid)."' AND USERID='".mysql_real_escape_string($SID)."'";
		$result=$conn->execute($query);
	}
	elseif($unlove == "-1")
	{
		$query="DELETE FROM posts_unfavorited WHERE PID='".mysql_real_escape_string($pid)."' AND USERID='".mysql_real_escape_string($SID)."'";
		$result=$conn->execute($query);
	}
	$query="SELECT favclicks FROM posts WHERE PID='".mysql_real_escape_string($pid)."'";
    $executequery=$conn->execute($query);
    $favclicks = $executequery->fields['favclicks'];
	$mtrend = $config['mtrend'];
	if($favclicks >= $mtrend)
	{
		$query="UPDATE posts SET phase='2', htime='".time()."' WHERE PID='".mysql_real_escape_string($pid)."' AND phase='1'";
		$result=$conn->execute($query);
		$query="DELETE FROM posts_unfavorited WHERE PID='".mysql_real_escape_string($pid)."'";
		$result=$conn->execute($query);
	}
		
	$query="SELECT count(*) as total FROM posts_favorited WHERE PID='".mysql_real_escape_string($pid)."'";
	$executequery=$conn->execute($query);
	$total = $executequery->fields[total];
	echo intval($total);
}
?>