<?
$config = array();

// Begin Configuration
$config['basedir']     =  '/vol/hll/fun';
$config['baseurl']     =  'http://services.c-mg.vn/fun';

$DBTYPE = 'mysql';
$DBHOST = 'cmgmysql.ctjztcxdxqlx.us-east-1.rds.amazonaws.com';
$DBUSER = 'admincmg';
$DBPASSWORD = 'W3lcom3123';
$DBNAME = 'testing';

$default_language = "en"; //You can choose en, fr, de, es, pt, ru or tr
// End Configuration

session_start();

$config['adminurl']      =  $config['baseurl'].'/administrator';
$config['cssurl']      =  $config['baseurl'].'/css';
$config['imagedir']      =  $config['basedir'].'/images';
$config['imageurl']      =  $config['baseurl'].'/images';
$config['membersprofilepicdir']      =  $config['imagedir'].'/membersprofilepic';
$config['membersprofilepicurl']      =  $config['imageurl'].'/membersprofilepic';
$config['pdir'] = $config['basedir'].'/pdata';
$config['purl'] = $config['baseurl'].'/pdata';
require_once($config['basedir'].'/smarty/libs/Smarty.class.php');
require_once($config['basedir'].'/libraries/mysmarty.class.php');
require_once($config['basedir'].'/libraries/SConfig.php');
require_once($config['basedir'].'/libraries/SError.php');
require_once($config['basedir'].'/libraries/adodb/adodb.inc.php');
require_once($config['basedir'].'/libraries/phpmailer/class.phpmailer.php');
require_once($config['basedir'].'/libraries/SEmail.php');
function strip_mq_gpc($arg)
{
  if (get_magic_quotes_gpc())
  {
  	$arg = str_replace('"',"'",$arg);
  	$arg = stripslashes($arg);
    return $arg;
  } 
  else
  {
    $arg = str_replace('"',"'",$arg);
    return $arg;
  }
}
$conn = &ADONewConnection($DBTYPE);
$conn->PConnect($DBHOST, $DBUSER, $DBPASSWORD, $DBNAME);
@mysql_query("SET NAMES 'UTF8'");
$sql = "SELECT * from config";
$rsc = $conn->Execute($sql);
if($rsc){while(!$rsc->EOF)
{
$field = $rsc->fields['setting'];
$config[$field] = $rsc->fields['value'];
STemplate::assign($field, strip_mq_gpc($config[$field]));
@$rsc->MoveNext();
}}
STemplate::assign('baseurl',       $config['baseurl']);
STemplate::assign('basedir',       $config['basedir']);
STemplate::assign('adminurl',       $config['adminurl']);
STemplate::assign('cssurl',       $config['cssurl']);
STemplate::assign('imagedir',        $config['imagedir']);
STemplate::assign('imageurl',        $config['imageurl']);
STemplate::assign('membersprofilepicdir',        $config['membersprofilepicdir']);
STemplate::assign('membersprofilepicurl',        $config['membersprofilepicurl']);
STemplate::assign('pdir', $config['pdir']);
STemplate::assign('purl', $config['purl']);
STemplate::setCompileDir($config['basedir']."/temporary");
$theme = $config['theme'];
STemplate::setTplDir($config['basedir']."/themes");
if ($_REQUEST['language'] != "")
{
	if ($_REQUEST['language'] == "en")
	{
		$_SESSION['language'] = "en";
	}
	elseif ($_REQUEST['language'] == "fr")
	{
		$_SESSION['language'] = "fr";
	}
	elseif ($_REQUEST['language'] == "de")
	{
		$_SESSION['language'] = "de";
	}
	elseif ($_REQUEST['language'] == "es")
	{
		$_SESSION['language'] = "es";
	}
	elseif ($_REQUEST['language'] == "pt")
	{
		$_SESSION['language'] = "pt";
	}
	elseif ($_REQUEST['language'] == "ru")
	{
		$_SESSION['language'] = "ru";
	}
	elseif ($_REQUEST['language'] == "tr")
	{
		$_SESSION['language'] = "tr";
	}
}
if ($_SESSION['language'] == "")
{
	$_SESSION['language'] = $default_language;
}

