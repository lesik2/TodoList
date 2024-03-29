import Icon from 'react-native-vector-icons/FontAwesome';
import { ErrorMessage } from '@ui/ErrorMessage/styled';

import { ContentView, InfoWrapper, StyledButton, SubTitle, TimeWrapper, Title } from './styled';
import { TimePicker } from './components/TimePicker';

import { type INoteModal } from '../../types';

export function TimeNote({ newNote, setNewNote, error, setError }: INoteModal) {
  const { title, text, importance } = newNote;

  const handleCheckedPress = () => {
    setNewNote({ ...newNote, importance: !importance });
  };

  const iconName = importance ? 'star' : 'star-o';
  const iconColor = importance ? '#FFD952' : '#CCCCCC';

  return (
    <ContentView>
      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
      </InfoWrapper>
      <TimeWrapper>
        <TimePicker title='from' newNote={newNote} setNewNote={setNewNote} setError={setError} />
        <TimePicker title='till' newNote={newNote} setNewNote={setNewNote} setError={setError} />
        {typeof error === 'string' && <ErrorMessage>{error}</ErrorMessage>}
      </TimeWrapper>
      <StyledButton onPress={handleCheckedPress}>
        <Icon name={iconName} size={45} color={iconColor} />
      </StyledButton>
    </ContentView>
  );
}
