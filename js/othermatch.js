let name = sessionStorage.getItem("user");
let oldpal = localStorage.getItem(name).split(",")[2];
let medicinename = localStorage.getItem(name).split(",")[1];
let age = localStorage.getItem(name).split(",")[0];;
// console.log(data)

var matchname=document.getElementById("matchname");
var matchmedicine=document.getElementById("matchmedicine");
var matchage=document.getElementById("matchage");
var keys=Object.keys(localStorage);

matchname.innerHTML = "Name: David";
matchmedicine.innerHTML="Medicine: Iron";
matchage.innerHTML="Age: 35";


for(var key of keys){
  if(key == name){continue;}
  var substringarray = localStorage.getItem(key).split(",");
  if(key == oldpal){continue};
  if(substringarray[1] == medicinename ){
    matchname.innerHTML = "Name: "+key;
    sessionStorage.setItem('pal', key)
    pal = key
    matchmedicine.innerHTML="Medicine: "+medicinename;
    matchage.innerHTML="Age: "+substringarray[0];
  };
}
localStorage.setItem(name,[age,medicinename,pal]);
