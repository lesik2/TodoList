import {FlatList} from 'react-native-gesture-handler';
import {Category} from '../Category';
import {defaultCategories, IDefaultCategories} from './config';
import {Wrapper} from './styled';
import {AddCategory} from '../AddCategoryModal';
import {useState} from 'react';
import {generateRandomColor} from '../../../../utils/generateRandomColor';

export function Categories() {
  const [categories, setCategories] = useState(defaultCategories);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const addNewCategory = (nameOfCategory: string) => {
    const newCategory: IDefaultCategories = {
      id: (categories[categories.length - 2].id + 1).toString(),
      name: nameOfCategory,
      iconName: 'user',
      numberOfNotes: 0,
      backgroundColor: generateRandomColor(),
    };
    setCategories([
      ...categories.slice(0, categories.length - 1),
      newCategory,
      categories[categories.length - 1],
    ]);
  };

  return (
    <Wrapper>
      <FlatList
        numColumns={3}
        data={categories}
        renderItem={({item}) => (
          <Category key={item.id} {...item} handleOpenModal={handleOpenModal} />
        )}
        contentContainerStyle={{gap: 16}}
        columnWrapperStyle={{gap: 10}}
      />
      <AddCategory
        addNewCategory={addNewCategory}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Wrapper>
  );
}
