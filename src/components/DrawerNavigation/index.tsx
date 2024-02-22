import {MainScreen} from '@screens/MainScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DailyTasksScreen} from '@screens/DailyTasksScreen';
import {DoneTasksScreen} from '@screens/DoneTasksScreen';
import {ImportantTasksScreen} from '@screens/ImportantTasksScreen';
import {DrawerMenu} from '../DrawerMenu';

import {NotesProvider} from '@context/note';


const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

 


  return (
    <NotesProvider>
      <Drawer.Navigator
        initialRouteName="MainScreen"
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerMenu {...props} />}>
        <Drawer.Screen
          name="ImportantTasksScreen"
          component={ImportantTasksScreen}
        />
        <Drawer.Screen name="DoneTasksScreen" component={DoneTasksScreen} />
        <Drawer.Screen name="DailyTasksScreen" component={DailyTasksScreen} />
        <Drawer.Screen name="MainScreen" component={MainScreen} />
      </Drawer.Navigator>
    </NotesProvider>
  );
}
