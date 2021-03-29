import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Contador from './pages/contador';
import Login from './pages/Login';
import Home from './pages/Home';

const AppStack = createStackNavigator();

export default function Routes() {
    
    return (
        <NavigationContainer>
        <AppStack.Navigator 
          headerMode="none">
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Contador" component={Contador} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
};