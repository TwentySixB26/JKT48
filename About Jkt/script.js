const menuToogle = document.querySelector('#menuToogle')
let navbar = document.querySelector(' nav .navbar ul')
let closeNav = document.querySelector('.closeNav')
let imgAbout1 = document.querySelector('section.about1 .container .img')
let dekskripsiAbout1 = document.querySelector('section.about1 .container .deksripsi')

let arrowRight = document.querySelector('section.about3 .container .story2 .arrowRight ')
let story3 = document.querySelector('section.about3 .container .story3')



menuToogle.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

// load animation
window.addEventListener('load', function() {
    imgAbout1.classList.add('muncul')
    dekskripsiAbout1.classList.add('muncul')
})

//arow right click
arrowRight.addEventListener('click', function() {
    story3.classList.add('muncul')
})