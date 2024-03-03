import {LayoutView, MainView, WrapperButton, WrapperNotes} from './styled';
import {BackStyle} from '@ui/BackStyle';
import {Header} from '@components/Header';
import {AddNoteButton} from '@ui/AddNoteButton';
import {useContext, useState} from 'react';
import {CreateNoteModal} from '@components/CreateNoteModal';
import {ScrollView} from 'react-native-gesture-handler';

import {Note} from '@ui/Note';
import {NotesContext} from '@context/contextProvider';
import {StyleSheet} from 'react-native';
import { CompletedNotes } from '@components/CompletedNotes';

export function ImportantTasksScreen() {
  const [visible, setVisible] = useState(false);

  const notes = useContext(NotesContext);
  const importantNotes = notes.filter(note => note.importance);

  const handleOpenModal = () => {
    setVisible(true);
  };

  return (
    <MainView>
      <BackStyle type="apple" />
      <LayoutView>
        <Header title="Important tasks" />
        <WrapperNotes>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            {importantNotes.length > 0 &&
              importantNotes.map(note => <Note key={note.id} {...note} />)}
          </ScrollView>
        </WrapperNotes>
        <WrapperButton>
          <AddNoteButton handlePress={handleOpenModal} />
        </WrapperButton>
        <CompletedNotes completedNotes={importantNotes.filter((note)=>note.checked)}/>
        <CreateNoteModal visible={visible} setVisible={setVisible} />
      </LayoutView>
    </MainView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    flexDirection: 'column',
    gap: 8,
    paddingVertical: 10,
  },
});
