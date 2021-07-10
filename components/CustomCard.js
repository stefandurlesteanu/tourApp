import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from "react-native";

const CustomCard = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableOpacity style={styles.card} onPress={props.onSelect}>
      <ImageBackground source={{uri: props.imageUrl}} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>{props.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 15,
    height: 200
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 14,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3},
    shadowRadius: 9,
    elevation: 5
  },
  title: {
    color: 'white',
    fontSize: 15,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0'
  }
});

export default CustomCard;