import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartScreen } from '@screens/StartScreen/index';
import { NavigationScreens } from '@constants/navigation';

import { DrawerNavigation } from '../DrawerNavigation';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationScreens.StartScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={NavigationScreens.StartScreen} component={StartScreen} />
        <Stack.Screen
          name={NavigationScreens.DrawerNavigation}
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
