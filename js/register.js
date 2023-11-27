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


const registroForum = document.querySelector('#form');
registroForum.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombreDeUsuario').value;
    const email = document.querySelector('#email').value;
    const contrasenia = document.querySelector('#contrasenia').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const elUsuarioRegistrado = usuarios.find((usuario) => usuario.email === email);

    if (elUsuarioRegistrado) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario ya está registrado',
        });
    } else {
        usuarios.push({ nombre: nombre, email: email, contrasenia: contrasenia });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        Swal.fire({
            icon: 'success',
            title: 'Registro completado!',
            showConfirmButton: false,
            timer: 1500,
        });

        setTimeout(() => {
            window.location.href = 'usuarioLogin.html';
        }, 1000);
    }
});

