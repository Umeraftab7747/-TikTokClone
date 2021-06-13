//import liraries
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
export const SplashScree = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/tiktok.jpg')} style={styles.Image} />
      <Text style={styles.text}>Umer Aftab</Text>
      <Text style={styles.text}>TIKTOK</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  Image: {
    width: 80,
    height: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
