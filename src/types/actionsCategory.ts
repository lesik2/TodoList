import { type ICategory } from './category';

export enum CategoriesActionTypes {
  ADD_CATEGORY = 'ADD_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}
export interface addCategoryAction {
  type: CategoriesActionTypes.ADD_CATEGORY;
  payload: ICategory[];
}
export interface deleteCategoryAction {
  type: CategoriesActionTypes.DELETE_CATEGORY;
  payload: string;
}

export type ICategoryAction = addCategoryAction | deleteCategoryAction;
