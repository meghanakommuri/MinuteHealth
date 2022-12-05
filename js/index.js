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

var count = 1;
let result = $("#result");

function tooltipShow() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

$('#myTable').on('click', 'input[type="button"]', function () {
  $(this).closest('tr').remove();
  count=count-1;
  document.getElementById("addTime").disabled = false;
});

$('#addTime').click(function () {  
//add new entry form
  $('#myTable').append('<tr class="t-row"><td><input type="time" onfocus="clearError(this)" id="timestart" class="vTimeStart" /></td><td><input onfocus="clearError(this)" type="time"  value="" id="timeend" class="vTimeEnd" /></td><td><input type="button" id="del" value="Delete" /></td></tr>');
  count = count + 1;
  if(count >= 3){
    document.getElementById("addTime").disabled = true;
 }
 else{
    document.getElementById("addTime").disabled = false;
 }
});

function clearError(el){ 
//reset error state
$(el).parent().closest('tr').css('background','#ffffff');
$(el).parent().closest('tr').attr('title','');
}

function validateAddMed(){
  let name = $("#name").val();
  let dosage = $("#dosage").val();
  let timefrom= $("#timestart").val() 
  let timeto= $("#timeend").val() 
  let file = document.getElementById("customFile").files;
  result.text("");
  let validtext=false;
  let validtime=false;
  $('.t-row').each(function(i, obj) { 
    result.text("");
    //time validation
    var currentStartTimeValue = $('#myTable .vTimeStart').eq(i).val();
    var currentEndTimeValue = $('#myTable .vTimeEnd').eq(i).val(); 
    
    if(!currentStartTimeValue){
    result.text('Enter value for Start Time!');
    result.css("color", "red");
      validtext=false;
    }else if(!currentEndTimeValue){
    result.text('Enter value for End Time!');
    result.css("color", "red");
      validtext=false;
    }else if(currentStartTimeValue >= currentEndTimeValue){
      result.text('StartTime must be lesser than EndTime');
      result.css("color", "red");
      validtext=false;
    }
    else{
        validtext=true
      }
    }); 
    //textfields validarion
    if(name.length===0 || dosage.length===0 || file.length===0 || count===0){
      result.text("Fill all required fields");
      result.css("color", "red");
      validtime=false;
    }
    else {
      validtime=true;
    }
  console.log(validtext, validtime);
  return validtext && validtime;
};

$("#validate").on("click",validateAddMed);


