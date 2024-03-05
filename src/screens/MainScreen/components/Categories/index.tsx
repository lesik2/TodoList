import { FlatList } from 'react-native-gesture-handler';
import { useCallback, useContext, useEffect, useState } from 'react';
import { generateRandomColor } from '@utils/generateRandomColor';
import { CategoriesContext, CategoriesDispatchContext, NotesContext } from '@context/contextProvider';
import { type ICategory } from '@customTypes/category';
import { actionAddCategory } from '@context/actionCreatorsCategories';
import { type INote } from '@customTypes/note';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { Wrapper } from './styled';

import { Category } from '../Category';
import { AddCategory } from '../AddCategoryModal';

export interface ICategories {
  selectedFilter: string;
  filteredNotes: INote[];
  setFilteredNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

export function Categories({ selectedFilter, filteredNotes, setFilteredNotes }: ICategories) {
  const categories = useContext(CategoriesContext);
  const notes = useContext(NotesContext);
  const dispatch = useContext(CategoriesDispatchContext);

  const [filteredCategories, setFilteredCategories] = useState(categories);

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const addNewCategory = (nameOfCategory: string) => {
    const newCategory: ICategory = {
      id: uuidv4(),
      name: nameOfCategory,
      iconName: 'user',
      numberOfNotes: 0,
      backgroundColor: generateRandomColor(),
    };

    if (dispatch) {
      dispatch(actionAddCategory([newCategory]));
    }
  };

  const getFilteredNotesByDate = (selectFilter: string) => {
    const currentDate = new Date();
    switch (selectFilter) {
      case 'Today':
        return notes.filter((note) => note.date.split('T')[0] === currentDate.toISOString().split('T')[0]);

      case 'Week':
        const currentDayOfWeek = currentDate.getDay();
        const daysUntilEndOfWeek = 6 - currentDayOfWeek;
        const weekEndDate = new Date(currentDate.getTime() + daysUntilEndOfWeek * 24 * 60 * 60 * 1000);

        return notes.filter((note) => {
          const noteDate = new Date(note.date);

          return noteDate >= currentDate && noteDate <= weekEndDate;
        });
      case 'Month':
        const monthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

        return notes.filter((note) => {
          const noteDate = new Date(note.date);

          return noteDate >= currentDate && noteDate < monthEndDate;
        });

      default:
        return notes;
    }
  };

  const getFilteredCategories = (notesFiltered: INote[]) => {
    const categoriesNames = notesFiltered.reduce<string[]>((acc, prev) => [...acc, prev.category], []);

    return categories.filter((category) => {
      if (category.id === 'last') {
        return true;
      } else {
        return categoriesNames.includes(category.name ?? '');
      }
    });
  };

  useEffect(() => {
    if (selectedFilter) {
      const notesFiltered = getFilteredNotesByDate(selectedFilter);
      const categoriesFiltered = getFilteredCategories(notesFiltered);
      setFilteredNotes(notesFiltered);
      setFilteredCategories(categoriesFiltered);
    } else {
      setFilteredNotes(notes);
      setFilteredCategories(categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes, setFilteredNotes]);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  return (
    <Wrapper>
      <FlatList
        numColumns={3}
        data={filteredCategories}
        renderItem={({ item }) => (
          <Category
            key={item.id}
            {...item}
            handleOpenModal={handleOpenModal}
            notes={filteredNotes.filter((note) => note.category === item.name)}
          />
        )}
        contentContainerStyle={{ gap: 16 }}
        columnWrapperStyle={{ gap: 10 }}
      />
      <AddCategory
        addNewCategory={addNewCategory}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Wrapper>
  );
}
