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

  function myFunction1() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction2() {
    var x = document.getElementById("confirm_pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
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
            sessionStorage.setItem('user', name);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('medpal', "false");
            console.log(name)
            console.log(email)
            alert("Registered successfully");
            return true;
        }
    }
    else {
      if(!validateName(name)){
        result.text("Invalid username. Name can contain only alphabets.");
        result.css("color", "red");
        return false;
      }
      if(!validateEmail(email)){
      result.text("Invalid email id. Email should be of format abc@xyz.com");
      result.css("color", "red");
      return false;
    }
    if(!validatePassword(pwd)){
      result.text("Invalid password. Password should contain one small, capital, number, special character");
      result.css("color", "red");
      return false;
    }
  }
}
$("#validate").on("click", validate);

// Adding session variable to store top 3 medicines
sessionStorage.setItem('medicine1_name', "Vitamin C")
sessionStorage.setItem('medicine2_name', "Iron")
sessionStorage.setItem('medicine3_name', "D3")

sessionStorage.setItem('medicine1_dosage', "500 mg")
sessionStorage.setItem('medicine2_dosage', "65 mg")
sessionStorage.setItem('medicine3_dosage', "50 mcg")
