import {createContext, useReducer} from 'react';
import {INote} from '../types/note';
import {INoteAction,} from '../types/actionsNotes';
import { notesReducer } from './notesReducer';
import { ICategory } from '../types/category';
import { defaultCategories } from '../constants/defaultCategories';
import { categoriesReducer } from './categoriesReducer';
import { ICategoryAction } from '../types/actionsCategory';

const initialNotes: INote[] = [];
const initialCategories: ICategory[] = defaultCategories;

export const NotesContext = createContext(initialNotes);
export const NotesDispatchContext =
  createContext<React.Dispatch<INoteAction> | null>(null);

export const CategoriesContext = createContext(initialCategories);
export const CategoriesDispatchContext =
  createContext<React.Dispatch<ICategoryAction> | null>(null);

export interface INotesProvider {
  children: React.ReactNode;
}

export function NotesProvider({children}: INotesProvider) {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  const [categories, dispatchCategory] = useReducer(categoriesReducer, initialCategories);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <CategoriesContext.Provider value={categories}>
          <CategoriesDispatchContext.Provider value = {dispatchCategory}>
            {children}
          </CategoriesDispatchContext.Provider>
        </CategoriesContext.Provider>
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}


