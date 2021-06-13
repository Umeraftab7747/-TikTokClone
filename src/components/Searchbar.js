import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

import {AppInput} from '../components';

export const Searchbar = () => {
  return (
    <View style={styles.container}>
      <AppInput Placeholder={'Search'} IconName={'search-sharp'} />
      <Icon name="scan-sharp" type="ionicon" size={40} color={'#000'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
