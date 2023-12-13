const menuToogle = document.querySelector('#menuToogle')
let navbar = document.querySelector(' nav .navbar ul')
let closeNav = document.querySelector('.closeNav')


menuToogle.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbar.classList.toggle('muncul')
})


// let Tbiasa = document.querySelector('section.hero .container .tiket .form form .radiobtn ul li #biasa ')
// let Tvip = document.querySelector('section.hero .container .tiket .form form .radiobtn ul li #vip ')
// let Tvvip = document.querySelector('section.hero .container .tiket .form form .radiobtn ul li #vvip ')


let button = document.querySelector('section.hero .container .tiket .form div .btn ')
let form = document.querySelector('section.hero .container .tiket .form form ')

form.addEventListener('submit', function(e) {
    let email = document.querySelector('section.hero .container .tiket .form form div #email')
    let nama = document.querySelector('section.hero .container .tiket .form form div #nama')
    let jumlah = document.querySelector('section.hero .container .tiket .form form div #jumlah')
    let tiket = document.querySelector('input[name = tiket]:checked').value

    tiket = parseInt(tiket)
    jumlah = parseInt(jumlah.value)

    let hasil = tiket * jumlah

    e.preventDefault()
    alert(`Terima kasih ${email.value}!\nanda telah membeli tiket konser atas nama ${nama.value}\ndengan jumlah tiket ${jumlah} dengan total harga Rp. ${hasil},00 `)
})