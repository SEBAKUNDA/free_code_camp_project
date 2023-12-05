//https://www.course-api.com/images/people/person-4.jpeg
//https://www.course-api.com/images/people/person-3.jpeg
//https://www.course-api.com/images/people/person-2.jpeg
//https://www.course-api.com/images/people/person-1.jpeg
 
const reviews =[
    {
        id:0,
        name:"sebakunda",
        job:"back-end developer",
        img:"https://www.course-api.com/images/people/person-1.jpeg",
        text:":Sriracha lexitarian irony, vape marfa unicorn. Gloed 8-bit, fixie offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swa"
    },
    {
        id:1,
        name:"joshua",
        job:"human resouce",
        img:"https://www.course-api.com/images/people/person-2.jpeg",
        text:"text Sriracha lexitarian irony, vape marfa unicorn. Gloed 8-bit, fixie offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swa"   
    },
    {
        id:2,
        name:"Danny",
        job:"projects manager",
        img:"https://www.course-api.com/images/people/person-3.jpeg",
        text:"Sriracha lexitarian irony, vape marfa unicorn. Gloed 8-bit, fixie offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swa"
    },
    {
        id:3,
        name:"kamiakazi",
        job:"front-end developer",
       
        img:"https://www.course-api.com/images/people/person-4.jpeg",
        text:"Sriracha lexitarian irony, vape marfa unicorn. Gloed 8-bit, fixie offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swa"
    }
];
const img=document.getElementById("image");
const name=document.getElementById("name");
const role=document.getElementById("role");
const text=document.getElementById("text");
const btn_left=document.getElementById("btn_left");
const btn_right=document.getElementById("btn_right");
const rondom_btn=document.getElementById("random_btn");
 

let initialItem=0;
window.addEventListener("DOMContentLoaded",function(){
 showPerson(initialItem)
})
function showPerson(person){
    const items=reviews[initialItem];
    img.src=items.img
    name.textContent=items.name
    role.textContent=items.job
    text.textContent=items.text
}
btn_left.addEventListener ("click",function(){
    initialItem--;
    if(initialItem < 0){
        initialItem = reviews.length-1;
    }
    
    showPerson(initialItem)
})
btn_right.addEventListener ("click",function(){
    initialItem++;
   if(initialItem >reviews.length-1){
    initialItem = 0;
   }
    
    showPerson(initialItem)
})
rondom_btn.addEventListener("click",function(){
   initialItem = Math.floor(Math.random() * reviews.length)
   showPerson()
})


