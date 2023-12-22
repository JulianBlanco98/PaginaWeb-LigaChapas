// Inicializa el contador de clics
let clics = JSON.parse(localStorage.getItem('clics')) || {
    imagen1: 0,
    imagen2: 0,
    imagen3: 0,
    imagen4: 0,
    imagen5: 0,
    imagen6: 0,
    imagen7: 0,
    imagen8: 0,
    imagen9: 0
};

// Función para contar clics
function contarClic(imagenId) {
    clics[imagenId]++;
    localStorage.setItem('clics', JSON.stringify(clics));
    actualizarClicks(imagenId, clics[imagenId]);

}

// Función para ordenar imágenes por clics
function ordenarPorClics() {
    const imagenList = document.getElementById("imagenList");

    // Ordena las imágenes según la cantidad de clics
    const sortedClics = Object.keys(clics).sort((a, b) => clics[b] - clics[a]);

    // Limpia la lista de imágenes
    const galeria = document.getElementById("galeria");
    imagenList.innerHTML = '';

    // // Agrega las imágenes ordenadas a la lista
    // sortedClics.forEach(imagenId => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = `Imagen ${imagenId.substring(6)} - Clics: ${clics[imagenId]}`;
    //     imagenList.appendChild(listItem);
    // });

    // Agrega las imágenes ordenadas al contenedor
    sortedClics.forEach(imagenId => {
        const imageContainer = document.getElementById(imagenId + "Container");
        galeria.appendChild(imageContainer);
    });
}

// Asigna eventos de clic a las imágenes
document.getElementById("imagen1").addEventListener("click", () => contarClic("imagen1"));
document.getElementById("imagen2").addEventListener("click", () => contarClic("imagen2"));
document.getElementById("imagen3").addEventListener("click", () => contarClic("imagen3"));
document.getElementById("imagen4").addEventListener("click", () => contarClic("imagen4"));
document.getElementById("imagen5").addEventListener("click", () => contarClic("imagen5"));
document.getElementById("imagen6").addEventListener("click", () => contarClic("imagen6"));
document.getElementById("imagen7").addEventListener("click", () => contarClic("imagen7"));
document.getElementById("imagen8").addEventListener("click", () => contarClic("imagen8"));
document.getElementById("imagen9").addEventListener("click", () => contarClic("imagen9"));
// Cargar los clics iniciales al cargar la página
window.addEventListener("load", () => {
    const storedClics = JSON.parse(localStorage.getItem('clics'));
    if (storedClics) {
        clics = storedClics;

        // Actualizar el contenido de las etiquetas p con id clicks para cada imagen
        actualizarClicks("imagen1", clics.imagen1);
        actualizarClicks("imagen2", clics.imagen2);
        actualizarClicks("imagen3", clics.imagen3);
        actualizarClicks("imagen4", clics.imagen4);
        actualizarClicks("imagen5", clics.imagen5);
        actualizarClicks("imagen6", clics.imagen6);
        actualizarClicks("imagen7", clics.imagen7);
        actualizarClicks("imagen8", clics.imagen8);
        actualizarClicks("imagen9", clics.imagen9);
    }
    //Situación inicial, al cargar en un navegador nuevo
    else {
        actualizarClicks("imagen1", 0);
        actualizarClicks("imagen2", 0);
        actualizarClicks("imagen3", 0);
        actualizarClicks("imagen4", 0);
        actualizarClicks("imagen5", 0);
        actualizarClicks("imagen6", 0);
        actualizarClicks("imagen7", 0);
        actualizarClicks("imagen8", 0);
        actualizarClicks("imagen9", 0);

    }
});

// Función para ordenar imágenes por fecha
function ordenarPorFecha() {
    const galeria = document.getElementById("galeria");
    const imagenList = document.getElementById("imagenList");

    // Obtener una lista de las imágenes ordenadas por fecha
    const sortedImages = Array.from(galeria.children).sort((a, b) => {
        const fechaA = obtenerFecha(a.querySelector(".fecha").textContent);
        const fechaB = obtenerFecha(b.querySelector(".fecha").textContent);
        return fechaB - fechaA;
    });

    // Limpiar la galería
    galeria.innerHTML = "";

    // Agregar las imágenes ordenadas a la galería
    sortedImages.forEach(image => {
        galeria.appendChild(image);
    });
}

// Función para obtener una fecha a partir de una cadena de texto de fecha
function obtenerFecha(fechaStr) {
    const meses = {
        enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
        julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
    };

    const partesFecha = fechaStr.split(" ");
    const mes = meses[partesFecha[0].toLowerCase()];
    const dia = parseInt(partesFecha[1], 10);
    const anio = parseInt(partesFecha[2], 10);

    return new Date(anio, mes, dia);
}

// Función para actualizar el contenido de las etiquetas p con id clicks para cada imagen
function actualizarClicks(imagenId, numClicks) {
    const clicksElement = document.getElementById(`${imagenId}Container`).querySelector("#clicks");
    if (clicksElement) {
        clicksElement.textContent = `Número de clicks: ${numClicks}`;
    }
}