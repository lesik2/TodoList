import styled, { css } from 'styled-components/native';
import SVGImg from '@assets/icons/plus.svg';

export const StyledButton = styled.TouchableOpacity<{$isBig?: boolean}>`
  ${({theme, $isBig})=>css`
    background-color: ${theme.colors.secondary};
    width: ${$isBig?'60px': '40px'};
    height: ${$isBig?'60px': '40px'};
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-top: 50%;
  `}

`
export const StyledIcon = styled(SVGImg)<{$isBig?: boolean}>`
  ${({theme, $isBig}) => css`
    width: ${$isBig?'25px': '20px'};
    height: ${$isBig?'25px': '20px'};
    color: ${theme.colors.white};
  `}
`