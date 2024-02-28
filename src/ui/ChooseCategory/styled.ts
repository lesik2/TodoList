import styled, {css} from 'styled-components/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export const Wrapper = styled.View`
  position: relative;
  width: 100%;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
`;
export const ChooseText = styled.Text`
  ${({theme}) => css`
    font-size: 18px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
    color: ${theme.colors.black};
  `}
`;
export const IconWrapper = styled(Animated.View)``;

export const CategoriesWrapper = styled.View`
  ${({theme}) => css`
    position: absolute;
    left: 0px;
    top: 30px;
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.white};
    border-radius: 20px;
    z-index: 2;
  `}
`;

export const CategoryItem = styled.TouchableOpacity`
  padding: 4px 0px 4px 0px;
`;
export const CategoryText = styled.Text`
  ${({theme}) => css`
    font-size: 17px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
    color: ${theme.colors.black};
  `}
`;
