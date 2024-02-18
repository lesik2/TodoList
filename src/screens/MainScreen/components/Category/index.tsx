import {
  NumberOfNotesText,
  Title,
  StyledButton,
  ContentWrapper,
  CategoryView,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ICategory {
  iconName: string;
  name: string;
  numberOfNotes: number;
  backgroundColor: string;
}
export function Category({
  iconName,
  name,
  numberOfNotes,
  backgroundColor,
}: ICategory) {
  return (
    <CategoryView>
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
  );
}
