function Map123() {
    var mapOptions = {
        center: new google.maps.LatLng(38.887127, -6.983944),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.terrain
    }
    var map = new google.maps.Map(document.getElementById("map_contacto"), mapOptions);
}  

// script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgT65-vVzSEhKlnZKQOTKw4gRnf9nv-JI&callback=Map123">
var script = document.createElement('script');
//script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBgT65-vVzSEhKlnZKQOTKw4gRnf9nv-JI&callback=Map123';
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCoh4omTOG3AtkMSqJl0xxDOaRah1rPjvs&callback=Map123';
script.defer = true;
document.head.appendChild(script);