import { Button, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from '@customTypes/navigation'
import { StyledText } from "./styled";

export interface IStartScreen{
  navigation: NativeStackNavigationProp<RootStackParamList, 'StartScreen'>;
}

export function StartScreen({navigation}:IStartScreen) {
  return (
    <View>
      <StyledText>Start screen</StyledText>
      <Button
        title="Go to mainPage"
        onPress={() => navigation.navigate('DrawerNavigation')}
      />
    </View>
  )
}