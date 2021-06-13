import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Searchbar} from '../components';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
