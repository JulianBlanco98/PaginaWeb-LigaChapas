
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');


btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.articulos');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.getElementById("contador-productos");

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        var articuloDetalles = buscarElementoPadre(e.target, 'articulo');

        if (articuloDetalles) {
            const articulo = articuloDetalles;

            const infoProduct = {
                cantidad: 1,
                titulo: articulo.querySelector('h4').textContent,
                precio: articulo.querySelector('.precio').textContent, // Añadir '.textContent'
                imagen: articulo.querySelector('.imagen_articulo img').src, //URL de la imagen
            };

            const exists = allProducts.some(articulo => articulo.titulo === infoProduct.titulo);
            if (exists) {

                const products = allProducts.map(articulo => {
                    if (articulo.titulo === infoProduct.titulo) {
                        articulo.cantidad++;
                        return articulo;

                    }
                    else {
                        return articulo;
                    }
                });
                allProducts = [...products];
            }
            else {

                //allProducts = {...allProducts, infoProduct };
                allProducts = [...allProducts, infoProduct];
            }



            //console.log(allProducts);
            showHTML();
        }
    }


});

rowProduct.addEventListener('click', (e) => {

    if (e.target.classList.contains('icon-close')) {

        const product = e.target.parentElement;
        const titulo = product.querySelector('p').textContent;
        // console.log(titulo)

        allProducts = allProducts.filter(product =>
            product.titulo !== titulo

        );

        // console.log(allProducts);
        showHTML();

    }

});

const showHTML = () => {

    if (!allProducts.length) { // Si no hay productos en el carrito:
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    //Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalArticulos = 0;

    allProducts.forEach(articulo => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        const precioDiv = articulo.precio;
        const precioTexto = precioDiv.trim(); 
        const precioNumerico = parseFloat(precioTexto.replace(/[^\d.]/g, ''));

        const totalPrecio = parseInt(precioNumerico * articulo.cantidad);

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <div class="col-sm-12 col-md-1">
                <span class="cantidad-producto-carrito">${articulo.cantidad}</span>
            </div>
            <div class="col-sm-12 col-md-2">
                <img src="${articulo.imagen}" alt="${articulo.titulo}" class="imagen-carrito">
            </div>
            <div class="col-sm-12 col-md-6">            
                <p class="titulo-producto-carrito">${articulo.titulo}</p>
            </div>
            <div class="col-sm-12 col-md-3 text-end">
                <span class="precio-producto-carrito">${totalPrecio}.00€</span>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        `;
        rowProduct.append(containerProduct);
        total = total + parseInt(articulo.cantidad * articulo.precio.replace(/[^\d.]/g, ''));
        totalArticulos = totalArticulos + articulo.cantidad;
    });

    const precioArriba = document.getElementById("precioArriba");
    const totalArriba = document.getElementById('totalArriba');

    precioArriba.innerHTML = `Precio: <strong>${total} €</strong>`;
    totalArriba.innerHTML = `Artículos en carrito: <strong>${totalArticulos}</strong>`;

    valorTotal.innerText = `${total}.00 €`;
    countProducts.innerText = totalArticulos;
};


function buscarElementoPadre(elemento, clase) {
    while (elemento !== null && !elemento.classList.contains(clase)) {
        elemento = elemento.parentElement;
    }

    return elemento;
}
