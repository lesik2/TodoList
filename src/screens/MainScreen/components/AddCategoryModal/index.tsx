import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  DecisionText,
  DecisionWrapper,
  ModalView,
  Title,
  StyledInput,
} from './styled';
import {useState} from 'react';
import {CustomModal} from '@ui/CustomModal';

export interface IAddCategory {
  addNewCategory: (nameOfCategory: string) => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export function AddCategory({
  addNewCategory,
  modalVisible,
  setModalVisible,
}: IAddCategory) {
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
    <CustomModal modalVisible={modalVisible} onRequestClose={handleCloseModal}>
      <ModalView style={styles.boxShadow}>
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
    </CustomModal>
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
