import {RootStackParamList} from '@customTypes/navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MenuItemButton, StyledText, WrapperView} from './styled';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {memo} from 'react';

export interface IDrawerItem {
  iconName: string;
  name: string;
  screenName: keyof RootStackParamList;
  navigation: DrawerNavigationHelpers;
}

const CustomDrawerItemComponent = ({
  navigation,
  iconName,
  name,
  screenName,
}: IDrawerItem) => {
  const handlePress = () => {
    navigation.navigate(`${screenName}`);
  };

  return (
    <MenuItemButton
      onPress={handlePress}
      underlayColor={'#DBDFFD'}
      activeOpacity={1}>
      <WrapperView>
        <Icon name={iconName} size={25} />
        <StyledText>{name}</StyledText>
      </WrapperView>
    </MenuItemButton>
  );
};

export const CustomDrawerItem = memo(CustomDrawerItemComponent);
