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
  if (isScrolledIntoView == true) {
     console.log("LOLOLOL");
  }
  else {
    console.log("FALSE");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
});

$("#card1").focusin(function() {
  $("card2").css("display", "none");
  $("card3").css("display", "none");
  $("card4").css("display", "none");
});

$("#card2").focusin(function() {
  $("card1").css("display", "none");
  $("card3").css("display", "none");
  $("card4").css("display", "none");
});

$("#card3").focusin(function() {
  $("card1").css("display", "none");
  $("card2").css("display", "none");
  $("card4").css("display", "none");
});

$("#card4").focusin(function() {
  $("card1").css("display", "none");
  $("card2").css("display", "none");
  $("card3").css("display", "none");
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
