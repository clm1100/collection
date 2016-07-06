(function(){
	function section6(){
		  var num=0;
		$(".section-6 .butt-top").bind("touchstart",function(){
			num++;
			if(num>2){num=0}
			$(".section-6 .imgs-cont li").eq(num).addClass("current").siblings().removeClass();
		});
		$(".section-6 .butt-bottom").bind("touchstart",function(){
			num--;
			if(num<0){num=2}
			$(".section-6 .imgs-cont li").eq(num).addClass("current").siblings().removeClass();
		});
	};
	//section6();
	
	function section7(){
		  var num=0;
		$(".section-7 .butt-right").bind("touchstart",function(){
			num++;
			//$(".section-7 .bg-mobile").css({"background-position":(num1-150*num)+"px"+" center"});
			if(num>5){num=0}
			$(".section-7 .content-imgs li").eq(num).addClass("current").siblings().removeClass();
			
		});
		$(".section-7 .butt-left").bind("touchstart",function(){
			num--;
			if(num<0){num=5}
			$(".section-7 .content-imgs li").eq(num).addClass("current").siblings().removeClass();
		});
		
		$(".section-7 .set-like")[0].addEventListener("touchstart",function(){
			if (!$(".section-7 .set-like").hasClass("out")) {
				return false;
			}

			$.ajax({
				url: "http://feiying.sinaapp.com/afu/other/doraemon.php?action=set&callback=?",
				success: function(){
					$(".section-7 .set-like .num").text(~~$(".section-7 .set-like .num").text() + 1);
					$(".section-7 .set-like").removeClass("out");
					var timer=setTimeout(function(){
						$(".section-7 .set-like .star").css("opacity",0);
					},600);	
				}
			});
		},false);
	};
	//section7();
	
	function section8(){
		$(".section-8 .jion").bind("touchstart",function(){
			$(this).css({"opacity":"0"});
			$(".section-8 .people").css({"-webkit-transform":"scale(0,0)","opacity":"0"});
			$(".section-8 .wormhole").css({"-webkit-transform":"scale(2,2)","opacity":"0.5"});	
			
			var timer=setTimeout(function(){
				$(".section-8 .bg").css("opacity",1);
			},500);

			setTimeout(function(){
				window.location.href = "http://wap.koudaitong.com/v2/feature/v10e330u";
				//window.location.href = "http://shop60632932.m.taobao.com/";
				/*
				if (~navigator.userAgent.toLowerCase().indexOf("micromessage")) {
				}
				else {
					window.location.href = "http://shop60632932.m.taobao.com/";
				}
				*/
			}, 1100);
		})
	};
	//section8();

	window.section_6 = section6;
	window.section_7 = section7;
	window.section_8 = section8;
})();
