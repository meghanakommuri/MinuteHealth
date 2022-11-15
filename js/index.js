function mondayFunction() {
   var element = document.getElementById("idmonday");
   element.classList.toggle("togglemonday");
}

function tuesdayFunction() {
   var element = document.getElementById("idtuesday");
   element.classList.toggle("toggletuesday");
}

function wednesdayFunction() {
   var element = document.getElementById("idwednesday");
   element.classList.toggle("togglewednesday");
}

function thursdayFunction() {
   var element = document.getElementById("idthursday");
   element.classList.toggle("togglethursday");
}

function fridayFunction() {
   var element = document.getElementById("idfriday");
   element.classList.toggle("togglefriday");
}

function saturdayFunction() {
   var element = document.getElementById("idsaturday");
   element.classList.toggle("togglesaturday");
}

function sundayFunction() {
   var element = document.getElementById("idsunday");
   element.classList.toggle("togglesunday");
}

function alldaycheckFunction() {
  var element = document.getElementById("idmonday");
  element.classList.add("togglemonday");

  var element = document.getElementById("idtuesday");
  element.classList.add("toggletuesday");

  var element = document.getElementById("idwednesday");
  element.classList.add("togglewednesday");

  var element = document.getElementById("idthursday");
  element.classList.add("togglethursday");

  var element = document.getElementById("idfriday");
  element.classList.add("togglefriday");

  var element = document.getElementById("idsaturday");
  element.classList.add("togglesaturday");

  var element = document.getElementById("idsunday");
  element.classList.add("togglesunday");

}

function removealldaycheckFunction() {
  var element = document.getElementById("idmonday");
  element.classList.remove("togglemonday");

  var element = document.getElementById("idtuesday");
  element.classList.remove("toggletuesday");

  var element = document.getElementById("idwednesday");
  element.classList.remove("togglewednesday");

  var element = document.getElementById("idthursday");
  element.classList.remove("togglethursday");

  var element = document.getElementById("idfriday");
  element.classList.remove("togglefriday");

  var element = document.getElementById("idsaturday");
  element.classList.remove("togglesaturday");

  var element = document.getElementById("idsunday");
  element.classList.remove("togglesunday");
}

function checkbox(checkboxElem) {
  if (checkboxElem.checked) {
    alldaycheckFunction();
  } else {
    removealldaycheckFunction()
  }
}

function validateAddMed(){
   let result = $("#result");
   let name = $("#name").val();
   let dosage = $("#dosage").val();
   let file = document.getElementById("customFile").files;
   result.text("");
   if(name.length===0 || dosage.length===0 || file.length===0){
     result.text("Fill all required fields");
     result.css("color", "red");
     return false;
   }
   else{
     return true;
   }
 }

 $("#validate").on("click", validateAddMed);