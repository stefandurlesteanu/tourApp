import PRODUCTS from '../../data/dummy-data'
import {
    SET_PRODUCTS,
    SET_PRODUCT_DETAILS
} from '../actions/products';

const initialState = {
    productsList: [],
    productDetails: ''
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS :
            return { ...state,
                productsList: action.products
            };
        case SET_PRODUCT_DETAILS :
            return { ...state,
                productDetails: action.product
            }
        default:
            return state;
    }
};
