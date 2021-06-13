import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

export class AppInput extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.LogoContainer}>
          <Icon
            name={this.props.IconName}
            type="ionicon"
            size={30}
            color="#0004"
          />
        </View>
        <TextInput
          {...this.props}
          style={styles.TextInput}
          placeholder={this.props.Placeholder}
          placeholderTextColor={'#0004'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '80%',
    height: '60%',
    flexDirection: 'row',
    backgroundColor: '#0002',
  },
  TextInput: {
    width: '90%',
    height: '100%',
    color: '#fff',
  },
  LogoContainer: {
    width: '13%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
