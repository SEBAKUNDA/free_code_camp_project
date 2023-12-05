const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const question = btn.parentElement.parentElement;
       btns.forEach(function(items){
        console.log(items)
       })
    question.classList.toggle("show-text");
  });
});

 
//  btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//      const question=e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text")
//     })
//  })