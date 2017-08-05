$(document).ready(function() {
	//MENU

	//animacion hover iconos
	$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
	    }
	});
	$(".fa-linkedin").hover(function(){
		$(".fa-linkedin").animateCss('rotateIn');
	});
	$(".fa-github").hover(function(){
		$(".fa-github").animateCss('rotateIn');
	});
	$(".fa-behance").hover(function(){
		$(".fa-behance").animateCss('rotateIn');
	});

	$(".devicon-html5-plain-wordmark").hover(function(){
		$(".devicon-html5-plain-wordmark").animateCss('zoomIn');
	});
	$(".devicon-css3-plain-wordmark").hover(function(){
		$(".devicon-css3-plain-wordmark").animateCss('zoomIn');
	});
	$(".devicon-javascript-plain").hover(function(){
		$(".devicon-javascript-plain").animateCss('zoomIn');
	});
	$(".devicon-jquery-plain-wordmark").hover(function(){
		$(".devicon-jquery-plain-wordmark").animateCss('zoomIn');
	});
	$(".devicon-github-plain").hover(function(){
		$(".devicon-github-plain").animateCss('zoomIn');
	});
	$(".devicon-bootstrap-plain-wordmark").hover(function(){
		$(".devicon-bootstrap-plain-wordmark").animateCss('zoomIn');
	});
	$(".devicon-sass-original").hover(function(){
		$(".devicon-sass-original").animateCss('zoomIn');
	});
	$(".devicon-git-plain-wordmark").hover(function(){
		$(".devicon-git-plain-wordmark").animateCss('zoomIn');
	});
	$(".devicon-slack-plain").hover(function(){
		$(".devicon-slack-plain").animateCss('zoomIn');
	});
	$(".devicon-trello-plain").hover(function(){
		$(".devicon-trello-plain").animateCss('zoomIn');
	});
	$(".devicon-sass-original").hover(function(){
		$(".devicon-sass-original").animateCss('zoomIn');
	});
	$(".devicon-trello-plain").hover(function(){
		$(".devicon-trello-plain").animateCss('zoomIn');
	});
	$(".devicon-gulp-plain").hover(function(){
		$(".devicon-gulp-plain").animateCss('zoomIn');
	});
	$(".devicon-photoshop-plain").hover(function(){
		$(".devicon-photoshop-plain").animateCss('zoomIn');
	});
	$(".devicon-illustrator-plain").hover(function(){
		$(".devicon-illustrator-plain").animateCss('zoomIn');
	});

	$(".fa-envelope-o").hover(function(){
		$(".fa-envelope-o").animateCss('bounce');
	});
	$(".fa-whatsapp").hover(function(){
		$(".fa-whatsapp").animateCss('bounce');
	});

	//FUNCION TAGS
	$("#all").click(function(){
    	$(".pro-web").show(500);
    	$(".pro-disenio").show(500);
	});
		$("#web").click(function(){
    	$(".pro-web").show(500);
    	$(".pro-disenio").hide(500);
	});
	$("#graphicdesign").click(function(){
    	$(".pro-web").hide(500);
    	$(".pro-disenio").show(500);
	});
});
