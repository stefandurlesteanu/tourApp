import { ProductsService } from '../../services/products-service';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';
export const SET_BEST_DEALS = 'SET_BEST_DEALS';

export const fetchProducts = () => {
    return async dispatch => {
        const products = await ProductsService.getProductsList();
        dispatch({type: SET_PRODUCTS, products: products.data.products });
    };

}

export const fetchProductById = (productId) => {
    return async dispatch => {
        const product = await ProductsService.getProductById(productId);
        dispatch({type: SET_PRODUCT_DETAILS, product: product.data});
    };
}
