import { type INote } from '@customTypes/note';

export interface INoteModal {
  newNote: INote;
  setNewNote: React.Dispatch<React.SetStateAction<INote>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}
export interface ITimePicker {
  title: 'from' | 'till';
  newNote: INote;
  setNewNote: React.Dispatch<React.SetStateAction<INote>>;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}
