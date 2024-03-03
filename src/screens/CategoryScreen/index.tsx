import {LayoutView, MainView, WrapperButton, WrapperNotes} from './styled';
import {BackStyle} from '@ui/BackStyle';
import {Header} from '@components/Header';
import {AddNoteButton} from '@ui/AddNoteButton';
import {useContext, useState} from 'react';
import {CreateNoteModal} from '@components/CreateNoteModal';
import {ScrollView} from 'react-native-gesture-handler';

import {Note} from '@ui/Note';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from '@customTypes/navigation';
import {RouteProp} from '@react-navigation/native';
import { NotesContext } from '@context/contextProvider';
import { CompletedNotes } from '@components/CompletedNotes';

export interface ICategoryScreen {
  route: RouteProp<RootStackParamList, 'CategoryScreen'>;
}

export const CategoryScreen: React.FunctionComponent<ICategoryScreen> = ({
  route,
}) => {
  const [visible, setVisible] = useState(false);
  const allNotes = useContext(NotesContext);
  const {title, notes} = route.params;

  const ids = notes.map((note)=>note.id);

  const currentNotes = allNotes.filter((note)=>ids.includes(note.id));
  const handleOpenModal = () => {
    setVisible(true);
  };

  return (
    <MainView>
      <BackStyle type="apple" />
      <LayoutView>
        <Header title={title} />
        <WrapperNotes>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            {currentNotes.length > 0 &&
              currentNotes.map(note => <Note key={note.id} {...note} />)}
          </ScrollView>
        </WrapperNotes>
        <WrapperButton>
          <AddNoteButton handlePress={handleOpenModal} />
        </WrapperButton>
        <CompletedNotes completedNotes={currentNotes.filter((note)=>note.checked)}/>
        <CreateNoteModal visible={visible} setVisible={setVisible} />
      </LayoutView>
    </MainView>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    flexDirection: 'column',
    gap: 8,
    paddingVertical: 10,
  },
});
