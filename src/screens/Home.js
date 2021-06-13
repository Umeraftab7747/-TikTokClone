import React from 'react';
import {FlatList, Dimensions, View, StyleSheet} from 'react-native';

import {Post} from '../components/';
import post from '../data';

export function Home() {
  return (
    <View>
      <FlatList
        data={post}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 48}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
