'use strict';

import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationActions, DrawerNavigator } from 'react-navigation';

import {
  StyleSheet,
  View,
} from 'react-native';

class HeaderHome extends Component {  
  render() {
    return (
      <Container>
        <Header style={styles.container}>
          <Left>
            <Button transparent
            onPress={this.props.toggleMenu}
            >
              <Icon name='menu' />
            </Button>
          </Left>          
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6511D'
  }
});


export default HeaderHome;