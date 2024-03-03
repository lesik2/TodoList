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
import notifee, {EventType} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@customTypes/navigation';

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

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          navigation.navigate('DailyTasksScreen');
          break;
      }
    });
  }, []);

  return (
    <MainView>
      <BackStyle type="circle" />
      <LayoutView>
        <Header />
        <CurrentDay />
        <SearchInput filteredNotes={filteredNotes} />
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <Categories
          selectedFilter={selectedFilter}
          filteredNotes={filteredNotes}
          setFilteredNotes={setFilteredNotes}
        />
      </LayoutView>
    </MainView>
  );
}
