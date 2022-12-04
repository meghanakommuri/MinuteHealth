let name = sessionStorage.getItem("medicine3_name");
document.getElementById("med3_name").setAttribute('value',name);

let dosage = sessionStorage.getItem("medicine3_dosage");
document.getElementById("med3_dosage").setAttribute('value',dosage);

var validate = document.getElementById("validate");
validate.onclick = function(){
  sessionStorage.setItem("medicine3_name",document.getElementById("med3_name").value);
  sessionStorage.setItem("medicine3_dosage",document.getElementById("med3_dosage").value);
}
