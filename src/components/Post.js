import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {Icon} from 'react-native-elements';

const h = Dimensions.get('window').height - 48;

const profile =
  'https://instagram.flhe3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe3-1.fna.fbcdn.net&_nc_ohc=l-IirA819m4AX8I5fRP&edm=ABfd0MgBAAAA&ccb=7-4&oh=9956e942cea2e8b3754dca956408057e&oe=60CC8A3C&_nc_sid=7bff83';
const video =
  'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4';

export const Post = ({post}) => {
  console.log(post);

  const [pause, setPause] = useState(false);
  const [islike, setislike] = useState(false);

  const VideoSetPause = () => {
    setPause(!pause);
  };

  return (
    <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={VideoSetPause}>
        <Video
          source={{uri: post.videoUri}}
          style={styles.VideoContainer}
          resizeMode={'cover'}
          // repeat={true}
          // paused={pause}
        />
      </TouchableWithoutFeedback>
      <View style={styles.UiContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.name}>@{post.username}</Text>
          <Text style={styles.discription}>{post.description}</Text>
          <View style={styles.MusicViewBox}>
            <Icon name="musical-notes-sharp" type="ionicon" color="#fff" />

            <Text style={[styles.discription, {marginLeft: 10}]}>
              NF - The search
            </Text>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <View style={styles.ImageContainer}>
            <Image style={styles.Image} source={{uri: profile}} />
          </View>
          <TouchableWithoutFeedback onPress={() => setislike(!islike)}>
            <Icon
              name="heart-sharp"
              type="ionicon"
              size={50}
              color={islike ? 'tomato' : 'white'}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Icon
              name="chatbubble-ellipses-sharp"
              type="ionicon"
              size={50}
              color={'white'}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Icon
              name="arrow-redo-sharp"
              type="ionicon"
              size={50}
              color={'white'}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: h,
    justifyContent: 'flex-end',
  },
  VideoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  VideoContainer2: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  UiContainer: {
    // backgroundColor: 'tomato',
    height: '50%',
    flexDirection: 'row',
  },
  leftContainer: {
    // backgroundColor: 'blue',
    width: '80%',
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'flex-end',
  },
  RightContainer: {
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 50,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    // marginLeft: 5,
  },
  discription: {
    color: 'white',
    fontSize: 15,
  },
  MusicViewBox: {
    width: '100%',
    height: '18%',
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 1000 / 2,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
});
