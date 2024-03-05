import { CustomModal } from '@ui/CustomModal';

import { Title, ContentView } from './styled';

export interface IModalPermission {
  title: string;
  onHandleSuccess: () => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalPermission({ title, onHandleSuccess, modalVisible, setModalVisible }: IModalPermission) {
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
      leftButtonText='Cancel'
      rightButtonText='Ok'
      leftOnHandleClick={handleCloseModal}
      rightOnHandleClick={handleSuccessCloseModal}
    >
      <ContentView>
        <Title>{title}</Title>
      </ContentView>
    </CustomModal>
  );
}
