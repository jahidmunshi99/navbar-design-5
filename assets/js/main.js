// Toggle For Navbar
const toggleIcon = document.querySelector('.fa-bars');
const mainMenu = document.querySelector('.navbar-nav');

toggleIcon.addEventListener('click', ()=>{
    mainMenu.classList.toggle("active");
    // console.log(alert('Hi I"m Here'))
})