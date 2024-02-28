import {LayoutView, MainView} from './styled';
import {Header} from './components/Header';
import {BackStyle} from '@ui/BackStyle';
import {CurrentDay} from './components/CurrentDay';
import {SearchInput} from './components/SearchInput';
import {Filter} from './components/Filter';
import {Categories} from './components/Categories';
import {
  NotesContext,
  NotesDispatchContext,
  NotesProvider,
} from '@context/contextProvider';
import {useContext, useEffect, useState} from 'react';
import {getNoteById, removeData, saveNote} from '../../api/notes';
import {actionSetNotes} from '@context/actionCreatorsNotes';

export function MainScreen() {
  const dispatch = useContext(NotesDispatchContext);
  const notes = useContext(NotesContext);
  const [selectedFilter, setSelectedFilter] = useState('');

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
    saveNotes();
  }, [notes]);

  return (
    <MainView>
      <BackStyle type="circle" />
      <LayoutView>
        <Header />
        <CurrentDay />
        <SearchInput />
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <Categories selectedFilter={selectedFilter} />
      </LayoutView>
    </MainView>
  );
}
