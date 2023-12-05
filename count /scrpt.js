// let set initial count 
let counter =0;
// let select buttons and value
 const  values =document.querySelector("#values");
  const btn =document.querySelectorAll("#btns");
   btn.forEach(function(button) {
     button.addEventListener("click",function(e){
        const style =e.currentTarget.classList;
        if (style.contains('decrease')){
            counter--;
        }else if(style.contains('increase')){
          counter++;
        }else{
          counter=0;
        } 
        if(counter >0){
          values.style.color='green';
        }
        else if( counter < 0){
          values.style.color='red';
        }else{
          values.style.color="black";
        }
        values.textContent=counter;
     })
   });
   