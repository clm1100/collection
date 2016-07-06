<?php
class AfuWeixin {
	const APPID = 'wx67144e4994e68370';
	const APPSECRET = '1b3e385a316998a824ab3fb3d8fdd13b';
	private $access_token;
	private $jsapi_ticket;
	private $url;

	public function __construct(){
		$token = json_decode($this->postCurl('http://oauth.365pp.com/api/AccessToken'));
		$jsapi = json_decode($this->postCurl('http://oauth.365pp.com/api/JsTicket'));
		$this->access_token = $token->access_token;
		$this->jsapi_ticket = $jsapi->jsapi_ticket;
		$this->url = 'http://'. $_SERVER['HTTP_HOST']. $_SERVER['PHP_SELF']. ($_SERVER['QUERY_STRING'] ? '?'. $_SERVER['QUERY_STRING'] : '');
	}

	public function getJsInfo(){
		$result = new stdClass;
		$result->appId = $this::APPID;
		$result->timestamp = time();
		$result->nonceStr = md5(uniqid(rand()));
		$result->signature = sha1("jsapi_ticket={$this->jsapi_ticket}&noncestr={$result->nonceStr}&timestamp={$result->timestamp}&url={$this->url}");
		$result->url = $this->url;
		return $result;
	}

	public function getUserInfo($no_weixin = false){
		if ($no_weixin) {
			return json_decode('{
				"openid": "afu_test_openid",
				"nickname": "阿芙测试数据",
				"sex": 1,
				"language": "zh_CN",
				"city": "Chaoyang",
				"province": "Beijing",
				"country": "CN",
				"headimgurl": "http://p6.qhimg.com/dmtfd/120_115_/t01e56020058904d431.jpg?size=220x210",
				"privilege": []
			}');
		}

		if ($_GET['code']) {
			$access_token = json_decode($this->getCurl('https://api.weixin.qq.com/sns/oauth2/access_token?appid='. $this::APPID. '&secret='. $this::APPSECRET. "&code={$_GET['code']}&grant_type=authorization_code"));
			return json_decode($this->getCurl("https://api.weixin.qq.com/sns/userinfo?access_token={$access_token->access_token}&openid={$access_token->openid}"));
		}

		if ($_SERVER['QUERY_STRING']) {
			$callbackState = 'http://'. $_SERVER['HTTP_HOST']. $_SERVER['PHP_SELF']. '|'. str_replace('&', '|', $_SERVER['QUERY_STRING']);
		}
		else {
			$callbackState = 'http://'. $_SERVER['HTTP_HOST']. $_SERVER['PHP_SELF'];
		}

		$oAuth365 = urlencode('http://oauth.365pp.com/oauth/index');
		$oAuthUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=". $this::APPID. "&redirect_uri={$oAuth365}&response_type=code&scope=snsapi_userinfo&state={$callbackState}#wechat_redirect";
		header("Location: {$oAuthUrl}");
		exit();
	}

	private function getCurl($url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		$result = curl_exec($ch);
		curl_close($ch);
		return $result;
	}
	
	private function postCurl($url, $data = ''){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		$result = curl_exec($ch);
		curl_close($ch);
		return $result;
	}
}
