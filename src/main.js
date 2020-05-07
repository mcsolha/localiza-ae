import { createMarker, createInfoWindow } from './js/drawers';

let map, autocompleteService;
let searchInputEl;
let predictsContainer;
let sessionToken;
let predictions;
let mapMarkerIcon = '<i class="fas fa-map-marker-alt"></i>';
let subwayIcon = '<i class="fas fa-subway"></i>';

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

function searchLocation(input) {
    autocompleteService.getPlacePredictions({
        input,
        sessionToken,
    }, (predictionsResponse, placeServiceStatus) => {
        predictions = predictionsResponse;
        renderPredictions();
    });
}

function showInput() {
    searchInputEl.classList.remove('hide');
}

function renderPredictions() {
    let ulEl = predictsContainer.firstElementChild;
    ulEl.innerHTML = '';

    for (const prediction of predictions) {
        let liString = `<li>${predictionHTML(prediction)}</li>`;

        ulEl.insertAdjacentHTML('beforeend', liString);
    }
}

function predictionHTML({ description, types }) {
    return `<a href="#">${getIcon(types)} <span>${description}</span></a>`;
}

function getIcon(types) {
    if (types.includes('train_station') || types.includes('subway_station')) {
        return subwayIcon;
    }

    return mapMarkerIcon;
}

window.onMapsAPILoaded = function() {
    sessionToken = new google.maps.places.AutocompleteSessionToken();
    autocompleteService = new google.maps.places.AutocompleteService();

    initMap();
    showInput();
};

document.addEventListener('DOMContentLoaded', () => {
    searchInputEl = document.querySelector('.localiza-app__search-input');
    predictsContainer = document.querySelector('.localiza-app__predicts-container');
    let searchBarEl = document.querySelector('.localiza-app__search-input');

    searchInputEl.addEventListener('input', (e) => {
        let value = e.target.value;

        if (!value) {
            searchBarEl.classList.remove('active-search');
        }
        searchBarEl.classList.add('active-search');
        searchLocation(value);
    })
})
