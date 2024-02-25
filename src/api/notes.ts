import AsyncStorage from '@react-native-async-storage/async-storage';
import {INote} from '@customTypes/note';

export const saveNote = async (note: INote[]) => {
  try {
    await AsyncStorage.setItem('notes', JSON.stringify(note));
  } catch (error) {
    console.log(error);
  }
};

export const getNoteById = async (id: string = 'notes') => {
  let currentNotes: INote[] = [];
  try {
    const savedNote = await AsyncStorage.getItem(id);
    if (savedNote) {
      currentNotes = JSON.parse(savedNote) as INote[];
    }
  } catch (error) {
    console.log(error);
  }
  return currentNotes;
};

export const removeNoteById = async (id: string) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    console.log(error);
  }
};

export const mergeNote = async (updatedNote: INote) => {
  try {
    await AsyncStorage.mergeItem(updatedNote.id, JSON.stringify(updatedNote));
  } catch (error) {
    console.log(error);
  }
};

export const getAllNotes = async () => {
  let notes: INote[] = [];
  try {
    const keys = await AsyncStorage.getAllKeys();
    const savedData = await AsyncStorage.multiGet(keys);
    if (savedData.length > 0) {
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

export const removeData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
