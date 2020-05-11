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

function Prediction({
    prediction, container, localizaService, onPredictionClick = () => {}
}) {
    let iconHTML = getIcon(prediction.types);
    let liString = predictTemplate(prediction.description, iconHTML);

    async function predictionClickCallback() {
        let [{
            place_id,
            geometry: {
                location: position,
            },
        }] = await localizaService.geocode(prediction.description);

        let place = await localizaService.getPlaceDetails(place_id);

        console.log(place);

        localizaService.placeMarker({
            position,
            title: place.name,
        });

        onPredictionClick(prediction);
    }

    function render() {
        container.insertAdjacentHTML('beforeend', liString);

        let el = container.lastElementChild;

        el.addEventListener('click', predictionClickCallback);
    }

    render();
}

export default Prediction;
