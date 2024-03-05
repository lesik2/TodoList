import { BackStyle } from '@ui/BackStyle';
import { Header } from '@components/Header';
import { AddNoteButton } from '@ui/AddNoteButton';
import { useCallback, useState } from 'react';
import { CreateNoteModal } from '@components/CreateNoteModal';
import { ScrollView } from 'react-native-gesture-handler';
import { Note } from '@ui/Note';
import { StyleSheet } from 'react-native';
import { CompletedNotes } from '@components/CompletedNotes';
import { useGetSelectedNotes } from '@hooks/getSelectedNotes';
import { NoteState } from '@constants/noteState';

import { LayoutView, MainView, WrapperButton, WrapperNotes } from './styled';

export function DailyTasksScreen() {
  const [visible, setVisible] = useState(false);

  const dailyNotes = useGetSelectedNotes(NoteState.DAILY);

  const handleOpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <MainView>
      <BackStyle type='apple' />
      <LayoutView>
        <Header title='Today’s tasks' />
        <WrapperNotes>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            {dailyNotes.length > 0 && dailyNotes.map((note) => <Note key={note.id} {...note} />)}
          </ScrollView>
        </WrapperNotes>
        <WrapperButton>
          <AddNoteButton handlePress={handleOpenModal} />
        </WrapperButton>
        <CompletedNotes completedNotes={dailyNotes.filter((note) => note.checked)} />
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
