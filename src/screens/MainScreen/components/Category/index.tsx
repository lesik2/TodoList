import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { memo, useContext, useState } from 'react';
import { CategoriesContext, CategoriesDispatchContext } from '@context/contextProvider';
import { actionDeleteCategory } from '@context/actionCreatorsCategories';
import { ModalPermission } from '@ui/ModalPermission';
import { type INote } from '@customTypes/note';
import { useNavigation } from '@react-navigation/native';
import { type NavigationProps } from '@customTypes/navigation';
import { saveCategory } from '@api/categories';

import {
  NumberOfNotesText,
  Title,
  StyledButton,
  ContentWrapper,
  CategoryView,
  AddButton,
  StyledIcon,
  DeleteIconWrapper,
} from './styled';

export interface ICategoryComponent {
  id: string;
  iconName: string;
  name?: string;
  backgroundColor?: string;
  handleOpenModal: () => void;
  notes: INote[];
}
function CategoryComponent({
  id,
  iconName,
  name,
  notes,
  backgroundColor,
  handleOpenModal,
}: ICategoryComponent) {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useContext(CategoriesDispatchContext);
  const navigation = useNavigation<NavigationProps>();

  const categories = useContext(CategoriesContext);

  const handleShowDeleteIcon = () => {
    const defaultCategoryIds = ['1', '2', '3', '4', '5'];
    if (dispatch) {
      if (!defaultCategoryIds.includes(id)) {
        setShowDeleteIcon(!showDeleteIcon);
      }
    }
  };

  const handleOpenPermissionModal = () => {
    setShowModal(true);
  };

  const handleDeleteCategory = async () => {
    if (dispatch) {
      if (categories.length === 7) {
        await saveCategory([]);
      }

      dispatch(actionDeleteCategory(id));
    }
  };

  const handleNavigateToCategoryPage = () => {
    navigation.navigate('CategoryScreen', { title: name!, notes });
  };

  return (
    <>
      {name ? (
        <CategoryView style={styles.boxShadow}>
          <StyledButton
            $background={backgroundColor}
            onLongPress={handleShowDeleteIcon}
            onPress={handleNavigateToCategoryPage}
            underlayColor='#DBDFFD'
            activeOpacity={1}
          >
            <ContentWrapper>
              <Icon name={iconName} size={35} color='#ffffff' />
              <Title>{name}</Title>
            </ContentWrapper>
          </StyledButton>
          <NumberOfNotesText>{notes.length}</NumberOfNotesText>
          {showDeleteIcon && (
            <DeleteIconWrapper onPress={handleOpenPermissionModal}>
              <Icon name='times' size={25} color='#888888' />
            </DeleteIconWrapper>
          )}
        </CategoryView>
      ) : (
        <AddButton onPress={handleOpenModal} underlayColor={'#f4d7eb'}>
          <StyledIcon />
        </AddButton>
      )}
      <ModalPermission
        title={`Are you sure you want to delete category?`}
        modalVisible={showModal}
        setModalVisible={setShowModal}
        onHandleSuccess={handleDeleteCategory}
      />
    </>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export const Category = memo(CategoryComponent);
