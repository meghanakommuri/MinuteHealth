// // document.getElementById("write").innerHTML = window.location.search;
console.log("matchfound page is working");
// console.log(window.location.search);
var queryString = window.location.search.replace(/^\?/, '');
const myArray = queryString.split("&");
// const newArray = [];
// console.log(myArray);
var name = myArray[0].slice(5);
var age = myArray[1].slice(4);
var medicinename = myArray[2].slice(13);

// console.log(name);
// console.log(age);
// console.log(medicinename);

var matchname=document.getElementById("matchname");
var matchmedicine=document.getElementById("matchmedicine");
// var age = document.getElementById("age");



var keys=Object.keys(localStorage);
for(var key of keys){
  if(key == name){continue;}
  console.log(localStorage.getItem(key));


  if(localStorage.getItem(key).slice(3) == medicinename ){
    matchname.innerHTML = "Name: "+key;
    matchmedicine.innerHTML="Meicine Name: "+medicinename;
    console.log("Medicine Matched");
  };
}


localStorage.setItem(name,[age,medicinename]);
