import { Button, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from '@customTypes/navigation'
import { StyledText } from "./styled";

export interface IStartPage{
  navigation: NativeStackNavigationProp<RootStackParamList, 'StartPage'>;
}

export function StartPage({navigation}:IStartPage) {
  return (
    <View>
      <StyledText>I hope it works</StyledText>
      <Button
        title="Go to mainPage"
        onPress={() => navigation.navigate('MainPage')}
      />
    </View>
  )
}