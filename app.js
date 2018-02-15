"use strict";

var positionElementInPage = $('#headerFlex').offset().top;
$( window ).resize(function() {
positionElementInPage = $('#headerFlex').offset().top;
});

$(window).scroll(
function() {
if ($(window).scrollTop() > positionElementInPage) {
// fixed
$('#headerFlex').addClass("fixedTop");
} else {
// unfixed
$('#headerFlex').removeClass("fixedTop");
}
}
);

$(window).scroll(function(){
$("#bandDiv").css("opacity", 1 - $(window).scrollTop() / 750);
});



