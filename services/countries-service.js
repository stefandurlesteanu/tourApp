import apiKey from '../enums/secrets';
import url from '../enums/api-url';
import axios from 'axios';

export class CountriesService {
    static async getCountries() {
        const requestOptions = { headers: { 'x-api-key': apiKey.APIKEY }};
        return axios.get(url.COUNTRIES, requestOptions);
    }
}