if ($_SESSION['language'] == "en")
{
	include("lang/en.php");
}
elseif ($_SESSION['language'] == "fr")
{
	include("lang/fr.php");
}
elseif ($_SESSION['language'] == "de")
{
	include("lang/de.php");
}
elseif ($_SESSION['language'] == "es")
{
	include("lang/es.php");
}
elseif ($_SESSION['language'] == "pt")
{
	include("lang/pt.php");
}
elseif ($_SESSION['language'] == "ru")
{
	include("lang/ru.php");
}
elseif ($_SESSION['language'] == "tr")
{
	include("lang/tr.php");
}
else
{
	include("lang/".$default_language.".php");
}
for ($i=0; $i<count($lang); $i++)
{
	STemplate::assign('lang'.$i, $lang[$i]);
}
if(isset($sban)&& $sban != "1")
{
	$bquery = "SELECT count(*) as total from bans_ips WHERE ip='".mysql_real_escape_string($_SERVER['REMOTE_ADDR'])."'";
	$bresult = $conn->execute($bquery);
	$bcount = $bresult->fields['total'];
	if($bcount > "0")
	{
		$brdr = $config['baseurl']."/banned.php";
		header("Location:$brdr");
		exit;
	}
}
function create_slrememberme() {
        $key = md5(uniqid(rand(), true));
        global $conn;
        $sql="update members set remember_me_time='".date('Y-m-d H:i:s')."', remember_me_key='".$key."' WHERE username='".mysql_real_escape_string($_SESSION[USERNAME])."'";
        $conn->execute($sql);
        setcookie('slrememberme', gzcompress(serialize(array($_SESSION[USERNAME], $key)), 9), time()+60*60*24*30);
}
function destroy_slrememberme($username) {
        if (strlen($username) > 0) {
                global $conn;
                $sql="update members set remember_me_time=NULL, remember_me_key=NULL WHERE username='".mysql_real_escape_string($username)."'";
                $conn->execute($sql);
        }
        setcookie ("slrememberme", "", time() - 3600);
}
if (!isset($_SESSION["USERNAME"]) && isset($_COOKIE['slrememberme'])) 
{
        $sql="update members set remember_me_time=NULL and remember_me_key=NULL WHERE remember_me_time<'".date('Y-m-d H:i:s', mktime(0, 0, 0, date("m")-1, date("d"),   date("Y")))."'";
        $conn->execute($sql);
        list($username, $key) = @unserialize(gzuncompress(stripslashes($_COOKIE['slrememberme'])));
        if (strlen($username) > 0 && strlen($key) > 0)
		{
        	$sql="SELECT status,USERID,email,username,verified,filter from members WHERE username='".mysql_real_escape_string($username)."' and remember_me_key='".mysql_real_escape_string($key)."'";
          	$rs=$conn->execute($sql);
          	if($rs->recordcount()<1)
			{
				$error=$lang['224'];
			}
		    elseif($rs->fields['status'] == "0")
			{
				$error = $lang['225'];
			}
    		if($error=="")
			{				
				SESSION_REGISTER("USERID");$_SESSION[USERID]=$rs->fields['USERID'];
				SESSION_REGISTER("EMAIL");$_SESSION[EMAIL]=$rs->fields['email'];
				SESSION_REGISTER("USERNAME");$_SESSION[USERNAME]=$rs->fields['username'];
				SESSION_REGISTER("VERIFIED");$_SESSION[VERIFIED]=$rs->fields['verified'];
				SESSION_REGISTER("FILTER");$_SESSION[FILTER]=$rs->fields['filter'];
      			create_slrememberme();
        	}
			else
			{
                destroy_slrememberme($username);
        	}
        }
}
function generateCode($length) 
{
	$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0,$clen)];
    }
    return $code;
}
if($config['enable_fc'] == "1")
{
	if($_SESSION['USERID'] == "")
	{
		$A = $config['FACEBOOK_APP_ID'];
		$B = $config['FACEBOOK_SECRET'];
		define('FACEBOOK_APP_ID', $A);
		define('FACEBOOK_SECRET', $B);
		STemplate::assign('FACEBOOK_APP_ID',$A);
		STemplate::assign('FACEBOOK_SECRET',$B);
		
		function get_facebook_cookie($app_id, $application_secret) {
		  $args = array();
		  parse_str(trim($_COOKIE['fbs_' . $app_id], '\\"'), $args);
		  ksort($args);
		  $payload = '';
		  foreach ($args as $key => $value) {
			if ($key != 'sig') {
			  $payload .= $key . '=' . $value;
			}
		  }
		  if (md5($payload . $application_secret) != $args['sig']) {
			return null;
		  }
		  return $args;
		}
		
		$code = $_REQUEST['code'];
		if($code != "")
		{
			$my_url = $config['baseurl']."/";
			$token_url = "https://graph.facebook.com/oauth/access_token?"
			. "client_id=" . $A . "&redirect_uri=" . urlencode($my_url)
			. "&client_secret=" . $B . "&code=" . $code;
			$response = @file_get_contents($token_url);
			$params = null;
			parse_str($response, $params);
			$graph_url = "https://graph.facebook.com/me?access_token=" 
			. $params['access_token'];
			$user = json_decode(file_get_contents($graph_url));
			$fname = htmlentities(strip_tags($user->name), ENT_COMPAT, "UTF-8");
			$femail = htmlentities(strip_tags($user->email), ENT_COMPAT, "UTF-8");
			
			$query="SELECT USERID FROM members WHERE email='".mysql_real_escape_string($femail)."' limit 1";
			$executequery=$conn->execute($query);
			$FUID = intval($executequery->fields['USERID']);
			if($FUID > 0)
			{									
				$query="SELECT USERID,email,username,verified, filter from members WHERE USERID='".mysql_real_escape_string($FUID)."' and status='1'";
				$result=$conn->execute($query);
				if($result->recordcount()>0)
				{
					$query="update members set lastlogin='".time()."', lip='".$_SERVER['REMOTE_ADDR']."' WHERE USERID='".mysql_real_escape_string($FUID)."'";
					$conn->execute($query);
					$_SESSION['USERID']=$result->fields['USERID'];
					$_SESSION['EMAIL']=$result->fields['email'];
					$_SESSION['USERNAME']=$result->fields['username'];
					$_SESSION['VERIFIED']=$result->fields['verified'];
					$_SESSION['FILTER']=$result->fields['filter'];
					$_SESSION['FB']="1";			
					header("Location:$config[baseurl]/");exit;
				}
			}
			else
			{
				$md5pass = md5(generateCode(5).time());
				
				if($fname != "" && $femail != "")
				{
					$query="INSERT INTO members SET email='".mysql_real_escape_string($femail)."',username='', password='".mysql_real_escape_string($md5pass)."', addtime='".time()."', lastlogin='".time()."', ip='".$_SERVER['REMOTE_ADDR']."', lip='".$_SERVER['REMOTE_ADDR']."', verified='1'";
					$result=$conn->execute($query);
					$userid = mysql_insert_id();
					if($userid != "" && is_numeric($userid) && $userid > 0)
					{
						$query="SELECT USERID,email,verified, filter from members WHERE USERID='".mysql_real_escape_string($userid)."'";
						$result=$conn->execute($query);
						
						$SUSERID = $result->fields['USERID'];
						$SEMAIL = $result->fields['email'];
						$SVERIFIED = $result->fields['verified'];
						$SFILTER = $result->fields['filter'];
						$_SESSION['USERID']=$SUSERID;
						$_SESSION['EMAIL']=$SEMAIL;
						$_SESSION['VERIFIED']=$SVERIFIED;
						$_SESSION['FILTER']=$SFILTER;
						$_SESSION['FB']="1";				
						header("Location:$config[baseurl]/connect.php");exit;
					}
				}
			}
		}
	}
	function getCurrentPageUrl()
	{
		 static $pageURL = '';
		 if(empty($pageURL)){
			  $pageURL = 'http';
			  if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on')$pageURL .= 's';
			  $pageURL .= '://';
			  if($_SERVER['SERVER_PORT'] != '80')$pageURL .= $_SERVER['SERVER_NAME'].':'.$_SERVER['SERVER_PORT'].$_SERVER['REQUEST_URI'];
			  else $pageURL .= $_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
		 }
		 return $pageURL;
	} 
	if($_SESSION['USERNAME'] == "" && $_SESSION['FB'] == "1")
	{	
		$url = getCurrentPageUrl();
		$myurl = $config['baseurl']."/connect.php";
		$cssurl = $config['baseurl']."/css/connect.css";
		if(($url != $myurl) && ($url != $cssurl))
		{
			header("Location:$config[baseurl]/connect.php");exit;
		}
	}
}
if($lskip != "1")
{
	if($_SESSION['USERID'] != "" && $_SESSION['EMAIL'] != "")
	{
		if($_SESSION['USERNAME'] == "")
		{
			header("Location:$config[baseurl]/selectusername.php");exit;
		}
	}
}
?>
