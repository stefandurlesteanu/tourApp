import React, { useEffect, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as productsAction from '../store/actions/products';
import ProductItem from '../components/ProductItem';

const ProductsListScreen = props => {
    const products = useSelector(state => state.products.productsList);
    dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(productsAction.fetchProducts());
        console.log("Hello!");
    }, [dispatch])

    return <FlatList 
                data={products}
                renderItem={itemData => {
                    return (
                        <ProductItem 
                            imageUrl={itemData.item.image} 
                            title={itemData.item.title} 
                            price= {Math.round(Math.random() * (5000-3000) + 3000)} 
                            onViewDetail={()=>{
                                props.navigation.navigate('ProductDetails', {productId: itemData.item.id})
                            }}
                        />
                    )
                } } 
            />;
}

ProductsListScreen.navigationOptions = navigationData => {
    const menuName = navigationData.navigation.getParam('menuName') || 'Products List';
    console.log(navigationData)
    return {
        headerTitle: menuName
    };
}

export default ProductsListScreen;