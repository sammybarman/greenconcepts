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
  cardloc = document.getElementById('cards').getBoundingClientRect();
  if (isScrolledIntoView == true) {
     console.log("LOLOLOL");
  }
  else {
    console.log("FALSE");
  }
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
