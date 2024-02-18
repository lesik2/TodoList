import {Wrapper, StyledButton, StyledText} from './styled';
import {filters} from './config';
import {useState} from 'react';

export function Filter() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handlePressSelectedFilter = (filter: string) => () => {
    setSelectedFilter(selectedFilter === filter ? '' : filter);
  };
  return (
    <Wrapper>
      {filters.map(filter => (
        <StyledButton
          key={filter}
          activeOpacity={1}
          onPress={handlePressSelectedFilter(filter)}
          $selected={selectedFilter === filter}>
          <StyledText>{filter}</StyledText>
        </StyledButton>
      ))}
    </Wrapper>
  );
}
