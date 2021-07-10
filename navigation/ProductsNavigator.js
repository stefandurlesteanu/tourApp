import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';
import ProductsListScreen from '../screens/ProductsListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const ProductsNavigator = createStackNavigator({
    Home: HomeScreen,
    ProductsList: ProductsListScreen,
    ProductDetails: ProductDetailsScreen 
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTintColor: Platform.OS === "android" ? 'white' : Colors.primary,

    }
});

export default createAppContainer(ProductsNavigator);