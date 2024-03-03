import {useNavigation} from '@react-navigation/native';
import {HeaderView, StyledImage, Title, StyledButton} from './styled';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {Vibration} from 'react-native';
import {memo} from 'react';

export interface IHeader {
  title: string;
}

function HeaderComponent({title}: IHeader) {
  const navigation = useNavigation<DrawerNavigationHelpers>();

  const handlePress = () => {
    Vibration.vibrate(70);
    navigation.navigate('MainScreen');
  };

  return (
    <HeaderView>
      <StyledButton onPress={handlePress}>
        <StyledImage />
      </StyledButton>
      <Title>{title}</Title>
    </HeaderView>
  );
}

export const Header = memo(HeaderComponent);
