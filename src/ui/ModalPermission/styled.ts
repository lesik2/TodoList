import styled from 'styled-components/native';
import { css } from 'styled-components';

export const ContentView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 21px;
    text-align: center;
    width: 100%;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
