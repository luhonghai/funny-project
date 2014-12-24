<?php
/**
 * Created by PhpStorm.
 * User: longnguyen
 * Date: 3/9/14
 * Time: 1:39 PM
 */

$fileName = $_FILES["file2"]["name"]; // The file name
$fileTmpLoc = $_FILES["file2"]["tmp_name"]; // File in the PHP tmp folder
$fileType = $_FILES["file2"]["type"]; // The type of file it is
$fileSize = $_FILES["file2"]["size"]; // File size in bytes
$fileErrorMsg = $_FILES["file2"]["error"]; // 0 for false... and 1 for true
if (!$fileTmpLoc) { // if file not chosen
    echo "ERROR: Please browse for a file before clicking the upload button!";
    exit();
}
//if($fileSize > 20480){
    //echo "ERROR: Can not upload file greater than 20MB!";
    //exit();
//}
$allowed = array('audio/mp3');
if(in_array($fileType, $allowed)){
        if(move_uploaded_file($fileTmpLoc, "../uploads/".$fileName)){
            echo "File is uploaded successfully!";
        } else {
            echo "Move_uploaded_file function failed!";
        }
}else{
    echo "ERROR: Please upload mp3 file!";
    exit();
}

?>