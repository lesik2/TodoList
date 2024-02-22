import styled from 'styled-components/native';
import {css} from 'styled-components';
import {CustomInput} from '@ui/CustomInput/styled';

export const ContentView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 16px;
  width: 100%;
  height: 100%;
  margin-bottom: 20%;
`;

export const InfoWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 80%;
`;
export const SubTasksWrapper = styled.View`
  margin-left: 5%;
  max-height: 105px;
  width: 85%;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 20px;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;

export const SubTitle = styled.Text`
  ${({theme}) => css`
    font-size: 15px;
    color: ${theme.colors.iconColor};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
