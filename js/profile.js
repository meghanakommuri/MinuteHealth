let data = sessionStorage.getItem("user");
let email = sessionStorage.getItem("email");

document.getElementById("profile_name").setAttribute('value',data);
document.getElementById("profile_email").setAttribute('value',email);