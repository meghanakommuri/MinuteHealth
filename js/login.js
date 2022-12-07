function myFunction3() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validateLogin(){
    let result = $("#result");
    let name = $("#name").val();
    let pwd = $("#pwd").val();
    result.text("");

  if(pwd.length==0 || name.length==0){
    result.text("All fields are required");
    result.css("color", "red");
    return false;
    }
  if(name==="test" && pwd==="Test@123"){
    sessionStorage.setItem('user', name)
    return true
  }
  else {
    result.text("Invalid username or passsword. Try again!");
    result.css("color", "red");
    return false;
  }
  }
  $("#validate").on("click", validateLogin);

  // Adding session variable to store top 3 medicines
  sessionStorage.setItem('medicine1_name', "Vitamin C")
  sessionStorage.setItem('medicine2_name', "Iron")
  sessionStorage.setItem('medicine3_name', "D3")

  sessionStorage.setItem('medicine1_dosage', "500 mg")
  sessionStorage.setItem('medicine2_dosage', "65 mg")
  sessionStorage.setItem('medicine3_dosage', "50 mcg")

  sessionStorage.setItem('visibility_med1',1);
  sessionStorage.setItem('visibility_med2',1);
  sessionStorage.setItem('visibility_med3',1);
