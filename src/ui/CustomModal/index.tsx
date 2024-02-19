import {Modal} from 'react-native';
import {CenteredView} from './styled';

export interface ICustomModal {
  modalVisible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'none';
}
export function CustomModal({
  modalVisible,
  onRequestClose,
  children,
  animationType = 'fade',
}: ICustomModal) {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      statusBarTranslucent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      <CenteredView>{children}</CenteredView>
    </Modal>
  );
}
