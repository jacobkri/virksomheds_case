// **********************************************
// *************** Værsgo og spis! **************
// **********************************************
$("#burger_menu").mouseover(function() {
  $("#burger_menu").removeClass("menu_close"); // We need to remove menu_close before adding it again, obviously. Strangely enough, it also seem to work without.
});
$("#burger_menu").mouseout(function() {
  $("#burger_menu").addClass("menu_close");
});
// **********************************************
// ***** KODE TIL AT VISE/SKJULE SEKTIONER ******
// **********************************************
var current_element_view = 'indledning'; // Globalt variabel brugt af showElement()
function showElement(id) {
	$("#"+current_element_view).fadeOut(1500);
	setTimeout(function(){
	  $("#"+id).css("border-radius","0.3em");
	  $("#"+id).css("margin","1em");
	  $("#"+id).fadeIn(1500);
	  current_element_view = id;
	}, 1500);
}