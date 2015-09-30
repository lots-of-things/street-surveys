<?php
	$ip = $_SERVER['REMOTE_ADDR'];
	file_put_contents('ipcheck.txt', $ip . "\n", FILE_APPEND | LOCK_EX);
	
	if(!empty($_POST['data'])){
	$data = $_POST['data'];
	
	$file = './answers.txt';
	file_put_contents($file, $data . "\n", FILE_APPEND | LOCK_EX);
	fclose($file);
	}
?>

