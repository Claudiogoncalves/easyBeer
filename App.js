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
import HeaderHome from './src/screens/HomeScreen'

import Dashboard from './src/screens/Dashboard'
import ListProd from './src/screens/ListProd'
import ListCompany from './src/screens/ListCompany'

StatusBar.setBarStyle('light-content');

const App = StackNavigator({
  Splash: { 
    screen: SplashScreen,
    navigationOptions: { 
      header: null 
    }
  },
  Welcome: { 
    screen: Welcome,
    navigationOptions: { 
      header: null 
    } 
  },      
  Login: { screen: LoginScreen,
    navigationOptions: { 
      header: null 
    }
  },
  Register: { screen: Register,
    navigationOptions: { 
      header: null 
    }
  },
  Home: { screen: Home,
    navigationOptions: { 
      header: null 
    }
  },
  ListProd: { screen: ListProd,
    navigationOptions: { 
      header: null 
    }
  },
  ListCompany: { screen: ListCompany,
    navigationOptions: { 
      header: null 
    }
  },
  Dashboard: { 
    screen: Dashboard,
    navigationOptions: { 
      header: null 
    }
  }    
});

export default App;

