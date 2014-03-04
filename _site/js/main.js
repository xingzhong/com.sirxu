$(document).ready(function(){
	$("i.fa").hover(
		function(){
			$(this).removeClass("fa-2x");
			$(this).addClass("fa-4x");
		}, function(){
			$(this).removeClass("fa-4x");
			$(this).addClass("fa-2x");
		}
	);
	$("a.icon img").hover(
		function(){
			$(this).height("60px");
		}, function(){
			$(this).height("30px");
		}
	);
	if(window.location.pathname=="/index.html"){
		;
	}
	else if(window.location.pathname=="/portfolio.html"){
		$("li#port").addClass("pure-menu-selected");
		fetchData();
	}
	else {
		$("li#blog").addClass("pure-menu-selected");
	}
});