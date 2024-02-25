import { INote } from "@customTypes/note";

export interface INoteModal {
  newNote: INote;
  setNewNote: React.Dispatch<React.SetStateAction<INote>>
}
export interface ITimePicker {
  title: 'from'|'till';
  newNote: INote;
  setNewNote: React.Dispatch<React.SetStateAction<INote>>
}