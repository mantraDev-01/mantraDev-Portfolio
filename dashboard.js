const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.nav_toggle');
const navClose = document.querySelector('.nav_close');


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navToggle.classList.add('hide_toggle')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navMenu.classList.add('hide-menu')
        navToggle.classList.remove('hide_toggle');
    })
}

