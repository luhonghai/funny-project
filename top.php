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

$page = intval($_REQUEST['page']);

if($page=="0")
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

$query1 = "SELECT count(*) as total from members where status='1' order by points desc limit $config[maximum_results]";
$query2 = "SELECT USERID, username, youviewed, points from members where status='1' order by points desc limit $pagingstart, $config[items_per_page]";
	
$executequery1 = $conn->Execute($query1);

$totalvideos = $executequery1->fields['total'];
if ($totalvideos > 0)
{
	if($executequery1->fields['total']<=$config['maximum_results'])
	{
		$total = $executequery1->fields['total'];
	}
	else
	{
		$total = $config['maximum_results'];
	}
	
	$toppage = ceil($total/$config['items_per_page']);
	if($toppage==0)
	{
		$xpage=$toppage+1;
	}
	else
	{
		$xpage = $toppage;
	}
	
	$executequery2 = $conn->Execute($query2);
	$posts = $executequery2->getrows();
	$beginning=$pagingstart+1;
	$ending=$pagingstart+$executequery2->recordcount();
	$k=1;
	$theprevpage=$currentpage-1;
	$thenextpage=$currentpage+1;
	
	if ($currentpage > 0)
	{
		if($currentpage > 1) 
		{
			STemplate::assign('tpp',$theprevpage);
		}
		$counter=0;
		$lowercount = $currentpage-5;
		if ($lowercount <= 0) $lowercount = 1;
		while ($lowercount < $currentpage)
		{
			$lowercount++;
			$counter++;
		}		
		$uppercounter = $currentpage+1;
		while (($uppercounter < $currentpage+10-$counter) && ($uppercounter<=$toppage))
		{
			$uppercounter++;
		}
		if($currentpage < $toppage) 
		{
			STemplate::assign('tnp',$thenextpage);
		}
	}
}
STemplate::assign('page',$page);
STemplate::assign('posts',$posts);
$templateselect = "top.tpl";

//TEMPLATES BEGIN
STemplate::assign('pagetitle', $lang['253']);
STemplate::assign('menu',4);
STemplate::display('header.tpl');
STemplate::display($templateselect);
STemplate::display('footer.tpl');
//TEMPLATES END
?>