/* carrito */

let contenedorCompletoCarrito = document.querySelector('.contenedor_productos');

loadEventlisteners();

function loadEventlisteners(){
    contenedorCompletoCarrito.addEventListener('click', agregarproducto);
}

function agregarproducto(e){
    console.log(e.target);
}


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

const form = document.getElementById('form');
const nombreDeUsuario = document.getElementById('nombreDeUsuario');
const email = document.getElementById('email');
const contrasenia = document.getElementById('contrasenia');
const contrasenia2 = document.getElementById('contrasenia2');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const establecerError = (elemento, mensaje) => {
    const controlInput = elemento.parentElement;
    const mostrarError = controlInput.querySelector('.error');

    mostrarError.innerText = mensaje;
    controlInput.classList.add('error');
    controlInput.classList.remove('exito');
}

const establecerExito = elemento => {
    const controlInput = elemento.parentElement;
    const mostrarError = controlInput.querySelector('.error');

    mostrarError.innerText = '';
    controlInput.classList.add('exito');
    controlInput.classList.remove('error');
}
const mailValido = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nombreDeUsuarioValor = nombreDeUsuario.value.trim();
    const emailValor = email.value.trim();
    const contraseniavalor = contrasenia.value.trim();
    const contrasenia2valor = contrasenia2.value.trim();

    if(nombreDeUsuarioValor === '') {
        establecerError(nombreDeUsuario, 'nombre de usuario requerido.')
    } else {
        establecerExito(nombreDeUsuario);
    }
    
    if(emailValor === ''){
        establecerError(email, 'Se necesita un email.')
    } else if (!mailValido(emailValor)) {
        establecerError(email, 'Ingrese un mail valido.');
    } else {
        establecerExito(email);
    }

    if(contraseniavalor === '') {
        establecerError(contrasenia, 'Ingrese una contraseña valida.');
    } else if (contraseniavalor.length < 8 ) {
        establecerError(contrasenia, 'La contraseña debe contener 8 caracteres.')
    } else {
        establecerExito(contrasenia);
    }

    if(contrasenia2valor === '') {
        establecerError(contrasenia2, 'Porfavor vuelve a ingresar tu contraseña.');
    } else if (contrasenia2valor !== contraseniavalor) {
        establecerError(contrasenia2, "Las contraseñas no coinciden.");
    } else {
        establecerExito(contrasenia2);
    }



}

