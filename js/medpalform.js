let data = sessionStorage.getItem("user");
document.getElementById("name").setAttribute('value',data);


localStorage.setItem("James",["18","VitaminA","David"]);
localStorage.setItem("Lucifer",["28","VitaminA","David"]);
localStorage.setItem("Charlie",["19","VitaminB","David"]);
localStorage.setItem("Alice",["20","VitaminC","David"]);
localStorage.setItem("Bob",["21","VitaminD","David"]);
localStorage.setItem("Dexter",["22","VitaminE","David"]);
localStorage.setItem("Emily",["23","Iron","David"]);
localStorage.setItem("Fabiola",["24","Calcium","David"]);
localStorage.setItem("Henry",["25","MultiVitamin","David"]);
localStorage.setItem("Zayn",["26","VitaminC","David"]);
localStorage.setItem("Lious",["27","VitaminA","David"]);


function validateMedpalForm(){
    let result = $("#result");
    let name = $("#name").val();
    let age = $("#age").val();
    let medicineName = $("#medicinename").val();
    result.text("");
    if(name.length===0 || age.length===0 || medicineName.length==0){
      result.text("Fill all required fields (*)");
      result.css("color", "red");
      return false;
    }
    else if(parseInt(age)<15){
      result.text("Age should be greater than 15");
      result.css("color", "red");
      return false;
    }
    else{
      return true;
    }
  }
$("#findmatch").on("click", validateMedpalForm);
