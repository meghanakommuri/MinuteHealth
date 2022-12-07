function allAreFalse(days) {
  return days.every(element => element.checked === false);
}

var monday = document.getElementById("weekday-mon");
var tuesday = document.getElementById("weekday-tue");
var wednesday = document.getElementById("weekday-wed");
var thursday = document.getElementById("weekday-thu");
var friday = document.getElementById("weekday-fri");
var saturday = document.getElementById("weekday-sat");
var sunday = document.getElementById("weekday-sun")
var days=[monday,tuesday,wednesday,thursday,friday,saturday, sunday]

function alldaycheckFunction() {
  for(d of days){
    d.checked=true;
  }
}

function removealldaycheckFunction() {
  for(d of days){
    d.checked=false;
  }
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
  if (count===0){
    document.getElementById("myTable").deleteTHead();
  }
});

$('#addTime').click(function () {
//add new entry form
  if(count===0){
    $('#myTable').append('<thead><td>Start Time</td><td>End Time</td></thead>');
  }
  $('#myTable').append('<tr class="t-row"><td><input type="time" onfocus="clearError(this)" id="timestart" class="vTimeStart" /></td><td><input onfocus="clearError(this)" type="time"  value="" id="timeend" class="vTimeEnd" /></td><td><input type="button" id="del" value="Delete" /></td></tr>');
  count = count + 1;
  if(count >= 3){
    document.getElementById("addTime").disabled = true;
    document.getElementById("result").style.marginTop= "-11px";
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
  let name = $("#med1_name").val();
  let dosage = $("#med1_dosage").val();
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
    if(name.length===0 || dosage.length===0 || file.length===0 || count===0 || allAreFalse(days)===true){
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






let name = sessionStorage.getItem("medicine1_name");
document.getElementById("med1_name").setAttribute('value',name);

let dosage = sessionStorage.getItem("medicine1_dosage");
document.getElementById("med1_dosage").setAttribute('value',dosage);

var validate = document.getElementById("validate");
validate.onclick = function(){
  sessionStorage.setItem("medicine1_name",document.getElementById("med1_name").value);
  sessionStorage.setItem("medicine1_dosage",document.getElementById("med1_dosage").value);
}
