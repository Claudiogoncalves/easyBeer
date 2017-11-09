'use strict';

import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
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
        backgroundColor: '#541388',
        alignItems: 'center',
        justifyContent: 'center' 

    },
    text: {
        fontSize: 35,
        color: '#FFF',
        fontWeight: 'bold' 
    }
})