import { BackStyle } from '@ui/BackStyle';
import { Header } from '@components/Header';
import { AddNoteButton } from '@ui/AddNoteButton';
import { useCallback, useContext, useMemo, useState } from 'react';
import { CreateNoteModal } from '@components/CreateNoteModal';
import { ScrollView } from 'react-native-gesture-handler';
import { Note } from '@ui/Note';
import { NotesContext } from '@context/contextProvider';
import { StyleSheet } from 'react-native';

import { LayoutView, MainView, WrapperButton, WrapperNotes } from './styled';

export function DoneTasksScreen() {
  const [visible, setVisible] = useState(false);

  const notes = useContext(NotesContext);
  const doneNotes = useMemo(() => notes.filter((note) => note.checked), [notes]);

  const handleOpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <MainView>
      <BackStyle type='apple' />
      <LayoutView>
        <Header title='Done tasks' />
        <WrapperNotes>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            {doneNotes.length > 0 && doneNotes.map((note) => <Note key={note.id} {...note} />)}
          </ScrollView>
        </WrapperNotes>
        <WrapperButton>
          <AddNoteButton handlePress={handleOpenModal} />
        </WrapperButton>

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
