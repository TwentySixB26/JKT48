const menuToogle = document.querySelector('#menuToogle')
let navbar = document.querySelector(' nav .navbar ul')
let closeNav = document.querySelector('.closeNav')

// load animation 
let deksripsi = document.querySelector('.hero .container .deksripsi')
let judul = document.querySelector('.hero .container .judul')

menuToogle.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

// load animation
window.addEventListener('load', function() {
    deksripsi.classList.add('muncul')
    judul.classList.add('muncul')
})