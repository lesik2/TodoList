import { FlatList, Vibration } from 'react-native';
import { type DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { IconButton } from '@ui/IconButton';
import { useCallback } from 'react';

import { DrawerMenuView, StyledImage } from './styled';
import { menuData } from './config';

import { CustomDrawerItem } from '../CustomDrawerItem';

export interface IDrawerMenu {
  navigation: DrawerNavigationHelpers;
}
export function DrawerMenu({ navigation }: IDrawerMenu) {
  const handlePress = useCallback(() => {
    Vibration.vibrate(70);
    navigation.closeDrawer();
  }, [navigation]);

  return (
    <DrawerMenuView>
      <IconButton handlePress={handlePress}>
        <StyledImage />
      </IconButton>

      <FlatList
        data={menuData}
        renderItem={({ item }) => (
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
