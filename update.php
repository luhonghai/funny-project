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
    echo 'Detect push event';
} else if (strcasecmp($gEvent, 'ping') == 0) {
    echo 'Detect ping event';
}
?>