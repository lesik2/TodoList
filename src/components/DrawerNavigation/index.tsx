import { MainScreen } from '@screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DailyTasksScreen } from '@screens/DailyTasksScreen';
import { DoneTasksScreen } from '@screens/DoneTasksScreen';
import { ImportantTasksScreen } from '@screens/ImportantTasksScreen';


const Drawer = createDrawerNavigator();



export function DrawerNavigation() {
  return (
        <Drawer.Navigator>
          <Drawer.Screen name="ImportantTasksScreen" component={ImportantTasksScreen} />
          <Drawer.Screen name="DoneTasksScreen" component={DoneTasksScreen} />
          <Drawer.Screen name="DailyTasksScreen" component={DailyTasksScreen} />
          <Drawer.Screen name="MainScreen" component={MainScreen} />
        </Drawer.Navigator>
      )
}