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
import { SocialIcon } from 'react-native-elements';
import HeaderHome from '../component/HeaderHome'
import FooterHome from '../component/FooterHome'
import BoxHome from '../component/BoxHome'


import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

let width = Dimensions.get('window').width;

export default class Home extends Component {   

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
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (        
        <Icon 
          ios='ios-home' 
          android="md-home" 
          style={{fontSize: 24, color: '#F6511D'}}           
          />
      ), 
    } 

    render() {        
        
      return (        
        <Container>
          <HeaderHome 
            toggleMenu={this.toggleMenu}
            title='Home'
          />

          <BoxHome />
              
          <Footer>
            <FooterTab style={styles.container}>
              <Button badge vertical>              
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button badge vertical>              
                <Icon name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>          
        </Container>                       
      )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F6511D'
    }    
})