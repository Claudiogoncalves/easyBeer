'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

class FooterHome extends Component {
  render() {
    return (
      <Container>        
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6511D'
  }
});


export default FooterHome;