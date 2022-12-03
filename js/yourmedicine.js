var d1 = document.getElementById("delete1");
var d2 = document.getElementById("delete2");
var d3 = document.getElementById("delete3");
var cards = document.getElementsByClassName("cards");

d1.onclick = function(){
  var confirmdelete1 = confirm("Are you sure to delete?");
  if (confirmdelete1==true)
    {
    cards[0].style.display = "none";
    }
}

d2.onclick = function(){
  var confirmdelete2 = confirm("Are you sure to delete?");
  if (confirmdelete2==true)
    {
    cards[1].style.display = "none";
    }
}

d3.onclick = function(){
  var confirmdelete3 = confirm("Are you sure to delete?");
  if (confirmdelete3==true)
    {
    cards[2].style.display = "none";
    }
}
