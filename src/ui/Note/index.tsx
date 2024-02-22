import {
  Gesture,
  GestureDetector,
  TouchableOpacity,
} from 'react-native-gesture-handler';
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
import {useState} from 'react';
import {Menu} from './components/Menu';
import {Pressable, StyleSheet} from 'react-native';
import {INote, ISubNote} from '@customTypes/note';
import {getTime} from '@utils/getTime';
import { SubTask } from '../SubTask';

export function Note({
  startTime,
  endTime,
  title,
  text,
  checked,
  subNotes,
}: INote) {
  const [checkedValue, setCheckedValue] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSubTasks, setShowSubTasks] = useState(false);
  const [subtasks, setSubtasks] = useState<ISubNote[]>(subNotes);

  const handleCheck = () => {
    setCheckedValue(!checkedValue);
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
    setSubtasks(
      subtasks.map(subtask => {
        if (subtask.id === updatedSubtask.id) {
          return updatedSubtask;
        }
        return subtask;
      }),
    );
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
                {checkedValue && (
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
          <Menu visible={visible} handleCloseMenu={handleCloseMenu} />
        </NoteView>
      </Pressable>
      {showSubTasks && subNotes.length > 0 && (
        <SubTaskWrapper>
          {subtasks.map(subtask => (
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