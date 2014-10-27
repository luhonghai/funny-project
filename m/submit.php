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

include("config.php");
$mobileurl = $config['mobileurl'];

$maindir = $config['maindir'];
include($config['maindir']."/include/config.php");

// The path to the font
$wmfont = $maindir."/include/fonts/".$config['wmfont']; 
// The font size 
$fsize = $config['fsize'];
// The watermark hieght in pixels
$wmhieght = $config['wmhieght'];
// RGB values for watermark background and text colors
$blackr = $config['blackr'];
$blackb = $config['blackb'];
$blackg = $config['blackg'];
$whiter = $config['whiter'];
$whiteb = $config['whiteb'];
$whiteg = $config['whiteg'];

$SID = $_SESSION['USERID'];
if ($SID != "" && $SID >= 0 && is_numeric($SID))
{	
	$ctime = 24 * 60 * 60;
	$utime = time() - $ctime;
	$query = "select count(*) as total from posts WHERE USERID='".mysql_real_escape_string($SID)."' AND time_added>='$utime'"; 
	$executequery = $conn->execute($query);
	$myuploads = $executequery->fields['total'];
	$quota = $config['quota'];
	if($myuploads >= $quota)
	{
		$error = $lang['188'];
		$theme = "empty.tpl";
	}
	else
	{
	
		$queryc = "SELECT * FROM channels";
		$executequeryc = $conn->execute($queryc);
		$c =  $executequeryc->getarray();
		STemplate::assign('c',$c);
	
		$t = cleanit($_REQUEST['t']);
		if($t == "v" && $config['vupload'] == 1)
		{
			$post_type = cleanit($_REQUEST['post_type']);
			if($post_type == "Video")
			{
				$nsfw = intval(cleanit($_REQUEST['nsfw']));
				$source = cleanit($_REQUEST['source']);
				$tags = cleanit($_REQUEST['tags']);
				$CID = cleanit($_REQUEST['CID']);
				$title = cleanit($_REQUEST['title']);
				$url = cleanit($_REQUEST['url']);
				
				if($url == "")
				{
					$error = $lang['98'];
				}
				elseif($title == "")
				{
					$error = $lang['95'];
				}
				
				if((!strstr($url, 'youtube.com/watch?v=')) && (!strstr($url, 'funnyordie.com/videos/')) && (!strstr($url, 'videofy.me/')) && (!strstr($url, 'vimeo.com/')))
				{
					$error = $lang['99'];
				}
				
				if($error == "")
				{
					if(strstr($url, 'youtube.com/watch?v='))
					{
						$youtube_url = $url;
						$position       = strpos($youtube_url, 'watch?v=')+8;
						$remove_length  = strlen($youtube_url)-$position;
						$video_id       = substr($youtube_url, -$remove_length, 11);
						$addme = ", youtube_key='".mysql_real_escape_string($video_id)."'";
					}
					elseif(strstr($url, 'funnyordie.com/videos/'))
					{
						$fod_url = $url;
						$position       = strpos($fod_url, 'funnyordie.com/videos/')+22;
						$remove_length  = strlen($fod_url)-$position;
						$video_id       = substr($fod_url, -$remove_length, 10);
						$addme = ", fod_key='".mysql_real_escape_string($video_id)."'";
					}
					elseif(strstr($url, 'videofy.me/'))
					{
						$vfy_url = $url;
						$position       = strpos($vfy_url, 'videofy.me/')+11;
						$remove_length  = strlen($vfy_url)-$position;
						$video_id       = substr($vfy_url, -$remove_length);
						$position2       = strpos($video_id, '/')+1;
						$remove_length2  = strlen($video_id)-$position2;
						$video_id2       = substr($video_id, -$remove_length2);
						$addme = ", vfy_key='".mysql_real_escape_string($video_id2)."'";
					}
					elseif(strstr($url, 'vimeo.com/'))
					{
						$vmo_url = $url;
						$position       = strpos($vmo_url, 'vimeo.com/')+10;
						$remove_length  = strlen($vmo_url)-$position;
						$video_id       = substr($vmo_url, -$remove_length);
						$addme = ", vmo_key='".mysql_real_escape_string($video_id)."'";
					}
					$approve_stories = $config['approve_stories'];
					if($approve_stories == "1")
					{
						$active = "0";
					}
					else
					{
						$active = "1";
					}
					
					$queryupdateposts = "SELECT * FROM members WHERE USERID='".mysql_real_escape_string($SID)."'"; 
					$executequeryupdateposts = $conn->execute($queryupdateposts);
					$userposts = $executequeryupdateposts->fields['posts'];
					$updateposts = $userposts+1 ;
					$queryupdateposts2 = "UPDATE members SET posts='$updateposts' WHERE USERID='".mysql_real_escape_string($SID)."'"; 
					$executequeryupdateposts2 = $conn->execute($queryupdateposts2);
					
					$query="INSERT INTO posts SET USERID='".mysql_real_escape_string($SID)."', story='".mysql_real_escape_string($title)."', tags='".mysql_real_escape_string($tags)."', source='".mysql_real_escape_string($source)."', CID='".mysql_real_escape_string($CID)."', nsfw='".mysql_real_escape_string($nsfw)."', url='".mysql_real_escape_string($url)."', time_added='".time()."', date_added='".date("Y-m-d")."', active='$active', pip='".$_SERVER['REMOTE_ADDR']."' $addme";
					$result=$conn->execute($query);
					$pid = mysql_insert_id();
					
					$up_points = $config['up_points'];
					if($up_points > 0)
					{
					$query = "UPDATE members SET points=points+$up_points WHERE USERID='".mysql_real_escape_string($SID)."'";
					$executequery=$conn->execute($query);
					}
					
					if($config[SEO] == 1)
					{
					header("Location:$mobileurl".$config[postfolder].$pid."/".makeseo($title).".html?new=1");exit;
					}
					else
					{
					header("Location:$mobileurl".$config[postfolder].$pid."/?new=1");exit;
					}
				}
			}
			$theme = "submit2.tpl";
		}
		else
		{
			$file = cleanit($_REQUEST['file']);
			if($file == "1")
			{
				$post_type = cleanit($_REQUEST['post_type']);
				if($post_type == "Photo")
				{
					$nsfw = intval(cleanit($_REQUEST['nsfw']));
					$source = cleanit($_REQUEST['source']);
					$tags = cleanit($_REQUEST['tags']);
					$CID = cleanit($_REQUEST['CID']);
					$title = cleanit($_REQUEST['title']);
					$uploadedimage = $_FILES['image']['tmp_name'];
					
					if($uploadedimage == "")
					{
						$error = $lang['93'];
					}
					else
					{
						$theimageinfo = getimagesize($uploadedimage);
						if($theimageinfo[2] != 1 && $theimageinfo[2] != 2 && $theimageinfo[2] != 3)
						{
							$error = $lang['94'];
						}
						else
						{
							if($title == "")
							{
								$error = $lang['95'];
							}
							else
							{
								$approve_stories = $config['approve_stories'];
								if($approve_stories == "1")
								{
									$active = "0";
								}
								else
								{
									$active = "1";
								}
								$query="INSERT INTO posts SET USERID='".mysql_real_escape_string($SID)."', story='".mysql_real_escape_string($title)."', tags='".mysql_real_escape_string($tags)."', source='".mysql_real_escape_string($source)."', CID='".mysql_real_escape_string($CID)."', nsfw='".mysql_real_escape_string($nsfw)."', time_added='".time()."', date_added='".date("Y-m-d")."', active='$active', pip='".$_SERVER['REMOTE_ADDR']."'";
								$result=$conn->execute($query);
								$pid = mysql_insert_id();
								
								if($uploadedimage != "")
								{
									$thepp = $pid;
									if($theimageinfo[2] == 1)
									{
										$thepp .= ".gif";
										$thepp2 = ".gif";
									}
									elseif($theimageinfo[2] == 2)
									{
										$thepp .= ".jpg";
										$thepp2 = ".jpg";
									}
									elseif($theimageinfo[2] == 3)
									{
										$thepp .= ".png";
										$thepp2 = ".png";
									}
									if($error == "")
									{
										$myvideoimgnew=$config['pdir']."/".$thepp;
										if(file_exists($myvideoimgnew))
										{
											unlink($myvideoimgnew);
										}
										$myconvertimg = $_FILES['image']['tmp_name'];
										move_uploaded_file($myconvertimg, $myvideoimgnew);
										if($thepp2 != ".gif")
										{
										do_resize_image($myvideoimgnew, "700", "0", true, $config['pdir']."/t/l-".$thepp);
										do_resize_image($myvideoimgnew, "460", "0", true, $config['pdir']."/t/".$thepp);
										do_resize_image($myvideoimgnew, "215", "0", true, $config['pdir']."/t/s-".$thepp);
										}
										else
										{
										imagick_gif_resize($myvideoimgnew, "700", "0", true, $config['pdir']."/t/l-".$thepp, $config['pdir']."/t/z-".$thepp);
										imagick_gif_resize($myvideoimgnew, "460", "0", true, $config['pdir']."/t/".$thepp, $config['pdir']."/t/z-".$thepp);
										imagick_gif_resize($myvideoimgnew, "215", "0", true, $config['pdir']."/t/s-".$thepp, $config['pdir']."/t/z-".$thepp);
										}
										if(file_exists($config['pdir']."/".$thepp))
										{

											if($thepp2 == ".png")
												{
													$img=imagecreatefrompng($config['pdir']."/t/l-".$thepp);
												}
												elseif($thepp2 == ".jpg")
												{
													$img=imagecreatefromjpeg($config['pdir']."/t/l-".$thepp);
												}
												else
												{
													$wskip = "1";														
												}
												
												if($wskip != "1")												
												{
												if($config['twm'] == "1")
													{
$watermark = $config['imagedir']."/watermark.jpg";												
$img_width=imagesx($img);
$img_height=imagesy($img);
$watermark=imagecreatefromjpeg($watermark);  
$watermark_width=imagesx($watermark);  
$watermark_height=imagesy($watermark);  
$image=imagecreatetruecolor($watermark_width, $watermark_height);  
imagealphablending($image, false);
// Create the canvas
$canvas = imagecreate( $img_width, $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas, 0, 0, $img_width, $wmhieght, $white );  
// The text to use 
$wmtext = $config['domain'].$config[postfolder].$pid."/"; 
// Set the path to the image to watermark
$input_image = $config['pdir']."/t/l-".$thepp; 
// Calculate the size of the text 
// If php has been setup without ttf support this will not work.
$box = imagettfbbox( $fsize, 0, $wmfont, $wmtext );  
$x = 10;  
$y = ($wmhieght - ($box[1] - $box[7])) / 2;  
$y -= $box[7];  
// Add the text to the image
imageTTFText( $canvas, $fsize, 0, $x, $y, $black, $wmfont, $wmtext );  
// Adding the logo watermark
if($config['lwm'] == "1"){
$dest_x2=$img_width-$watermark_width-5;
$dest_y2=$wmhieght-$watermark_height-5;
imagecopy($canvas, $watermark, $dest_x2, $dest_y2, 0, 0, $watermark_width, $watermark_height);
}
// Make white transparent
//imagecolortransparent ( $canvas, $white );  
// Save the text image as temp.png
imagepng( $canvas, $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Cleanup the tempory image canvas.png
ImageDestroy( $canvas );  

// Create the canvas2
$canvas2 = imagecreatetruecolor( $img_width, $img_height + $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas2, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas2, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas2, 0, 0, $img_width, $img_height + $wmhieght, $white );  
$dest_x3=0;
$dest_y3=0;
if($thepp2 == ".png")
{
	$input_image=imagecreatefrompng( $input_image );
}
else
{
	$input_image=imagecreatefromjpeg( $input_image );
}
imagealphablending($canvas2, false);
imagecopy($canvas2, $input_image, $dest_x3, $dest_y3, 0, 0, $img_width, $img_height);
imagepng( $canvas2, $config['basedir']."/temporary/".$pid."_temp.png" );  
ImageDestroy( $canvas2 );  
$input_image2 = $config['basedir']."/temporary/".$pid."_temp.png"; 

// Read in the text watermark image
$watermark2 = imagecreatefrompng( $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Returns the width of the given image resource  
$watermark_width2 = imagesx( $watermark2 );
//Returns the height of the given image resource    
$watermark_height2 = imagesy( $watermark2 );    
$image2 = imagecreatetruecolor( $watermark_width2, $watermark_height2 );    
$image2 = imagecreatefrompng( $input_image2 );
// Find the size of the original image and read it into an array      
$size = getimagesize( $input_image2 );  
// Set the positions of the watermark on the image
$dest_x = 0;    
$dest_y = $img_height;    
imagecopymerge($image2, $watermark2, $dest_x, $dest_y, 0, 0, $watermark_width2, $watermark_height2, 100);   
// Save the watermarked image as watermarked.jpg 
imagejpeg( $image2, $config['pdir']."/t/l-".$thepp );
// Clear the memory of the tempory image     
imagedestroy( $image2 );    
imagedestroy( $watermark2 );    
// Delete the text watermark image
unlink( $config['basedir']."/temporary/".$pid."_wm_temp.png");  
unlink( $config['basedir']."/temporary/".$pid."_temp.png");  
}
elseif($config['lwm'] == "1")
{	
	$watermark = $config['imagedir']."/watermark.png";												
	$img_width=imagesx($img);
	$img_height=imagesy($img);
	$watermark=imagecreatefrompng($watermark);  
	$watermark_width=imagesx($watermark);  
	$watermark_height=imagesy($watermark);  
	$image=imagecreatetruecolor($watermark_width, $watermark_height);  
	imagealphablending($image, false);
	$dest_x=$img_width-$watermark_width-5;
	$dest_y=$img_height-$watermark_height-5;
	imagecopy($img, $watermark, $dest_x, $dest_y, 0, 0, $watermark_width, $watermark_height);
	imagesavealpha($img, true);
	imagejpeg($img, $config['pdir']."/t/l-".$thepp, 90);
}
												
												if($thepp2 == ".png")
												{
													$img=imagecreatefrompng($config['pdir']."/t/".$thepp);
												}
												elseif($thepp2 == ".jpg")
												{
													$img=imagecreatefromjpeg($config['pdir']."/t/".$thepp);
												}
												else
												{
													$wskip = "1";	
												}
												
												if($wskip != "1")
												{		
												if($config['twm'] == "1")
													{
$watermark = $config['imagedir']."/watermark.jpg";												
$img_width=imagesx($img);
$img_height=imagesy($img);
$watermark=imagecreatefromjpeg($watermark);  
$watermark_width=imagesx($watermark);  
$watermark_height=imagesy($watermark);  
$image=imagecreatetruecolor($watermark_width, $watermark_height);  
imagealphablending($image, false);
// Create the canvas
$canvas = imagecreate( $img_width, $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas, 0, 0, $img_width, $wmhieght, $white );  
// Set the path to the image to watermark
$input_image = $config['pdir']."/t/".$thepp; 
// Calculate the size of the text 
// If php has been setup without ttf support this will not work.
$box = imagettfbbox( $fsize, 0, $wmfont, $wmtext );  
$x = 10;  
$y = ($wmhieght - ($box[1] - $box[7])) / 2;  
$y -= $box[7];  
// Add the text to the image
imageTTFText( $canvas, $fsize, 0, $x, $y, $black, $wmfont, $wmtext );  
// Adding the logo watermark
if($config['lwm'] == "1"){
$dest_x2=$img_width-$watermark_width-5;
$dest_y2=$wmhieght-$watermark_height-5;
imagecopy($canvas, $watermark, $dest_x2, $dest_y2, 0, 0, $watermark_width, $watermark_height);
}
// Make white transparent
//imagecolortransparent ( $canvas, $white );  
// Save the text image as temp.png
imagepng( $canvas, $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Cleanup the tempory image canvas.png
ImageDestroy( $canvas );  

// Create the canvas2
$canvas2 = imagecreatetruecolor( $img_width, $img_height + $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas2, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas2, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas2, 0, 0, $img_width, $img_height + $wmhieght, $white );  
$dest_x3=0;
$dest_y3=0;
if($thepp2 == ".png")
{
	$input_image=imagecreatefrompng( $input_image );
}
else
{
	$input_image=imagecreatefromjpeg( $input_image );
}
imagealphablending($canvas2, false);
imagecopy($canvas2, $input_image, $dest_x3, $dest_y3, 0, 0, $img_width, $img_height);
imagepng( $canvas2, $config['basedir']."/temporary/".$pid."_temp.png" );  
ImageDestroy( $canvas2 );  
$input_image2 = $config['basedir']."/temporary/".$pid."_temp.png"; 

// Read in the text watermark image
$watermark2 = imagecreatefrompng( $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Returns the width of the given image resource  
$watermark_width2 = imagesx( $watermark2 );
//Returns the height of the given image resource    
$watermark_height2 = imagesy( $watermark2 );    
$image2 = imagecreatetruecolor( $watermark_width2, $watermark_height2 );    
$image2 = imagecreatefrompng( $input_image2 );
// Find the size of the original image and read it into an array      
$size = getimagesize( $input_image2 );  
// Set the positions of the watermark on the image
$dest_x = 0;    
$dest_y = $img_height;    
imagecopymerge($image2, $watermark2, $dest_x, $dest_y, 0, 0, $watermark_width2, $watermark_height2, 100);   
// Save the watermarked image as watermarked.jpg 
imagejpeg( $image2, $config['pdir']."/t/".$thepp );
// Clear the memory of the tempory image     
imagedestroy( $image2 );    
imagedestroy( $watermark2 );    
// Delete the text watermark image
unlink( $config['basedir']."/temporary/".$pid."_wm_temp.png");  
unlink( $config['basedir']."/temporary/".$pid."_temp.png"); 
}
elseif($config['lwm'] == "1")
{	
	$watermark = $config['imagedir']."/watermark.png";												
	$img_width=imagesx($img);
	$img_height=imagesy($img);
	$watermark=imagecreatefrompng($watermark);  
	$watermark_width=imagesx($watermark);  
	$watermark_height=imagesy($watermark);  
	$image=imagecreatetruecolor($watermark_width, $watermark_height);  
	imagealphablending($image, false);
	$dest_x=$img_width-$watermark_width-5;
	$dest_y=$img_height-$watermark_height-5;
	imagecopy($img, $watermark, $dest_x, $dest_y, 0, 0, $watermark_width, $watermark_height);
	imagesavealpha($img, true);
	imagejpeg($img, $config['pdir']."/t/".$thepp, 90);
}								
												}
											}

											$queryupdateposts = "SELECT * FROM members WHERE USERID='".mysql_real_escape_string($SID)."'"; 
											$executequeryupdateposts = $conn->execute($queryupdateposts);
											$userposts = $executequeryupdateposts->fields['posts'];
											$updateposts = $userposts+1 ;
											$queryupdateposts2 = "UPDATE members SET posts='$updateposts' WHERE USERID='".mysql_real_escape_string($SID)."'"; 
											$executequeryupdateposts2 = $conn->execute($queryupdateposts2);
																				
											$query = "UPDATE posts SET pic='$thepp' WHERE PID='".mysql_real_escape_string($pid)."'";
											$conn->execute($query);
											
											$up_points = $config['up_points'];
											if($up_points > 0)
											{
											$query = "UPDATE members SET points=points+$up_points WHERE USERID='".mysql_real_escape_string($SID)."'";
											$executequery=$conn->execute($query);
											}
											
											if($config[SEO] == 1)
											{
											header("Location:$mobileurl".$config[postfolder].$pid."/".makeseo($title).".html?new=1");exit;
											}
											else
											{
											header("Location:$mobileurl".$config[postfolder].$pid."/?new=1");exit;
											}
											}
									}
								}
							}
						}
					}
				}
			}
			else
			{
				$post_type = cleanit($_REQUEST['post_type']);
				if($post_type == "Photo")
				{
					$nsfw = intval(cleanit($_REQUEST['nsfw']));
					$source = cleanit($_REQUEST['source']);
					$tags = cleanit($_REQUEST['tags']);
					$CID = cleanit($_REQUEST['CID']);
					$title = cleanit($_REQUEST['title']);
					$url = cleanit($_REQUEST['url']);
					
					if($url == "")
					{
						$error = $lang['96'];
					}
					elseif($title == "")
					{
						$error = $lang['95'];
					}
					else
					{
						$pos = strrpos($url,".");
						$ph = strtolower(substr($url,$pos+1,strlen($url)-$pos));
						
						if($ph == "jpg" || $ph == "jpeg" || $ph == "png" || $ph == "gif")
						{
							
							$query="INSERT INTO posts SET USERID='".mysql_real_escape_string($SID)."', story='".mysql_real_escape_string($title)."', tags='".mysql_real_escape_string($tags)."', source='".mysql_real_escape_string($source)."', CID='".mysql_real_escape_string($CID)."', nsfw='".mysql_real_escape_string($nsfw)."', url='".mysql_real_escape_string($url)."', time_added='".time()."', date_added='".date("Y-m-d")."', active='0', pip='".$_SERVER['REMOTE_ADDR']."'";
							$result=$conn->execute($query);
							$pid = mysql_insert_id();
							$uploadedimage = $config['pdir'].'/'.$pid.'-temp.'.$ph;
							if(!download_photo($url, $uploadedimage))
							{
								$error = $lang['97'];
								$query = "DELETE FROM posts WHERE PID='".mysql_real_escape_string($pid)."'";
								$conn->execute($query);
							}
							else
							{							
								$theimageinfo = getimagesize($uploadedimage);
								if($theimageinfo[2] != 1 && $theimageinfo[2] != 2 && $theimageinfo[2] != 3)
								{
									$error = $lang['94'];
									$query = "DELETE FROM posts WHERE PID='".mysql_real_escape_string($pid)."'";
									$conn->execute($query);
									unlink($uploadedimage);
								}
								else
								{
									$approve_stories = $config['approve_stories'];
									if($approve_stories == "1")
									{
										$active = "0";
									}
									else
									{
										$active = "1";
									}
									
									if($uploadedimage != "")
									{
										$thepp = $pid;
										if($theimageinfo[2] == 1)
										{
											$thepp .= ".gif";
											$thepp2 = ".gif";
										}
										elseif($theimageinfo[2] == 2)
										{
											$thepp .= ".jpg";
											$thepp2 = ".jpg";
										}
										elseif($theimageinfo[2] == 3)
										{
											$thepp .= ".png";
											$thepp2 = ".png";
										}
										if($error == "")
										{
											$myvideoimgnew=$config['pdir']."/".$thepp;
											if(file_exists($myvideoimgnew))
											{
												unlink($myvideoimgnew);
											}
											copy ($uploadedimage , $myvideoimgnew);
											if($thepp2 != ".gif")
										{
										do_resize_image($myvideoimgnew, "700", "0", true, $config['pdir']."/t/l-".$thepp);
										do_resize_image($myvideoimgnew, "460", "0", true, $config['pdir']."/t/".$thepp);
										do_resize_image($myvideoimgnew, "215", "0", true, $config['pdir']."/t/s-".$thepp);
										}
										else
										{
										imagick_gif_resize($myvideoimgnew, "700", "0", true, $config['pdir']."/t/l-".$thepp, $config['pdir']."/t/z-".$thepp);
										imagick_gif_resize($myvideoimgnew, "460", "0", true, $config['pdir']."/t/".$thepp, $config['pdir']."/t/z-".$thepp);
										imagick_gif_resize($myvideoimgnew, "215", "0", true, $config['pdir']."/t/s-".$thepp, $config['pdir']."/t/z-".$thepp);
										}
											if(file_exists($config['pdir']."/".$thepp))
											{
												
												if($thepp2 == ".png")
												{
													$img=imagecreatefrompng($config['pdir']."/t/l-".$thepp);
												}
												elseif($thepp2 == ".jpg")
												{
													$img=imagecreatefromjpeg($config['pdir']."/t/l-".$thepp);
												}
												else
												{
													$wskip = "1";	
												}
												
												if($wskip != "1")												
												{
												if($config['twm'] == "1")
													{
$watermark = $config['imagedir']."/watermark.jpg";												
$img_width=imagesx($img);
$img_height=imagesy($img);
$watermark=imagecreatefromjpeg($watermark);  
$watermark_width=imagesx($watermark);  
$watermark_height=imagesy($watermark);  
$image=imagecreatetruecolor($watermark_width, $watermark_height);  
imagealphablending($image, false);
// Create the canvas
$canvas = imagecreate( $img_width, $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas, 0, 0, $img_width, $wmhieght, $white );  
// The text to use 
$wmtext = $config['domain'].$config[postfolder].$pid."/"; 
// Set the path to the image to watermark
$input_image = $config['pdir']."/t/l-".$thepp; 
// Calculate the size of the text 
// If php has been setup without ttf support this will not work.
$box = imagettfbbox( $fsize, 0, $wmfont, $wmtext );  
$x = 10;  
$y = ($wmhieght - ($box[1] - $box[7])) / 2;  
$y -= $box[7];  
// Add the text to the image
imageTTFText( $canvas, $fsize, 0, $x, $y, $black, $wmfont, $wmtext );  
// Adding the logo watermark
if($config['lwm'] == "1"){
$dest_x2=$img_width-$watermark_width-5;
$dest_y2=$wmhieght-$watermark_height-5;
imagecopy($canvas, $watermark, $dest_x2, $dest_y2, 0, 0, $watermark_width, $watermark_height);
}
// Make white transparent
//imagecolortransparent ( $canvas, $white );  
// Save the text image as temp.png
imagepng( $canvas, $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Cleanup the tempory image canvas.png
ImageDestroy( $canvas );  

// Create the canvas2
$canvas2 = imagecreatetruecolor( $img_width, $img_height + $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas2, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas2, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas2, 0, 0, $img_width, $img_height + $wmhieght, $white );  
$dest_x3=0;
$dest_y3=0;
if($thepp2 == ".png")
{
	$input_image=imagecreatefrompng( $input_image );
}
else
{
	$input_image=imagecreatefromjpeg( $input_image );
}
imagealphablending($canvas2, false);
imagecopy($canvas2, $input_image, $dest_x3, $dest_y3, 0, 0, $img_width, $img_height);
imagepng( $canvas2, $config['basedir']."/temporary/".$pid."_temp.png" );  
ImageDestroy( $canvas2 );  
$input_image2 = $config['basedir']."/temporary/".$pid."_temp.png"; 

// Read in the text watermark image
$watermark2 = imagecreatefrompng( $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Returns the width of the given image resource  
$watermark_width2 = imagesx( $watermark2 );
//Returns the height of the given image resource    
$watermark_height2 = imagesy( $watermark2 );    
$image2 = imagecreatetruecolor( $watermark_width2, $watermark_height2 );    
$image2 = imagecreatefrompng( $input_image2 );
// Find the size of the original image and read it into an array      
$size = getimagesize( $input_image2 );  
// Set the positions of the watermark on the image
$dest_x = 0;    
$dest_y = $img_height;    
imagecopymerge($image2, $watermark2, $dest_x, $dest_y, 0, 0, $watermark_width2, $watermark_height2, 100);   
// Save the watermarked image as watermarked.jpg 
imagejpeg( $image2, $config['pdir']."/t/l-".$thepp );
// Clear the memory of the tempory image     
imagedestroy( $image2 );    
imagedestroy( $watermark2 );    
// Delete the text watermark image
unlink( $config['basedir']."/temporary/".$pid."_wm_temp.png");  
unlink( $config['basedir']."/temporary/".$pid."_temp.png"); 
}
elseif($config['lwm'] == "1")
{	
	$watermark = $config['imagedir']."/watermark.png";												
	$img_width=imagesx($img);
	$img_height=imagesy($img);
	$watermark=imagecreatefrompng($watermark);  
	$watermark_width=imagesx($watermark);  
	$watermark_height=imagesy($watermark);  
	$image=imagecreatetruecolor($watermark_width, $watermark_height);  
	imagealphablending($image, false);
	$dest_x=$img_width-$watermark_width-5;
	$dest_y=$img_height-$watermark_height-5;
	imagecopy($img, $watermark, $dest_x, $dest_y, 0, 0, $watermark_width, $watermark_height);
	imagesavealpha($img, true);
	imagejpeg($img, $config['pdir']."/t/l-".$thepp, 90);
}
												
												if($thepp2 == ".png")
												{
													$img=imagecreatefrompng($config['pdir']."/t/".$thepp);
												}
												elseif($thepp2 == ".jpg")
												{
													$img=imagecreatefromjpeg($config['pdir']."/t/".$thepp);
												}
												else
												{
													$wskip = "1";	
												}
												
												if($wskip != "1")
												{		

												if($config['twm'] == "1")
													{
$watermark = $config['imagedir']."/watermark.jpg";												
$img_width=imagesx($img);
$img_height=imagesy($img);
$watermark=imagecreatefromjpeg($watermark);  
$watermark_width=imagesx($watermark);  
$watermark_height=imagesy($watermark);  
$image=imagecreatetruecolor($watermark_width, $watermark_height);  
imagealphablending($image, false);
// Create the canvas
$canvas = imagecreate( $img_width, $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas, 0, 0, $img_width, $wmhieght, $white );  
// Set the path to the image to watermark
$input_image = $config['pdir']."/t/".$thepp; 
// Calculate the size of the text 
// If php has been setup without ttf support this will not work.
$box = imagettfbbox( $fsize, 0, $wmfont, $wmtext );  
$x = 10;  
$y = ($wmhieght - ($box[1] - $box[7])) / 2;  
$y -= $box[7];  
// Add the text to the image
imageTTFText( $canvas, $fsize, 0, $x, $y, $black, $wmfont, $wmtext );  
// Adding the logo watermark
if($config['lwm'] == "1"){
$dest_x2=$img_width-$watermark_width-5;
$dest_y2=$wmhieght-$watermark_height-5;
imagecopy($canvas, $watermark, $dest_x2, $dest_y2, 0, 0, $watermark_width, $watermark_height);
}
// Make white transparent
//imagecolortransparent ( $canvas, $white );  
// Save the text image as temp.png
imagepng( $canvas, $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Cleanup the tempory image canvas.png
ImageDestroy( $canvas );  

// Create the canvas2
$canvas2 = imagecreatetruecolor( $img_width, $img_height + $wmhieght );  
// Define the colours to use
$black = imagecolorallocate( $canvas2, $blackr, $blackb, $blackg );  
$white = imagecolorallocate( $canvas2, $whiter, $whiteb, $whiteg ); 
// Create a rectangle and fill it white
imagefilledrectangle( $canvas2, 0, 0, $img_width, $img_height + $wmhieght, $white );  
$dest_x3=0;
$dest_y3=0;
if($thepp2 == ".png")
{
	$input_image=imagecreatefrompng( $input_image );
}
else
{
	$input_image=imagecreatefromjpeg( $input_image );
}
imagealphablending($canvas2, false);
imagecopy($canvas2, $input_image, $dest_x3, $dest_y3, 0, 0, $img_width, $img_height);
imagepng( $canvas2, $config['basedir']."/temporary/".$pid."_temp.png" );  
ImageDestroy( $canvas2 );  
$input_image2 = $config['basedir']."/temporary/".$pid."_temp.png"; 

// Read in the text watermark image
$watermark2 = imagecreatefrompng( $config['basedir']."/temporary/".$pid."_wm_temp.png" );  
// Returns the width of the given image resource  
$watermark_width2 = imagesx( $watermark2 );
//Returns the height of the given image resource    
$watermark_height2 = imagesy( $watermark2 );    
$image2 = imagecreatetruecolor( $watermark_width2, $watermark_height2 );    
$image2 = imagecreatefrompng( $input_image2 );
// Find the size of the original image and read it into an array      
$size = getimagesize( $input_image2 );  
// Set the positions of the watermark on the image
$dest_x = 0;    
$dest_y = $img_height;    
imagecopymerge($image2, $watermark2, $dest_x, $dest_y, 0, 0, $watermark_width2, $watermark_height2, 100);   
// Save the watermarked image as watermarked.jpg 
imagejpeg( $image2, $config['pdir']."/t/".$thepp );
// Clear the memory of the tempory image     
imagedestroy( $image2 );    
imagedestroy( $watermark2 );    
// Delete the text watermark image
unlink( $config['basedir']."/temporary/".$pid."_wm_temp.png");  
unlink( $config['basedir']."/temporary/".$pid."_temp.png"); 
}
elseif($config['lwm'] == "1")
{	
	$watermark = $config['imagedir']."/watermark.png";												
	$img_width=imagesx($img);
	$img_height=imagesy($img);
	$watermark=imagecreatefrompng($watermark);  
	$watermark_width=imagesx($watermark);  
	$watermark_height=imagesy($watermark);  
	$image=imagecreatetruecolor($watermark_width, $watermark_height);  
	imagealphablending($image, false);
	$dest_x=$img_width-$watermark_width-5;
	$dest_y=$img_height-$watermark_height-5;
	imagecopy($img, $watermark, $dest_x, $dest_y, 0, 0, $watermark_width, $watermark_height);
	imagesavealpha($img, true);
	imagejpeg($img, $config['pdir']."/t/".$thepp, 90);
}								
												}
											}
											
												$queryupdateposts = "SELECT * FROM members WHERE USERID='".mysql_real_escape_string($SID)."'"; 
												$executequeryupdateposts = $conn->execute($queryupdateposts);
												$userposts = $executequeryupdateposts->fields['posts'];
												$updateposts = $userposts+1 ;
												$queryupdateposts2 = "UPDATE members SET posts='$updateposts' WHERE USERID='".mysql_real_escape_string($SID)."'"; 
												$executequeryupdateposts2 = $conn->execute($queryupdateposts2);
												
												$query = "UPDATE posts SET pic='$thepp', active='$active' WHERE PID='".mysql_real_escape_string($pid)."'";
												$conn->execute($query);
												unlink($uploadedimage);
												
												$up_points = $config['up_points'];
												if($up_points > 0)
												{
												$query = "UPDATE members SET points=points+$up_points WHERE USERID='".mysql_real_escape_string($SID)."'";
												$executequery=$conn->execute($query);
												}
												
												if($config[SEO] == 1)
												{
												header("Location:$mobileurl".$config[postfolder].$pid."/".makeseo($title).".html?new=1");exit;
												}
												else
												{
												header("Location:$mobileurl".$config[postfolder].$pid."/?new=1");exit;
												}
											}
										}
									}	
								}
							}
						}
						else
						{
							$error = $lang['94'];
						}
					}
				}
			}
			$theme = "submit.tpl";
		}
	}
}
else
{
	header("Location:$mobileurl/login");exit;
}

$query5 = "SELECT * FROM channels";
$executequery5 = $conn->Execute($query5);	
$cats = $executequery5->getarray();
STemplate::assign('allchannels',$cats);

$_SESSION['location'] = "/submit";

//TEMPLATES BEGIN

STemplate::setTplDir($config['mobiledir']."/themes");
STemplate::assign('mobileurl',$mobileurl);
STemplate::assign('menu',3);
STemplate::assign('error',$error);
STemplate::assign('message',$message);
STemplate::display('header.tpl');
STemplate::display($theme);
STemplate::display('footer.tpl');
//TEMPLATES END
?>