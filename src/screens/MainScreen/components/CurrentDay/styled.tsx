import styled from 'styled-components/native'
import { css } from 'styled-components';

export const StyledView = styled.View`
  ${({theme})=>css`
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      margin-top: 15%;
  `}
`

export const DailyTasks = styled.Text`
  ${({theme})=>css`
      font-size: 28px;
      color: ${theme.colors.white};
      font-family: ${theme.fonts.Jost};
      font-weight: ${theme.fontWeight.bold};
  `}

`
export const Title = styled.Text`
  ${({theme})=>css`
      font-size: 25px;
      color: ${theme.colors.black};
      font-family: ${theme.fonts.Jost};
      font-weight: ${theme.fontWeight.bold};
  `}

`
export const SubTitle = styled.Text`
  ${({theme})=>css`
      font-size: 17px;
      color: ${theme.colors.black};
      font-family: ${theme.fonts.Jost};
      font-weight: ${theme.fontWeight.medium};
      margin-top: 2%;
  `}

`