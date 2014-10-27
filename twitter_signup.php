<?php
/**************************************************************************************************
| 9Gag Clone Script
| http://www.9gag-clone-script.com
| support@9gag-clone-script.com
|
|**************************************************************************************************
|
| By using this software you agree that you have read and acknowledged our End-User License 
| 
|
| Copyright (c) 9gag-clone-script.com. All rights reserved.
|**************************************************************************************************/

require_once('twitteroauth/twitteroauth.php');
include("include/config.php");
include("include/functions/import.php");

$pagetitle = $lang['9'];
STemplate::assign('pagetitle',$pagetitle);

STemplate::assign('message',$message);
STemplate::assign('error',$error);

//TEMPLATES BEGIN
STemplate::display('twitter_signup.tpl');
//TEMPLATES END
?>