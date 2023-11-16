function delElement(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoContainer = document.getElementById("itemCarrito");

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "Tu carrito está vacío.";
    } else {
        carritoContainer.innerHTML = carrito.map((item, index) => {
            var { imagen, titulo, precio } = item;
            return (
                `<div class='carrito-item'>
                    <div class='row-img'>
                        <img src="${imagen}" alt="">
                    </div>
                    <p>${titulo}</p>
                    <h2>$ ${precio}.00</h2>
                    <button onclick='delElement(${index})'>Delete</button>
                </div>`
            );
        }).join('');
    }
}
mostrarCarrito();
