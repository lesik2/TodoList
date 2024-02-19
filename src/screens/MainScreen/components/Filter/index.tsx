import {Wrapper, StyledButton, StyledText} from './styled';
import {filters} from './config';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

export function Filter() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handlePressSelectedFilter = (filter: string) => () => {
    setSelectedFilter(selectedFilter === filter ? '' : filter);
  };
  return (
    <Wrapper>
      {filters.map(filter => (
        <StyledButton
          style={styles.boxShadow}
          key={filter}
          activeOpacity={1}
          onPress={handlePressSelectedFilter(filter)}
          $selected={selectedFilter === filter}>
          <StyledText $selected={selectedFilter === filter}>
            {filter}
          </StyledText>
        </StyledButton>
      ))}
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#242F9B',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
});
