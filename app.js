let burger = document.querySelector(".burger");
let links =document.querySelector( ".nav-links" );
let textArea= document.querySelector(".text-center")
burger.addEventListener('click',()=> {
    links.classList.toggle("nav-show");
    textArea.classList.toggle("textAreaHide")
})