import {Title, ContentView, WrapperInput} from './styled';
import {memo, useContext, useState} from 'react';
import {CustomModal} from '@ui/CustomModal';
import {StyleSheet, View} from 'react-native';
import {CustomInput} from '@ui/CustomInput/styled';
import {categorySchema} from '@validate/category';
import {ErrorMessage} from '@ui/ErrorMessage/styled';
import {CategoriesContext} from '@context/contextProvider';

export interface IAddCategory {
  addNewCategory: (nameOfCategory: string) => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
function AddCategoryComponent({
  addNewCategory,
  modalVisible,
  setModalVisible,
}: IAddCategory) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const categories = useContext(CategoriesContext);
  const handleTextInput = (text: string) => {
    setInput(text);
    setError('');
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSuccessCloseModal = async () => {
    const newCategory = {name: input.trim()};

    try {
      await categorySchema.validate(newCategory);
      if (
        categories
          .map(category => category.name?.toLowerCase())
          .includes(newCategory.name.toLowerCase())
      ) {
        throw new Error('Category should be unique');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
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
          {error && <ErrorMessage>{error}</ErrorMessage>}
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

export const AddCategory = memo(AddCategoryComponent);
