import styled from 'styled-components/native';
import {css} from 'styled-components';

export const ContentView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
  height: 100%;
`;

export const StyledInput = styled.TextInput`
  ${({theme}) => css`
    color: ${theme.colors.black};
    width: 90%;
    padding: 0px;
    margin: 0px;
    font-size: 21px;
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.colors.black};
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
    &::placeholder {
      color: ${theme.colors.iconColor};
    }
  `}
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 25px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
