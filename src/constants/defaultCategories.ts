import { type ICategory } from '../types/category';

export const defaultCategories: ICategory[] = [
  {
    id: '1',
    name: 'School',
    iconName: 'graduation-cap',
    numberOfNotes: 0,
    backgroundColor: '#2A8899',
  },
  {
    id: '2',
    name: 'Work',
    iconName: 'suitcase',
    numberOfNotes: 0,
    backgroundColor: '#5EB0D2',
  },
  {
    id: '3',
    name: 'Shop',
    iconName: 'shopping-cart',
    numberOfNotes: 0,
    backgroundColor: '#BE8972',
  },
  {
    id: '4',
    name: 'Read',
    iconName: 'book',
    numberOfNotes: 0,
    backgroundColor: '#646FD4',
  },
  {
    id: '5',
    name: 'Work out',
    iconName: 'futbol-o',
    numberOfNotes: 0,
    backgroundColor: '#83BC74',
  },
  {
    id: 'last',
    iconName: 'plus',
  },
];
