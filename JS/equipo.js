function crearMapas() {

    //Meto en el array todas las coordenadas de cada destadio
    var mapData = [
        { center: new google.maps.LatLng(42.837111, -2.688000), id: "map_alaves" },
        { center: new google.maps.LatLng(36.84, -2.435278), id: "map_almeria" },
        { center: new google.maps.LatLng(43.264204, -2.94939145292929), id: "map_athletic" },
        { center: new google.maps.LatLng(40.436111, -3.599444), id: "map_atleti" },
        { center: new google.maps.LatLng(41.38089905, 2.12292250075175), id: "map_barcelona" },
        { center: new google.maps.LatLng(37.356403, -5.981611), id: "map_betis" },
        { center: new google.maps.LatLng(36.502529144287, -6.2728500366211), id: "map_cadiz" },
        { center: new google.maps.LatLng(42.211861, -8.740328), id: "map_celta" },
        { center: new google.maps.LatLng(40.325607299805, -3.7150099277496), id: "map_getafe" },
        { center: new google.maps.LatLng(41.961389, 2.828611), id: "map_girona" },
        { center: new google.maps.LatLng(37.152967, -3.595736), id: "map_granada" },
        { center: new google.maps.LatLng(28.1, -15.456667), id: "map_palmas" },
        { center: new google.maps.LatLng(39.59, 2.63), id: "map_mallorca" },
        { center: new google.maps.LatLng(42.796667, -1.636944), id: "map_osasuna" },
        { center: new google.maps.LatLng(43.301378, -1.973617), id: "map_sociedad" },
        { center: new google.maps.LatLng(40.391944, -3.658961), id: "map_rayo" },
        { center: new google.maps.LatLng(40.45306, -3.68835), id: "map_madrid" },
        { center: new google.maps.LatLng(37.383878, -5.970467), id: "map_sevilla" },
        { center: new google.maps.LatLng(39.474722, -0.358333), id: "map_valencia" },
        { center: new google.maps.LatLng(39.944167, -0.103611), id: "map_villareal" },
    ];

    //recorro los 20 estadios
    for (var i = 0; i < mapData.length; i++) {
        var data = mapData[i]; //cojo la posición en cuestión del campo que toque

        var mapOptions = {
            center: data.center,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            width: '100%',
            height: '300px'
        };

        var map = new google.maps.Map(document.getElementById(data.id), mapOptions); //se lo asocio al div que le toque al array
    }
}




var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBgT65-vVzSEhKlnZKQOTKw4gRnf9nv-JI&callback=crearMapas';
//aquí iría la api buena
script.defer = true;
document.head.appendChild(script);

//Botón de ir hacia arriba
let btn = document.getElementById("scroll-up");

btn.addEventListener('click', () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Función para mostrar u ocultar el botón dependiendo de la posición del usuario
function toggleBotonArriba() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Evento que se dispara cuando el usuario hace scroll
window.onscroll = function () {
    toggleBotonArriba();
};
