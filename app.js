let input = document.querySelector("#text");
let para = document.querySelector(".para");

input.addEventListener("input", function(){
    para.innerText = input.value;
});