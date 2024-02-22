import {INote} from './note';

export enum NotesActionTypes {
  ADD_NOTE = 'ADD_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  SET_NOTES = 'SET_NOTES',
}
interface addNoteAction {
  type: NotesActionTypes.ADD_NOTE;
  payload: INote;
}
interface deleteNoteAction {
  type: NotesActionTypes.DELETE_NOTE;
  payload: string;
}
interface updateNoteAction {
  type: NotesActionTypes.UPDATE_NOTE;
  payload: INote;
}
interface setNotesAction {
  type: NotesActionTypes.SET_NOTES;
  payload: INote[];
}


export type INoteAction = addNoteAction | deleteNoteAction | updateNoteAction |setNotesAction;
