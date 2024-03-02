import {LayoutView, MainView, WrapperButton, WrapperNotes} from './styled';
import {BackStyle} from '@ui/BackStyle';
import {Header} from '@components/Header';
import {AddNoteButton} from '@ui/AddNoteButton';
import {useState} from 'react';
import {CreateNoteModal} from '@components/CreateNoteModal';
import {ScrollView} from 'react-native-gesture-handler';

import {Note} from '@ui/Note';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from '@customTypes/navigation';
import {RouteProp} from '@react-navigation/native';

export interface ICategoryScreen {
  route: RouteProp<RootStackParamList, 'CategoryScreen'>;
}

export const CategoryScreen: React.FunctionComponent<ICategoryScreen> = ({
  route,
}) => {
  const [visible, setVisible] = useState(false);

  const {title, notes} = route.params;

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
            {notes.length > 0 &&
              notes.map(note => <Note key={note.id} {...note} />)}
          </ScrollView>
        </WrapperNotes>
        <WrapperButton>
          <AddNoteButton handlePress={handleOpenModal} />
        </WrapperButton>

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
