<?php
include 'DBConfig.php';
$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
//$masp = "abc";
//$title = "123";
//$image = "nguyen cong nhan";
//$price = "123123";;
$masp = $obj['masp'];
$title = $obj['title'];
$image = $obj['image'];
$price = $obj['price'];
$sql = "INSERT INTO drinks VALUES(null,'$masp', '$title', '$image', '$price')";
//$result = mysqli_query($conn,$sql);
if(mysqli_query($conn,$sql)){
 $MSG = 'Successfully' ;
 $json = json_encode($MSG);
 echo $json ; 
 }else{
	 $MSG1 = 'Wrong' ;
  echo $MSG1;
 
 }
 mysqli_close($conn);
?>