import AsyncStorage from '@react-native-async-storage/async-storage';
import { type INote } from '@customTypes/note';

const KEY_NOTES = 'notes';

export const saveNote = async (note: INote[]) => {
  try {
    await AsyncStorage.setItem(KEY_NOTES, JSON.stringify(note));
  } catch (error) {
    console.error(error);
  }
};

export const getNoteById = async (id: string = KEY_NOTES) => {
  let currentNotes: INote[] = [];

  try {
    const savedNote = await AsyncStorage.getItem(id);
    if (savedNote) {
      currentNotes = JSON.parse(savedNote) as INote[];
    }
  } catch (error) {
    console.error(error);
  }

  return currentNotes;
};

export const removeData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(error);
  }
};
