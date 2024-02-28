import {
  NotesActionTypes,
  addNoteAction,
  deleteNoteAction,
  setNotesAction,
  updateNoteAction,
  updateStatusNoteAction,
  updateStatusSubnoteAction,
} from '../types/actionsNotes';
import {INote, ISubNote} from '../types/note';

export const actionAddNote = (newNote: INote): addNoteAction => {
  return {
    type: NotesActionTypes.ADD_NOTE,
    payload: newNote,
  };
};

export const actionUpdateStatusNote = (id: string): updateStatusNoteAction => {
  return {
    type: NotesActionTypes.UPDATE_STATUS_NOTE,
    payload: id,
  };
};

export const actionDeleteNote = (id: string): deleteNoteAction => {
  return {
    type: NotesActionTypes.DELETE_NOTE,
    payload: id,
  };
};

export const actionUpdateNote = (note: INote): updateNoteAction => {
  return {
    type: NotesActionTypes.UPDATE_NOTE,
    payload: note,
  };
};

export const actionSetNotes = (notes: INote[]): setNotesAction => {
  return {
    type: NotesActionTypes.SET_NOTES,
    payload: notes,
  };
};
export const actionUpdateStatusSubnoteNote = ({
  idNote,
  subnote,
}: {
  idNote: string;
  subnote: ISubNote;
}): updateStatusSubnoteAction => {
  return {
    type: NotesActionTypes.UPDATE_STATUS_SUBNOTE,
    payload: {
      idNote,
      subnote,
    },
  };
};
