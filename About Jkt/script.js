const menuToogle = document.querySelector('#menuToogle')
let navbar = document.querySelector(' nav .navbar ul')
let closeNav = document.querySelector('.closeNav')

// carousel 
let prevBtn = document.querySelector('section.about1 .container .carousel .prev-btn')
let imgCarousel = document.querySelector('section.about1 .container .carousel .img img')
let nextBtn = document.querySelector('section.about1 .container .carousel .next-btn')

// akhir carousel 

menuToogle.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})


// carosel 
prevBtn.addEventListener('click', function() {
    imgCarousel.setAttribute('src', '../img/feed2.jpg')
    imgCarousel.style.transition = "ease 0.9s";

})

nextBtn.addEventListener('click', function() {
        imgCarousel.setAttribute('src', '../img/about jkt 2.jpg')
        imgCarousel.style.transition = "ease 0.9s";

    })
    //akhir carousel