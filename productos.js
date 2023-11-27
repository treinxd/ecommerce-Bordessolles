const productos = 'json/productos.json'; 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let producto;

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

let letraProductos;

function construirInterfaz() {
    const productosLista = document.getElementById('ruta');
    productosLista.innerHTML = producto.map((item, index) => {
        const { imagen, titulo, precio } = item;
        return `
            <div class="box" id="producto-${index}">
                <div class="img-box">
                    <img src="${imagen}" alt="">
                </div>
                <div class="left">
                    <p>${titulo}</p>
                    <h2>${precio}</h2>
                    <button class="agregar-al-carrito" data-index="${index}">Agregar al carrito</button>
                </div>
            </div>`;
    }).join();

    letraProductos = document.querySelectorAll(".left p, .left h2");

    productosLista.addEventListener('click', (event) => {
        if (event.target.classList.contains('agregar-al-carrito')) {
            const index = event.target.dataset.index;
            agregarAlCarrito(index);
            showToast("Producto agregado al carrito");
        }
    });

    const swiperImages = document.querySelectorAll('.swiper-slide img');
    swiperImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            window.location.href = `#productos`;
            setTimeout(() => {
                const productoElement = document.getElementById(`producto-${index}`);
                if (productoElement) {
                    productoElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        });
    });
}

fetch(productos)
    .then(response => response.json())
    .then(data => {
        producto = data;
        construirInterfaz();
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

function agregarAlCarrito(index) {
    carrito.push({ ...producto[index] });
    guardarCarritoEnLocalStorage();
}
