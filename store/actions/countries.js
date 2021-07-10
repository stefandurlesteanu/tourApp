import { CountriesService } from '../../services/countries-service';

export const SET_COUNTRIES = 'SET_COUNTRIES';

export const fetchCountries = () => {
    return async dispatch => {
        const countries = await CountriesService.getCountries();
        dispatch({type: SET_COUNTRIES, countries: countries.data });
    };
}