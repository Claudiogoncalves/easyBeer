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

import { StackNavigator, tabNavigator, DrawerNavigator } from 'react-navigation'

import Home from './Home'
import LoginScreen from './LoginScreen'
import Perfil from './Perfil'
import Settings from './Settings'
import Logout from './Logout'
import ListProd from './ListProd'

StatusBar.setBarStyle('light-content');

const Dashboard = DrawerNavigator({  
  Home: { screen: Home,
    navigationOptions: { 
      header: null 
    }
  },
  Perfil: { screen: Perfil,
    navigationOptions: { 
      header: null 
    }
  }, 
  Settings: { screen: Settings,
    navigationOptions: { 
      header: null 
    }
  },   
  Logout: { screen: Logout,
    navigationOptions: { 
      header: null
    }
  },
  ListProd: { screen: ListProd,
    navigationOptions: { 
      header: null
    }
  },   
});

export default Dashboard;

