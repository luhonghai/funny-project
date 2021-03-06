<?php
/**
 * Created by PhpStorm.
 * User: Hai Lu
 * Date: 14/10/2014
 * Time: 08:59
 */
require 'vendor/autoload.php';
use Aws\S3\S3Client;
function parseRequestHeaders() {
    $headers = array();
    foreach($_SERVER as $key => $value) {
        if (substr($key, 0, 5) <> 'HTTP_') {
            continue;
        }
        $header = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
        $headers[$header] = $value;
    }
    return $headers;
}

$headers = parseRequestHeaders();
$gEvent = $headers['X-Github-Event'];
if (strcasecmp($gEvent, 'push') == 0) {
    echo 'Detect push event.';
    $data = json_decode(file_get_contents('php://input'),true);
    if (isset($data['ref']) && strcasecmp($data['ref'], 'refs/heads/master') == 0) {
        $logs = "";
        try {
            $command =
                'id 2>&1;' .
                'export COMPOSER_HOME="' . getenv("P_BASE_DIR") . '";' .
                'php composer.phar install 2>&1;' .
                'export AWS_ACCESS_KEY_ID="' . getenv("AWS_ACCESS_KEY_ID") . '" 2>&1;' .
                'export AWS_SECRET_ACCESS_KEY="' . getenv("AWS_SECRET_ACCESS_KEY") . '" 2>&1;' .
                'export LANG="en_GB.UTF-8" 2>&1;' .
                'export AWS_REGION="' . getenv("AWS_REGION") . '" 2>$1' .
                'export LANGUAGE=en_GB:en 2>&1;' .
                'cd ' . getenv("P_BASE_DIR") . ';' .
                'git reset HEAD --hard;' .
                'git pull origin master 2>&1;' .
                'rake deploy 2>&1;' .
                'git aws.push 2>&1';
            $handle = popen($command, 'r');
            while ($line = fread($handle, 100)) {
                echo $line;
                $logs .= $line;
            }
            pclose($handle);
        } catch(Exception $e) {
            echo $e->getMessage();
            $logs .= 'error: '.$e->getMessage();
        }
        $bucket = 'logs.trollvd.com';
        $dt = new DateTime();
        $keyname =$dt->format('Y-m-d').'/'.$dt->format('H:i:s').'.log';

        // Instantiate the client.
        $s3 = S3Client::factory(array('key' => getenv("AWS_ACCESS_KEY_ID"),
                                'secret' => getenv("AWS_SECRET_ACCESS_KEY"),
                                'region' => getenv("AWS_REGION")));

        // Upload data.
        $s3->putObject(array(
            'Bucket' => $bucket,
            'Key'    => $keyname,
            'Body' => $logs
        ));
    } else {
        echo 'Not valid branch';
    }
} else if (strcasecmp($gEvent, 'ping') == 0) {
    echo 'Detect ping event.';
} else {
    echo 'Invalid command';
}
?>