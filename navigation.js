// **********************************************
// *************** Værsgo og spis! **************
// **********************************************
var menu_is_open = 'no'; // Tjek om menuen er åben. (Hvis der trykkes igen skal menuen lukkes)
$("#burger_menu").mouseover(function() {
  menu_is_open = 'yes';
  $("#burger_menu").removeClass("menu_close"); // We need to remove menu_close before adding it again, obviously. Strangely enough, it also seem to work without.
});
$("#burger_menu").mouseout(function() {
  $("#burger_menu").addClass("menu_close");
  menu_is_open = 'no';
});
function closeMenu() {
	// Denne funktion er tiltænkt touch enheder, da de har problemer med :hover og focus
	// Funktionen er PT utestet, men skulle i teorien fungere efter hensigten.
	if (menu_is_open = 'yes') {
	  $("#burger_menu").addClass("menu_close");
	  menu_is_open = 'no';
	} 
}
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