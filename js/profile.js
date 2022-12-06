let data = sessionStorage.getItem("user");
let email = sessionStorage.getItem("email");
let dob = sessionStorage.getItem("dob");
let contact = sessionStorage.getItem("contact");
let gender = sessionStorage.getItem("gender");

if(data!=null){
    document.getElementById("profile_name").setAttribute('value',data);
}
if(email!=null){
    document.getElementById("profile_email").setAttribute('value',email);
}
if(dob!=null){
    document.getElementById("profile_dob").setAttribute('value',dob);
}
if(contact!=null){
    document.getElementById("profile_contact").setAttribute('value',contact);
}
if(gender!=null){
    document.getElementById("profile_gender").setAttribute('value',gender);
}

function updateProfile(){
    let profile_name = $("#profile_name").val();
    let profile_dob = $("#profile_dob").val();
    let profile_contact = $("#profile_contact").val();
    let profile_email = $("#profile_email").val();
    let profile_gender = $("#profile_gender").val();

    sessionStorage.setItem('user', profile_name);
    sessionStorage.setItem('email', profile_email);
    sessionStorage.setItem('dob', profile_dob);
    sessionStorage.setItem('contact', profile_contact);
    sessionStorage.setItem('gender', profile_gender);

    alert("Profile updated");
    // location.reload();
}
$("#update_profile").on("click", updateProfile);
