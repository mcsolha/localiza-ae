import { isEmptyString } from "./helpers";
import { get, searchParams } from './request';

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/';
const OUTPUT_FORMAT = 'json';

const API_URL = BASE_URL + OUTPUT_FORMAT;

function generateInfoWindowHTML({ title, address, imgUrl, phone, rating }) {
    let additionalInfoHTML = phone || rating
        ? `<div class="info-window__additional-info">
                ${rating
                    ? `<div class="info-window__rating">
                            <i class="fas fa-star"></i>
                            <span>${rating}</span>
                        </div>`
                    : ''}
                ${phone
                    ? `<div class="info-window__phone">${phone}</div>`
                    : ''}
            </div>`
        : '';

    return `
        <div class="info-window">
            <div class="info-window__title">${title}</div>
            <div class="info-window__address">${address}</div>
            ${additionalInfoHTML}
            ${imgUrl
                ? `<div class="info-window__image">
                        <img src="${imgUrl}" alt="Foto de ${title}"/>
                    </div>`
                : ''}
        </div>
    `
}

export default class LocalizaService {
    constructor(mapContainer) {
        let sp = {lat: -23.5505199, lng: -46.63330939999999};

        this.map = new google.maps.Map(mapContainer, {
            center: sp,
            zoom: 16,
            fullscreenControl: false,
            mapTypeControl: false,
        });

        this.infoWindow = new google.maps.InfoWindow({
            maxWidth: 300,
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
            let fields = [
                'name',
                'formatted_phone_number',
                'photo',
                'formatted_address',
                'rating'
            ];
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

    placeMarker({ position, title, address, imgUrl, phone, rating }) {
        if (this.marker) {
            this.marker.setMap(null);
        }

        let infoWindowContent = generateInfoWindowHTML({ title, address, imgUrl, phone, rating });

        this.infoWindow.close();

        this.marker = new google.maps.Marker({
            position,
            title,
            map: this.map,
            animation: google.maps.Animation.DROP,
        });

        this.infoWindow.setContent(infoWindowContent);

        this.marker.addListener('click', () => {
            this.infoWindow.open(this.map, this.marker);
        });

        this.map.setCenter(position);
    }
}
