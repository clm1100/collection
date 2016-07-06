(function(){

var sectionHeight = $(".section_0").height();
var section_5_css = "@-webkit-keyframes section_5_products {\
	0%, 100% { -webkit-transform:translate3d(0px,0px,0px); }\
	17% { -webkit-transform:translate3d(-200px,0px,0px); }\
	50% { -webkit-transform:translate3d(-200px,-" + (1280 - sectionHeight) + "px,0px); }\
	67% { -webkit-transform:translate3d(0px,-" + (1280 - sectionHeight) + "px,0px); }\
}";

$("head").append("<style>" + section_5_css + "</style>");

function section_4(){
	$(".section_4 .circle, .section_4 .hand").addClass("in");
}

function section_5(){
	$(".section_5 .products").addClass("in");
}

//section_4();
//section_5();
//setTimeout(function(){ $(".section_4 .page").addClass("in"); }, 2000);
window.section_4 = section_4;
window.section_5 = section_5;

})();