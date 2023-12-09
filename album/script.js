const menuToogle = document.querySelector('#menuToogle')
let navbar = document.querySelector(' nav .navbar ul')
let closeNav = document.querySelector('.closeNav')


menuToogle.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})


// music 
let audioPesawatKertas = new Audio('../voice/album Pesawat Kertas 365 Hari (365 Nichi No Kamihikouki).mp3');

let pesawatKertasPlay = document.querySelector('section.single .container .isi2 ul li .music .pesawatKertas .deksripsi .play');
pesawatKertasPlay.addEventListener('click', function() {
    audioPesawatKertas.play()
});

let pesawatKertasStop = document.querySelector('section.single .container .isi2 ul li .music .pesawatKertas .deksripsi .stop');
pesawatKertasStop.addEventListener('click', function() {
    audioPesawatKertas.pause();
    audioPesawatKertas.currentTime = 0;
});


// 10. fourtune cokies
let audioFourtuneCookies = new Audio('../voice/album Fourtune cookie.mp3');

let fourtunePlay = document.querySelector('section.single .container .isi2 ul li .music .fourtune .deksripsi .play');
fourtunePlay.addEventListener('click', function() {
    audioFourtuneCookies.play()
});

let fourtunestop = document.querySelector('section.single .container .isi2 ul li .music .fourtune .deksripsi .stop');
fourtunestop.addEventListener('click', function() {
    audioFourtuneCookies.pause();
    audioFourtuneCookies.currentTime = 0;
});