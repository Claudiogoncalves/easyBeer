'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  AsyncStorage,
  Button
} from 'react-native';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Right } from 'native-base';
import { NavigationActions, StackNavigator } from 'react-navigation'

class ListCompany extends Component {  
 
  render() {
    return (
      <List>
        <ListItem last onPress={this.props.listProd}>
          <Thumbnail square size={80} source={require('./dist1.jpg')} />
          <Body>
            <Text>Ze das bebidas</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
        <ListItem last>
          <Thumbnail square size={80} source={require('./dist2.png')} />
          <Body>
            <Text>Tiao bebidas</Text>            
          </Body>
          <Right>
            <Text note>comprar</Text>
          </Right>
        </ListItem>
        <ListItem last>
          <Thumbnail square size={80} source={require('./dist3.jpg')} />
          <Body>
            <Text>Manel das bebidas</Text>            
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