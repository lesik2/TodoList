import styled from 'styled-components/native';
import {css} from 'styled-components';

export const CustomInput = styled.TextInput`
  ${({theme}) => css`
    color: ${theme.colors.black};
    padding: 0px 10px 0px 10px;
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.white};
    border-radius: 20px;
    margin: 0px;
    font-size: 18px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
    &::placeholder {
      color: ${theme.colors.iconColor};
    }
  `}
`;
