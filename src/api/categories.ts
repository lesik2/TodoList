import AsyncStorage from '@react-native-async-storage/async-storage';

import { ApiKeys } from '../constants/api';
import { type ICategory } from '../types/category';

export const saveCategory = async (categories: ICategory[]) => {
  try {
    await AsyncStorage.setItem(ApiKeys.KEY_CATEGORIES, JSON.stringify(categories));
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id: string = ApiKeys.KEY_CATEGORIES) => {
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
