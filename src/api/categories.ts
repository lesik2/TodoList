import AsyncStorage from '@react-native-async-storage/async-storage';

import { type ICategory } from '../types/category';

const KEY_CATEGORIES = 'categories';

export const saveCategory = async (categories: ICategory[]) => {
  try {
    await AsyncStorage.setItem(KEY_CATEGORIES, JSON.stringify(categories));
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id: string = KEY_CATEGORIES) => {
  let currentCategories: ICategory[] = [];

  try {
    const savedCategory = await AsyncStorage.getItem(id);
    if (savedCategory) {
      currentCategories = JSON.parse(savedCategory) as ICategory[];
    }
  } catch (error) {
    console.error(error);
  }

  return currentCategories;
};
