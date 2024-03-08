import { StyleSheet } from 'react-native';
import { ChooseCategory } from '@ui/ChooseCategory';
import { ErrorMessage } from '@ui/ErrorMessage/styled';

import { ContentView, InputText, InputTitle, InputsWrapper, Title, WrapperInput } from './styled';

import { type INoteModal } from '../../types';

export function BasicInfoNote({ newNote, setNewNote, error, setError }: INoteModal) {
  const { title, text } = newNote;

  const handleInputChange = (field: string) => (textInput: string) => {
    setNewNote({ ...newNote, [field]: textInput });
    if (setError) {
      setError('');
    }
  };

  const nameOfInputError = error ? error.split(' ')[0] : '';
  const errorMessage = error ?? '';

  return (
    <ContentView>
      <Title>Create new note</Title>
      <InputsWrapper>
        <WrapperInput>
          <InputTitle
            style={styles.boxShadow}
            placeholder='Title'
            value={title}
            onChangeText={handleInputChange('title')}
          />
          {nameOfInputError === 'title' && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </WrapperInput>
        <WrapperInput>
          <InputText
            style={styles.boxShadow}
            placeholder='Text'
            multiline
            numberOfLines={2}
            value={text}
            onChangeText={handleInputChange('text')}
          />
          {nameOfInputError === 'text' && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </WrapperInput>
        <WrapperInput>
          <ChooseCategory newNote={newNote} setNewNote={setNewNote} setError={setError} />
          {nameOfInputError === 'category' && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </WrapperInput>
      </InputsWrapper>
    </ContentView>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
});
