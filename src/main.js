import { createMarker, createInfoWindow } from './js/drawers';
import {
    MAP_MARKER_ICON, SUBWAY_ICON, generatePredictItemHTML, PREDICT_NOT_FOUND
} from './js/templates';
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

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 16,
        fullscreenControl: false,
        mapTypeControl: false,
    });

    showUserLocation();
}

function showInput() {
    searchInputEl.classList.remove('hide');
}

function renderPredictions(predictions) {
    let ulEl = predictsContainer.firstElementChild;
    ulEl.innerHTML = '';

    if (!predictions) {
        return ulEl.insertAdjacentHTML('beforeend', PREDICT_NOT_FOUND);
    }

    for (const prediction of predictions) {
        let iconHTML = getIcon(prediction.types);
        let liString = generatePredictItemHTML(iconHTML, prediction.description);
        let el = document.createElement('div');

        el.innerHTML = liString;
        el.firstChild.addEventListener('click', predictionClickCallback(prediction));

        ulEl.insertAdjacentElement('beforeend', el.firstChild);
    }
}

function predictionClickCallback(prediction) {
    return async (e) => {
        console.log(prediction);
        searchBarEl.classList.remove('active-search');

        searchInputEl.value = prediction.description;

        const { results: [ { geometry: { location } } ] } = await geocode(prediction.description);

        if (marker) {
            marker.setMap(null);
        }

        if (userMarker) {
            userMarker.setMap(null);
        }

        marker = createMarker(prediction.description, location);

        marker.setMap(map);

        setTimeout(() => marker.setAnimation(null), 500);

        map.setCenter(location);
    };
}

function getIcon(types) {
    if (types.includes('train_station') || types.includes('subway_station')) {
        return SUBWAY_ICON;
    }

    return MAP_MARKER_ICON;
}

window.onMapsAPILoaded = function() {
    var localizaService = new LocalizaService();

    SearchBar({
        localizaService,
        onPredictionChange: renderPredictions,
    });

    initMap();
    showInput();
};

document.addEventListener('DOMContentLoaded', () => {
    searchInputEl = document.querySelector('.localiza-app__search-input');
    predictsContainer = document.querySelector('.localiza-app__predicts-container');
    searchBarEl = document.querySelector('.localiza-app__search-input');
})
