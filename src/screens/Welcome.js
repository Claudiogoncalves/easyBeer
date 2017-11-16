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

let width = Dimensions.get('window').width;

export default class Welcome extends Component {  

  returnLogin = () => {
    this.props.navigation.navigate('Login');
  }

  userRegister = () => {
    this.props.navigation.navigate('Register');
  }    

  componentDidMount() {
    AsyncStorage.getItem('token', (err, result) => {
      if(result != 'null'){ 

        result = JSON.parse(result);

        if( !result.error && result.access_token.length > 0 ){                    
          // if logged -> redirecionar para tela interna
          this.doLogin()
        }
      } 
    }); 
  }

  doLogin = () => { 
    this.props.navigation.navigate('Dashboard');
  }  

  render() {        
      
    return (  

      <View style={{ flex:1, backgroundColor: 'transparent' }}>
        <View>
          <Image 
              resizeMode='cover' 
              style={{ height: 700, width: width, position: 'absolute', top:0, left:0, opacity: 0.3 }} 
              source={require('./vegas.jpg')} />
        </View>
        <ScrollView style={{ flex:1 }} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>
                Acabou a bebida da festa? 
            </Text>
            <Text style={styles.titleP}>
               Não se preocupe, pode pedir que entregamos em até uma hora. 
            </Text>                    
          </View>            
        
          <View style={{margin:50}} />
          <Button                     
            title="Login" 
            backgroundColor="#00A6ED"
            onPress={this.returnLogin}
            borderRadius={25}
          /> 

          <View style={{marginTop:20}} /> 

          <Button              
            title="Register"
            backgroundColor="#0D2C54"
            onPress={this.userRegister} 
            borderRadius={25}                                               
          />

          <View style={{marginTop:20}} />                         

          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
          /> 
        </ScrollView>
      </View>             
    )
  }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },

    container: {
        paddingTop: 150,
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
        color: '#0D2C54',
        fontWeight: 'bold' 
    }
})