import { Modal, StyleSheet, TouchableOpacity } from 'react-native';

import { CenteredView, DecisionText, DecisionWrapper, ModalView } from './styled';

export interface ICustomModal {
  modalVisible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'none';
  leftButtonText: string;
  rightButtonText: string;
  leftOnHandleClick: () => void;
  rightOnHandleClick: () => void;
}
export function CustomModal({
  modalVisible,
  onRequestClose,
  children,
  animationType = 'fade',
  leftButtonText,
  rightButtonText,
  leftOnHandleClick,
  rightOnHandleClick,
}: ICustomModal) {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}
    >
      <CenteredView>
        <ModalView style={styles.boxShadow}>
          {children}
          <DecisionWrapper>
            <TouchableOpacity onPress={leftOnHandleClick}>
              <DecisionText>{leftButtonText}</DecisionText>
            </TouchableOpacity>
            <TouchableOpacity onPress={rightOnHandleClick}>
              <DecisionText>{rightButtonText}</DecisionText>
            </TouchableOpacity>
          </DecisionWrapper>
        </ModalView>
      </CenteredView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
  },
});
