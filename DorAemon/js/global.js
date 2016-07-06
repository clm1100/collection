(function(){

document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);

var images = "section-6-1.jpg section-6-1.png section-6-2.jpg section-6-2.png section-6-3.jpg section-6-3.png section-6-4.1.png section-6-4.png section-6-5.png section-6.jpg section-7-1.jpg section-7-1.png section-7-10.png section-7-11.png section-7-2.jpg section-7-2.png section-7-3.png section-7-4.png section-7-5.png section-7-6.png section-7-7.png section-7-8.png section-7-9.png section-8-1.jpg section-8-1.png section-8-2.png section-8-3.png section_1_bg.jpg section_1_flower1.png section_1_flower2.png section_1_flower3.png section_1_pingzi.png section_1_txt1.png section_1_txt2.png section_1_xingxing.png section_1_yuan.png section_2_bg.jpg section_2_txt1.png section_2_txt2.png section_2_txt3.png section_2_txt4.png section_2_txt5.png section_3_bg.jpg section_3_daxiong.png section_3_dingdang.png section_3_txt1.png section_3_txt2.png section_3_txt3.png section_3_txt4.png section_3_txt5.png section_4_bg.jpg?1 section_4_circle.png section_4_hand.png section_4_page.png section_5_bg.jpg up.png xg.png xk.png".split(" ");

var imageList = [], loaded = 0;;

for (var i=0;i<images.length;++i) {
	var img = new Image();
	img.onload = function(){
		if (++loaded >= images.length) {
			$(".loading").addClass("finish");
			$(".up").show();
			showSection(1);
			bindMove()
			
		}
	};
	img.src = "http://afuweixin.b0.upaiyun.com/catpic/doraemon/" + images[i];
}

var sectionLoaded = [], currentSection = 1;

function showSection(index){
	currentSection = index;
	currentSection < 1 && (currentSection = 1);
	currentSection > 8 && (currentSection = 8);

	var currentSectionObj = $(".section_" + currentSection + ", .section-" + currentSection);
	var otherSectionObj = $("section").not(".section_" + currentSection);
	var allSectionObj = $("section");

	if (currentSection == 5) {
		$(".section_4 .page").addClass("in");

		setTimeout(function(){
			currentSectionObj.show();
		}, 0);

		setTimeout(function(){
			allSectionObj.removeClass("show");
			currentSectionObj.addClass("show");
		}, 600);

		setTimeout(function(){
			otherSectionObj.hide();
		}, 1200);
	}
	else {
		currentSectionObj.show();
	
		setTimeout(function(){
			allSectionObj.removeClass("show");
		}, 0);
	
		setTimeout(function(){
			currentSectionObj.addClass("show");
		}, 500);
	
		setTimeout(function(){
			otherSectionObj.hide();
		}, 600);
	
		if (currentSection == 8) {
			$(".up").hide();
		}
		else {
			$(".up").show();
		}
	}

	if (!sectionLoaded[currentSection]) {
		setTimeout(function(){ window["section_" + currentSection](); }, 1100);
		sectionLoaded[currentSection] = true;
	}
}

function bindMove(){
	var Y = 0;

	document.addEventListener("touchstart", function(e){
		Y = e.touches[0].pageY;
	}, false);

	document.addEventListener("touchend", function(e){
		var newY = e.changedTouches[0].pageY;
		var delta = newY - Y;
		Y = 0;

		if (delta > 10) {
			showSection(currentSection - 1);
		}
		else if (delta < -10) {
			showSection(currentSection + 1);
		}
	}, false);
}

$.ajax({
	url: "http://feiying.sinaapp.com/afu/other/doraemon.php?action=get&callback=?",
	success: function(msg){
		$(".section-7 .set-like .num").text(msg);
	}
});

var playing = false;

document.addEventListener("touchstart", function(e){
	playing || document.getElementById("music").play();
	playing = true;
}, false);

})();
