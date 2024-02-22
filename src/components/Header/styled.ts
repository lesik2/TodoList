import styled from 'styled-components/native';
import {css} from 'styled-components';
import SVGImg from '@assets/icons/arrow-left.svg';
export const HeaderView = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 8%;
    margin-top: 4%;
    width: 100%;
    position: relative;
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: 25px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.bold};
  `}
`;
export const StyledButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  bottom: 15px;
`;
export const StyledImage = styled(SVGImg)`
  ${({theme}) => css`
    color: ${theme.colors.white};
    width: 32px;
    height: 30px;
  `}
`;
