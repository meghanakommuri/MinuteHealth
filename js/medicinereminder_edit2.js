let name = sessionStorage.getItem("medicine2_name");
document.getElementById("med2_name").setAttribute('value',name);

let dosage = sessionStorage.getItem("medicine2_dosage");
document.getElementById("med2_dosage").setAttribute('value',dosage);

var validate = document.getElementById("validate");
validate.onclick = function(){
  sessionStorage.setItem("medicine2_name",document.getElementById("med2_name").value);
  sessionStorage.setItem("medicine2_dosage",document.getElementById("med2_dosage").value);
}
