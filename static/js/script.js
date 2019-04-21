var radio_num = 1;
var cardloc;
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
  cardloc = document.getElementById('cards').getBoundingClientRect();
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

// added active toggler
<<<<<<< HEAD
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
=======
$(document).ready(function(){
    $('ul.right li').on('click', function(){
        var clicked = $(this);
        $('ul.right li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });
>>>>>>> 5bb157a4fc95b336480471392248300f941e01e3
