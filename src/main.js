import { createMarker, createInfoWindow } from './js/drawers';

let map;

function showUserLocation() {
    if (!navigator.geolocation) {
        console.log('Geolocation not supported by your browser');
    }

    navigator.geolocation
        .getCurrentPosition(({ coords }) => {
            let { latitude: lat, longitude: lng } = coords;
            let pos = { lat, lng };
            let marker = createMarker('Sua pos', pos, () => infoWindow.open());
            let infoWindow = createInfoWindow(
                '<h6 style="color: black;">Sua posição</h6>',
                map,
                marker
            );

            marker.setMap(map);

            map.setCenter(pos);
        }, err => console.log(err));
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 16,
        fullscreenControl: false,
        mapTypeControl: false,
    });

    showUserLocation();
}

window.onMapsAPILoaded = function() {
    initMap();
};
