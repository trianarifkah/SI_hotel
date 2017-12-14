var t;
$(document).ready(function() {	
	$("#feature-control-1").addClass("current");
	
	t = setInterval(doSlide, 3750);

	$("#feature-control-1, #feature-control-2, #feature-control-3, #feature-control-4").on("click", function() {
		var id = $(this).attr("id").split("-")[2];
		for(var i = 1; i <= 4; i++) {
			$("#feature-control-" + i).removeClass("current");
		}
		clearInterval(t);
		doSlide(id);
		t = setInterval(doSlide, 3750);
	});
});

function doSlide(x) {	
	if($("#feature-control-1").hasClass("current") || x == 2) {
		$("#featured ul").animate({"marginLeft": "-1080px"});		
		$("#feature-control-1").removeClass("current");
		$("#feature-control-2").addClass("current");
	} else if($("#feature-control-2").hasClass("current") || x == 3) {
		$("#featured ul").animate({"marginLeft": "-2160px"});		
		$("#feature-control-2").removeClass("current");
		$("#feature-control-3").addClass("current");
	} else if($("#feature-control-3").hasClass("current") || x == 4) {
		$("#featured ul").animate({"marginLeft": "-3240px"});		
		$("#feature-control-3").removeClass("current");
		$("#feature-control-4").addClass("current");
	} else if($("#feature-control-4").hasClass("current") || x == 1) {
		$("#featured ul").animate({"marginLeft": "0px"});		
		$("#feature-control-4").removeClass("current");
		$("#feature-control-1").addClass("current");
	}
}