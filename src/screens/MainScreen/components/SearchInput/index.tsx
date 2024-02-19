import Icon from 'react-native-vector-icons/FontAwesome';
import {InputView, StyledButton, StyledInput} from './styled';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

export function SearchInput() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchText = (text: string) => {
    setSearchValue(text);
  };

  return (
    <InputView style={styles.boxShadow}>
      <StyledButton>
        <Icon name="search" size={28} />
      </StyledButton>
      <StyledInput
        placeholder="Search tasks"
        value={searchValue}
        onChangeText={handleSearchText}
        selectionColor="#646FD4"
      />
    </InputView>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 8,
  },
});
