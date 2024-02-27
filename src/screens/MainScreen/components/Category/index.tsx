import {Pressable, StyleSheet} from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext, useState } from 'react';
import { CategoriesDispatchContext } from '@context/contextProvider';
import { actionDeleteCategory } from '@context/actionCreatorsCategories';
import { ModalPermission } from '@ui/ModalPermission';

export interface ICategoryComponent {
  id: string;
  iconName: string;
  name?: string;
  numberOfNotes?: number;
  backgroundColor?: string;
  handleOpenModal: () => void;
}
export function Category({
  id,
  iconName,
  name,
  numberOfNotes,
  backgroundColor,
  handleOpenModal,
}: ICategoryComponent) {

  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const dispatch = useContext(CategoriesDispatchContext);

  const handleShowDeleteIcon = ()=> {
    const defaultCategoryIds = ['1','2','3','4','5'];
    if(dispatch){
      if(!defaultCategoryIds.includes(id)){
        setShowDeleteIcon(!showDeleteIcon)
      }
    }
  }

  const handleOpenPermissionModal = () => {
    setShowModal(true);
  }
  const handleDeleteCategory = ()=> {
    if(dispatch){
      dispatch(actionDeleteCategory(id));
    }
  }


  return (
    <>
      {name ? (
        <CategoryView style={styles.boxShadow}>
          <StyledButton
            $background={backgroundColor}
            onLongPress={handleShowDeleteIcon}
            onPress={()=>console.log('hi!')}
            underlayColor="#DBDFFD"
            activeOpacity={1}>
            <ContentWrapper>
              <Icon name={iconName} size={35} color="#ffffff" />
              <Title>{name}</Title>
            </ContentWrapper>
          </StyledButton>
          <NumberOfNotesText>{numberOfNotes}</NumberOfNotesText>
          {showDeleteIcon &&
            <DeleteIconWrapper onPress={handleOpenPermissionModal}>
              <Icon name="times" size={25} color="#888888" />
            </DeleteIconWrapper>
          }
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
