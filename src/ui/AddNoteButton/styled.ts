import styled, { css } from 'styled-components/native';
import SVGImg from '@assets/icons/plus.svg';

export const StyledButton = styled.TouchableOpacity`
  ${({theme})=>css`
    background-color: ${theme.colors.secondary};
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-top: 50%;
  `}

`
export const StyledIcon = styled(SVGImg)`
  ${({theme}) => css`
    width: 25px;
    height: 25px;
    color: ${theme.colors.white};
  `}
`