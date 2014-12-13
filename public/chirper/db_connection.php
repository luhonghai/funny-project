<?php
define ('HOSTNAME', getenv("P_DB_HOST"));//'mysql.cms.gre.ac.uk');
define ('USERNAME', getenv("P_DB_USER"));//'nd307');
define ('PASSWORD', getenv("P_DB_PASSWORD"));//'amahtc6W');
define ('DATABASE_NAME', 'chirper');//'mdb_nd307');

$con=mysqli_connect(HOSTNAME,USERNAME,PASSWORD,DATABASE_NAME);
// Check connection
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>