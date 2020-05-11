import SearchBar from './js/SearchBar';
import LocalizaService from './js/LocalizaService';

window.onMapsAPILoaded = function() {
    let mapContainer = document.getElementById('map');
    let localizaService = new LocalizaService(mapContainer);

    SearchBar({ localizaService });
};
