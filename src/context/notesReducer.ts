import { type INoteAction, NotesActionTypes } from '../types/actionsNotes';
import { type INote } from '../types/note';

export function notesReducer(notes: INote[], action: INoteAction) {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE: {
      return [...notes, action.payload];
    }

    case NotesActionTypes.UPDATE_NOTE: {
      return notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });
    }

    case NotesActionTypes.DELETE_NOTE: {
      return notes.filter((note) => note.id !== action.payload);
    }

    case NotesActionTypes.SET_NOTES: {
      return [...notes, ...action.payload];
    }

    case NotesActionTypes.UPDATE_STATUS_NOTE: {
      return notes.map((note) => {
        if (note.id === action.payload) {
          return {
            ...note,
            checked: !note.checked,
            subNotes: note.subNotes.map((subtask) => ({ ...subtask, checked: !note.checked })),
          };
        }

        return note;
      });
    }

    case NotesActionTypes.UPDATE_STATUS_SUBNOTE: {
      const { idNote, subnote } = action.payload;
      const newNotes = notes.map((note) => {
        if (note.id === idNote) {
          return {
            ...note,
            subNotes: note.subNotes.map((item) => {
              if (item.id === subnote.id) {
                return subnote;
              }

              return item;
            }),
          };
        }

        return note;
      });

      const isChecked =
        newNotes.find((note) => note.id === idNote)?.subNotes.every((item) => item.checked) ?? false;

      return newNotes.map((note) => {
        if (note.id === idNote) {
          return { ...note, checked: isChecked };
        }

        return note;
      });
    }

    default: {
      throw Error('Unknown action');
    }
  }
}
