// // document.getElementById("write").innerHTML = window.location.search;
console.log("matchfound page is working");
// console.log(window.location.search);
var queryString = window.location.search.replace(/^\?/, '');
// console.log(queryString);
const myArray = queryString.split("&");
// console.log(myArray);
var name = myArray[0].slice(5);
var age = myArray[1].slice(4);
var contact = myArray[2].slice(8);
// console.log(name);
// console.log(age);
// console.log(contact);

var matchname=document.getElementById("matchname")


var keys=Object.keys(localStorage);
for(var key of keys){
  if(key == name){continue;}
  if(localStorage.getItem(key) == age ){
    matchname.innerHTML = key;
    console.log("Age Matched")
  };
}


localStorage.setItem(name,age);
