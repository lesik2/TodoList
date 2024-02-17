
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from '@customTypes/navigation'
import { ButtonText, StartScreenView, StyleButton, StyledImage, Subtitle, Title } from "./styled";
import { config } from "./config";
export interface IStartScreen{
  navigation: NativeStackNavigationProp<RootStackParamList, 'StartScreen'>;
}

export function StartScreen({navigation}:IStartScreen) {

  const {title, subtitle, button} = config;

  const handlePress = () => {
    navigation.navigate('DrawerNavigation');
  }

  return (
    <StartScreenView>
      <StyledImage  source={require('@assets/images/startScreenImage.png')}/>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <StyleButton onPress={handlePress} underlayColor={'#646FD4'} activeOpacity={1}>
        <ButtonText>{button}</ButtonText>
      </StyleButton>
    </StartScreenView>
  )
}