import { RootStackParamList } from "@customTypes/navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { MenuItemButton, StyledText, WrapperView } from "./styled";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";


export interface IDrawerItem{
  iconName: string;
  name: string;
  screenName: keyof RootStackParamList;
  navigation: DrawerNavigationHelpers
}

export const CustomDrawerItem = ({ navigation, iconName, name, screenName }:IDrawerItem) => {

  const handlePress = () => {
      navigation.navigate(`${screenName}`);
  }

  return (
    <MenuItemButton
    onPress={handlePress}
    underlayColor={'#DBDFFD'} 
    activeOpacity={1}
  >
    <WrapperView>
      <Icon name={iconName} size={25}  />
      <StyledText >{name}</ StyledText >
    </WrapperView>
  </MenuItemButton>
  )
 
};