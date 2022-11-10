function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validatePassword(password) {
    let res2 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    return res2.test(password);
  }

  function validateName(name) {
    let res3 = /^[A-Za-z]+$/;
    return res3.test(name);
  }

  function validate() {
    let result = $("#result");
    let name = $("#name").val();
    let email = $("#email").val();
    let pwd = $("#pwd").val();
    let pwd2= $("#confirm_pwd").val();
    result.text("");

    if(email.length==0 || pwd.length==0 || pwd2.length==0 || name.length==0){
      result.text("All fields are required");
      result.css("color", "red");
      return false;
    }
    if(validateEmail(email) && validatePassword(pwd) && validateName(name)) {
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
    else {
      if(!validateName(name)){
        result.text("Invalid name. Name can contain only alphabets.");
        result.css("color", "red");
        return false;
      }
      if(!validateEmail(email)){
      result.text("Invalid email id. Email should be of format abc@xyz.com");
      result.css("color", "red");
      return false;
    }
    if(!validatePassword(pwd)){
      result.text("Invalid password");
      result.css("color", "red");
      return false;
    }
  }
}
$("#validate").on("click", validate);