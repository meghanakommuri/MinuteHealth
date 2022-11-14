console.log("medpalform.js is running")
var findmatch=document.getElementById("findmatch")
var age=document.getElementById("age")
var fname=document.getElementById("fname")

findmatch.onclick=function(){
  console.log("before");
    localStorage.setItem(fname.value,age.value);
    var keys = Object.keys(localStorage);
    console.log("after");
    console.log(keys);
}

// findmatch.onclick=function(){
//   console.log("inside findmatch function");
//     var keys=Object.keys(localStorage);
//     // console.log(keys);
//
//     for(var key of keys){
//       console.log(typeof key);
//       if(localStorage.getItem(key) == age ){
//         console.log("Age Matched")
//       };
//       // if(key == "key1"){
//       //   console.log("Key : "+key+" : Value : "+localStorage.getItem(key));
//       // }
//
//     }
// }
