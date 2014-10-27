<?php
/**
 * @file
 * User has successfully authenticated with Twitter. Access tokens saved to session and DB.
 */

/* Load required lib files. */
require_once('twitteroauth/twitteroauth.php');
include("include/config.php");
include("include/functions/import.php");

/* If access tokens are not available redirect to connect page. */
if (empty($_SESSION['access_token']) || empty($_SESSION['access_token']['oauth_token']) || empty($_SESSION['access_token']['oauth_token_secret'])) {
    header('Location: ./clearsessions.php');
}
/* Get user access tokens out of the session. */
$access_token = $_SESSION['access_token'];

/* Create a TwitterOauth object with consumer/user tokens. */
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token['oauth_token'], $access_token['oauth_token_secret']);

/* If method is set change API call made. Test is called by default. */
$user_info = $connection->get('account/verify_credentials');

    if(isset($user_info->error)){  
        // Something's wrong, go back to square 1  
        header('Location: twitter_login.php'); 
    } else { 
        // Let's find the user by its ID  
        
		$query = "SELECT * FROM members WHERE username ='" .$user_info->screen_name ."'";  
		$result = $conn->execute($query);
        // If not, let's add it to the database  
        if($result->fields['USERID']==""){  
            		$_SESSION['USERNAME']=$user_info->screen_name;
					header("Location:$config[baseurl]/twitter_signup");
		}
		else
		{
					$_SESSION['USERID']=$result->fields['USERID'];
					$_SESSION['EMAIL']=$result->fields['email'];
					$_SESSION['USERNAME']=$result->fields['username'];
					$_SESSION['VERIFIED']=$result->fields['verified'];
					$_SESSION['FILTER']=$result->fields['filter'];
					$setlang = $result->fields['mylang'];
					$redirect = $_SESSION['location'];
					if($redirect == "")
					{
						if ( $config[regredirect] == 1)
						{header("Location:$config[baseurl]/index.php".$addlang);exit;}
						else
						{header("Location:$config[baseurl]/settings".$addlang);exit;}
					}
					else
					{
						header("Location:".$config[baseurl].$redirect);exit;
					}
					$_SESSION['location'] = "";
		}
    }  

?>