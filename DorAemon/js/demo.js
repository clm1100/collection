wx.ready(function(){
  wx.onMenuShareTimeline({
    title: '阿芙和哆啦A梦的秘密，是时候说出来了！', // 分享标题
    desc: '一句“STAND BY ME”没说出口，早已羞红了脸。', // 分享描述
    imgUrl: 'http://afuweixin.b0.upaiyun.com/catpic/doraemon/logo1.jpg', // 分享图标
    success: function () { 
      if (step == 1) {
        $.ajax({
          type: "get",
          url: "ajax.php?action=share",
          success: function(){
            window.location.href = "index.php";
          }
        });
      }
    },
    cancel: function () { 
    }
  });

  wx.onMenuShareAppMessage({
    title: '阿芙和哆啦A梦的秘密，是时候说出来了！', // 分享标题
    desc: '一句“STAND BY ME”没说出口，早已羞红了脸。', // 分享描述
    link: 'http://doraemon.365pp.com/index.php', // 分享链接
    imgUrl: 'http://afuweixin.b0.upaiyun.com/catpic/doraemon/logo1.jpg', // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () { 
      if (step == 1) {
        $.ajax({
          type: "get",
          url: "ajax.php?action=share",
          success: function(){
            window.location.href = "index.php";
          }
        });
      }
    },
    cancel: function () { 
    }
  });
});