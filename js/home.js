var name_display = document.getElementById("user_greeting");
let data = sessionStorage.getItem("user");
name_display.innerHTML = "Hi " + data + ". We help with your MEDS";
