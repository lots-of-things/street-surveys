<?php
	
	if(!empty($_POST['data'])){
	$data = $_POST['data'];
	
	$file = './answers2.txt';
	file_put_contents($file, $data . "\n", FILE_APPEND | LOCK_EX);
	fclose($file);
	}
?>

