'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Right } from 'native-base';
import { NavigationActions, StackNavigator } from 'react-navigation'

class ListCompany extends Component {  

  constructor(props) {
    super(props);    
  }
  
  returnRegister = () => {
    this.props.navigation.navigate('ListProd');
  } 
  
  render() {
    return (
      <List>
        <ListItem last onPress={this.returnRegister}>
          <Thumbnail square size={80} source={require('./dist1.jpg')} />
          <Body>
            <Text>Água Mineral</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
        <ListItem last>
          <Thumbnail square size={80} source={require('./dist2.png')} />
          <Body>
            <Text>Gás</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
        <ListItem last>
          <Thumbnail square size={80} source={require('./dist3.jpg')} />
          <Body>
            <Text>Cerveja</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({

});

export default ListCompany;