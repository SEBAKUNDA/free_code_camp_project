const modal_btn=document.getElementById("modal_btn");
const modal_div=document.getElementById("modal_div");
const close_btn=document.getElementById("close_btn")
 modal_btn.addEventListener("click",function(){
    modal_div.classList.add("Open_modal_div");
 });
 modal_btn.addEventListener("click",function(){
    modal_div.classList.remove("modal_div");
 });
 
 