import {StyleSheet} from 'react-native';
import {
  NumberOfNotesText,
  Title,
  StyledButton,
  ContentWrapper,
  CategoryView,
  AddButton,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import SVGImg from '@assets/icons/plus.svg';
export interface ICategory {
  iconName: string;
  name?: string;
  numberOfNotes?: number;
  backgroundColor?: string;
  handleOpenModal: () => void;
}
export function Category({
  iconName,
  name,
  numberOfNotes,
  backgroundColor,
  handleOpenModal,
}: ICategory) {
  return (
    <>
      {name ? (
        <CategoryView style={styles.boxShadow}>
          <StyledButton
            $background={backgroundColor}
            onPress={() => console.log('hi')}
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
          <SVGImg />
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
