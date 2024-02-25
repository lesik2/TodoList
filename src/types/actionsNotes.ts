import {INote, ISubNote} from './note';

export enum NotesActionTypes {
  ADD_NOTE = 'ADD_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  SET_NOTES = 'SET_NOTES',
  UPDATE_STATUS_NOTE = 'UPDATE_STATUS_NOTE',
  UPDATE_STATUS_SUBNOTE = 'UPDATE_STATUS_SUBNOTE'
}
export interface addNoteAction {
  type: NotesActionTypes.ADD_NOTE;
  payload: INote;
}
export interface deleteNoteAction {
  type: NotesActionTypes.DELETE_NOTE;
  payload: string;
}
export interface updateNoteAction {
  type: NotesActionTypes.UPDATE_NOTE;
  payload: INote;
}
export interface setNotesAction {
  type: NotesActionTypes.SET_NOTES;
  payload: INote[];
}
export interface updateStatusSubnoteAction {
  type: NotesActionTypes.UPDATE_STATUS_SUBNOTE;
  payload:  {
    idNote: string;
    subnote: ISubNote;
  };
}

export interface updateStatusNoteAction {
  type: NotesActionTypes.UPDATE_STATUS_NOTE;
  payload: string;
}


export type INoteAction =
  addNoteAction |
  deleteNoteAction |
  updateNoteAction |
  setNotesAction |
  updateStatusNoteAction |
  updateStatusSubnoteAction
;
