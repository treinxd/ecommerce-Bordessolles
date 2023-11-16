

/* swiper */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    observer: true,  
    observeParents: true,
});

const icono_modo = document.getElementById("icono_modo");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navListItems = document.querySelectorAll(".nav-list li a");
const logo = document.querySelector(".logo");
const footer = document.querySelector(".footer-contenido");
const footerSociales = document.querySelector(".redes-sociales")
const letraProductos = document.querySelector(".left")

icono_modo.addEventListener("click", function () {
    if (this.classList.contains("bi-brightness-high-fill")) {
        this.classList.remove("bi-brightness-high-fill");
        this.classList.add("bi-moon-fill");
        body.style.background = "white";
        nav.style.background = "black";
        navListItems.forEach(item => {
            item.style.color = "white";
        });
        logo.style.color = "white";
        footer.style.background = "black"
        footer.style.color ="white"
        footerSociales.style.color ="white"
        letraProductos.classList.remove('blanco');
    } else {
        this.classList.remove("bi-moon-fill");
        this.classList.add("bi-brightness-high-fill");
        body.style.background = "black";
        nav.style.background = "#fff";
        navListItems.forEach(item => {
            item.style.color = "black";
        });
        logo.style.color = "black";
        footer.style.background = "white"
        footer.style.color ="black"
        footerSociales.style.color ="black"
        letraProductos.classList.add('blanco'); 
    }
});


/* usuario */
