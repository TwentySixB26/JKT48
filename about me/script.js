const menuToogle = document.querySelector('#menuToogle')
let navbar = document.querySelector(' nav .navbar ul')
let closeNav = document.querySelector('.closeNav')


menuToogle.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})


// load 
let img = document.querySelector('section.isi2 .container .img')
let biodata = document.querySelector('section.isi2 .container .biodata ')
window.addEventListener('load', function() {
    img.classList.add('muncul')
})

window.addEventListener('load', function() {
    biodata.classList.add('muncul')
})