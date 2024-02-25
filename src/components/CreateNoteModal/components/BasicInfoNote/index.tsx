import {CustomModal} from '@ui/CustomModal';
import {
  ContentView,
  InputText,
  InputTitle,
  InputsWrapper,
  Title,
} from './styled';
import {StyleSheet} from 'react-native';

import {ChooseCategory} from '@ui/ChooseCategory';
import { INoteModal } from '../../types';


export function BasicInfoNote({
  newNote,
  setNewNote
}: INoteModal) {

  const {title, text} = newNote;
  const handleInputTitle = (text: string) => {
    setNewNote({...newNote, title: text});
  };

  const handleInputTextArea = (text: string) => {
    setNewNote({...newNote, text: text});
  };

  return (
    <ContentView>
      <Title>Create new note</Title>
      <InputsWrapper>
        <InputTitle
          style={styles.boxShadow}
          placeholder="Title"
          value={title}
          onChangeText={handleInputTitle}
        />
        <InputText
          style={styles.boxShadow}
          placeholder="Text"
          multiline
          numberOfLines={2}
          value={text}
          onChangeText={handleInputTextArea}
        />
        <ChooseCategory newNote={newNote} setNewNote={setNewNote}/>
      </InputsWrapper>
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
});
