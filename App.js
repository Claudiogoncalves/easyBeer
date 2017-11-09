/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import SplashScreen from './src/screens/SplashScreen'
import Welcome from './src/screens/Welcome'

import { StackNavigator, tabNavigator, DrawerNavigator } from 'react-navigation'
import LoginScreen from './src/screens/LoginScreen'
import Register from  './src/screens/Register'
import Home from './src/screens/Home'

StatusBar.setBarStyle('light-content');

const App = DrawerNavigator({
  Splash: { screen: SplashScreen },
  Welcome: { screen: Welcome },      
  Login: { screen: LoginScreen },
  Register: { screen: Register },
  Home: { screen: Home },   
});

export default App;
