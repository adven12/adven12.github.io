<?php

if(!isset($_POST['pass'])){
	die('bad');
}
$pass = "111";
if($_POST['pass'] != $pass){
	die('bad');
}
die('ok');

?>

