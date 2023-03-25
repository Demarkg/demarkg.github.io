// JavaScript Document

//const toggleButton = document.getElementsByClassName('toggle-button')[0]
//const navbarLinks = document.getElementsByClassName('navbar-links')[0]
//
//toggleButton.addEventListener('click',() => {
//navbarLinks.classList.toggle('active')
//    
//})

const hamburger = document.getElementsByClassName('hamburger')[0]
const menu = document.getElementsByClassName('nav-menu')[0]


hamburger.addEventListener('click',() => {
menu.classList.toggle("active");
hamburger.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    
//    hamburger.classlist.remove("active");
//    menu.classlist.remove("active");
}))