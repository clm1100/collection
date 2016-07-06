document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);

document.addEventListener("touchstart", function(e){
	window.slideY = e.touches[0].pageY;
}, false);

document.addEventListener("touchend", function(e){
	var delta = e.changedTouches[0].pageY - window.slideY;

	if (delta < -10) {
		++page;
		page > pageMax && (page = pageMax);
		typeof window["page_" + page] == "function" && window["page_" + page]();
	}
	else if (delta > 10) {
		--page;
		page < 0 && (page = 0);
		typeof window["page_" + page] == "function" && window["page_" + page]();
	}
}, false);

var UA = navigator.userAgent.toLowerCase();
var isApple = ~UA.indexOf("iph") || ~UA.indexOf("ipad")
var page = 0, pageMax = 6, intro = 1, introMax = 3, showTimeout;
var picList = "arrow-left.png arrow-right.png bg.jpg city.png intro-1.jpg intro-2.jpg intro-3.jpg intro-truck.png loading-car-line.png loading-car-main.png loading-car-smog-1.png loading-car-smog-2.png loading-finish-title.png map-1.png map-2.png map-3.png map-4.png map-5.png map-6.png map-7.png map-8.png map-9.png map-bg.png map-point.png menu-1.jpg menu-2.jpg menu-3.jpg menu-4-checked.jpg menu-4.jpg menu-5.jpg menu-oil-0.png menu-oil-1.png menu-oil-2.png menu-oil-3.png menu-oil-4.png menu-oil-5.png menu-poker-1.png menu-poker-2.png menu-poker-3.png menu-poker-4.png menu-poker-5.png menu-poker.png menu-product-1.png menu-product-2.png menu-product-3.png menu-product-4.png menu-product-5.png menu-product-6.png menu-truck.jpg poem-1.png poem-2.png poem-3.png poem-4.png poem-5.png poem-6.png poem-7.png truck-road.jpg truck-text-cover.png truck-text.png truck-wheel.png truck.png".split(" ");

function clear_move(){
	$("section.poem .poem-move-wrap").removeClass("move");
	$("section.poem .poem-move-wrap .poem-1").removeClass("move");
	$("section.poem .poem-move-wrap .poem-2").removeClass("move");
	$("section.poem .poem-move-wrap .poem-3").removeClass("move");
	$("section.poem .poem-move-wrap .poem-4").removeClass("move");
	$("section.poem .poem-move-wrap .poem-5").removeClass("move");
	$("section.poem .poem-move-wrap .poem-6").removeClass("move");
	$("section.poem .poem-move-wrap .poem-7").removeClass("move");
	$("section.truck .text").removeClass("move");
}

function page_0(){
	clearTimeout(showTimeout);
	$("section").removeClass("show");

	showTimeout = setTimeout(function(){
		$("section.loading").addClass("show");
		clear_move();
	}, 500);
}

function page_1(){
	clearTimeout(showTimeout);
	clear_move();
	$("section").removeClass("show");
	$("section.poem").addClass("show");
	$("section.poem .poem-move-wrap").addClass("move");
	/*
	$("section.poem .poem-move-wrap .poem-1").addClass("move");
	$("section.poem .poem-move-wrap .poem-2").addClass("move");
	$("section.poem .poem-move-wrap .poem-3").addClass("move");
	$("section.poem .poem-move-wrap .poem-4").addClass("move");
	$("section.poem .poem-move-wrap .poem-5").addClass("move");
	$("section.poem .poem-move-wrap .poem-6").addClass("move");
	$("section.poem .poem-move-wrap .poem-7").addClass("move");
	*/
}

function page_2(){
	clearTimeout(showTimeout);
	$("section").removeClass("show");

	showTimeout = setTimeout(function(){
		$("section.map").addClass("show");
		clear_move();

		/*
		for (var i=1;i<10;++i) {
			(function(i){
				setTimeout(function(){
					$("section.map .point.point-" + i).addClass("in");
				}, i * 200);
			})(i)
		}
		*/

		for (var i=1;i<10;++i) {
			(function(i){
				setTimeout(function(){
					$("section.map .point.point-" + i).addClass("in");

					setTimeout(function(){
						$("section.map .name.name-" + i).addClass("in");
					}, 700);
				}, i * 1000);
			})(i)
		}
	}, 500);
}

