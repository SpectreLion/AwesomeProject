/**
* IntroScreen
*
**/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Screens
import IntroScreen from './screens/introscreen';

export default class App extends Component<{}> {
  render() {
    return (
      <View style ={styles.cotainer}>
        <IntroScreen/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    background: 'rgb(237,24,72)'
  }
});
