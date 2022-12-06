var d1 = document.getElementById("delete1");
var d2 = document.getElementById("delete2");
var d3 = document.getElementById("delete3");
var cards = document.getElementsByClassName("cards");
var med1 = document.getElementById("med1");

med1.innerHTML = sessionStorage.getItem("medicine1_name") + " - " + sessionStorage.getItem("medicine1_dosage");
med1.style.fontWeight = "bold";

med2.innerHTML = sessionStorage.getItem("medicine2_name") + " - " + sessionStorage.getItem("medicine2_dosage");
med2.style.fontWeight = "bold";

med3.innerHTML = sessionStorage.getItem("medicine3_name") + " - " + sessionStorage.getItem("medicine3_dosage");
med3.style.fontWeight = "bold";

if (sessionStorage.getItem('visibility_med1') == 0){
  cards[0].style.display = "none";
}

if (sessionStorage.getItem('visibility_med2') == 0){
  cards[1].style.display = "none";
}

if (sessionStorage.getItem('visibility_med3') == 0){
  cards[2].style.display = "none";
}

d1.onclick = function(){
  var confirmdelete1 = confirm("Are you sure to delete?");
  if (confirmdelete1==true)
    {
    cards[0].style.display = "none";
    sessionStorage.setItem('visibility_med1',0);
    }
}

d2.onclick = function(){
  var confirmdelete2 = confirm("Are you sure to delete?");
  if (confirmdelete2==true)
    {
    cards[1].style.display = "none";
    sessionStorage.setItem('visibility_med2',0);
    }
}

d3.onclick = function(){
  var confirmdelete3 = confirm("Are you sure to delete?");
  if (confirmdelete3==true)
    {
    cards[2].style.display = "none";
    sessionStorage.setItem('visibility_med3',0);
    }
}
