'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,

} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

class BoxHome extends Component {
  render() {
    return (
      <Container>        
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./vegas.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./vegas.jpg')} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>     
    );
  }
}

const styles = StyleSheet.create({

});


export default BoxHome;