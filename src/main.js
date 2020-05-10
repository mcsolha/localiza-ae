import { createMarker, createInfoWindow } from './js/drawers';
import { geocode } from './js/geocoder';
import SearchBar from './js/SearchBar';
import LocalizaService from './js/LocalizaService';

let map;
let searchInputEl;
let predictsContainer;
let searchBarEl;
let marker;
let userMarker;

function showUserLocation() {
    if (!navigator.geolocation) {
        console.log('Geolocation not supported by your browser');
    }

    navigator.geolocation
        .getCurrentPosition(({ coords }) => {
            let { latitude: lat, longitude: lng } = coords;
            let pos = { lat, lng };
            userMarker = createMarker('Sua pos', pos, () => infoWindow.open());
            let infoWindow = createInfoWindow(
                '<h6 style="color: black;">Sua posição</h6>',
                map,
                marker
            );

            userMarker.setMap(map);

            setTimeout(() => userMarker.setAnimation(null), 500);

            map.setCenter(pos);
        }, err => alert(err.message));
}

function showInput() {
    searchInputEl.classList.remove('hide');
}

window.onMapsAPILoaded = function() {
    let mapContainer = document.getElementById('map');
    let localizaService = new LocalizaService(mapContainer);

    SearchBar({ localizaService });

    showInput();
};

document.addEventListener('DOMContentLoaded', () => {
    searchInputEl = document.querySelector('.localiza-app__search-input');
    predictsContainer = document.querySelector('.localiza-app__predicts-container');
    searchBarEl = document.querySelector('.localiza-app__search-input');
})
