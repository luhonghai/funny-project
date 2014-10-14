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

$pagetitle = $lang['9'];
STemplate::assign('pagetitle',$pagetitle);

STemplate::assign('message',$message);
STemplate::assign('error',$error);

//TEMPLATES BEGIN
STemplate::display('signup.tpl');
//TEMPLATES END
?>