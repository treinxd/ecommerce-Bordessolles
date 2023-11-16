const loginForum = document.querySelector('#form')
loginForum.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = document.querySelector('#email').value
    const contrasenia = document.querySelector('#contrasenia').value

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const usuarioValido = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase() && usuario.contrasenia === contrasenia)
    
    if(!usuarioValido){
        return alert('El usuario o contraseña son incorrectos.')
    }
    alert(`bienvenido ${usuarioValido.nombre}`)
    window.location.href = '../index.html'
})


