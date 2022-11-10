function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length==0){
      return false;
    }
    return res.test(email);
  }
  function validatePassword(password) {
    let res2 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    if(password.length==0){
      return false;
    }
    return res2.test(password);
  }

  function validate() {
    let result = $("#result");
    let email = $("#email").val();
    let pwd = $("#pwd").val();
    let pwd2= $("#confirm_pwd").val();
    result.text("");
    
    if(validateEmail(email) && validatePassword(pwd)) {
        if(pwd != pwd2)
        {	
            result.text("Passwords do not match");
            result.css("color", "red");
            return false;
        } else {
            alert("Registered successfully");
            return true;
        }
    }
    else if(email.length==0 || pwd.length==0){
      result.text("Email or password fields cannot be empty");
      result.css("color", "red");
      return false;
    }
    else {
      result.text("Invalid email or password.");
      result.css("color", "red");
      return false;
    }
  }
  $("#validate").on("click", validate);