const producto = [
    {
        id: 1,
        imagen: 'imagenes/rtx4090.png',
        titulo: 'Rtx 4090',
        precio: '$5000',
    },
    {
        id: 2,
        imagen: 'imagenes/monitor_led.png',
        titulo: 'Monitor Gamer Samsung F24t35',
        precio: '$40',
    },
    {
        id: 3,
        imagen: 'imagenes/2ddr5.jpg',
        titulo: '2x8GB Memorias ram ddr5',
        precio: '$8',
    },
    {
        id: 4,
        imagen: 'imagenes/fuente650w.jpg',
        titulo: 'Fuente corsair 650w',
        precio: '$10',
    },
    {
        id: 5,
        imagen: 'imagenes/motherboard.jpg',
        titulo: 'Motherboard MSI pro H610M-G',
        precio: '$8',
    },
    {
        id: 6,
        imagen: 'imagenes/cpu.jpg',
        titulo: 'Procesador AMD Ryzen 5 5600X',
        precio: '$40',
    },
    
] 

const categorias = [...new Set(producto.map((item)=>
    {return item}))]
let carrito = document.getElementById('ruta')
carrito.innerHTML = categorias.map((item)=>
{
    var {imagen, titulo, precio} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img src="${imagen}"></img>
            </div>
            <div class="left">
                <p>${titulo}</p>
                <h2>${precio}</h2>
                <button>Agregar al carrito</button>
            </div>
        </div>`
    );
}).join('')

document.addEventListener('DOMContentLoaded', function () {
    const swiperImages = document.querySelectorAll('.swiper-slide img');

    swiperImages.forEach((image) => {
        image.addEventListener('click', () => {
            const productId = image.parentElement.dataset.id;
            window.location.href = `#productos`;
        });
    });
});