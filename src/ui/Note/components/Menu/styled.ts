import styled from 'styled-components/native';
import {css} from 'styled-components';

export const MenuOption = styled.View`
  ${({theme}) => css`
    top: 13px;
    right: 11px;
    position: absolute;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
  `}
`;
export const MenuItems = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MenuItemText = styled.Text<{$pressed?: boolean}>`
  ${({theme, $pressed}) => css`
    color: ${$pressed ? theme.colors.white : theme.colors.black};
    padding: 2px 6px 3px 4px;
    border-radius: 10px;
    font-size: 16px;
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
    background-color: ${$pressed ? theme.colors.secondary : theme.colors.white};
  `}
`;
