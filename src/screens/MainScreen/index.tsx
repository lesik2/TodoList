import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {LayoutView, MainView} from './styled';
import {Header} from './components/Header';
import {BackStyle} from '@ui/BackStyle';
import {CurrentDay} from './components/CurrentDay';
import {SearchInput} from './components/SearchInput';
import {Filter} from './components/Filter';
import {Categories} from './components/Categories';
import {NotesContext, NotesDispatchContext, NotesProvider} from '@context/note';
import {useContext, useEffect} from 'react';
import {getNoteById, removeData, saveNote} from '../../api/notes';
import { actionSetNotes } from '@context/actionCreatorsNotes';


export function MainScreen() {
  const dispatch = useContext(NotesDispatchContext);
  const notes = useContext(NotesContext);


  useEffect(() => {
    const fetchData = async () => {
      const fetchedNotes = await getNoteById();
      if (dispatch) {
        dispatch(actionSetNotes(fetchedNotes));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const saveNotes = async () => {
      try {

        await saveNote(notes);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(notes);
    saveNotes();
  }, [notes]);

  return (
    <MainView>
      <BackStyle type="circle" />
      <LayoutView>
        <Header />
        <CurrentDay />
        <SearchInput />
        <Filter />
        <Categories />
      </LayoutView>
    </MainView>
  );
}
