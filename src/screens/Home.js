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

export default class Home extends Component {   

    constructor(props) {
      super(props);      
    }

    doLogout = () => { 
        AsyncStorage.setItem('token', 'null', () => {                 
          //alert('ok')
          this.props.navigation.navigate('Login');
          //alert('other')
        });
    }     

    render() {        
        
        return ( 
            
                <ScrollView style={{ flex:1 }} contentContainerStyle={styles.contentContainer}>
                  <View style={styles.container}>
                        <Text style={styles.title}>
                            Bem vindo! 
                        </Text>  

                        <Text style={styles.title}>
                            Bora tomar uma! 
                        </Text>  

                        <View style={{marginBottom: 350}} />

                        <Button                    
                            title="Sair"
                            onPress={ this.doLogout }
                            borderRadius={25}
                            backgroundColor="#480EA3"
                        />                                             
                    </View>                     
                </ScrollView>
                         
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#D90368'
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
        color: '#FFF',
        fontWeight: 'bold'                
    },

    titleP: {
        fontSize: 25,
        color: '#480EA3',
        fontWeight: 'bold' 
    }
})