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

// Collapse Navbar
let navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Modal popup$(function () {
$('.portfolio-item').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#username',
  modal: true
});
$(document).on('click', '.portfolio-modal-dismiss', function(e) {
  e.preventDefault();
  $.magnificPopup.close();
});

