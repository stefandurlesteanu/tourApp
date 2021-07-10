import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text, Image, Button, StyleSheet, ActivityIndicator  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as productsAction from '../store/actions/products';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.productDetails);;
    const [isLoading, setIsLoading] = useState(false);
    dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            await dispatch(productsAction.fetchProductById(productId));
            // console.log(loadedProduct);
            setIsLoading(false);
        }

        // const waitForData = () => {
        //     if(loadedProduct !== "") {
        //         setIsLoading(false);
        //     } else {
        //         setTimeout(waitForData, 250);
        //     }
        // }
        loadData();
        // waitForData();

    }, [dispatch, setIsLoading])

    if (isLoading) {
        return <View>
            <ActivityIndicator />
        </View>
    }

    return (
        <View>
            <Text>{selectedProduct.id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ProductDetailsScreen;