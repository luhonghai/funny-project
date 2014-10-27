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

$page = intval($_REQUEST['page']);

if($page=="")
{
	$page = 1;
}
$currentpage = $page;

if ($page > 1)
{
	$pagingstart = ($page-1)*$config['items_per_page'];
}
else
{
	$pagingstart = "0";
}

	$queryr = "SELECT * FROM members WHERE verified='1' AND username!='' ORDER BY posts desc limit $pagingstart, $config[items_per_page]";

	$executequeryr = $conn->Execute($queryr);
	$users = $executequeryr->getrows();

	$ranks = ($currentpage - 1) * $config['items_per_page'];
	$ucount = count($users);
	for ($i = 0; $i < $ucount; $i++) {
	$users[$i]['rank'] = $i + 1 + $ranks;
	}
	
	
	$beginning=$pagingstart+1;
	$ending=$pagingstart+$executequeryr->recordcount();
	$k=1;
	$theprevpage=$currentpage-1;
	$thenextpage=$currentpage+1;
	$query1 = "SELECT count(*) as total FROM members ORDER BY posts desc";
	$executequery1 = $conn->Execute($query1);
	$totalusers = $executequery1->fields['total'];
	$lastpage = ceil($totalusers/$config[items_per_page]);
		if($currentpage > 1) 
		{
			STemplate::assign('tpp',$theprevpage);
		}
		if($currentpage < $lastpage) 
		{
			STemplate::assign('tnp',$thenextpage);
		}


$eurl = base64_encode("/top-users");
STemplate::assign('eurl',$eurl);
STemplate::assign('users',$users);
$templateselect = "topusers.tpl";

if ($config['channels'] == 1)
{
$cats = loadallchannels();
STemplate::assign('allchannels',$cats);

$c = loadtopchannels($cats);
STemplate::assign('c',$c);
}

$_SESSION['location'] = "/top-users";

//TEMPLATES BEGIN
STemplate::assign('pagetitle', $lang['260']);
STemplate::assign('menu',4);
STemplate::display('header.tpl');
STemplate::display($templateselect);
STemplate::display('footer.tpl');
//TEMPLATES END
?>