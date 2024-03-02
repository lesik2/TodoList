import {
  CategoriesActionTypes,
  addCategoryAction,
  deleteCategoryAction,
} from '../types/actionsCategory';
import {ICategory} from '../types/category';

export const actionAddCategory = (
  newCategories: ICategory[],
): addCategoryAction => {
  return {
    type: CategoriesActionTypes.ADD_CATEGORY,
    payload: newCategories,
  };
};

export const actionDeleteCategory = (id: string): deleteCategoryAction => {
  return {
    type: CategoriesActionTypes.DELETE_CATEGORY,
    payload: id,
  };
};
