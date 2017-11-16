import React, { Component } from 'react-native'
import { View, Text, TouchableHighlight } from 'react-native'
import FacebookLogin from 'react-native-android-facebook-login'
 
export default class LoginFace extends Component {
  constructor(nativeProps) {
    super(nativeProps)
 
    this.state = {
      profile: null,
      didCancelled: false
    }
  }
 
  async getUserProfileAndSetState() {
    const profile = await FacebookLogin.getLoggedInUserProfile()
 
    if (profile) {
      this.setState({
        profile
      })
    }
  }
 
  async logIn() {
    const loggedIn = FacebookLogin.isLoggedIn()
 
    if (loggedIn) {
      this.getUserProfileAndSetState()
      return
    }
 
    const loginResult = await FacebookLogin.logInWithReadPermissions(['public_profile'])
 
    if (loginResult.isCancelled) {
      this.setState({
        didCancelled: true
      })
 
      return
    }
 
    this.getUserProfileAndSetState()
  }
 
  render() {
    if (this.state.profile) {
      return (
        <View>
          <Text>I'm logged in as {this.state.profile.name}</Text>
        </View>
      )
    }
 
    return (
      <View>
        {this.state.didCancelled && (
          <Text>Why?</Text>
        )}
        <TouchableHighlight onPress={this.logIn.bind(this)}>
          <Text>Log in with Facebook</Text>
        </TouchableHighlight>
      </View>
    )
  }
}