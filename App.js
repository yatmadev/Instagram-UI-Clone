import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';
import Splash from './Splash'
import Tabs from './Tabs'
const AppStackNavigator = createStackNavigator({ 

  Splash:{
    screen: Splash
  },
   
  Tabs:{
    screen:Tabs
  },
},
    navigationOptions={
      headerMode:'none'
})

const App = createAppContainer(AppStackNavigator);

export default App; 
