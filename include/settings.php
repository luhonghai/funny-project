<?php
    $config = array();

    // Bắt đầu cấu hình
    $config['basedir']     =  '/var/www/html';   //Đường đẫn đến thư mục chứa mã nguồn

    $config['baseurl']     =  'http://www.phongkhamhoixuan.com';   //Liên kết đến thư mục chứa mã nguồn
    $config['domain']      =  'http://www.phongkhamhoixuan.com/';   //Domain của website
    $config['license']     =  '15a9bd52-38045634-77d4a4e4-21a221d6';   //Mã đăng ký

    $DBTYPE     = 'mysql';
    $DBHOST     = 'testing.cnn97htfydqy.ap-southeast-1.rds.amazonaws.com:3306';   //Tên máy chủ cơ sở dữ liệu
    $DBUSER     = 'admincmg';   //Tên đăng nhập cơ sở dữ liệu
    $DBPASSWORD = 'W3lcom3123';   //Mật khẩu kết nối cơ sở dữ liệu
    $DBNAME     = 'testing';   //Tên cơ sở dữ liệu

    $config['email']='contact@trollvd.com'; //--Email nguoi nhan thong tin lien he
    $config['fields']['fullname']='Contact Support';
    //--Có thể thêm field mới tùy ý
?>