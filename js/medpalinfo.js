var palname = document.getElementById("palname");
let paldata = "David Smith"
let temp = sessionStorage.getItem("pal");
sessionStorage.setItem('medpal', "true")
if(temp){
    paldata = temp
}
palname.innerHTML=paldata;