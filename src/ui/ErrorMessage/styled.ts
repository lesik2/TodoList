import styled, {css} from 'styled-components/native';

export const ErrorMessage = styled.Text`
  ${({theme}) => css`
    position: absolute;
    left: 10px;
    bottom: -18px;
    font-size: 13px;
    color: ${theme.colors.error};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
