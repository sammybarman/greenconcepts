var radio_num = 1;
setInterval(check, 8000);
function check() {
  document.getElementById("slide"+radio_num.toString()).checked = false;
  radio_num = radio_num + 1;
  if(radio_num > 5){
    radio_num = 1;
  }
  document.getElementById("slide"+radio_num.toString()).checked = true;
}

$(document).ready(function(){
  $('.parallax').parallax();
  $('.carousel').carousel();
  $('.modal').modal();
  $(window).scroll( function(){
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).removeClass("hideme");
        $(this).addClass("animated animatedFadeInUp fadeInUp");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
});

setInterval(function() {
  $('.carousel').carousel('next');
}, 3000);

function isScrolledIntoView() {
    var elemTop = cardloc.getBoundingClientRect().top;
    var elemBottom = cardloc.getBoundingClientRect().bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function formDisplay() {
  if ($("form").css("display") != "none") {
    $("form").css("display", "none");
  }
  else {
    $("form").css("display", "block");
  }
}

// slider functionality
// $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });
//   var autoplay = true;
//   setInterval(function() { if(autoplay) $('.carousel.carousel-slider').carousel('next'); }, 5000);
//   $('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true; });


// added active toggler
// $(document).ready(function(){
//     $('ul.right li').on('click', function(){
//         var clicked = $(this);
//         $('ul.right li').each(function(){
//             if($(this).hasClass('active')){
//                 $(this).removeClass('active');
//             }
//         });
//         $(this).addClass('active');
//     });
