
$(document).ready(function() {
    // Obtener el elemento select
    var selectElement = $('#categoriaSelect');

    // Agregar evento de cambio al select
    selectElement.on('change', function() {
        // Obtener la categoría seleccionada
        var categoriaSeleccionada = $(this).val();
        
        categoriaSeleccionada = obtenerNombre(categoriaSeleccionada);
        //console.log("Cat: "+categoriaSeleccionada); 

        selectElement.removeClass("todos equipos jugadores liga").addClass(categoriaSeleccionada);

        // Iterar sobre cada noticia
        $('.noticia').each(function() {
            // Obtener la categoría de la noticia actual
            var categoriaNoticia = obtenerCategoriaDeNoticia($(this));
            //console.log("Categoria noticia actual: "+categoriaNoticia);

            // Mostrar u ocultar la noticia según la categoría seleccionada
            if (categoriaSeleccionada === 'todos' || categoriaSeleccionada === categoriaNoticia) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        // Contar el número de noticias visibles
        var numNoticiasVisibles = $('.noticia:visible').length;
        $('hr').hide();

        // Mostrar o agregar líneas hr según la cantidad de noticias visibles
        if (numNoticiasVisibles === 1) {
            $('hr').hide();
        } else if (numNoticiasVisibles >= 2) {
            // Si hay dos o más noticias, mostrar líneas hr entre ellas
            $('.noticia:visible').each(function(index) {
                if (index < numNoticiasVisibles - 1) {
                    $(this).next('hr').show();
                }
            });
        }
    });
});

function obtenerNombre(opcion){
    //console.log("Categoria: "+opcion)
    if(opcion === "2"){
        return "equipos";
    }
    else if(opcion ==="3"){
        return "jugadores";
    }
    else if(opcion === "4"){
        return "liga";
    }
    else {
        return "todos";
    }
}

function obtenerCategoriaDeNoticia(noticia) {
    // Obtener la clase de la categoría (clase2, clase3, clase4)
    var claseCategoria = noticia.find(".categoria p").attr("class");
    //console.log("Categoría noticia seleccionada: " + claseCategoria)

    if (claseCategoria === "clase2") {
        return "equipos";
    } else if (claseCategoria === "clase3") {
        return "jugadores";
    } else if (claseCategoria === "clase4") {
        return "liga";
    } else {
        return "todos";
    }
}

