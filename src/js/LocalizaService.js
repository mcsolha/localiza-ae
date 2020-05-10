import { isEmptyString } from "./helpers";
import { get, searchParams } from './request';

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/';
const OUTPUT_FORMAT = 'json';

const API_URL = BASE_URL + OUTPUT_FORMAT;

export default class LocalizaService {
    constructor() {
        this.sessionToken = new google.maps.places.AutocompleteSessionToken();
        this.autocompleteService = new google.maps.places.AutocompleteService();
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
            const response = await get(url);

            return JSON.parse(response);
        } catch (err) {
            console.error(err);
            return {};
        }
    }
}
