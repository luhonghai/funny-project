<?php
/**************************************************************************************************
| Mobile Module V 1.0
| Best 9Gag Clone Script
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
include("config.php");
$mobileurl = $config['mobileurl'];
include($config['maindir']."/include/config.php");
STemplate::assign('mobileurl',$mobileurl);
destroy_slrememberme($_SESSION['USERNAME']);
$_SESSION['USERID']="";
$_SESSION['EMAIL']="";
$_SESSION['USERNAME']="";
$_SESSION['VERIFIED']="";
$_SESSION['FILTER']="";
$_SESSION['FB']="";
header("location: $config[baseurl]/");
?>
