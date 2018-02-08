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












// $(window).scroll(function(){
//   $("#bandDiv").css("opacity", 1 - $(window).scrollTop() / 550);
// });
// ------------------
// var header = document.querySelector(".siteWrapper header");

// function scrolled(){
// 	var windowHeight = document.body.clientHeight,
// 		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
// 	header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
// }

// addEventListener("scroll", scrolled, false);

// -------------------------       


// let divs = $('#bandeau');
// $(window).on('scroll', function() {
//    let st = $(this).scrollTop();
//    divs.css({ 'opacity' : (1 - st/35) });
// });

// var header = document.querySelector('#bandeau');
// var range = 200;

// $(window).on('scroll', function () {
  
//   var scrollTop = $(this).scrollTop(),
//       height = header.outerHeight(),
//       offset = height / 2,
//       calc = 1 - (scrollTop - offset + range) / range;

//   header.css({ 'opacity': calc });

//   if (calc > '1') {
//     header.css({ 'opacity': 1 });
//   } else if ( calc < '0' ) {
//     header.css({ 'opacity': 0 });
//   }
  
// });

// var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
// fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
// fading = $('#fading');


// $(window).bind('scroll', function(){
// var offset = $(document).scrollTop()
//     opacity=0;
// if( offset<=fadeStart ){
//     opacity=1;
// }else if( offset<=fadeUntil ){
//     opacity=1-offset/fadeUntil;
// }
// fading.css('opacity',opacity).html(opacity);
// });

/* <style>
  .affix {
      top: 0;
      width: 100%;
      z-index: 9999 !important;
  }

  .affix + .container-fluid {
      padding-top: 70px;
  }
  </style>
</head>
<body>

<div class="container-fluid" style="background-color:#F44336;color:#fff;height:200px;">
  <h1>Bootstrap Affix Example</h1>
  <h3>Fixed (sticky) navbar on scroll</h3>
  <p>Scroll this page to see how the navbar behaves with data-spy="affix".</p>
  <p>The navbar is attached to the top of the page after you have scrolled a specified amount of pixels.</p>
</div> */

{/* <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">Basic Topnav</a></li>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
  </ul>
</nav> */