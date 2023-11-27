const form = document.getElementById('form');
const nombreApellido = document.getElementById('nombreApellido');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInputs()) {
        enviarMensaje();
    }
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
    const emailValor = email.value.trim();
    
    if (emailValor === '') {
        establecerError(email, 'Se necesita un email.');
        return false;
    } else if (!mailValido(emailValor)) {
        establecerError(email, 'Ingrese un mail válido.');
        return false;
    } else {
        establecerExito(email);
    }

    return true;
}

const enviarMensaje = () => {
    const nombre = document.querySelector('#nombreApellido').value;
    const emailValor = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;

    const contacto = JSON.parse(localStorage.getItem('contacto')) || [];

    contacto.push({ nombre: nombre, email: emailValor, mensaje: mensaje });
    localStorage.setItem('contacto', JSON.stringify(contacto));

    nombreApellido.value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#mensaje').value = '';

    Swal.fire({
        icon: "success",
        title: "Mensaje enviado!",
        showConfirmButton: false,
        timer: 1500
    })
}

