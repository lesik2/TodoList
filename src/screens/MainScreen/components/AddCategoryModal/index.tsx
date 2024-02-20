
import {
  Title,
  ContentView,
  WrapperInput,
} from './styled';
import {useState} from 'react';
import {CustomModal} from '@ui/CustomModal';
import { StyleSheet, View } from 'react-native';
import { CustomInput } from '@ui/CustomInput/styled';
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

  const handleSuccessCloseModal = () => {
    addNewCategory(input);
    handleCloseModal();
    setInput('');
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
        <Title>Add new category</Title>
        <CustomInput
         style={styles.boxShadow}
          placeholder="New category"
          value={input}
          onChangeText={handleTextInput}
        />
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