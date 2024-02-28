import {
  CategoriesActionTypes,
  addCategoryAction,
  deleteCategoryAction,
} from '../types/actionsCategory';
import {ICategory} from '../types/category';

export const actionAddCategory = (
  newCategory: ICategory,
): addCategoryAction => {
  return {
    type: CategoriesActionTypes.ADD_CATEGORY,
    payload: newCategory,
  };
};

export const actionDeleteCategory = (id: string): deleteCategoryAction => {
  return {
    type: CategoriesActionTypes.DELETE_CATEGORY,
    payload: id,
  };
};
