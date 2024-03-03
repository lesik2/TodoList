import {useContext, useState} from 'react';
import {MenuItemText, MenuItems, MenuOption} from './styled';
import {Pressable, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {NotesDispatchContext} from '@context/contextProvider';
import {actionDeleteNote} from '@context/actionCreatorsNotes';
import {CreateNoteModal} from '@components/CreateNoteModal';
import { ModalPermission } from '@ui/ModalPermission';

export interface IMenu {
  idNote: string;
  visible: boolean;
  handleCloseMenu: () => void;
}

export function Menu({visible, handleCloseMenu, idNote}: IMenu) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [showModalPermission, setShowModalPermission] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  const handleDeleteNote = () => {
    if (dispatch) {
      dispatch(actionDeleteNote(idNote));
    }
  };

  const handleOpenPermissionModal = ()=>{
    setShowModalPermission(true);
    handleCloseMenu();
  }
  const handleUpdateNote = () => {
    setVisibleModal(true);
    handleCloseMenu();
  };

  return (
    <>
      {visible && (
        <MenuOption style={styles.boxShadow}>
          <TouchableWithoutFeedback>
            <MenuItems>
              <Pressable
                onPress={handleUpdateNote}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>edit tasks</MenuItemText>
                )}
              />
              <Pressable
                onPress={handleOpenPermissionModal}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>delete tasks</MenuItemText>
                )}
              />
            </MenuItems>
          </TouchableWithoutFeedback>
        </MenuOption>
      )}
      <ModalPermission
        modalVisible={showModalPermission}
        setModalVisible={setShowModalPermission}
        title='Are you sure that you want to delete note?'
        onHandleSuccess={handleDeleteNote}
      />
      <CreateNoteModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        idNote={idNote}
      />
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
