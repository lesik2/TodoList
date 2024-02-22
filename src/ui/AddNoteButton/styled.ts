import styled, {css} from 'styled-components/native';
import SVGImg from '@assets/icons/plus.svg';

export const StyledButton = styled.TouchableOpacity<{$isBig?: boolean}>`
  ${({theme, $isBig}) => css`
    background-color: ${$isBig
      ? theme.colors.secondary
      : theme.colors.secondaryShades};
    width: ${$isBig ? '60px' : '40px'};
    height: ${$isBig ? '60px' : '40px'};
    align-items: center;
    justify-content: center;
    align-self: center;
    border-radius: 30px;
  `}
`;
export const StyledIcon = styled(SVGImg)<{$isBig?: boolean}>`
  ${({theme, $isBig}) => css`
    width: ${$isBig ? '25px' : '20px'};
    height: ${$isBig ? '25px' : '20px'};
    color: ${theme.colors.white};
  `}
`;
