import {useNavigation} from '@react-navigation/native';
import {HeaderView, Title} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Vibration} from 'react-native';


export function Header() {
  const navigation = useNavigation<DrawerNavigationHelpers>();

  

  const handlePress = () => {
    Vibration.vibrate(70);
    navigation.openDrawer();
  };

  return (
    <HeaderView>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="bars" size={30} />
      </TouchableOpacity>
      <Title>Modsen Todo list</Title>
    </HeaderView>
  );
}
