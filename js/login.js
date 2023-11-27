const loginForum = document.querySelector('#form');

loginForum.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const contrasenia = document.querySelector('#contrasenia').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioValido = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase() && usuario.contrasenia === contrasenia);

    if (!usuarioValido) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Parece que ha ingresado mal algún dato.",
        });
    } else {
        Swal.fire({
            icon: "success",
            title: "Ha iniciado sesión",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 100);
        });
    }
});
