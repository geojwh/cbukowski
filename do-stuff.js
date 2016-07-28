$(document).ready(function() {
  $("h1").addClass("animated bounceInDown");
  $("h3").addClass("animated fadeIn");
  $("h4").addClass("animated fadeIn");
  $("p").addClass("animated fadeIn");
  $("ul").addClass("animated fadeIn");
  $("img").addClass("animated fadeIn");
  $("#sign").addClass("animated bounceInLeft");
  
  $('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});
  
});