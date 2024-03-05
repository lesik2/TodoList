import { CategoriesActionTypes, type ICategoryAction } from '../types/actionsCategory';
import { type ICategory } from '../types/category';

export function categoriesReducer(categories: ICategory[], action: ICategoryAction) {
  switch (action.type) {
    case CategoriesActionTypes.ADD_CATEGORY: {
      return [
        ...categories.slice(0, categories.length - 1),
        ...action.payload,
        categories[categories.length - 1],
      ];
    }

    case CategoriesActionTypes.DELETE_CATEGORY: {
      return categories.filter((category) => category.id !== action.payload);
    }

    default: {
      throw Error('Unknown action');
    }
  }
}
