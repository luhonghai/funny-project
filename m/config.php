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

$mobile = "1";
$config['maindir'] = '/vol/hll/fun';
$config['mobiledir'] = '/vol/hll/fun/m';
$config['mobileurl'] = 'http://services.c-mg.vn/fun/m';

function insert_get_advertisement($var)
{
        global $conn;
        $query="SELECT code FROM advertisements WHERE AID='".mysql_real_escape_string($var[AID])."' AND active='1' limit 1";
        $executequery=$conn->execute($query);
        $getad = $executequery->fields[code];
		echo strip_mq_gpc($getad);
}
function insert_get_fav_count($var)
{
    global $conn;
	$query="SELECT count(*) as total FROM posts_favorited WHERE PID='".intval($var[PID])."'";
	$executequery=$conn->execute($query);
	$total = $executequery->fields[total];
	return intval($total);
}
function cleanit($text)
{
	return htmlentities(strip_tags(stripslashes($text)), ENT_COMPAT, "UTF-8");
}

function verify_valid_email($emailtocheck)
{
       $eregicheck = "^([-!#\$%&'*+./0-9=?A-Z^_`a-z{|}~])+@([-!#\$%&'*+/0-9=?A-Z^_`a-z{|}~]+\\.)+[a-zA-Z]{2,4}\$";
       return eregi($eregicheck, $emailtocheck);
}

function do_resize_image($file, $width = 0, $height = 0, $proportional = false, $output = 'file')
{
	if($height <= 0 && $width <= 0)
	{
	  return false;
	}
	
	$info = getimagesize($file);
	$image = '';

	$final_width = 0;
	$final_height = 0;
	list($width_old, $height_old) = $info;

	if($proportional) 
	{
	  if ($width == 0) $factor = $height/$height_old;
	  elseif ($height == 0) $factor = $width/$width_old;
	  else $factor = min ( $width / $width_old, $height / $height_old);   
	  
	  $final_width = round ($width_old * $factor);
	  $final_height = round ($height_old * $factor);
		  
	  if($final_width > $width_old && $final_height > $height_old)
	  {
	  	  $final_width = $width_old;
		  $final_height = $height_old;

	  }
	}
	else 
	{
	  $final_width = ( $width <= 0 ) ? $width_old : $width;
	  $final_height = ( $height <= 0 ) ? $height_old : $height;
	}
	
	switch($info[2]) 
	{
	  case IMAGETYPE_GIF:
		$image = imagecreatefromgif($file);
	  break;
	  case IMAGETYPE_JPEG:
		$image = imagecreatefromjpeg($file);
	  break;
	  case IMAGETYPE_PNG:
		$image = imagecreatefrompng($file);
	  break;
	  default:
		return false;
	}

	$image_resized = imagecreatetruecolor( $final_width, $final_height );

	if(($info[2] == IMAGETYPE_GIF) || ($info[2] == IMAGETYPE_PNG))
	{
	  $trnprt_indx = imagecolortransparent($image);
	
	  if($trnprt_indx >= 0)
	  {
		$trnprt_color    = imagecolorsforindex($image, $trnprt_indx);
		$trnprt_indx    = imagecolorallocate($image_resized, $trnprt_color['red'], $trnprt_color['green'], $trnprt_color['blue']);
		imagefill($image_resized, 0, 0, $trnprt_indx);
		imagecolortransparent($image_resized, $trnprt_indx);	
	  } 
	  elseif($info[2] == IMAGETYPE_PNG) 
	  {
		imagealphablending($image_resized, false);
		$color = imagecolorallocatealpha($image_resized, 0, 0, 0, 127);
		imagefill($image_resized, 0, 0, $color);
		imagesavealpha($image_resized, true);
	  }
	}
	imagecopyresampled($image_resized, $image, 0, 0, 0, 0, $final_width, $final_height, $width_old, $height_old);

	switch( strtolower($output))
	{
	  case 'browser':
		$mime = image_type_to_mime_type($info[2]);
		header("Content-type: $mime");
		$output = NULL;
	  break;
	  case 'file':
		$output = $file;
	  break;
	  case 'return':
		return $image_resized;
	  break;
	  default:
	  break;
	}
	
	if(file_exists($output))
	{
		@unlink($output);
	}

	switch($info[2])
	{
	  case IMAGETYPE_GIF:
		imagegif($image_resized, $output);
	  break;
	  case IMAGETYPE_JPEG:
		imagejpeg($image_resized, $output, 100);
	  break;
	  case IMAGETYPE_PNG:
		imagepng($image_resized, $output);
	  break;
	  default:
		return false;
	}
	return true;
}

function imagick_gif_resize($file, $width = 0, $height = 0, $proportional = false, $output = 'file', $temppic)
{
	if($height <= 0 && $width <= 0)
	{
	  return false;
	}
	
	$info = getimagesize($file);
	$image = '';

	$final_width = 0;
	$final_height = 0;
	list($width_old, $height_old) = $info;

	if($proportional) 
	{
	  if ($width == 0) $factor = $height/$height_old;
	  elseif ($height == 0) $factor = $width/$width_old;
	  else $factor = min ( $width / $width_old, $height / $height_old);   
	  
	  $final_width = round ($width_old * $factor);
	  $final_height = round ($height_old * $factor);
		  
	  if($final_width > $width_old && $final_height > $height_old)
	  {
	  	  $final_width = $width_old;
		  $final_height = $height_old;

	  }
	}
	else 
	{
	  $final_width = ( $width <= 0 ) ? $width_old : $width;
	  $final_height = ( $height <= 0 ) ? $height_old : $height;
	}
	
	$owh = $width_old."x".$height_old;
	$nwh = $final_width."x".$final_height;
	if(!file_exists($temppic))
	{
		$runinbg = "convert ".$file." -coalesce ".$temppic;
		$runconvert = exec("$runinbg");
	}
	$runinbg = "convert -size ".$owh." ".$temppic." -resize ".$nwh." ".$output;
	$runconvert = exec("$runinbg");
	return true;
}

