<?php
include 'class.afuweixin.php';
$afu = new AfuWeixin;
$jsapi = $afu->getJsInfo();
// 微信JS-SDK授权信息，包含APPID、nonceStr、timestamp、signature及去除锚点标记的URL(用于微信验证的URL)
//var_dump($afu->getJsInfo());

// 获取用户信息，自动跳转到微信授权页，授权后自动获取用户信息
// 接受一个可选参数，传值true，表示不经过微信授权，直接返回一个测试用户信息(假信息)，可用于PC调试
//var_dump($afu->getUserInfo(true));
?>
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=640px,target-densitydpi=device-dpi,user-scalable=no;" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>哆啦A梦</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<section class="section_0" style="display:block;z-index:0;"></section>
<section class="section_1">
  <div class="item1"></div>
  <div class="item2"></div>
  <div class="item3 flower3"></div>
  <div class="item4"></div>
  <div class="item5 flower3"></div>
  <div class="item6 flower3"></div>
  <div class="item7"></div>
  <div class="xingxing"> </div>
</section>
<section class="section_2">
  <div class="wai">
    <div class="nei neitransition">
      <div class="aitemtransition aitem aitem1 "></div>
      <div class="aitem aitem2 aitemtransition  "></div>
      <div class="aitemtransition aitem aitem3"></div>
      <div class="aitemtransition aitem aitem4"></div>
      <div class="aitemtransition aitem aitem5"></div>
      <div class="aitemtransition aitem aitem6"></div>
      <div class="aitemtransition aitem aitem7"></div>
      <div class="aitemtransition aitem aitem8"></div>
      <div class="aitemtransition aitem aitem9"></div>
      <div class="aitemtransition aitem aitem10"></div>
    </div>
  </div>
  <div class="dingdang"></div>
  <div class="daxiong"></div>
  <div class="xingxing"></div>
</section>
<section class="section_3">
  <div class="bitem bitem1"></div>
  <div class="bitem bitem2 "></div>
  <div class="bitem bitem3"></div>
</section>
<section class="section_4">
  <div class="circle"></div>
  <div class="hand"></div>
  <div class="page"></div>
</section>
<section class="section_5">
  <div class="products"></div>
</section>
<section class="section-6 section_6">
  <ul class="imgs-cont">
    <li class="current"><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-6-3.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-6-2.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-6-1.png" width="640"/></li>
  </ul>
  <div class="butt-top"></div>
  <div class="butt-bottom"></div>
  <div class="dynamic"></div>
</section>
<section class="section-7 section_7">
  <div class="bg-mobile"></div>
  <ul class="content-imgs">
    <li class="current"><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-7-1.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-7-2.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-7-3.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-7-4.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-7-5.png" width="640"/></li>
    <li><img src="http://afuweixin.b0.upaiyun.com/catpic/doraemon/section-7-6.png" width="640"/></li>
  </ul>
  <div class="butt-right"></div>
  <div class="butt-left"></div>
  <div class="dynamic"></div>
  <div class="set-like out">
    <span class="num"></span>
    <div class="star"></div>
  </div>
</section>
<section class="section-8 section_8">
  <div class="wormhole"></div>
  <div class="people">
    <div class="people-con"></div>
  </div>
  <div class="bg"></div>
  <div class="jion"></div>
</section>
<div class="up"></div>
<div class="loading"></div>
<audio id="music" src="http://doraemon.365pp.com/img/music.mp3" preload="auto" loop></audio>
<script src="js/zepto.js"></script> 
<script src="js/123.js"></script> 
<script src="js/45.js"></script> 
<script src="js/678.js"></script>
<script src="js/global.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
 wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '<?php echo $jsapi->appId; ?>', // 必填，公众号的唯一标识
    timestamp: '<?php echo $jsapi->timestamp; ?>' , // 必填，生成签名的时间戳
    nonceStr: '<?php echo $jsapi->nonceStr; ?>', // 必填，生成签名的随机串
    signature: '<?php echo $jsapi->signature; ?>',// 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'openCard'
      ]
  });
</script>
<script src="js/demo.js"></script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?7a8f0469b0f56382efa44f95647fbd08";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
</body>
</html>
