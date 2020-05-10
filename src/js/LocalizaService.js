import { isEmptyString } from "./helpers";

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
}
