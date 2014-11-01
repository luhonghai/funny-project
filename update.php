<?php
/**
 * Created by PhpStorm.
 * User: Hai Lu
 * Date: 14/10/2014
 * Time: 08:59
 */
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
        $command = 'cd '.getenv("P_BASE_DIR").';git reset HEAD --hard;git pull origin master;rake deploy 2>&1;git aws.push 2>&1';
        $handle = popen($command, 'r');
        while ($line = fread($handle, 100)){
            echo $line;
        }
        pclose($handle);
    } else {
        echo 'Not valid branch';
    }
} else if (strcasecmp($gEvent, 'ping') == 0) {
    echo 'Detect ping event.';
} else {
    echo 'Invalid command';
}
?>