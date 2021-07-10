import PRODUCTS from '../../data/dummy-data'
import {
    SET_COUNTRIES
} from '../actions/countries';

const initialState = {
    activeCountries: PRODUCTS
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES :
            return { ...state, activeCountries: action.countries };
        default:
            return state;
    }
};