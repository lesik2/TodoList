import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainPage } from '@screens/MainPage/index';
import { StartPage } from '@screens/StartPage/index';

const Stack = createNativeStackNavigator();



export  function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
