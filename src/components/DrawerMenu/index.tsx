import {menuData} from './config';
import {FlatList, Vibration} from 'react-native';
import {CustomDrawerItem} from '../CustomDrawerItem';
import {DrawerMenuView, StyledImage} from './styled';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {IconButton} from '@ui/IconButton';
import {useCallback} from 'react';

export interface IDrawerMenu {
  navigation: DrawerNavigationHelpers;
}
export function DrawerMenu({navigation}: IDrawerMenu) {
  const handlePress = useCallback(() => {
    Vibration.vibrate(70);
    navigation.closeDrawer();
  }, []);

  return (
    <DrawerMenuView>
      <IconButton handlePress={handlePress}>
        <StyledImage />
      </IconButton>

      <FlatList
        data={menuData}
        renderItem={({item}) => (
          <CustomDrawerItem
            navigation={navigation}
            screenName={item.screenName}
            iconName={item.icon}
            name={item.name}
            key={item.id}
          />
        )}
      />
    </DrawerMenuView>
  );
}