function page_3(){
	clearTimeout(showTimeout);
	$("section").removeClass("show");

	showTimeout = setTimeout(function(){
		clear_move();
		$("section.truck").addClass("show");
		$("section.truck .main").addClass("show");
		$("section.truck .text").addClass("move");
	}, 500);
}

function page_4(){
	clearTimeout(showTimeout);
	$("section").removeClass("show");

	showTimeout = setTimeout(function(){
		clear_move();
		$("section.intro").addClass("show");
	}, 500);
}

function page_5(){
	clearTimeout(showTimeout);
	$("section").removeClass("show");

	showTimeout = setTimeout(function(){
		clear_move();
		$("section.menu").addClass("show");
	}, 500);
}

function page_6(){
	clearTimeout(showTimeout);
	$("section").removeClass("show");

	showTimeout = setTimeout(function(){
		clear_move();
		$("section.city").addClass("show").bind("webkitTransitionEnd", function(){
			$("section.city .link").addClass("show").bind("webkitTransitionEnd", function(){
				$("section.city .link .truck").addClass("show");
			});
		});
	}, 500);
}

function loadFinish(){
	$("section.loading .finish-move-wrap").addClass("finish").bind("webkitTransitionEnd", function(){
		$("section.loading .finish-move-wrap .car-pull").addClass("finish");
	});

	$("section.loading .finish-move-wrap .finish-title").addClass("finish");

	$(".arrow-left").bind("touchend", function(e){
		e.stopPropagation();

		if ($(this).hasClass("arrow-intro")) {
			--intro;
			intro < 1 && (intro = 3);
			$("section.intro-item-list .intro-item").removeClass("show");
			$("section.intro-item-list .intro-" + intro).addClass("show");
		}
		else {
			--page;
			page < 0 && (page = 0);
			typeof window["page_" + page] == "function" && window["page_" + page]();
		}
	});
	
	$(".arrow-right").bind("touchend", function(e){
		e.stopPropagation();

		if ($(this).hasClass("arrow-intro")) {
			++intro;
			intro > introMax && (intro = 1);
			$("section.intro-item-list .intro-item").removeClass("show");
			$("section.intro-item-list .intro-" + intro).addClass("show");
		}
		else {
			++page;
			page > pageMax && (page = pageMax);
			typeof window["page_" + page] == "function" && window["page_" + page]();
		}
	});

	$("section.intro .box").bind("touchend", function(e){
		e.stopPropagation();
		var delta = e.changedTouches[0].pageY - window.slideY;

		if (delta < -10) {
			++page;
			page > pageMax && (page = pageMax);
			typeof window["page_" + page] == "function" && window["page_" + page]();
		}
		else if (delta > 10) {
			--page;
			page < 0 && (page = 0);
			typeof window["page_" + page] == "function" && window["page_" + page]();
		}
		else {
			if (!$("section.intro").hasClass("show")) {
				return false;
			}
	
			setTimeout(function(){
				$("section.intro-item-list").addClass("show");
				$("section.intro-item-list .intro-item.intro-1").addClass("show");
				$("section.intro").addClass("opacity");
				$(".arrow-left, .arrow-right").addClass("arrow-intro");
				$("section.intro .box .light").hide();
			}, 300);
		}
	});

	$("section.intro-item-list .intro-item").bind("touchend", function(e){
		e.stopPropagation();
		var delta = e.changedTouches[0].pageY - window.slideY;

		if (delta < -10) {
			++intro;
			intro > introMax && (intro = 1);
			$("section.intro-item-list .intro-item").removeClass("show");
			$("section.intro-item-list .intro-" + intro).addClass("show");
		}
		else if (delta > 10) {
			--intro;
			intro < 1 && (intro = 3);
			$("section.intro-item-list .intro-item").removeClass("show");
			$("section.intro-item-list .intro-" + intro).addClass("show");
		}
		else {
			$("section.intro").removeClass("opacity");
	
			setTimeout(function(){
				$("section.intro-item-list").removeClass("show");
				$("section.intro-item-list .intro-item").removeClass("show");
				$(".arrow-left, .arrow-right").removeClass("arrow-intro");
			}, 300);
		}
	});

	$("section.intro-item-list").bind("touchend", function(e){
		e.stopPropagation();
		$("section.intro").removeClass("opacity");

		setTimeout(function(){
			$("section.intro-item-list").removeClass("show");
			$("section.intro-item-list .intro-item").removeClass("show");
			$(".arrow-left, .arrow-right").removeClass("arrow-intro");
		}, 300);
	});

	$("section.menu .item-1").bind("touchend", function(e){
		e.stopPropagation();

		setTimeout(function(){
			$("section.menu-item-1").addClass("show");
			$("section.menu").addClass("opacity");
			$(".arrow-left, .arrow-right").hide();
		}, 300);
	});

	$("section.menu .item-2").bind("touchend", function(e){
		e.stopPropagation();

		setTimeout(function(){
			$("section.menu-item-2").addClass("show");
			$("section.menu").addClass("opacity");
			$(".arrow-left, .arrow-right").hide();
		}, 300);
	});

	$("section.menu .item-3").bind("touchend", function(e){
		e.stopPropagation();

		setTimeout(function(){
			$("section.menu-item-3").addClass("show");
			$("section.menu").addClass("opacity");
			$(".arrow-left, .arrow-right").hide();
		}, 300);
	});

	$("section.menu .item-4").bind("touchend", function(e){
		e.stopPropagation();

		setTimeout(function(){
			$("section.menu-item-4").addClass("show");
			$("section.menu").addClass("opacity");
			$(".arrow-left, .arrow-right").hide();
		}, 300);
	});

	$("section.menu .item-5").bind("touchend", function(e){
		e.stopPropagation();

		setTimeout(function(){
			$("section.menu-item-5").addClass("show");
			$("section.menu").addClass("opacity");
			$(".arrow-left, .arrow-right").hide();
		}, 300);
	});

	$("section.menu-item-3 .poker").bind("touchend", function(e){
		e.stopPropagation();
		$(this).toggleClass("opened");
	});

	$("section.menu-item-4 .checked").bind("touchend", function(e){
		e.stopPropagation();
		$(this).toggleClass("show");
	});

	$("section.menu-item-4 .ok").bind("touchend", function(e){
		e.stopPropagation();

		setTimeout(function(){
			$("section.menu-item-4 .checked").removeClass("show");
			$("section.menu-product").addClass("menu-product-" + (1 + Math.floor(Math.random() * 5)));
		}, 300);
	});

	$("section.menu-product").bind("touchend", function(e){
		e.stopPropagation();
		$(this).removeClass().addClass("menu-product");
	});

	$("section.menu-item").bind("touchend", function(e){
		e.stopPropagation();
		$("section.menu").removeClass("opacity");

		setTimeout(function(){
			$("section.menu-item").removeClass("show");
			$("section.menu-item-4 .checked").removeClass("show");
			$("section.menu-item-3 .poker").removeClass("opened");
			$(".arrow-left, .arrow-right").show();
		}, 300);
	});

	$("section.menu-item-5 .oil .oil-item").each(function(index){
		$(this).bind("touchend", function(e){
			e.stopPropagation();
			var delta = e.changedTouches[0].pageY - window.slideY;
	
			if (delta < -10) {
				++page;
				page > pageMax && (page = pageMax);
				typeof window["page_" + page] == "function" && window["page_" + page]();
			}
			else if (delta > 10) {
				--page;
				page < 0 && (page = 0);
				typeof window["page_" + page] == "function" && window["page_" + page]();
			}
			else {
				$("section.menu-item-5 .oil").removeClass().addClass("oil oil-" + (index + 1));
			}
		});
	});

	$(".no-close, section.menu-item-5 .oil").bind("touchend", function(e){
		e.stopPropagation();
	});
}

var loadedImages = 0, start = new Date().getTime(), cacheList = [];

function intertImage(){
	++loadedImages;

	if (loadedImages >= picList.length) {
		if (new Date().getTime() - start > 1000) {
			loadFinish();
		}
		else {
			setTimeout(loadFinish, 1000);
		}
	}
}

for (var i=0;i<picList.length;++i) {
	cacheList.push(new Image());
	cacheList[cacheList.length - 1].onload = intertImage;
	cacheList[cacheList.length - 1].src = "./img/" + picList[i];
}
