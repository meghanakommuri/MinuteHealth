function navigate() {
    let data = sessionStorage.getItem("medpal");
    if (data == "true") {
        location.href='medpalinfo.html';
    }
    else{
        location.href='medpalform.html';
    }
}