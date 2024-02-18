import {FlatList} from 'react-native-gesture-handler';
import {Category} from '../Category';
import {defaultCategories, IDefaultCategories} from './config';
import {Wrapper} from './styled';
import {AddCategory} from '../AddCategory';
import {useState} from 'react';
import {generateRandomColor} from '../../../../utils/generateRandomColor';

export function Categories() {
  const [categories, setCategories] = useState(defaultCategories);
  const addNewCategory = (nameOfCategory: string) => {
    const newCategory: IDefaultCategories = {
      id: categories[categories.length - 1].id + 1,
      name: nameOfCategory,
      iconName: 'user',
      numberOfNotes: 0,
      backgroundColor: generateRandomColor(),
    };
    setCategories([...categories, newCategory]);
  };
  return (
    <Wrapper>
      <FlatList
        numColumns={3}
        data={categories}
        ListFooterComponent={<AddCategory addNewCategory={addNewCategory} />}
        renderItem={({item, index}) => <Category key={item.id} {...item} />}
        contentContainerStyle={{gap: 16}}
        columnWrapperStyle={{gap: 10}}
      />
    </Wrapper>
  );
}
