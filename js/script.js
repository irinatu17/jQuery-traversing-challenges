
$(document).ready(function() {
    $("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});
$("button").click(function(){
		$(this).prev().slideToggle('slow');
	}); 
$(".card_image").click(function(){
   $(this).next().children("p").slideDown();
});
$(".card").click(function(){
    $(this).toggleClass("pinkBackground");
});
// All cards that are not currently selected will be hidden when `select_btn` is clicked
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();	 
	});

	// Select all cards
	$("#all_btn").click(function(){
		$(".card").show();	 
	});
});