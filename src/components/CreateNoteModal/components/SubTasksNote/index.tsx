import {
  ContentView,
  InfoWrapper,
  SubTasksWrapper,
  SubTitle,
  Title,
} from './styled';
import {ScrollView, StyleSheet} from 'react-native';

import {ISubNote} from '@customTypes/note';
import {AddNoteButton} from '@ui/AddNoteButton';
import {SubTask} from '@ui/SubTask';

export interface ISubTasksNote {
  title: string;
  text: string;
  setSubtasks: React.Dispatch<React.SetStateAction<ISubNote[]>>;
  subtasks: ISubNote[];
}

export function SubTasksNote({
  title,
  text,
  setSubtasks,
  subtasks,
}: ISubTasksNote) {
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

  const handleAddSubtask = () => {
    const newSubTask: ISubNote = {
      id: subtasks.length === 0 ? 1 : subtasks[subtasks.length - 1].id + 1,
      checked: false,
      text: '',
    };
    setSubtasks([...subtasks, newSubTask]);
  };

  return (
    <ContentView>
      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
      </InfoWrapper>
      <SubTasksWrapper>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          {subtasks.length > 0 &&
            subtasks.map(subtask => (
              <SubTask
                mode="edit"
                id={subtask.id}
                key={subtask.id}
                name={subtask.text}
                checked={subtask.checked}
                handleUpdate={handleChangeSubtasks}
              />
            ))}
        </ScrollView>
      </SubTasksWrapper>
      <AddNoteButton handlePress={handleAddSubtask} size="small" />
    </ContentView>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
  scrollStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
