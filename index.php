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

$show = cleanit(isset($_REQUEST['show']) ? $_REQUEST['show'] : "");
$gridsql = "";
if($show == "thumbs")
{
	$gridsql = "AND A.youtube_key='' AND A.fod_key=''";	
}

$query1 = "SELECT count(*) as total from posts A, members B where A.active='1' AND A.USERID=B.USERID AND A.phase>'1' $gridsql order by A.htime desc limit $config[maximum_results]";
$query2 = "SELECT A.*, B.username from posts A, members B where A.active='1' AND A.USERID=B.USERID AND A.phase>'1' $gridsql order by A.htime desc limit $pagingstart, $config[items_per_page]";
$executequery1 = $conn->Execute($query1);
$totalvideos = $executequery1->fields['total'];

$infinity_paging = $config['infinity_paging'];

if($show == "thumbs")
{
	$infinity_paging = "0";
	$grid = "1";
}
if($infinity_paging == "1")
{
	$templateselect = "index.tpl";
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
	}
}
else
{
	if($grid == "1")//
	{
		$templateselect = "index_grid.tpl";
	}
	else
	{
		$templateselect = "index_std.tpl";
	}
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
}

$query3 = "SELECT A.PID, A.story, A.pic, B.username from posts A, members B where A.active='1' AND A.USERID=B.USERID AND A.feat='1' AND A.youtube_key='' AND A.fod_key='' order by rand() limit 5";
$executequery3 = $conn->Execute($query3);
$feat = $executequery3->getrows();
STemplate::assign('feat',$feat);

$eurl = base64_encode("/hot");
STemplate::assign('eurl',$eurl);

//TEMPLATES BEGIN
STemplate::assign('homepage',1);
STemplate::assign('menu',1);
STemplate::assign('posts',$posts);
STemplate::display('header.tpl');
STemplate::display($templateselect);
STemplate::display('footer.tpl');
//TEMPLATES END
?>