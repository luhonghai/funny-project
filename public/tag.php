<?php
include("include/config.php");
include("include/functions/import.php");
$thebaseurl = $config['baseurl'];
$tag = $_REQUEST['tag'];
$tag = str_replace(' ','-',$tag);
if($_REQUEST['tag'] != $tag)
{
	header("Location:".$thebaseurl."/tag/".$tag);exit;
}


if($config['re_mobile'] == "1" && $config['m_url'] != "")
{
	if($mobile != "1")
	{
		include("include/mobile.php");
		$mcheck = is_md();
		if($mcheck != "")
		{
			header("Location:".$config['m_url']);exit;
		}
	}
}

$tag = str_replace('-',' ',$tag);
if ( in_array($tag,array('Anh Dep','anh dep','Ảnh Đẹp','ảnh đẹp'))) {
	$templateselect = "tag_anhdep.tpl";
	STemplate::assign('menu',5);
	$tag = "ảnh đẹp";
}else{	
	$templateselect = "tag_std.tpl";
	STemplate::assign('menu',1);
}
STemplate::assign('tag',$tag);
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

$show = cleanit($_REQUEST['show']);
if($show == "thumbs")
{
	$gridsql = "AND A.youtube_key='' AND A.fod_key=''";	
}


	$sterm[] = $tag;
	$sterm[0] = str_replace("'", "''", $sterm[0]);
	$sterm[0] = str_replace("  ", "", $sterm[0]);
	$sterm[0] = str_replace("-", "", $sterm[0]);
	$stermsplit = explode(" ",$sterm[0]);
	$stripapos = str_replace("'", "''", $searchterm);
	$stermstr = "";
	if (count($stermsplit)>=1) 
	{
		for($i=0;$i<count($stermsplit);$i++)
		{
			if ($stermsplit[$i] != "" && $stermsplit[$i] != "-" && $stermsplit[$i] != " ")
			{	if ($i == 0) {
					$str1.=" A.tags like '%$stermsplit[$i]%' ";
				}else{
					$str1.=" AND A.tags like '%$stermsplit[$i]%' ";
				}
			}
		}
		for($i=0;$i<count($stermsplit);$i++)
		{
			if ($stermsplit[$i] != "" && $stermsplit[$i] != "-" && $stermsplit[$i] != " ")
			{	
				$keyword = vnseo($stermsplit[$i]);
				if ($i == 0) {
					$str2.=" A.tags like '%$keyword%' ";
				}else{
				
					$str2.=" AND A.tags like '%$keyword%' ";
				}
			}
		}
	}
	
	$stermstr = " AND (( ".$str1." ) OR ( ".$str2." ) ) ";

	$eurl = base64_encode("/tag/".$tag);
	STemplate::assign('eurl',$eurl);
	$query1 = "SELECT count(*) as total from posts A, members B where A.active='1' AND A.USERID=B.USERID $stermstr order by A.time_added desc limit $config[maximum_results]";
	$query2 = "SELECT A.*, B.username from posts A, members B where A.active='1' AND A.USERID=B.USERID   $stermstr order by A.time_added desc limit $pagingstart, $config[items_per_page]";

	$executequery1 = $conn->CacheExecute(20,$query1);
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
		
		$executequery2 = $conn->CacheExecute(20,$query2);
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


$tab = $tag;
STemplate::assign('tab', "Chủ đề ".$tab);

//TEMPLATES BEGIN
STemplate::assign('pagetitle', $tag.' | Tin tức hình ảnh video clip '.$tag );
STemplate::assign('description',$tag.' - Xem những hình ảnh video mới nhất về '.$tag.'. Chủ đề đang được xem nhiều ở Việt Nam');
STemplate::assign('posts',$posts);
STemplate::display('header.tpl');
STemplate::display($templateselect);
STemplate::display('footer.tpl');
//TEMPLATES END