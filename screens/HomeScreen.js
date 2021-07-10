import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import * as countriesActions from '../store/actions/countries';
import CustomCard from '../components/CustomCard';
import { HomeCards } from '../models/home-card';


const HomeScreen = props => {
    const countries = useSelector(state => state.countries.activeCountries);

    dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(countriesActions.fetchCountries());
    // }, [dispatch])
    const renderHomeCard = (itemData) => {
        return <CustomCard 
                    title={itemData.item.title} 
                    imageUrl={itemData.item.image}
                    onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'ProductsList',
                        params: {
                            menuName: itemData.item.title,
                            filterName: itemData.item.type
                        }
                    });
                }} />
    }

    return (

    //     <View style={styles.container}>
      
    //   <Image
    //     style={styles.tinyLogo}
    //     source={{
    //       uri: 'https://reactnative.dev/img/tiny_logo.png',
    //     }}
    //   />
    //   <Image
    //     style={styles.logo}
    //     source={{
    //       uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    //     }}
    //   />
    // </View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.mainTitle}>AppTour</Text>
                    <Image
                    style={styles.logo}
                    source={require('../assets/homeGlobe.png')}
                    />
                    <Text style={styles.motto}>Together for better experiences!</Text>
                </View>
                <FlatList style={styles.list} data={HomeCards} renderItem={renderHomeCard} numColumns={2}/>
            </View>
      );
}

HomeScreen.navigationOptions = {
    headerTitle: "HOME"
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    imageContainer:{
        alignItems: 'center',
        paddingVertical: 15
    },
    logo: {
      width: 150,
      height: 150,
    },
    mainTitle: {
        fontSize: 30
    },
    motto: {
        fontSize: 18,
        paddingTop: 10
    }
  });

export default HomeScreen;