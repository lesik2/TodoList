import {LayoutView, MainView, WrapperButton, WrapperNotes} from './styled';
import {BackStyle} from '@ui/BackStyle';
import {Header} from '@components/Header';
import {AddNoteButton} from '@ui/AddNoteButton';
import {useContext,  useState} from 'react';
import {CreateNoteModal} from '@components/CreateNoteModal';
import {ScrollView} from 'react-native-gesture-handler';

import {Note} from '@ui/Note';
import { NotesContext } from '@context/note';
import { StyleSheet } from 'react-native';

export function DailyTasksScreen() {
  const [visible, setVisible] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const notes = useContext(NotesContext);
  const dailyNotes = notes.filter((note) => note.date.split('T')[0] === today)



  const handleOpenModal = () => {
    setVisible(true);
  };

  return (
    <MainView>
      <BackStyle type="apple" />
      <LayoutView>
        <Header title="Today’s task" />
        <WrapperNotes>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            {dailyNotes.length > 0 &&
              dailyNotes.map(note => <Note key={note.startTime} {...note} />)}
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
  }
});
