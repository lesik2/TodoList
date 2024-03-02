import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {INote} from './note';

export type RootStackParamList = {
  StartScreen: undefined;
  MainScreen: undefined;
  DailyTasksScreen: undefined;
  DoneTasksScreen: undefined;
  ImportantTasksScreen: undefined;
  DrawerNavigation: undefined;
  CategoryScreen: {title: string; notes: INote[]};
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
