function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
    Swal.fire({
        icon: "success",
        title: "Gracias por su compra.",
        showConfirmButton: false,
        timer: 1500
    })
}

function delElement(index) {
    const carrito = obtenerCarrito();

    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        actualizarCarrito(carrito);
        mostrarCarrito();
        showToast("Producto eliminado del carrito");
    }
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function actualizarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById("itemCarrito");

    let total = 0.0;

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "Tu carrito está vacío.";
        document.getElementById("total").innerHTML = "$" + 0;
    } else {
        carritoContainer.innerHTML = carrito.map((item, index) => {
            const { imagen, titulo, precio } = item;
            const precioNumerico = parseFloat(precio.replace('$', ''));

            if (!isNaN(precioNumerico)) {
                total += precioNumerico;
            } 

            return `
                <div class='carrito-item'>
                    <p>${titulo}</p>
                    <h2>$ ${precio}</h2>
                    <button class="button" onclick='delElement(${index})'>Eliminar</button>
                </div>`;
        }).join('');

        if (!isNaN(total)) {
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
        } else {
            console.error("El total no es un número válido.");
        }
    }
}

mostrarCarrito();
