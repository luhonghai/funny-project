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
$thesitename = $config['site_name'];
$thebaseurl = $config['baseurl'];
$themetadescription = $config['metadescription'];
header('Content-Type: text/xml');  
  
echo '<?xml version="1.0" encoding="UTF-8"?>  
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>  
<title>'.$thesitename.'</title>  
<description>'.$themetadescription.'</description>  
<link>'.$thebaseurl.'</link>
<atom:link href="'.$thebaseurl.'/rss.php" rel="self" type="application/rss+xml" />';  
$get_gags = "SELECT PID, story, time_added,pic FROM posts WHERE active=1 ORDER BY PID DESC LIMIT 15";  
  
$gags = mysql_query($get_gags) or die(mysql_error());  
  
while ($gag = mysql_fetch_array($gags)){  
    $pubdate = date('r', $gag[time_added]);
    echo '  
       <item>  
          <title>'.html_entity_decode($gag[story], ENT_COMPAT, "UTF-8").' - '.$thesitename.'</title>  
          <description><![CDATA['.html_entity_decode($gag[story], ENT_COMPAT, "UTF-8").']]></description>  
          <link>'.$thebaseurl.$config[postfolder].$gag[PID].'/</link>  
		  <guid>'.$thebaseurl.$config[postfolder].$gag[PID].'/</guid>';
		  if($gag[pic] != ""){echo '
		  <enclosure type="image/jpeg" url="'.$thebaseurl.'/pdata/t/s-'.$gag[pic].'" length="1" />';
		  }
    echo  '
		  <pubDate>'.$pubdate.'</pubDate>  
      </item>';  
}  
echo '</channel>  
</rss>';  
?>