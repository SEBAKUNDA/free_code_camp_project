const sideBar_toggle = document.getElementById("sideBar_toggle");
const sideBar = document.getElementById("sideBar");
const sideBar_header = document.getElementById("sideBar_header");
const side = document.getElementById("side");

sideBar_toggle.addEventListener("click",function(){
// if(sideBar.classList.contains("siderBar")){
//     sideBar.classList.remove("sideBar")
// }
// else{
//     sideBar.classList.add("sideBar")
// }
    sideBar.classList.toggle("sideBar")
})