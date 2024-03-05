import { type RootStackParamList } from '@customTypes/navigation';
import { NavigationScreens } from '@constants/navigation';
export interface IMenuData {
  icon: string;
  name: string;
  screenName: keyof RootStackParamList;
  id: number;
}

export const menuData: IMenuData[] = [
  {
    icon: 'calendar',
    name: 'Daily tasks',
    screenName: NavigationScreens.DailyTasksScreen,
    id: 1,
  },
  {
    icon: 'star',
    name: 'Important tasks',
    screenName: NavigationScreens.ImportantTasksScreen,
    id: 2,
  },
  {
    icon: 'check',
    name: 'Done tasks',
    screenName: NavigationScreens.DoneTasksScreen,
    id: 3,
  },
];
