import styled from 'styled-components/native';
import {css} from 'styled-components';

export const Wrapper = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 89%;
    margin-top: 12%;
  `}
`;

export const StyledButton = styled.TouchableOpacity<{$selected?: boolean}>`
  ${({theme, $selected}) => css`
    background-color: ${$selected
      ? theme.colors.secondary
      : theme.colors.white};
    border-radius: 30px;
    padding: 4px 16px 4px 16px;
    border-width: 2px;
    border-color: ${theme.colors.secondary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;
export const StyledText = styled.Text<{$selected?: boolean}>`
  ${({theme, $selected}) => css`
    color: ${$selected ? theme.colors.white : theme.colors.black};
    font-size: 20px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.medium};
  `}
`;
