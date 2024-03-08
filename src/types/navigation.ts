import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { type INote } from './note';

export interface RootStackParamList {
  StartScreen: undefined;
  MainScreen: undefined;
  DailyTasksScreen: undefined;
  DoneTasksScreen: undefined;
  ImportantTasksScreen: undefined;
  DrawerNavigation: undefined;
  CategoryScreen: { title: string; notes: INote[] };
  [key: string]: undefined | { title: string; notes: INote[] };
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
