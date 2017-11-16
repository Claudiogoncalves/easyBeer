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
    ActivityIndicator,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button, SocialIcon } from 'react-native-elements';

import FBSDK, { LoginManager } from 'react-native-fbsdk'
const {
  LoginButton,
} = FBSDK;

let width = Dimensions.get('window').width;

export default class Welcome extends Component {  

  constructor(props) {
      super(props);
      this.state={ 
        waiting: false          
      }
    }  

  returnLogin = () => {
    this.props.navigation.navigate('Login');
  }

  userRegister = () => {
    this.props.navigation.navigate('Register');
  }    

  componentDidMount() {
    AsyncStorage.getItem('token', (err, result) => {
      if(result != 'null' && result != null){  
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

  // _fbAuth() {
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(
  //     function(result) {
  //       if (result.isCancelled) {
  //         alert('Login cancelled');
  //       } else { 
  //         this.loginFace(result.accessToken)
  //       }
  //     },
  //     function(error) {
  //       alert('Login fail with error: ' + error);
  //     }
  //   );
  // } 

  loginFace = (access_token) => {    

        this.setState({
          waiting:true
        })

      // ip house 192.168.0.14
      fetch("http://192.168.0.14:8000/v1/oauth/token", {
        method: "POST", 
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: 2,
            client_secret: '4hCTvXd7kV5Oqpylk5bCjeMx6Mwi3jtXQSSQ3u57',
            grant_type: 'social',
            network: 'facebook',
            access_token: access_token                                
        })
      })
      .then( (response) => response.json() ) 
        .then( (responseJson) => {                            
          AsyncStorage.setItem('token', JSON.stringify(responseJson), () => { 
            this.setState({
              waiting:false
            })
            this.doLogin()
          });
      })     
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

          { !this.state.waiting ? 

            <Button                     
              title="Login" 
              backgroundColor="#00A6ED"
              onPress={this.returnLogin}
              borderRadius={25}
            />  
          :
            <ActivityIndicator
              style={[styles.centering, styles.gray]}
              color="white"
              size="large"
            /> 
          } 

        { !this.state.waiting ? 
          <View style={{marginTop:20}} /> 
        : null } 

        { !this.state.waiting ? 
          <Button              
            title="Register"
            backgroundColor="#0D2C54"
            onPress={this.userRegister} 
            borderRadius={25}                                               
          />
        : null } 

        { !this.state.waiting ? 
          <View style={{marginTop:20}} />
        : null } 
        
        { !this.state.waiting ? 
          <View  style={styles.defaultButtonStyle}>
            <LoginButton              
              
              publishPermissions={["publish_actions"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("Login failed with error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("Login was cancelled");
                  } else { 
                    this.loginFace(result.accessToken);
                  }
                }
              }
              onLogoutFinished={() => alert("User logged out")}
            />
          </View>
        : null }                   
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
    },
    defaultButtonStyle: {
    height: 40,
    width: 260,
    marginLeft: 110,
    
  }
})