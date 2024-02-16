import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StartScreen } from '@screens/StartScreen/index';
import { DrawerNavigation } from '../DrawerNavigation';




const Stack = createNativeStackNavigator();



export  function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
