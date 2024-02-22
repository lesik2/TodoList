import {createContext, useReducer} from 'react';
import {INote} from '../types/note';
import {INoteAction, NotesActionTypes} from '../types/actionsNotes';

const initialNotes: INote[] = [];

export const NotesContext = createContext(initialNotes);
export const NotesDispatchContext =
  createContext<React.Dispatch<INoteAction> | null>(null);

export interface INotesProvider {
  children: React.ReactNode;
}

export function NotesProvider({children}: INotesProvider) {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

function notesReducer(notes: INote[], action: INoteAction) {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE: {
      return [...notes, action.payload];
    }
    case NotesActionTypes.UPDATE_NOTE: {
      return notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      });
    }
    case NotesActionTypes.DELETE_NOTE: {
      return notes.filter(note => note.id !== action.payload);
    }
    case NotesActionTypes.SET_NOTES: {
      return [...notes, ...action.payload];
    }
    default: {
      throw Error('Unknown action');
    }
  }
}
