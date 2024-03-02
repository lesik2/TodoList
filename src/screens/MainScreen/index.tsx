import {LayoutView, MainView} from './styled';
import {Header} from './components/Header';
import {BackStyle} from '@ui/BackStyle';
import {CurrentDay} from './components/CurrentDay';
import {SearchInput} from './components/SearchInput';
import {Filter} from './components/Filter';
import {Categories} from './components/Categories';
import {
  CategoriesContext,
  CategoriesDispatchContext,
  NotesContext,
  NotesDispatchContext,
} from '@context/contextProvider';
import {useContext, useEffect, useState} from 'react';
import {getNoteById, saveNote} from '../../api/notes';
import {actionSetNotes} from '@context/actionCreatorsNotes';
import {getCategoryById, saveCategory} from '@api/categories';
import {actionAddCategory} from '@context/actionCreatorsCategories';

export function MainScreen() {
  const dispatch = useContext(NotesDispatchContext);
  const dispatchCategory = useContext(CategoriesDispatchContext);
  const notes = useContext(NotesContext);
  const categories = useContext(CategoriesContext);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedNotes = await getNoteById();
      const fetchedCategories = await getCategoryById();
      if (dispatch && dispatchCategory) {
        dispatch(actionSetNotes(fetchedNotes));
        dispatchCategory(actionAddCategory(fetchedCategories));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const saveNotes = async () => {
      try {
        console.log(notes);
        await saveNote(notes);
      } catch (error) {
        console.log(error);
      }
    };
    saveNotes();
  }, [notes]);

  useEffect(() => {
    const saveCategories = async () => {
      try {
        await saveCategory(categories.slice(5, categories.length - 1));
      } catch (error) {
        console.log(error);
      }
    };
    if (categories.length > 6) {
      saveCategories();
    }
  }, [categories]);

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
