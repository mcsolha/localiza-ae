import {
    MAP_MARKER_ICON, SUBWAY_ICON,
} from './icons';

function predictTemplate(description = '', icon = '') {
    return (`<li class="localiza-app__prediction">
                <a>%ICON%<span>%DESCRIPTION%</span></a>
            </li>`)
            .replace(/\%DESCRIPTION\%/g, description)
            .replace('%ICON%', icon);
}

function getIcon(types) {
    if (types.includes('train_station') || types.includes('subway_station')) {
        return SUBWAY_ICON;
    }

    return MAP_MARKER_ICON;
}

function Prediction({ prediction, container, localizaService }) {
    let iconHTML = getIcon(prediction.types);
    let liString = predictTemplate(prediction.description, iconHTML);

    function predictionClickCallback({ description }) {
        return async (e) => {
            let [{
                place_id,
                geometry: {
                    location: position,
                },
            }] = await localizaService.geocode(description);

            let place = await localizaService.getPlaceDetails(place_id);

            console.log(place);

            localizaService.placeMarker({
                position,
                title: place.name,
            });
        };
    }

    function render() {
        container.insertAdjacentHTML('beforeend', liString);

        let el = container.lastElementChild;

        el.addEventListener('click', predictionClickCallback(prediction));
    }

    render();
}

export default Prediction;



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
