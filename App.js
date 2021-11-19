/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Video from 'react-native-video';
import video from './src/assets/video/seoul.mp4';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const MyVideo = () => {
  return (
    <Video
      source={video} // the video file
      paused={false} // make it start
      repeat={true} // make it a loop
      style={{width: '100%', height: '100%'}}
    />
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{height: '100%'}}>
        <MyVideo />
      </View>
    </SafeAreaView>
  );
};

export default App;
