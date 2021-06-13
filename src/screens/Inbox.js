//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Activity} from '../components';
import {Icon} from 'react-native-elements';

// create a component
export const Inbox = () => {
  return (
    <View style={styles.container}>
      <Activity />
      <View style={styles.Box}>
        <Text style={styles.newText}>New</Text>
        <View style={styles.ListBox}>
          <View style={styles.LeftboxList}>
            <Icon
              name={'notifications-circle-outline'}
              type="ionicon"
              size={60}
              color="#0006"
            />
          </View>
          <View style={styles.RightboxList}>
            <Text style={styles.LinkProfile}>
              Link your profile number or email address.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Box}>
        <Text style={styles.newText}>This Week</Text>
        <View style={styles.ListBox}>
          <View style={styles.LeftboxList}>
            <Image style={styles.imge} source={require('../assets/tkl.png')} />
          </View>
          <View style={styles.RightboxList}>
            <Text style={styles.LinkProfile}>TIKTOK: #HBLPSLKaJalwa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Box: {
    // backgroundColor: 'red',
    width: '95%',
    height: '15%',
  },
  newText: {
    color: '#0006',
    fontWeight: '600',
  },
  ListBox: {
    // backgroundColor: 'purple',
    width: '100%',
    height: '80%',
    flexDirection: 'row',
  },
  LeftboxList: {
    // backgroundColor: 'orange',
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RightboxList: {
    // backgroundColor: 'purple',
    width: '80%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  LinkProfile: {
    color: 'black',
    fontWeight: '500',
  },
  imge: {
    width: '78%',
    height: '54%',
  },
});
