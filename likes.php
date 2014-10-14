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

$uname = cleanit($_REQUEST['uname']);
if($uname != "")
{
	STemplate::assign('uname',$uname);
	$queryp = "select USERID, username, country, description, color1, color2, website from members where username='".mysql_real_escape_string($uname)."' AND status='1'"; 
	$resultsp=$conn->execute($queryp);
	$p = $resultsp->getrows();
	STemplate::assign('p',$p[0]);
	$USERID = intval($p[0]['USERID']);

	if($USERID > 0)
	{
		$query = "SELECT A.*, B.username from posts A, members B, posts_favorited C where A.active='1' AND A.USERID=B.USERID AND C.USERID='".mysql_real_escape_string($USERID)."' AND C.PID=A.PID order by C.FID desc limit 50";
		$results=$conn->execute($query);
		$posts = $results->getrows();
		STemplate::assign('posts',$posts);
		STemplate::assign('pagetitle',$uname." ".$lang['193']);
		
		$eurl = base64_encode("/user/".$uname."/likes");
		STemplate::assign('eurl',$eurl);
		
		$query = "select count(*) as total from posts where USERID='".mysql_real_escape_string($USERID)."' AND active='1' limit 1"; 
		$executequery = $conn->execute($query);
		$tl = $executequery->fields['total'];
		STemplate::assign('tl',$tl);
	
		$t = 'likes.tpl';
	}
	else
	{
		$t = 'empty.tpl';
	}
}
else
{
	$t = 'empty.tpl';
}

//TEMPLATES BEGIN
STemplate::assign('message',$message);
STemplate::display('header.tpl');
STemplate::display($t);
STemplate::display('footer.tpl');
//TEMPLATES END
?>