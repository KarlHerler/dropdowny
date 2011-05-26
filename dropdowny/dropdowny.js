/***************************************************************************
* 	NAME: Dropdowny
* 	AUTHOR: Karl Herler
* 	DATE: 26-05-2011
* 	
****************************************************************************/

/** controls the dropdowns **/
$(".dropdowny dt a").click(function() {
  if ($(this).parent().parent().find("dd ul").hasClass("activated")) {
    $(".dropdowny dd ul").hide(); 
    $(".activated").removeClass("activated")
  } else {
    $(".activated").removeClass("activated")
    $(".dropdowny dd ul").hide();
    $(this).parent().parent().find("dd ul").toggle();
    $(this).parent().parent().find("dd ul").addClass("activated")
  }
});

$(".dropdowny dd ul li a").click(function() {
    var text = $(this).html();
    $(this).parent().parent().parent().parent().find("dt a span").html(text); //oh so pretty the traversing is
    $(".dropdowny dd ul").hide();
    //the id field of parent has the control hook, although I'd use a hrefs if you don't want to ajax
    //alert($(this).parent().attr('id'))
});

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdowny")) {
      $(".dropdowny dd ul").hide(); 
      $(".activated").removeClass("activated")
    }
});