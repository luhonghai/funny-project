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
$thebaseurl = $config['baseurl'];

$uname = cleanit($_REQUEST['uname']);

$page = intval($_REQUEST['page']);

if($page=="")
{
	$page = "1";
}
$currentpage = $page;

if ($page >=2)
{
	$pagingstart = ($page-1)*$config['items_per_page'];
}
else
{
	$pagingstart = "0";
}

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
		$query1 = "SELECT count(*) as total from posts A, members B where A.active='1' AND A.USERID=B.USERID AND A.USERID='".mysql_real_escape_string($USERID)."' order by A.PID desc limit  $config[maximum_results]";
		$executequery1 = $conn->Execute($query1);
		$totalposts = $executequery1->fields['total'];
		
		$query = "SELECT A.*, B.username from posts A, members B where A.active='1' AND A.USERID=B.USERID AND A.USERID='".mysql_real_escape_string($USERID)."' order by A.PID desc limit  $pagingstart, $config[items_per_page]";
		$results=$conn->execute($query);
		$posts = $results->getrows();
		STemplate::assign('posts',$posts);
		STemplate::assign('totalposts',$totalposts);
		STemplate::assign('pagetitle',$uname);
	
	$theprevpage=$currentpage-1;
	$thenextpage=$currentpage+1;
		
	if ($currentpage > 0)
	{
		if($currentpage > 1) 
		{
			STemplate::assign('tpp',$theprevpage);
		}
		$currentposts = $currentpage * $config['items_per_page'];
		
		if($totalposts > $currentposts) 
		{
			STemplate::assign('tnp',$thenextpage);
		}
	}
		
		$eurl = base64_encode("/user/".$uname."?page=".$page);
		STemplate::assign('eurl',$eurl);
		
		$query = "select count(*) as total from posts_favorited where USERID='".mysql_real_escape_string($USERID)."' limit 1"; 
		$executequery = $conn->execute($query);
		$tl = $executequery->fields['total'];
		STemplate::assign('tl',$tl);
	
		$t = 'user.tpl';
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

if ($config['channels'] == 1)
{
$cats = loadallchannels();
STemplate::assign('allchannels',$cats);

$c = loadtopchannels($cats);
STemplate::assign('c',$c);
}

$_SESSION['location'] = "/user/".$uname."?page=".$page;

//TEMPLATES BEGIN
STemplate::assign('message',$message);
STemplate::display('header.tpl');
STemplate::display($t);
STemplate::display('footer.tpl');
//TEMPLATES END
?>