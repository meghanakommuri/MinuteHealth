let data = sessionStorage.getItem("user");
document.getElementById("name").setAttribute('value',data);


localStorage.setItem("James",["18","VitaminA"]);
localStorage.setItem("Charlie",["19","VitaminB"]);
localStorage.setItem("Alice",["20","VitaminC"]);
localStorage.setItem("Bob",["21","VitaminD"]);
localStorage.setItem("Dexter",["22","VitaminE"]);
localStorage.setItem("Emily",["23","Iron"]);
localStorage.setItem("Fabiola",["24","Calcium"]);
localStorage.setItem("Henry",["25","MultiVitamin"]);
localStorage.setItem("Zayn",["26","VitaminC"]);
localStorage.setItem("Lious",["27","VitaminA"]);


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
    else{
      return true;
    }
  }
$("#findmatch").on("click", validateMedpalForm);