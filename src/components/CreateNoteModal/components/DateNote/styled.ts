import styled from 'styled-components/native';
import {css} from 'styled-components';


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
export const InfoWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 80%;

`

export const DateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const ChooseDateWrapper = styled.View`
  ${({theme}) => css`
    padding: 0px 17px 0px 17px;
    flex-direction: row;
    align-items: center;
    height: 45px;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    justify-content: center;
  `}
`
export const DateTitle = styled.Text`
  ${({theme}) => css`
    font-size: 18px;
    color: ${theme.colors.iconColor};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`