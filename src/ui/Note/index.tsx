
import {
  AllNotesView,
  CheckBox,
  InfoWrapper,
  MainWrapper,
  NoteView,
  OptionButton,
  SubTaskWrapper,
  SubTitle,
  TimeText,
  TimeWrapper,
  Title,
  Wrapper,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useContext, useState} from 'react';
import {Menu} from './components/Menu';
import {Pressable, StyleSheet} from 'react-native';
import {INote, ISubNote} from '@customTypes/note';
import {getTime} from '@utils/getTime';
import { SubTask } from '../SubTask';
import { NotesDispatchContext } from '@context/note';
import { actionUpdateStatusNote, actionUpdateStatusSubnoteNote } from '@context/actionCreatorsNotes';

export function Note({
  id,
  startTime,
  endTime,
  title,
  text,
  checked,
  subNotes,
}: INote) {
  const dispatch = useContext(NotesDispatchContext);
  const [visible, setVisible] = useState(false);
  const [showSubTasks, setShowSubTasks] = useState(false);

  const handleCheck = () => {
    if(dispatch){
      dispatch(actionUpdateStatusNote(id))
    }
  };

  const handleOpenMenu = () => {
    setVisible(true);
  };

  const handleCloseMenu = () => {
    setVisible(false);
  };
  const handlePressShowSubTasks = () => {
    setShowSubTasks(!showSubTasks);
  };


  const handleChangeSubtasks = (updatedSubtask: ISubNote) => {

    if(dispatch){
      dispatch(actionUpdateStatusSubnoteNote({
          idNote: id,
          subnote: updatedSubtask
      }))
    }

  };

  return (
    <AllNotesView style={styles.boxShadow}>
      <Pressable onPress={handlePressShowSubTasks}>
        <NoteView>
          <Wrapper>
            <TimeWrapper>
              <TimeText>{getTime(new Date(startTime))}</TimeText>
              <TimeText>{getTime(new Date(endTime))}</TimeText>
            </TimeWrapper>
            <MainWrapper>
              <CheckBox onPress={handleCheck} activeOpacity={1}>
                {checked && (
                  <Icon name="check" size={27} color="#8785F6" />
                )}
              </CheckBox>
              <InfoWrapper>
                <Title>{title}</Title>
                <SubTitle>{text}</SubTitle>
              </InfoWrapper>
            </MainWrapper>
          </Wrapper>
          <OptionButton onPress={handleOpenMenu}>
            <Icon name="ellipsis-v" size={26} color="#CCCCCC" />
          </OptionButton>
          <Menu visible={visible} handleCloseMenu={handleCloseMenu} idNote={id} />
        </NoteView>
      </Pressable>
      {showSubTasks && subNotes.length > 0 && (
        <SubTaskWrapper>
          {subNotes.map(subtask => (
            <SubTask 
              name={subtask.text}
              id={subtask.id}
              key={subtask.id}
              checked={subtask.checked}
              handleUpdate={handleChangeSubtasks}
            />
          ))}
        </SubTaskWrapper>
      )}
    </AllNotesView>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#646FD4',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },

});