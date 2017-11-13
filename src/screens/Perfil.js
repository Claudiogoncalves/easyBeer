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

import { NavigationActions } from 'react-navigation'
import { Button, SocialIcon } from 'react-native-elements'
import HeaderHome from '../component/HeaderHome'
import FooterHome from '../component/FooterHome'

import { Icon } from 'native-base'

let width = Dimensions.get('window').width;

export default class Perfil extends Component {   

    constructor(props) {
      super(props);      
    }

    doLogout = () => { 
      AsyncStorage.setItem('token', 'null', () => {                 
        //alert('ok')
        this.props.navigation.navigate('Welcome');
        //alert('other')
      });
    } 


    toggleMenu = () => {
          this.props.navigation.navigate('DrawerOpen');
        //if (this.props.navigation.state.index === 0) {
          // check if drawer is not open, then only open it
        //} else {
          // else close the drawer
          //this.props.navigation.navigate('DrawerClose');
       // }
    } 

    static navigationOptions = {
      drawerLabel: 'Perfil',
      drawerIcon: ({ tintColor }) => (        
        <Icon 
          ios='ios-person' 
          android="md-person" 
          style={{fontSize: 24, color: '#F6511D'}}/>
      ), 
    }   

    render() {        
        
      return (        
        <ScrollView style={{ flex:1 }} contentContainerStyle={styles.contentContainer}>
          <HeaderHome 
            toggleMenu={this.toggleMenu}
            title='Perfil'
          /> 
          <View style={styles.container}>              
              <Text style={styles.title}>
                Edite seu perfil! 
              </Text>  

              <Text style={styles.title}>
                Bora tomar uma! 
              </Text>  

              <View style={{marginBottom: 350}} />

              <Button                    
                title="Sair"
                onPress={ this.doLogout }
                borderRadius={25}
                backgroundColor="#00A6ED"
              />                                             
          </View> 
          <FooterHome />                    
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
    }
})