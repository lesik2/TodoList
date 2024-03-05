import {
  CategoriesActionTypes,
  type addCategoryAction,
  type deleteCategoryAction,
} from '../types/actionsCategory';
import { type ICategory } from '../types/category';

export const actionAddCategory = (newCategories: ICategory[]): addCategoryAction => ({
  type: CategoriesActionTypes.ADD_CATEGORY,
  payload: newCategories,
});

export const actionDeleteCategory = (id: string): deleteCategoryAction => ({
  type: CategoriesActionTypes.DELETE_CATEGORY,
  payload: id,
});
