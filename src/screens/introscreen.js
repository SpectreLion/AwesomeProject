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



export default class App extends Component<{}> {
  render() {
    return (
      <View style ={styles.cotainer}>
        <Image source={require('./../images/remindMe-logo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    background: 'rgb(237,24,72)'
  }
})
