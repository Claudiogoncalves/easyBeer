import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Alert,
    StyleSheet,
    ViewPagerAndroid,
    Image,
    Dimensions,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button, SocialIcon } from 'react-native-elements';
import HeaderHome from '../component/HeaderHome'
import FooterHome from '../component/FooterHome'

import { Icon } from 'native-base';

let width = Dimensions.get('window').width;

export default class Logout extends Component {   

    constructor(props) {
      super(props);      
    }

    componentDidMount(){
      AsyncStorage.setItem('token', 'null', () => {                 
        //alert('ok')
        this.props.navigation.navigate('Welcome');
        //alert('other')
      });
    }

    static navigationOptions = {
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => (        
        <Icon 
          ios='ios-log-out' 
          android="md-log-out" 
          style={{fontSize: 24, color: '#F6511D'}}/>
      ), 
    } 

    render() {        
        
      return (        
        <ScrollView style={{ flex:1 }} contentContainerStyle={styles.contentContainer}>               
        </ScrollView>                       
      )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    container: {
        paddingTop: 40,
        padding: 20,
    },

    button: {
        marginBottom: 0,
    },

    title: {
        fontSize: 35,
        color: '#0D2C54',
        fontWeight: 'bold'                
    },

    titleP: {
        fontSize: 25,
        color: '#480EA3',
        fontWeight: 'bold' 
    },

    icon: {
      width: 24,
      height: 24,
    },
})