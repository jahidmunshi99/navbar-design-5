// Toggle For Navbar
// const toggleIcon = document.querySelector('.fa-bars');
// const mainMenu = document.querySelector('.navbar-nav');

// toggleIcon.addEventListener('click', ()=>{
//     mainMenu.classList.toggle("active");
//     console.log(alert('Hi I"m Here'))
// })

// Toggle Button for Main Menu
const toggleButton = document.querySelector("#toggle-icon");
const mainMenu = document.querySelector(".navbar-nav");

toggleButton.addEventListener("click", ()=>{
    mainMenu.classList.toggle("active");
    // console.log('Hi This Is Jahid')
})