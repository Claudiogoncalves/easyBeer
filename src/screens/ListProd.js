'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Right } from 'native-base';

class ListProd extends Component {
  
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({

});


export default ListProd;