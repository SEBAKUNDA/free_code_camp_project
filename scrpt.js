 const color=[ "red","orange","green","rgba(133,122200)","#f15025"];
 const btn =document.getElementById("btn");
 console.log(btn)
  // const colors = document.querySelector("color");
   btn.addEventListener("click",function(){
      const  filper = getRandomNumber();
    
      document.body.style.backgroundColor=color[filper];
   });
    function getRandomNumber(){
        return Math.floor(Math.random() *color.length);
    }