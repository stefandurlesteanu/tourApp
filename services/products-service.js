import apiKey from '../enums/secrets';
import url from '../enums/api-url';
import axios from 'axios';

export class ProductsService {

    static async getProductsList() {
        const requestOptions = { headers: { 'x-api-key': apiKey.APIKEY }};
        const requestData = {
            "page": 1,
            "pageSize": 10,
            "orderBy": "price",
            "orderDirection": "desc",
            "filters": [
              {
                "name": "country_iso",
                "value": "SYC"
              }
            ]
          }
        return axios.post(url.PRODUCTS, requestData, requestOptions);
    }

    static async getProductById(productId) {
      const requestOptions = { headers: { 'x-api-key': apiKey.APIKEY }};
      const productUrl = `${url.PRODUCT_DETAIL}/${productId}`;
      return axios.get(productUrl, requestOptions);
    }
}
