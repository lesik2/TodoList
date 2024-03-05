import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { type NavigationProps } from '@customTypes/navigation';
import { type INote } from '@customTypes/note';

import { InputView, StyledButton, StyledInput } from './styled';

export interface ISearchInput {
  filteredNotes: INote[];
}

export function SearchInput({ filteredNotes }: ISearchInput) {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const handleSearchText = (text: string) => {
    setSearchValue(text);
  };

  const handleSearch = () => {
    if (searchValue === '') return;
    const noteNoteFind = filteredNotes.find((note) =>
      note.title.toLowerCase().startsWith(searchValue.toLowerCase()),
    );

    if (noteNoteFind) {
      navigation.navigate('CategoryScreen', {
        title: noteNoteFind.category,
        notes: filteredNotes.filter((note) => note.category === noteNoteFind.category),
      });
    }

    setSearchValue('');
  };

  return (
    <InputView style={styles.boxShadow}>
      <StyledButton onPress={handleSearch}>
        <Icon name='search' size={28} />
      </StyledButton>
      <StyledInput
        placeholder='Search tasks'
        value={searchValue}
        onChangeText={handleSearchText}
        selectionColor='#646FD4'
      />
    </InputView>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 8,
  },
});
