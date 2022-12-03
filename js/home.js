var name_display = document.getElementById("user_greeting");
let data = sessionStorage.getItem("user");
name_display.innerHTML = "Hi " + data + ". We help with your MEDS";


// Adding session variable to store top 3 medicines
sessionStorage.setItem('medicine1_name', "Vitamin C")
sessionStorage.setItem('medicine2_name', "Iron")
sessionStorage.setItem('medicine3_name', "D3")

sessionStorage.setItem('medicine1_dosage', "500 mg")
sessionStorage.setItem('medicine2_dosage', "65 mg")
sessionStorage.setItem('medicine3_dosage', "50 mcg")
