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
  
  