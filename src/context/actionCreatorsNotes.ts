import {
  NotesActionTypes,
  type addNoteAction,
  type deleteNoteAction,
  type setNotesAction,
  type updateNoteAction,
  type updateStatusNoteAction,
  type updateStatusSubnoteAction,
} from '../types/actionsNotes';
import { type INote, type ISubNote } from '../types/note';

export const actionAddNote = (newNote: INote): addNoteAction => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: newNote,
});

export const actionUpdateStatusNote = (id: string): updateStatusNoteAction => ({
  type: NotesActionTypes.UPDATE_STATUS_NOTE,
  payload: id,
});

export const actionDeleteNote = (id: string): deleteNoteAction => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload: id,
});

export const actionUpdateNote = (note: INote): updateNoteAction => ({
  type: NotesActionTypes.UPDATE_NOTE,
  payload: note,
});

export const actionSetNotes = (notes: INote[]): setNotesAction => ({
  type: NotesActionTypes.SET_NOTES,
  payload: notes,
});

export const actionUpdateStatusSubnoteNote = ({
  idNote,
  subnote,
}: {
  idNote: string;
  subnote: ISubNote;
}): updateStatusSubnoteAction => ({
  type: NotesActionTypes.UPDATE_STATUS_SUBNOTE,
  payload: {
    idNote,
    subnote,
  },
});