function makeseo($str,$separator = 'dash',$lowercase = TRUE)
    {

        //decode html entities
$str = html_entity_decode($str,ENT_QUOTES,'UTF-8');

//make lowercase
$str = mb_strtolower($str, 'UTF-8');

//replace special chars, for UTF8 encoding it needs to be defined as array
$trans = array(
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'ô'=>'o',
'O'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'o',
'?'=>'u',
'?'=>'u',
'ù'=>'u',
'U'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'??'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'?'=>'u',
'â'=>'a',
'A'=>'a',
'?'=>'a',
'?'=>'a',
'à'=>'a',
'A'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'a?'=>'a',
'o?'=>'o',
'?'=>'a',
'?'=>'â',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'a',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'é'=>'e',
'E'=>'e',
'è'=>'e',
'E'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'?'=>'e',
'ê'=>'e',
'E'=>'e',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'i',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'y',
'?'=>'d',
'?'=>'d',
'['=>'',
']'=>'',
';'=>'',
'^'=>'',
'@'=>'',
'$'=>'',
'>'=>'',
'<'=>'',
'~'=>'',
'{'=>'',
'}'=>'',
'‘'=>'',
'’'=>'',
'…'=>'',
'?'=>'a',
'"'=>'',
'ô?'=>'o',
'â?'=>'a',
'??'=>'o',
'y?'=>'y',
'?'=>'a',
'a?'=>'a',
'ê?'=>'e',
'i?'=>'i',
'a?'=>'a',
'*'=>' ',
'o?'=>'o',
'ê?'=>'e',
'A?'=>'a',
'â?'=>'a',
'ô?'=>'o',
'a?'=>'a',
'??'=>'o',
'ê?'=>'e',
'`'=>'',
'&gt;'=>'',
'&lt;'=>'',
'&quot;'=>'',
'&amp;'=>'',
'%'=>'',
'a?'=>'a',
'â?'=>'a',
'|'=>'',
'“'=>'',
'”'=>'',
'–'=>'',
'='=>'',
'??'=>'a',
'??'=>'o',
'ô?'=>'o',
'??'=>'a',
'y?'=>'y',
'e?'=>'e',
'e?'=>'e',
'u?'=>'u'
);
$str = strtr($str, $trans);

        if ($separator == 'dash')
        {

            $search     = '_';
            $replace    = '-';

        }else
        {

            $search     = '-';
            $replace    = '_';

        }

        $trans = array(
                        '&\#\d+?;'              => '',
                        '&\S+?;'                => '',
                        '\s+'                   => $replace,
                        $replace.'+'            => $replace,
                        $replace.'$'            => $replace,
                        '^'.$replace            => $replace,
                        '\.+$'                  => ''
                        );

        $str = strip_tags($str);
        $str = preg_replace("#\/#ui",'-',$str);

        foreach ($trans AS $key => $val)
        {

            $str = preg_replace("#".$key."#ui", $val, $str);

        }

        if($lowercase === TRUE)
        {

            $str = mb_strtolower($str,'UTF-8');

        }

        return trim(stripslashes($str));

    }
	
function download_photo($url, $saveto)
{
	global $config;
	if (!curlSaveToFile($url, $saveto))
	{
		return false;
	}
	return true;
}

function curlSaveToFile( $url, $local )
{
	$ch = curl_init();
	$fh = fopen($local, 'w');
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_FILE, $fh);
	curl_setopt($ch, CURLOPT_HEADER, false);
	curl_setopt($ch, CURLOPT_VERBOSE, false);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_NOPROGRESS, true);
	curl_setopt($ch, CURLOPT_USERAGENT, '"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.11) Gecko/20071204 Ubuntu/7.10 (gutsy) Firefox/2.0.0.11');
	curl_exec($ch);
	
	if( curl_errno($ch) ) {
		return false;
	}
	
	curl_close($ch);
	fclose($fh);
	
	if( filesize($local) > 10 ) {
		return true;
	}
	
	return false;
}

function insert_return_youtube($a)
{
    $embedcode = '<object width="100%" height="320"><param name="movie" value="http://www.youtube.com/v/AWECDE&hl=en&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="wmode" value="opaque" /></param><embed src="http://www.youtube.com/v/AWECDE&hl=en&fs=1" type="application/x-shockwave-flash" allowfullscreen="true" width="100%" height="320" wmode="opaque"></embed></object>';
	$item = $a[youtube];
	$embedcode = str_replace("AWECDE", $item, $embedcode);
	return $embedcode;
}

function insert_return_fod($a)
{
    $embedcode = '<iframe src="http://www.funnyordie.com/embed/AWECDE" width="100%" height="320" frameborder="0"></iframe>';
	$item = $a[fod];
	$embedcode = str_replace("AWECDE", $item, $embedcode);
	return $embedcode;
}

function insert_return_vfy($a)
{
    $embedcode = '<iframe src="http://p.videofy.me/v/AWECDE" width="100%" height="320" frameborder="0"></iframe>';
	$item = $a[vfy];
	$embedcode = str_replace("AWECDE", $item, $embedcode);
	return $embedcode;
}

function insert_return_vmo($a)
{
    $embedcode = '<iframe src="http://player.vimeo.com/video/AWECDE" width="100%" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
	$item = $a[vmo];
	$embedcode = str_replace("AWECDE", $item, $embedcode);
	return $embedcode;
}
?>