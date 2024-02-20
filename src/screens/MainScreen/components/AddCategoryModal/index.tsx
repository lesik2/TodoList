
import {
  Title,
  StyledInput,
  ContentView,
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
        <StyledInput
          placeholder="New category"
          value={input}
          onChangeText={handleTextInput}
        />
      </ContentView>
    </CustomModal>
  );
}

