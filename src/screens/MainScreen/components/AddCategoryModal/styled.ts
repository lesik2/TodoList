import styled from 'styled-components/native';
import {css} from 'styled-components';

export const ContentView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
  height: 100%;
  margin-bottom: 20%;
`;

export const WrapperInput = styled.View`
  position: relative;
  width: 95%;
`


export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 22px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
