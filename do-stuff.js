$(document).ready(function() {
  $("h1").addClass("animated bounceInDown");
  $("body").addClass("animated fadeIn");
  $("#sign").addClass("animated bounceInLeft");
  
  $('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});
  
});