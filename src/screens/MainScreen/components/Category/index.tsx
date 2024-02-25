import {Pressable, StyleSheet} from 'react-native';
import {
  NumberOfNotesText,
  Title,
  StyledButton,
  ContentWrapper,
  CategoryView,
  AddButton,
  StyledIcon,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from 'react';
import { CategoriesDispatchContext } from '@context/contextProvider';
import { actionDeleteCategory } from '@context/actionCreatorsCategories';

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

  const dispatch = useContext(CategoriesDispatchContext);

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
            onLongPress={handleDeleteCategory}
            onPress={()=>console.log('hi!')}
            underlayColor="#DBDFFD"
            activeOpacity={1}>
            <ContentWrapper>
              <Icon name={iconName} size={35} color="#ffffff" />
              <Title>{name}</Title>
            </ContentWrapper>
          </StyledButton>
          <NumberOfNotesText>{numberOfNotes}</NumberOfNotesText>
        </CategoryView>
      ) : (
        <AddButton onPress={handleOpenModal} underlayColor={'#f4d7eb'}>
          <StyledIcon />
        </AddButton>
      )}
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
