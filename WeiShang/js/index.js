document.addEventListener("touchmove" , function (e) { e.preventDefault(); }, false);

var sectionLength = document.querySelectorAll("section").length;
var wrap_bg1 = $(".wrap_bg1");
var wrap_bg2 = $(".wrap_bg2");
var wrap_bg3 = $(".wrap_bg3");
wrap_bg1.append(new Array(51).join('<div class="in"></div>'));
wrap_bg2.append(new Array(51).join('<div class="in"><div class="in2"></div></div>'));
wrap_bg3.append(new Array(51).join('<div class="in"><div class="in2"></div></div>'));

wrap_bg2.children(".in").each(function(index){
	var i = (index - 1) / 2;
	//i == 10 && (i = "A");
	$(this).addClass("s" + i);
});

wrap_bg3.children(".in").each(function(index){
	var i = (index) / 3;
	//i == 10 && (i = "A");
	$(this).addClass("s" + i);
});

$(".wrap_bg3 .in.s9").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s9 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".bmbtn").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".bmbtn").css({"z-index":"999"})

/*$(".wrap_bg3 .in.s8").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s8 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s7").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s7 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s6").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s6 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s5").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s5 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s4").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s4 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s3").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s3 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s2").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s2 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
$(".wrap_bg3 .in.s1").append('<div class="baoming"></div>');
$(".wrap_bg3 .in.s1 .baoming").bind("touchend", function(){
	//“我要报名”的链接写在下面
	window.location.href = "http://weishang.365pp.com/register/baoming";
});
*/
var wrap_in = {};
wrap_in.obj = document.querySelector(".wrap_in");
wrap_in.parent = document.querySelector(".wrap");
wrap_in.marginTop = 0;
wrap_in.index = 0;
wrap_in.direction = "click";
wrap_in.tapTime = 0;
document.addEventListener("touchstart", function(e){
	wrap_in.touchMoveY = wrap_in.touchStartY = e.touches[0].pageY;
	wrap_in.tapTime = new Date().getTime();
}, false);
document.addEventListener("touchmove", function(e){
	if (e.touches[0].pageY < wrap_in.touchMoveY) {
		wrap_in.direction = "up";
	}
	else if (e.touches[0].pageY > wrap_in.touchMoveY) {
		wrap_in.direction = "down";
	}
	else {
		wrap_in.direction = "no";
	}

	wrap_in.touchMoveY = e.touches[0].pageY;
	wrap_in.deltaY = wrap_in.touchMoveY - wrap_in.touchStartY;
	wrap_in.obj.style.webkitTransform = "translate3d(0px," + (wrap_in.marginTop + wrap_in.deltaY) + "px,0px)";
	wrap_bg1.css({ "-webkit-transform": "translate3d(0px," + (wrap_in.marginTop + wrap_in.deltaY) / 2 + "px,0px)" });
	wrap_bg2.css({ "-webkit-transform": "translate3d(0px," + (wrap_in.marginTop + wrap_in.deltaY) * 2 + "px,0px)" });
	wrap_bg3.css({ "-webkit-transform": "translate3d(0px," + (wrap_in.marginTop + wrap_in.deltaY) * 3 + "px,0px)" });
}, false);
document.addEventListener("touchend", function(e){
	wrap_in.marginTop += wrap_in.deltaY;
	var animationEnd = function(){
		wrap_in.obj.className = wrap_in.obj.className.replace(/ repos/g, "").replace(/ animate/g, "");
		wrap_bg1.removeClass("repos animate");
		wrap_bg2.removeClass("repos animate");
		wrap_bg3.removeClass("repos animate");
		wrap_in.obj.removeEventListener("webkitTransitionEnd", animationEnd, false);
		var section_animate = document.querySelectorAll("section .animate, section .animate_r");

		for (var i=0;i<section_animate.length;++i) {
			section_animate[i].className = section_animate[i].className.replace(/ animate_r/g, "").replace(/ animate/g, "");
		}

		if (wrap_in.index == 0) {
			//document.querySelector(".step1 .balloon").className += " animate";
		}
		else {
			//document.querySelector(".step1 .balloon").className += " animate_r";
		}
	};

	if (wrap_in.marginTop > 0) {
		wrap_in.marginTop = 0;
		wrap_in.obj.addEventListener("webkitTransitionEnd", animationEnd, false);
		wrap_in.obj.className += " repos";
		wrap_bg1.addClass("repos");
		wrap_bg2.addClass("repos");
		wrap_bg3.addClass("repos");
		wrap_in.obj.style.webkitTransform = "translate3d(0px,0px,0px)";
		wrap_bg1.css({ "-webkit-transform": "translate3d(0px,0px,0px)" });
		wrap_bg2.css({ "-webkit-transform": "translate3d(0px,0px,0px)" });
		wrap_bg3.css({ "-webkit-transform": "translate3d(0px,0px,0px)" });
		return false;
	}

	if (wrap_in.marginTop < -wrap_in.parent.clientHeight * (sectionLength - 1)) {
		wrap_in.marginTop = -wrap_in.parent.clientHeight * (sectionLength - 1);
		wrap_in.obj.addEventListener("webkitTransitionEnd", animationEnd, false);
		wrap_in.obj.className += " repos";
		wrap_bg1.addClass("repos");
		wrap_bg2.addClass("repos");
		wrap_bg3.addClass("repos");
		wrap_in.obj.style.webkitTransform = "translate3d(0px," + wrap_in.marginTop + "px,0px)";
		wrap_bg1.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop / 2 + "px,0px)" });
		wrap_bg2.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop * 2 + "px,0px)" });
		wrap_bg3.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop * 3 + "px,0px)" });
		return false;
	}

	if (wrap_in.direction == "up") {
		if (new Date().getTime() - wrap_in.tapTime <= 200) {
			++wrap_in.index;
		}
		else {
			var halfLine = wrap_in.parent.clientHeight / 2;
			var topLine = wrap_in.marginTop + wrap_in.index * wrap_in.parent.clientHeight;
			var bottomLine = wrap_in.marginTop + (wrap_in.index + 1) * wrap_in.parent.clientHeight;

			if (topLine > halfLine) {
				--wrap_in.index;
			}
			else if (bottomLine < halfLine) {
				++wrap_in.index;
			}
		}

		if (wrap_in.index < 0) {
			wrap_in.index = 0;
		}

		wrap_in.marginTop = wrap_in.index * -wrap_in.parent.clientHeight;
		wrap_in.obj.addEventListener("webkitTransitionEnd", animationEnd, false);
		wrap_in.obj.className += " animate";
		wrap_bg1.addClass("animate");
		wrap_bg2.addClass("animate");
		wrap_bg3.addClass("animate");
		wrap_in.obj.style.webkitTransform = "translate3d(0px," + wrap_in.marginTop + "px,0px)";
		wrap_bg1.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop / 2 + "px,0px)" });
		wrap_bg2.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop * 2 + "px,0px)" });
		wrap_bg3.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop * 3 + "px,0px)" });
	}
	else if (wrap_in.direction == "down") {
		if (new Date().getTime() - wrap_in.tapTime <= 200) {
			--wrap_in.index;
		}
		else {
			var halfLine = wrap_in.parent.clientHeight / 2;
			var topLine = wrap_in.marginTop + wrap_in.index * wrap_in.parent.clientHeight;
			var bottomLine = wrap_in.marginTop + (wrap_in.index + 1) * wrap_in.parent.clientHeight;

			if (topLine > halfLine) {
				--wrap_in.index;
			}
			else if (bottomLine < halfLine) {
				++wrap_in.index;
			}
		}

		if (wrap_in.index < 0) {
			wrap_in.index = 0;
		}

		wrap_in.marginTop = wrap_in.index * -wrap_in.parent.clientHeight;
		wrap_in.obj.addEventListener("webkitTransitionEnd", animationEnd, false);
		wrap_in.obj.className += " animate";
		wrap_bg1.addClass("animate");
		wrap_bg2.addClass("animate");
		wrap_bg3.addClass("animate");
		wrap_in.obj.style.webkitTransform = "translate3d(0px," + wrap_in.marginTop + "px,0px)";
		wrap_bg1.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop / 2 + "px,0px)" });
		wrap_bg2.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop * 2 + "px,0px)" });
		wrap_bg3.css({ "-webkit-transform": "translate3d(0px," + wrap_in.marginTop * 3 + "px,0px)" });
	}
	if (wrap_in.index > 7) {
		$(".bmbtn").css({"display":"none"})
	}else{
		$(".bmbtn").css({"display":"block"})
	}

	wrap_in.direction = "click";
}, false);
/*
document.querySelector(".share").addEventListener("touchend", function(){
	document.querySelector(".sharetip").style.display = "block";
}, false);
document.querySelector(".sharetip").addEventListener("touchstart", function(){
	document.querySelector(".sharetip").style.display = "none";
}, false);
document.querySelector(".apply").addEventListener("touchend", function(){
	window.location.href = this.getAttribute("href");
}, false);

var ua = navigator.userAgent.toLowerCase();

if (ua.indexOf("iph") > -1) {
	document.querySelector(".download").addEventListener("click", function(){
		window.location.href = "https://itunes.apple.com/cn/app/he-li-jia/id826351111?mt=8";
		return false;
	}, false);
	document.querySelector(".download").addEventListener("touchstart", function(){
		window.location.href = "https://itunes.apple.com/cn/app/he-li-jia/id826351111?mt=8";
		return false;
	}, false);
}
*/
