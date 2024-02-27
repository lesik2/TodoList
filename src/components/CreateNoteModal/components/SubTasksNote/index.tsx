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
import { INoteModal } from '../../types';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';


export function SubTasksNote({
  newNote,
  setNewNote
}: INoteModal) {

  const {title, text, subNotes} = newNote;

  const handleChangeSubtasks = (updatedSubtask: ISubNote) => {

    setNewNote({...newNote,
      subNotes: subNotes.map(subtask => {
      if (subtask.id === updatedSubtask.id) {
        return updatedSubtask;
      }
      return subtask;
    })});
  };

  const handleAddSubtask = () => {
    const newSubTask: ISubNote = {
      id: uuidv4(),
      checked: false,
      text: '',
    };
    setNewNote({...newNote, subNotes: [...subNotes,  newSubTask]});
  };

  return (
    <ContentView>
      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
      </InfoWrapper>
      <SubTasksWrapper>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          {subNotes.length > 0 &&
            subNotes.map(subtask => (
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


