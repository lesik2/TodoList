import { useContext, useState } from 'react';
import {MenuItemText, MenuItems, MenuOption} from './styled';
import {Pressable, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { NotesDispatchContext } from '@context/note';
import { actionDeleteNote } from '@context/actionCreatorsNotes';
import { CreateNoteModal } from '@components/CreateNoteModal';

export interface IMenu {
  idNote: string;
  visible: boolean;
  handleCloseMenu: () => void;
}

export function Menu({visible, handleCloseMenu, idNote}: IMenu) {
  const [visibleModal, setVisibleModal] = useState(false);
  const dispatch = useContext(NotesDispatchContext);


    const handleDeleteNote = () => {
      if(dispatch){
        dispatch(actionDeleteNote(idNote))
        handleCloseMenu();
      }
    }
    const handleUpdateNote = () => {
      setVisibleModal(true);
      handleCloseMenu();
    }


  return (
    <>
      {visible && (
        <MenuOption style={styles.boxShadow}>
          <TouchableWithoutFeedback>
            <MenuItems>
              <Pressable
                onPress={handleCloseMenu}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>add subtasks</MenuItemText>
                )}
              />
              <Pressable
                onPress={handleUpdateNote}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>edit tasks</MenuItemText>
                )}
              />
              <Pressable
                onPress={handleDeleteNote}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>delete tasks</MenuItemText>
                )}
              />
            </MenuItems>
          </TouchableWithoutFeedback>
        </MenuOption>
      )}
      <CreateNoteModal visible={visibleModal} setVisible={setVisibleModal} idNote={idNote}/>
    </>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
