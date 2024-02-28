import {Title, ContentView} from './styled';
import {CustomModal} from '@ui/CustomModal';
import {StyleSheet} from 'react-native';

export interface IModalPermission {
  title: string;
  onHandleSuccess: () => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalPermission({
  title,
  onHandleSuccess,
  modalVisible,
  setModalVisible,
}: IModalPermission) {
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSuccessCloseModal = () => {
    onHandleSuccess();
    handleCloseModal();
  };

  return (
    <CustomModal
      modalVisible={modalVisible}
      onRequestClose={handleCloseModal}
      leftButtonText="Cancel"
      rightButtonText="Ok"
      leftOnHandleClick={handleCloseModal}
      rightOnHandleClick={handleSuccessCloseModal}>
      <ContentView>
        <Title>{title}</Title>
      </ContentView>
    </CustomModal>
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
