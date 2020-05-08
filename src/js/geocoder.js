import { get, searchParams } from './request';

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/';
const OUTPUT_FORMAT = 'json';

const API_URL = BASE_URL + OUTPUT_FORMAT;

export async function geocode(address) {
    console.log('geocoding');
    let queryString = searchParams({
        address,
        key: '@@maps_api_key',
    });
    let url = API_URL + queryString;

    console.log(url);

    try {
        const response = await get(url);

        return JSON.parse(response);
    } catch (err) {
        console.error(err);
        return {};
    }
}
