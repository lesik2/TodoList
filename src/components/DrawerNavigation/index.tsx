import { MainScreen } from '@screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DailyTasksScreen } from '@screens/DailyTasksScreen';
import { DoneTasksScreen } from '@screens/DoneTasksScreen';
import { ImportantTasksScreen } from '@screens/ImportantTasksScreen';
import { NotesProvider } from '@context/contextProvider';
import { CategoryScreen } from '@screens/CategoryScreen';
import { type RootStackParamList } from '@customTypes/navigation';
import { NavigationScreens } from '@constants/navigation';

import { DrawerMenu } from '../DrawerMenu';

const Drawer = createDrawerNavigator<RootStackParamList>();

export function DrawerNavigation() {
  return (
    <NotesProvider>
      <Drawer.Navigator
        initialRouteName='MainScreen'
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerMenu {...props} />}
      >
        <Drawer.Screen name={NavigationScreens.ImportantTasksScreen} component={ImportantTasksScreen} />
        <Drawer.Screen name={NavigationScreens.DoneTasksScreen} component={DoneTasksScreen} />
        <Drawer.Screen name={NavigationScreens.DailyTasksScreen} component={DailyTasksScreen} />
        <Drawer.Screen name={NavigationScreens.MainScreen} component={MainScreen} />
        <Drawer.Screen name={NavigationScreens.CategoryScreen} component={CategoryScreen} />
      </Drawer.Navigator>
    </NotesProvider>
  );
}
