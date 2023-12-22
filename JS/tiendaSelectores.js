document.addEventListener("DOMContentLoaded", function () {
    var checkboxBalones = document.getElementById("balones_2");
    var checkboxChapas = document.getElementById("chapas_3");
    var checkboxCamisetas = document.getElementById("camisetas_4");

    var checkboxBarcelona = document.getElementById("equipo1"); //checkbox de barcelona
    var checkboxMadrid = document.getElementById("equipo2"); //checkbox de madrid
    var checkboxBetis = document.getElementById("equipo3"); //checkbox de betis
    var checkboxSevilla = document.getElementById("equipo4"); //checkbox de sevilla
    var checkboxValencia = document.getElementById("equipo5"); //checkbox de valencia

    

    //Tipo de artículos
    checkboxBalones.addEventListener("change", function () {
        filtrarArticulos();
    });
    checkboxChapas.addEventListener("change", function () {
        filtrarArticulos();
    });
    checkboxCamisetas.addEventListener("change", function () {
        filtrarArticulos();
    });

    //Equipos
    checkboxBarcelona.addEventListener("change", function() {
        filtrarArticulos();
    });
    checkboxMadrid.addEventListener("change", function() {
        filtrarArticulos();
    });
    checkboxBetis.addEventListener("change", function() {
        filtrarArticulos();
    });
    checkboxSevilla.addEventListener("change", function() {
        filtrarArticulos();
    });
    checkboxValencia.addEventListener("change", function() {
        filtrarArticulos();
    });



});

function filtrarArticulos() {
    // estado actual de los checkboxes
    var balonesChecked = document.getElementById("balones_2").checked;
    var chapasChecked = document.getElementById("chapas_3").checked;
    var camisetasChecked = document.getElementById("camisetas_4").checked;

    var barcelonaChecked = document.getElementById("equipo1").checked;
    var madridChecked = document.getElementById("equipo2").checked;
    var betisChecked = document.getElementById("equipo3").checked;
    var sevillaChecked = document.getElementById("equipo4").checked;
    var valenciaChecked = document.getElementById("equipo5").checked;

    // Obtén todos los elementos con la clase "articulo"
    var articulos = document.querySelectorAll(".articulo");

    // Si no hay ninguna categoría seleccionada, muestra todos los artículos
    if (!balonesChecked && !chapasChecked && !camisetasChecked &&!barcelonaChecked && !madridChecked && !betisChecked && !sevillaChecked && !valenciaChecked) {
        articulos.forEach(function (articulo) {
            articulo.style.display = "block";
        });
        return;
    }

    var algunArticuloMostrado = false;
    // Itera sobre los artículos y muestra solo los que cumplen con las categorías seleccionadas
    articulos.forEach(function (articulo) {
        var categoria = articulo.querySelector(".categoria").textContent.trim();
        var nombreEquipo = articulo.querySelector(".equipo").textContent.trim();
        //console.log("Nombre equipo articulo: "+nombreEquipo)
        //var mostrarArticulo = false;

        var mostrarArticulo = (
            (!balonesChecked || (categoria === "Balon")) &&
            (!chapasChecked || (categoria === "Chapa")) &&
            (!camisetasChecked || (categoria === "Camiseta")) &&
            (!barcelonaChecked || (nombreEquipo === "barcelona")) &&
            (!madridChecked || (nombreEquipo === "madrid")) &&
            (!betisChecked || (nombreEquipo === "betis")) &&
            (!sevillaChecked || (nombreEquipo === "sevilla")) &&
            (!valenciaChecked || (nombreEquipo === "valencia"))
        );

        // Muestra u oculta el artículo según el resultado
        articulo.style.display = mostrarArticulo ? "block" : "none";

        if(mostrarArticulo){
            algunArticuloMostrado=true;
        }
    });
    if (!algunArticuloMostrado) {
        // Muestra la alerta
        alert("No se encontraron productos que coincidan con los filtros seleccionados.");        
    }
}



