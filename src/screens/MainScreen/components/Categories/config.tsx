export interface IDefaultCategories {
  id: number;
  name: string;
  iconName: string;
  numberOfNotes: number;
  backgroundColor: string;
}

export const defaultCategories: IDefaultCategories[] = [
  {
    id: 1,
    name: 'School',
    iconName: 'graduation-cap',
    numberOfNotes: 5,
    backgroundColor: '#2A8899',
  },
  {
    id: 2,
    name: 'Work',
    iconName: 'suitcase',
    numberOfNotes: 3,
    backgroundColor: '#5EB0D2',
  },
  {
    id: 3,
    name: 'Shop',
    iconName: 'shopping-cart',
    numberOfNotes: 12,
    backgroundColor: '#BE8972',
  },
  {
    id: 4,
    name: 'Read',
    iconName: 'book',
    numberOfNotes: 2,
    backgroundColor: '#646FD4',
  },
  {
    id: 5,
    name: 'Work out',
    iconName: 'futbol-o',
    numberOfNotes: 3,
    backgroundColor: '#83BC74',
  },
];
