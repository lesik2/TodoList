import AsyncStorage from '@react-native-community/async-storage';
import { INote } from '@customTypes/note';

export const saveNote = async (note: INote) => {
  try {
    await AsyncStorage.setItem(note.id.toString(), JSON.stringify(note));
  } catch (error) {
    console.log(error);
  }
}


export const getNoteById = async (id: number) => {
  try {
    const savedNote = await AsyncStorage.getItem(id.toString());
    if(savedNote){
      const currentNote = JSON.parse(savedNote) as INote;
      return currentNote;
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeNoteById = async (id: number) => {
  try {
    await AsyncStorage.removeItem(id.toString());
  } catch (error) {
    console.log(error);
  }
};


export const mergeNote = async (updatedNote: INote) => {
  try {
    await AsyncStorage.mergeItem(updatedNote.id.toString(), JSON.stringify(updatedNote));
  } catch (error) {
    console.log(error);
  }
};

export const getAllNotes = async () => {
  let notes: INote[] =[];
  try {
    const keys = await AsyncStorage.getAllKeys();
    const savedData = await AsyncStorage.multiGet(keys);
    if(savedData.length > 0){
      notes = savedData.map(([_key, value]) => {
        const note = JSON.parse(value!);
        return note;
      });
    }
  } catch (error) {
    console.log(error);
  }
  return notes;
};

export const getTodaysNotes = async () => {
  const allNotes = await getAllNotes();
  
  const today = new Date();
  const todayString = today.toISOString().slice(0, 10);
  
  const todaysNotes = allNotes.filter((note: INote) => {
    const noteDate = new Date(note.date);
    const noteDateString = noteDate.toISOString().slice(0, 10);  
    return noteDateString === todayString;
  });
  
  return todaysNotes;
};

export const removeData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
