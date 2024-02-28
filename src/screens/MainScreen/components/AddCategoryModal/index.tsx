import {Title, ContentView, WrapperInput} from './styled';
import {useState} from 'react';
import {CustomModal} from '@ui/CustomModal';
import {StyleSheet, View} from 'react-native';
import {CustomInput} from '@ui/CustomInput/styled';
import {categorySchema} from '@validate/category';
import {ErrorMessage} from '@ui/ErrorMessage/styled';

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
  const [error, setError] = useState(false);

  const handleTextInput = (text: string) => {
    setInput(text);
    setError(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSuccessCloseModal = async () => {
    const newCategory = {name: input};

    try {
      await categorySchema.validate(newCategory);
    } catch (error) {
      setError(true);
      return;
    }
    addNewCategory(input.trim());
    handleCloseModal();
    setInput('');
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
        <Title>Add new category</Title>
        <WrapperInput>
          <CustomInput
            style={styles.boxShadow}
            placeholder="New category"
            value={input}
            onChangeText={handleTextInput}
          />
          {error && <ErrorMessage>Please, fill in category name</ErrorMessage>}
        </WrapperInput>
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
