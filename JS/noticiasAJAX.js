
const xhttp = new XMLHttpRequest();
var noticiasContenedor;
var xmlDocumento;

xhttp.onload = function () {

    xmlDocumento = xhttp.responseXML;
    noticiasContenedor = document.getElementById("noticiasContenedor");
    cargarNoticias();
}

xhttp.open("GET", "../../xml/noticias.xml");
xhttp.send();

function cargarNoticias() {

    //Coger cada noticia
    var noticias = xmlDocumento.getElementsByTagName("NOTICIA");
    var totalNoticias = noticias.length;
    // console.log(noticias.length);

    for (let i = 0; i < totalNoticias; i++) {

        var noticia = noticias[i];

        //Creo la estrcutura
        var divNoticia = document.createElement("div");
        divNoticia.className = "noticia";

        var divImagen = document.createElement("div");
        divImagen.className = "imagen";
        var img = document.createElement("img");
        img.src = noticia.getElementsByTagName("IMAGEN")[0].textContent;
        divImagen.appendChild(img);

        var divDatos = document.createElement("div");
        divDatos.className = "datos";

        var h3 = document.createElement("h3");
        h3.textContent = noticia.getElementsByTagName("TITULO")[0].textContent;

        var divCategoria = document.createElement("div");
        divCategoria.className = "categoria";
        var imgCategoria = document.createElement("img");
        imgCategoria.src = noticia.getElementsByTagName("IMAGENCATEGORIA")[0].textContent;
        var pCategoria = document.createElement("p");

        //dependiendo del tipo de categoría, la etiqueta p tendrá una clase u otra
        varTipoNoticia = noticia.getElementsByTagName("TIPOCATEGORIA")[0].textContent;
        //console.log(varTipoNoticia);
        if (varTipoNoticia == "Equipos"){

            pCategoria.className = "clase2";
        }
        else if(varTipoNoticia == "Jugadores"){
            pCategoria.className = "clase3";
        }
        else{
            pCategoria.className = "clase4";
        }
        
        pCategoria.innerHTML = `<b>${noticia.getElementsByTagName("TIPOCATEGORIA")[0].textContent}</b>`;
        divCategoria.appendChild(imgCategoria);
        divCategoria.appendChild(pCategoria);

        var pPublicacion = document.createElement("p");
        pPublicacion.className = "publicacion";
        pPublicacion.innerHTML = `<i>Publicado el <u>${noticia.getElementsByTagName("FECHA")[0].textContent}</u> por ${noticia.getElementsByTagName("AUTOR")[0].textContent}</i>`;

        var pDescripcion = document.createElement("p");
        pDescripcion.textContent = noticia.getElementsByTagName("DESCRIPCION")[0].textContent;

        // Agregar elementos al contenedor de noticias
        divDatos.appendChild(h3);
        divDatos.appendChild(document.createElement("br"));
        divDatos.appendChild(divCategoria);
        divDatos.appendChild(document.createElement("br"));
        divDatos.appendChild(pPublicacion);
        divDatos.appendChild(document.createElement("br"));
        divDatos.appendChild(pDescripcion);

        divNoticia.appendChild(divImagen);
        divNoticia.appendChild(divDatos);

        noticiasContenedor.appendChild(divNoticia);

        if (i < (totalNoticias -1)){
            // Agregar un hr excepto en el último valor
            noticiasContenedor.appendChild(document.createElement("hr"));

        }



    }

}


