import styled from 'styled-components/native';
import {css} from 'styled-components';
import { CustomInput } from '@ui/CustomInput/styled';

export const ContentView = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 30px;
    width: 100%;
    height: 100%;
    margin-bottom: 20%;
`;

export const InputsWrapper = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:20px;
    width: 100%;
`
export const InputTitle = styled(CustomInput)`
  ${({theme}) => css`

  `}
`;

export const InputText = styled(CustomInput)`
  ${({theme}) => css`
      height: 80px;
      color: ${theme.colors.iconColor};
      font-size: 16px;
  `}

`

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 25px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
