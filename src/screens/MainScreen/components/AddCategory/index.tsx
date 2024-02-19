import {Modal, TouchableOpacity} from 'react-native';
import {
  CenteredView,
  DecisionText,
  DecisionWrapper,
  ModalView,
  Title,
  StyledInput,
} from './styled';
import {useState} from 'react';


export interface IAddCategory {
  addNewCategory: (nameOfCategory: string) => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export function AddCategory({addNewCategory,modalVisible, setModalVisible}: IAddCategory) {

  const [input, setInput] = useState('');

  const handleTextInput = (text: string) => {
    setInput(text);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
    </>
  );
}
