var radio_num = 1;

setInterval(check, 8000);
function check() {
  console.log($("radio:checked").name);
  document.getElementById("slide"+radio_num.toString()).checked = false;
  radio_num = radio_num + 1;
  if(radio_num > 5){
    radio_num = 1;
  }
  document.getElementById("slide"+radio_num.toString()).checked = true;
}

$(document).ready(function(){
  $('.parallax').parallax();
});
