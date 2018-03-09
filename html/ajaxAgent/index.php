<?php 
	$url = "http://njfc.bingheapp.com/index.php/lkx_api/user/login";
	$data['user_pwd']= $_POST['user_pwd'];
	$data['user_phone']= $_POST['user_phone'];
	// var_dump($phone);
	$ch  = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	//curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);
	//curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	//$headers = [
	//     "Content-Type: application/json;charset=UTF-8",
	// ];
	//curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); //设置header
	// var_dump(curl_exec($ch));
	$res = curl_exec($ch);
	// $res = json_encode($res,true);
	// var_dump($res);
	echo  $res;
	// return var_dump($res);
 ?>
