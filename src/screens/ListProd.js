import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { NavigationActions, DrawerNavigator, StackNavigator } from 'react-navigation';
import { Container, Icon, Header, Content, List, ListItem, Thumbnail, Text, Body, Right } from 'native-base';
import HeaderHome from '../component/HeaderHome'
import { Button, SocialIcon } from 'react-native-elements'

class ListProd extends Component {

  toggleMenu = () => {
    this.props.navigation.navigate('DrawerOpen');    
  } 

  return = () => {
    this.props.navigation.navigate('Home');
  } 

  
  render() {
    return (
      <Container>
      <HeaderHome 
        toggleMenu={this.toggleMenu}
        title='Zé das bebidas'
      />
      <List>
        <ListItem last>
          <Thumbnail square size={80} source={require('./gas.jpg')} />
          <Body>
            <Text>Água Mineral</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
        <ListItem last>
          <Thumbnail square size={80} source={require('./agua1.jpg')} />
          <Body>
            <Text>Gás</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
        <ListItem last>
          <Thumbnail square size={80} source={require('./cerveja.jpg')} />
          <Body>
            <Text>Cerveja</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
      </List>
      <View style={{marginTop:20}} />
      <Button                   
        title="Voltar"        
        borderRadius={25}
        backgroundColor="#00A6ED"
        onPress={this.return}
      /> 

      </Container> 
    );
  }
}

const styles = StyleSheet.create({

});


export default ListProd;