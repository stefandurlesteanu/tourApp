import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as countriesActions from '../store/actions/countries';
import {Picker} from '@react-native-picker/picker';

const FiltersScreen = props => {
    const countries = useSelector(state => state.countries.activeCountries);
    const [selectedLanguage, setSelectedLanguage] = useState();
    dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(countriesActions.fetchCountries());
    }, [dispatch])

    return (
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
            >
                {countries.map((country)=>{
                    return <Picker.Item key={country.id} label={country.name} value={country.id} />
                })}
                {/* <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" /> */}

            </Picker>

        // <FlatList data={countries} renderItem = {itemData => <Text>{itemData.item.name}</Text>} />
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

export default FiltersScreen;