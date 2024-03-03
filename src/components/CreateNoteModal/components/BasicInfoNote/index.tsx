import {
  ContentView,
  InputText,
  InputTitle,
  InputsWrapper,
  Title,
  WrapperInput,
} from './styled';
import {StyleSheet} from 'react-native';

import {ChooseCategory} from '@ui/ChooseCategory';
import {INoteModal} from '../../types';
import {ErrorMessage} from '@ui/ErrorMessage/styled';

export function BasicInfoNote({
  newNote,
  setNewNote,
  error,
  setError,
}: INoteModal) {
  const {title, text} = newNote;
  const handleInputTitle = (text: string) => {
    setNewNote({...newNote, title: text});
    if (setError) {
      setError('');
    }
  };

  const handleInputTextArea = (text: string) => {
    setNewNote({...newNote, text: text});
    if (setError) {
      setError('');
    }
  };

  const nameOfInputError = error ? error.split(' ')[0] : '';
  const errorMessage = error ? error : '';

  return (
    <ContentView>
      <Title>Create new note</Title>
      <InputsWrapper>
        <WrapperInput>
          <InputTitle
            style={styles.boxShadow}
            placeholder="Title"
            value={title}
            onChangeText={handleInputTitle}
          />
          {nameOfInputError === 'title' && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </WrapperInput>
        <WrapperInput>
          <InputText
            style={styles.boxShadow}
            placeholder="Text"
            multiline
            numberOfLines={2}
            value={text}
            onChangeText={handleInputTextArea}
          />
          {nameOfInputError === 'text' && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </WrapperInput>
        <WrapperInput>
          <ChooseCategory
            newNote={newNote}
            setNewNote={setNewNote}
            setError={setError}
          />
          {nameOfInputError === 'category' && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </WrapperInput>
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
