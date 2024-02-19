import styled from 'styled-components/native';
import {css} from 'styled-components';

export const CategoryView = styled.View`
  ${({theme}) => css`
    width: 31%;
    position: relative;
    border-radius: 16px;
  `}
`;
export const StyledButton = styled.TouchableHighlight<{$background?: string}>`
  ${({$background}) => css`
    background-color: ${$background};
    border-radius: 16px;
    padding: 20px 0px 20px 0px;
  `}
`;
export const ContentWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 17px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.medium};
  `}
`;
export const NumberOfNotesText = styled.Text`
  ${({theme}) => css`
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 17px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
  `}
`;

export const AddButton = styled.TouchableHighlight`
  ${({theme}) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border-width: 2px;
    border-color: ${theme.colors.purple};
    border-radius: 16px;
    padding: 30px;
    width: 31%;
  `}
`;