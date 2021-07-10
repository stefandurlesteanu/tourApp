import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ProductsNavigator from './navigation/ProductsNavigator';
import { countriesReducer } from './store/reducers/countries';
import { productsReducer } from './store/reducers/products';
import ProductsListScreen from './screens/ProductsListScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const rootReducer = combineReducers({
  countries: countriesReducer,
  products: productsReducer
});



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  return (
    <Provider store={store}>
      <ProductsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
