(function(){
	function section_1(){

		var item4 = document.querySelector(".item4");
		var item2 = document.querySelector(".item2");
		item4.className+=" pingzi";
		item2.className+=" fangda";
		var pingzi = document.querySelector(".pingzi");
		pingzi.addEventListener("webkitAnimationEnd",function(){
			pingzi.style.webkitTransform = "translate3d(0px,0px,0px)";
		},false)
	}
	//section_1();
	function section_2(){
		var timer;
		var se2_index = 1;
		$(".nei div").eq(1).addClass("se2_active");
		timer = window.setInterval(function(){
			se2_index++;
			if (se2_index>=7) {
				$(".nei").removeClass("neitransition");
				$(".nei")[0].style.webkitTransform = "translate3d(0px,0px,0px)";
				$(".aitem2").removeClass("aitemtransition");
				$(".nei div").eq(1).addClass("se2_active")
				se2_index=1;	
			}
			else{
			$(".nei div").eq(se2_index).addClass("se2_active").siblings().removeClass("se2_active");
			$(".nei")[0].style.webkitTransform = "translate3d("+(-se2_index*150+150)+"px,0px,0px)";
			}

			if (se2_index==2) {
				$(".nei").addClass("neitransition");
				$(".aitem2").addClass("aitemtransition");

			};
		},2000)
	}
	//section_2()
	function section_3(){
		$(".bitem1").addClass("bitem1animation");
		$(".bitem1animation")[0].addEventListener("webkitAnimationEnd",function(){
			//alert(11)
			$(".bitem1").css("background","url(img/section_3_txt3.png) no-repeat center center")
		},false)
		timer_e3=window.setTimeout(function(){
		$(".bitem2").css("opacity","1");
		$(".bitem3").css("opacity","1");
		},300)
	}
	//section_3()
	window.section_1 = section_1;
	window.section_2 = section_2;
	window.section_3 = section_3;
})()
