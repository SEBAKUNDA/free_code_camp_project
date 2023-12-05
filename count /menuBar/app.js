// const links =document.querySelector(".links");
// const button=document.querySelector("button");
//  button.addEventListener("click",function(){
//     if(links.classList.contains("show-links")){
//         links.classList.remove("show-links")
//     }
//     else{
//         links.classList.add("show-links")
//     }
//     links.classList.toggle("links");
//  })
 const button=document.getElementById("button")
const nav=document.getElementById("nav")
 button.addEventListener('click',function(){
    nav.classList.toggle("-right-full")
    nav.classList.toggle("right-0")
    
 })

 