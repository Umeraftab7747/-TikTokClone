//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

// create a component
export const Activity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.LeftContainer}></View>
      <View style={styles.MiddleContainer}>
        <Text style={styles.text}>All acitivity</Text>
      </View>
      <View style={styles.RightContainer}>
        <Icon name={'albums'} type="ionicon" size={30} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    // backgroundColor: 'purple',
    flexDirection: 'row',
  },
  LeftContainer: {
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
  },
  MiddleContainer: {
    // backgroundColor: 'tomato',
    width: '65%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightContainer: {
    // backgroundColor: 'orange',
    width: '15%',
    height: '100%',

    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
