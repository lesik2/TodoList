import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme/index';
import {Navigation} from './src/components/Navigation';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ImportantTasksScreen} from './src/screens/ImportantTasksScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DoneTasksScreen} from './src/screens/DoneTasksScreen';
import {DailyTasksScreen} from './src/screens/DailyTasksScreen';
import {StartScreen} from './src/screens/StartScreen';
import {MainScreen} from './src/screens/MainScreen';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Home" component={ImportantTasksScreen} />
      <Drawer.Screen name="Profile" component={DoneTasksScreen} />
      <Drawer.Screen name="Settings" component={DailyTasksScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.secondary} />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
