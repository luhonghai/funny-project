<?php
require '../vendor/autoload.php';
use Aws\S3\S3Client;
$bucket = 'logs.trollvd.com';
$keyname ='test.log';

// Instantiate the client.
$s3 = S3Client::factory(array('key' => getenv("AWS_ACCESS_KEY_ID"),
    'secret' => getenv("AWS_SECRET_ACCESS_KEY"),
    'region' => getenv("AWS_REGION")));

// Upload data.
$s3->putObject(array(
    'Bucket' => $bucket,
    'Key'    => $keyname,
    'Body' => 'test'
));
echo "done";