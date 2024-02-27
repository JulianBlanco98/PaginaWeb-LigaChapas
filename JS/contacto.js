function Map123() {
    var mapOptions = {
        center: new google.maps.LatLng(38.887127, -6.983944),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.terrain
    }
    var map = new google.maps.Map(document.getElementById("map_contacto"), mapOptions);
}  


var script = document.createElement('script');
//aquí iría la apikey
script.defer = true;
document.head.appendChild(script);
