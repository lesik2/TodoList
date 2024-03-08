import { BackStyle } from '@ui/BackStyle';
import {
  CategoriesContext,
  CategoriesDispatchContext,
  NotesContext,
  NotesDispatchContext,
} from '@context/contextProvider';
import { useContext, useEffect, useState } from 'react';
import { actionSetNotes } from '@context/actionCreatorsNotes';
import { getCategoryById, saveCategory } from '@api/categories';
import { actionAddCategory } from '@context/actionCreatorsCategories';
import notifee, { EventType } from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { type NavigationProps } from '@customTypes/navigation';
import { NavigationScreens } from '@constants/navigation';
import { CurrentDay } from './components/CurrentDay';
import { Categories } from './components/Categories';
import { Filter } from './components/Filter';
import { SearchInput } from './components/SearchInput';
import { Header } from './components/Header';
import { LayoutView, MainView } from './styled';

import { getNoteById, saveNote } from '../../api/notes';

export function MainScreen() {
  const dispatch = useContext(NotesDispatchContext);
  const dispatchCategory = useContext(CategoriesDispatchContext);
  const notes = useContext(NotesContext);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const categories = useContext(CategoriesContext);
  const [selectedFilter, setSelectedFilter] = useState('');
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedNotes = await getNoteById();
      const fetchedCategories = await getCategoryById();
      if (dispatch && dispatchCategory) {
        dispatch(actionSetNotes(fetchedNotes));
        dispatchCategory(actionAddCategory(fetchedCategories));
      }
    };

    fetchData().catch((error) => {
      console.error(error);
    });
  }, [dispatch, dispatchCategory]);

  useEffect(() => {
    const saveNotes = async () => {
      try {
        await saveNote(notes);
      } catch (error) {
        console.error(error);
      }
    };

    saveNotes().catch((error) => {
      console.error(error);
    });
  }, [notes]);

  useEffect(() => {
    const saveCategories = async () => {
      try {
        await saveCategory(categories.slice(5, categories.length - 1));
      } catch (error) {
        console.error(error);
      }
    };

    if (categories.length > 6) {
      saveCategories().catch((error) => {
        console.error(error);
      });
    }
  }, [categories]);

  useEffect(
    () =>
      notifee.onForegroundEvent(({ type, detail }) => {
        switch (type) {
          case EventType.DISMISSED:
            console.info('User dismissed notification', detail.notification);
            break;
          case EventType.PRESS:
            console.info('User pressed notification', detail.notification);
            navigation.navigate(NavigationScreens.DailyTasksScreen);
            break;
        }
      }),
    [navigation],
  );

  return (
    <MainView>
      <BackStyle type='circle' />
      <LayoutView>
        <Header />
        <CurrentDay />
        <SearchInput filteredNotes={filteredNotes} />
        <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <Categories
          selectedFilter={selectedFilter}
          filteredNotes={filteredNotes}
          setFilteredNotes={setFilteredNotes}
        />
      </LayoutView>
    </MainView>
  );
}
