import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ContentView,
  InfoWrapper,
  StyledButton,
  SubTitle,
  TimeWrapper,
  Title,
} from './styled';

import {TimePicker} from './components/TimePicker';
import { INoteModal } from '../../types';



export function TimeNote({
  newNote,
  setNewNote
}: INoteModal) {

  const {title, text, importance, startTime, endTime} = newNote;

  const handleCheckedPress = () => {
    setNewNote({...newNote, importance: !importance});
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
        <TimePicker title="from"  newNote={newNote} setNewNote={setNewNote}/>
        <TimePicker title="till" newNote={newNote} setNewNote={setNewNote} />
      </TimeWrapper>
      <StyledButton onPress={handleCheckedPress}>
        <Icon name={iconName} size={45} color={iconColor} />
      </StyledButton>
    </ContentView>
  );
}
