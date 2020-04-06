// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click',()=>{
//         nav.classList.toggle('nav-active');
//     });
// }

// navSlide();




// =====================================================
// =====================================================


const hamburger = document.querySelector('hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});