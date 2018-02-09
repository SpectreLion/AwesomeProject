/**
* IntroScreen
*
**/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHightlight
} from 'react-native';



export default class App extends Component<Props> {
  render() {
    return (
      <View style ={styles.cotainer}>
        <Image
          style ={styles.logo}
          source={require('./../images/remindMe-logo.png')}/>
        <TouchableHightlight style ={styles.secondaryButton}>
          <Text>COMENZAR</Text>
        </TouchableHightlight>
        <Image source={require('./../images/avatars.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(237,24,72)'
  },
  logo:{
    width:285,
    height: 75
  },
  secondaryButton:{
    height:55,
    width; 325,
    padding:16,
    borderStyle: 'solid',
    borderWidth:2,
    borderColor: 'white',
    borderRadius: 27
  }
});
