<?php
include 'DBConfig.php';
$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
//$email = "abc";
//$password = "123";
//$hoten = "nguyen cong nhan";
//$sdt = "123123";;
$hoten = $obj['hoten'];
$email = $obj['email'];
$sdt = $obj['sdt'];
$password = $obj['password'];
$sql = "INSERT INTO user VALUES(null,'$email', '$password', '$hoten', '$sdt')";
$result = mysqli_query($conn,$sql);
?>