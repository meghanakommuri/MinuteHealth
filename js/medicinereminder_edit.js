let name = sessionStorage.getItem("medicine1_name");
document.getElementById("med1_name").setAttribute('value',name);

let dosage = sessionStorage.getItem("medicine1_dosage");
document.getElementById("med1_dosage").setAttribute('value',dosage);

var validate = document.getElementById("validate");
validate.onclick = function(){
  sessionStorage.setItem("medicine1_name",document.getElementById("med1_name").value);
  sessionStorage.setItem("medicine1_dosage",document.getElementById("med1_dosage").value);
}
