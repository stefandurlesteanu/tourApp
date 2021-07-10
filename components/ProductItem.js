import React from 'react';
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../constants/Colors';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.imageUrl }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.price}>From {props.price} RON</Text>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
    )
};

const styles = StyleSheet.create({
    product: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 350,
      margin: 20
    },
    touchable: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    imageContainer: {
      width: '100%',
      height: '60%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      height: '15%',
      padding: 10
    },
    title: {
    //   fontFamily: 'open-sans-bold',
      fontSize: 18,
      marginVertical: 2
    },
    price: {
    //   fontFamily: 'open-sans',
      fontSize: 14,
      color: '#888'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '25%',
      paddingHorizontal: 30,
        },
  });

export default ProductItem;