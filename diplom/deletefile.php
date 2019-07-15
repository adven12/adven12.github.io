<?php
ini_set('display_errors', 1);
if(!isset($_POST['f']) || !file_exists($_POST['f'])){
	die('fail');
}
unlink($_POST['f']);
die('ok');

?>
