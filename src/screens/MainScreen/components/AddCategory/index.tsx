import {Modal, TouchableOpacity} from 'react-native';
import {
  CenteredView,
  DecisionText,
  DecisionWrapper,
  ModalView,
  StyledButton,
  Title,
  StyledInput,
} from './styled';
import {useState} from 'react';
import SVGImg from '@assets/icons/plus.svg';

export interface IAddCategory {
  addNewCategory: (nameOfCategory: string) => void;
}
export function AddCategory({addNewCategory}: IAddCategory) {
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState('');

  const handleTextInput = (text: string) => {
    setInput(text);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleSuccessCloseModal = (nameOfCategory: string) => () => {
    addNewCategory(nameOfCategory);
    handleCloseModal();
    setInput('');
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <CenteredView>
          <ModalView>
            <Title>Add new category</Title>
            <StyledInput
              placeholder="New category"
              value={input}
              onChangeText={handleTextInput}
            />
            <DecisionWrapper>
              <TouchableOpacity onPress={handleCloseModal}>
                <DecisionText>Cancel</DecisionText>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSuccessCloseModal(input)}>
                <DecisionText>Ok</DecisionText>
              </TouchableOpacity>
            </DecisionWrapper>
          </ModalView>
        </CenteredView>
      </Modal>
      <StyledButton onPress={handleOpenModal} underlayColor={'#f4d7eb'}>
        <SVGImg />
      </StyledButton>
    </>
  );
}
