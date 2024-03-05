import { StyleSheet } from 'react-native';

import { Wrapper, StyledButton, StyledText } from './styled';
import { filters } from './config';

export interface IFilter {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

export function Filter({ selectedFilter, setSelectedFilter }: IFilter) {
  const handlePressSelectedFilter = (filter: string) => () => {
    setSelectedFilter(selectedFilter === filter ? '' : filter);
  };

  return (
    <Wrapper>
      {filters.map((filter) => (
        <StyledButton
          style={styles.boxShadow}
          key={filter}
          activeOpacity={1}
          onPress={handlePressSelectedFilter(filter)}
          $selected={selectedFilter === filter}
        >
          <StyledText $selected={selectedFilter === filter}>{filter}</StyledText>
        </StyledButton>
      ))}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#242F9B',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
});
