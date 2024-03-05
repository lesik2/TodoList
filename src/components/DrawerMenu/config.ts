import { type RootStackParamList } from '@customTypes/navigation';

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
    screenName: 'DailyTasksScreen',
    id: 1,
  },
  {
    icon: 'star',
    name: 'Important tasks',
    screenName: 'ImportantTasksScreen',
    id: 2,
  },
  {
    icon: 'check',
    name: 'Done tasks',
    screenName: 'DoneTasksScreen',
    id: 3,
  },
];
