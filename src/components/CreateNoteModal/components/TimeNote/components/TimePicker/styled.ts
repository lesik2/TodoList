
import styled from 'styled-components/native';
import {css} from 'styled-components';

export const ChooseTimeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`
export const TimeTitle = styled.Text`
  ${({theme}) => css`
    font-size: 18px;
    color: ${theme.colors.iconColor};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`
export const ChooseTime = styled.View`
   ${({theme}) => css`
    width: 72%;
    flex-direction: row;
    align-items: center;
    height: 45px;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `}
`
export const Divider = styled.Text`
  ${({theme}) => css`
    font-size: 20px;
    color: ${theme.colors.iconColor};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.bold};
  `}
`
export const SelectTime = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`