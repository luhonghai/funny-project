<?php
include("../include/config.php");
include("../include/functions/import.php");
$thebaseurl = $config['baseurl'];
$templateselect = "ragecomic.tpl";
$pagetitle = 'Công cụ chế ảnh online';
STemplate::assign('pagetitle',$pagetitle);
STemplate::assign('description','Công cụ chế ảnh online, chế ragecomic, ảnh troll, Doremon chế, Brown và Cony, Hỏi xoáy Đáp xoay');
STemplate::assign('ragepage',1);
STemplate::assign('menu',12);
//TEMPLATES BEGIN
STemplate::assign('error',$error);
STemplate::display('header.tpl');
STemplate::display($templateselect);
//TEMPLATES END
?>