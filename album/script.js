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
// 1. Pesawat kertas
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


// 2. Rapsodi 
let audioRapsodi = new Audio('../voice/album rapsodi.mp3');

let rapsodiPlay = document.querySelector('section.single .container .isi2 ul li .music .rapsodi .deksripsi .play');
rapsodiPlay.addEventListener('click', function() {
    audioRapsodi.play()
});

let rapsodiStop = document.querySelector('section.single .container .isi2 ul li .music .rapsodi .deksripsi .stop');
rapsodiStop.addEventListener('click', function() {
    audioRapsodi.pause();
    audioRapsodi.currentTime = 0;
});

// 3. Sayonara crawl 
let audioSayonara = new Audio('../voice/album sayonara crawl.mp3');

let sayonaraPlay = document.querySelector('section.single .container .isi2 ul li .music .sayonara .deksripsi .play');
sayonaraPlay.addEventListener('click', function() {
    audioSayonara.play()
});

let sayonaraStop = document.querySelector('section.single .container .isi2 ul li .music .sayonara .deksripsi .stop');
sayonaraStop.addEventListener('click', function() {
    audioSayonara.pause();
    audioSayonara.currentTime = 0;
});



// 4. Seventeen 
let audioSeventeen = new Audio('../voice/album seventeen.mp3');

let seventeenPlay = document.querySelector('section.single .container .isi2 ul li .music .seventeen .deksripsi .play');
seventeenPlay.addEventListener('click', function() {
    audioSeventeen.play()
});

let seventeenStop = document.querySelector('section.single .container .isi2 ul li .music .seventeen .deksripsi .stop');
seventeenStop.addEventListener('click', function() {
    audioSeventeen.pause();
    audioSeventeen.currentTime = 0;
});


// 5. Hisatsu teleport 
let audioHisatsu = new Audio('../voice/album hisatsu teleport.mp3');

let hisatsuPlay = document.querySelector('section.single .container .isi2 ul li .music .hisatsu .deksripsi .play');
hisatsuPlay.addEventListener('click', function() {
    audioHisatsu.play()
});

let hisatsuStop = document.querySelector('section.single .container .isi2 ul li .music .hisatsu .deksripsi .stop');
hisatsuStop.addEventListener('click', function() {
    audioHisatsu.pause();
    audioHisatsu.currentTime = 0;
});



// 6. kebun binatang 
let audioKebunBinatang = new Audio('../voice/album kebun binatang.mp3');

let kebunBinatangPlay = document.querySelector('section.single .container .isi2 ul li .music .kebunBinatang .deksripsi .play');
kebunBinatangPlay.addEventListener('click', function() {
    audioKebunBinatang.play()
});

let kebunBinatangStop = document.querySelector('section.single .container .isi2 ul li .music .kebunBinatang .deksripsi .stop');
kebunBinatangStop.addEventListener('click', function() {
    audioKebunBinatang.pause();
    audioKebunBinatang.currentTime = 0;
});


// 7. Hanya lihat ke depan 
let audioHanyaLihatKeDepan = new Audio('../voice/album hanya lihat ke depan.mp3');

let hanyaLihatKeDepanPlay = document.querySelector('section.single .container .isi2 ul li .music .hanyaLihatKeDepan .deksripsi .play');
hanyaLihatKeDepanPlay.addEventListener('click', function() {
    audioHanyaLihatKeDepan.play()
});

let hanyaLihatKeDepanStop = document.querySelector('section.single .container .isi2 ul li .music .hanyaLihatKeDepan .deksripsi .stop');
hanyaLihatKeDepanStop.addEventListener('click', function() {
    audioHanyaLihatKeDepan.pause();
    audioHanyaLihatKeDepan.currentTime = 0;
});

// 8. Heavy Rotation 
let audioHevay = new Audio('../voice/album HEAVY ROTATION.mp3');

let hevayPlay = document.querySelector('section.single .container .isi2 ul li .music .heavy .deksripsi .play');
hevayPlay.addEventListener('click', function() {
    audioHevay.play()
});

let heavyStop = document.querySelector('section.single .container .isi2 ul li .music .heavy .deksripsi .stop');
heavyStop.addEventListener('click', function() {
    audioHevay.pause();
    audioHevay.currentTime = 0;
});

// 9. Green Flash 
let audioGreen = new Audio('../voice/album green flash.mp3');

let greenPlay = document.querySelector('section.single .container .isi2 ul li .music .green .deksripsi .play');
greenPlay.addEventListener('click', function() {
    audioGreen.play()
});

let greenStop = document.querySelector('section.single .container .isi2 ul li .music .green .deksripsi .stop');
greenStop.addEventListener('click', function() {
    audioGreen.pause();
    audioGreen.currentTime = 0;
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


// 11.eureka milik kita 
let audioEureka = new Audio('../voice/album eureka milik kita.mp3');

let eurekaPlay = document.querySelector('section.single .container .isi2 ul li .music .eureka .deksripsi .play');
eurekaPlay.addEventListener('click', function() {
    audioEureka.play()
});

let eurekastop = document.querySelector('section.single .container .isi2 ul li .music .eureka .deksripsi .stop');
eurekastop.addEventListener('click', function() {
    audioEureka.pause();
    audioEureka.currentTime = 0;
});


// 12. aitakatta 
let audioaitakata = new Audio('../voice/album Aitakatta (Ingin Bertemu).mp3');

let aitakataPlay = document.querySelector('section.single .container .isi2 ul li .music .aitakata .deksripsi .play');
aitakataPlay.addEventListener('click', function() {
    audioaitakata.play()
});

let aitakatastop = document.querySelector('section.single .container .isi2 ul li .music .aitakata .deksripsi .stop');
aitakatastop.addEventListener('click', function() {
    audioaitakata.pause();
    audioaitakata.currentTime = 0;
});