import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    AsyncStorage
    
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button, SocialIcon } from 'react-native-elements';

//import SplashScreen from 'react-native-splash-screen';

export default class Register extends Component {     

    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            password_confirmation: ''
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

    userRegister = () => {
        //alert('ok');

        let {name} = this.state;
        let {email} = this.state;
        let {password} = this.state;
        let {password_confirmation} = this.state;

        let validated = false;

        if( name.length > 0 &&  email.length > 0 && password.length > 0 ){
            if( password == password_confirmation ){
                validated = true;
            }else{
                alert('Senha e confirmação devem ser iguais');
            }
        }else{
            alert('Preencha todos os campos');
        }

        if(validated){
            fetch("http://192.168.15.7:8000/v1/users", {
                method: "POST", 
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${ name }`,
                    email: `${ email }`,
                    password: `${ password }`,
                    password_confirmation: `${ password_confirmation }`
                })
            })
            .then( (response) => response.json() ) 
                .then( (responseJson) => {
                    alert(responseJson.message);
                    this.userLogin();
                }) 
        }         
    }

    returnLogin = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Register
                </Text>
                <TextInput 
                    placeholder='name'
                    style={{width:358, margin:10}}
                    onChangeText={(text) => this.setState({name:text})}
                />
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
                <TextInput 
                    placeholder='Confirm password' 
                    type='password'
                    style={{width:358, margin:10}}
                    onChangeText={(text) => this.setState({password_confirmation:text})}
                />

                <View style={{margin:7}} />                

                <Button                    
                    title="Submit"
                    onPress={this.userRegister}
                    borderRadius={25}
                    backgroundColor="#00A6ED"
                /> 
                <View style={{marginTop:20}} /> 
                <Button              
                    title="Login"                    
                    onPress={this.returnLogin} 
                    backgroundColor="#0D2C54"                        
                    borderRadius={25}                           
                />          
          
            </ScrollView>
        )
    }
}