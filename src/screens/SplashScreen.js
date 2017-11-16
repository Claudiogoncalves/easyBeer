'use strict';

import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component { 

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('Welcome')  
        }, 3000)       
    } 
    render() {        
      return (
        <View style={styles.container}>
            <Image
              source={require('../image/easybeer-logo4.png')} style={styles.stretch}
            />

            <Text style={styles.text}>
                EASY BEER
            </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6511D',
      alignItems: 'center',
      justifyContent: 'center' 
    },
    text: {
      fontSize: 35,
      color: '#FFF',
      fontWeight: 'bold' 
    },
    stretch: {
      width: 120,
      height: 120,
      borderRadius: 15
    }
})