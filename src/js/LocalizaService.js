import { isEmptyString } from "./helpers";
import { get, searchParams } from './request';

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/';
const OUTPUT_FORMAT = 'json';

const API_URL = BASE_URL + OUTPUT_FORMAT;

export default class LocalizaService {
    constructor(mapContainer) {
        let sp = {lat: -23.5505199, lng: -46.63330939999999};

        this.map = new google.maps.Map(mapContainer, {
            center: sp,
            zoom: 16,
            fullscreenControl: false,
            mapTypeControl: false,
        });

        this.marker = this.placeMarker({
            position: sp,
            title: 'São Paulo',
        });

        this.sessionToken = new google.maps.places.AutocompleteSessionToken();
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.placesService = new google.maps.places.PlacesService(this.map);
    }

    searchLocation(input) {
        return new Promise((resolve, reject) => {
            if (isEmptyString(input)) {
                return reject('Empty string');
            }

            this.autocompleteService.getPlacePredictions({
                input,
                sessionToken: this.sessionToken,
            }, (response, serviceStatus) => {
                if (serviceStatus === google.maps.places.PlacesServiceStatus.OK) {
                    return resolve(response);
                }

                reject(serviceStatus);
            });
        });
    }

    async geocode(address) {
        let queryString = searchParams({
            address,
            key: '@@maps_api_key',
        });
        let url = API_URL + queryString;

        try {
            let response = await get(url);
            let { results, status } = JSON.parse(response);

            if (status === "OK") {
                return results;
            }

            throw new Error(status);
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    async getPlaceDetails(placeId) {
        return new Promise((resolve, reject) => {
            let fields = ['name', 'rating', 'formatted_phone_number', 'photo'];
            let request = {
                placeId,
                fields,
            };

            function detailsApiCallback(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    return resolve(place);
                }

                return reject(status);
            }

            this.placesService.getDetails(request, detailsApiCallback);
        });
    }

    placeMarker({ position, title }) {
        if (this.marker) {
            this.marker.setMap(null);
        }

        this.marker = new google.maps.Marker({
            position,
            title,
            map: this.map,
            animation: google.maps.Animation.DROP,
        });


        this.map.setCenter(position);
    }

}
