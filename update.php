<?php
/**
 * Created by PhpStorm.
 * User: Hai Lu
 * Date: 14/10/2014
 * Time: 08:59
 */
include("include/config.php");
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
    echo 'Detect push event.\n';
    $data = json_decode(file_get_contents('php://input'),true);
    if (isset($data['ref']) && strcasecmp($data['ref'], 'refs/heads/master') == 0) {
        echo 'Force pull.\n';
        $lines = array();
        $command = 'cd '.$config['basedir'].';git pull origin master';
        echo $command.'\n';
        exec($command, $lines);
        foreach($lines as $i) {
            echo $i.'\n';
        }
    }
} else if (strcasecmp($gEvent, 'ping') == 0) {
    echo 'Detect ping event.';
}
?>