import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,    
    AsyncStorage,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button, SocialIcon } from 'react-native-elements';

export default class LoginScreen extends Component { 

    constructor(props) {
      super(props);
      this.state={
        email:'',            
        password:'' ,
        waiting: false          
      }
    }    
    
    userLogin = () => {
      //alert('ok');

      let {email} = this.state;        
      let {password} = this.state;
      let validated = false;

      if( email.length > 0 &&  password.length > 0 ){
        validated = true;            
      }else{
        alert('Preencha todos os campos');
      }

      if(validated){
        this.setState({
          waiting:true
        })

        // ip house 192.168.0.14
        fetch("http://192.168.15.7:8000/v1/oauth/token", {
          method: "POST", 
          headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              client_id: 2,
              client_secret: '4hCTvXd7kV5Oqpylk5bCjeMx6Mwi3jtXQSSQ3u57',
              grant_type: 'password',                   
              username: `${ email }`,
              password: `${ password }`                    
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
    }

    doLogin = () => { 
      this.props.navigation.navigate('Dashboard');
    }

    returnRegister = () => {
      this.props.navigation.navigate('Register');
    }

    render() {       

      return (
        <ScrollView style={{padding: 20}}>
          <Text 
            style={{fontSize: 27}}>
            Login
          </Text>
          <TextInput 
            placeholder='email'
            style={{width:358, margin:10}}
            onChangeText={(text) => this.setState({email:text})}
          />
          <TextInput 
            placeholder='Password' 
            type='password'
            style={{width:358, margin:10}}
            onChangeText={(text) => this.setState({password:text})}
          />

          <View style={{marginTop:20}} />

          { !this.state.waiting ? 
            <Button                    
                title="Submit"
                onPress={this.userLogin}
                borderRadius={25}
                backgroundColor="#00A6ED"
            />
          :
            <ActivityIndicator
              style={[styles.centering, styles.gray]}
              color="white"
              size="large"
            /> 
          }
          <View style={{marginTop:20}} />
            { !this.state.waiting ? 
              <Button              
                title="Register"
                backgroundColor="#0D2C54"
                onPress={this.returnRegister}
                borderRadius={25}                            
              />
              : null
            }
        </ScrollView>
      )
    }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  }, 
}); 
