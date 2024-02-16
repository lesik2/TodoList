import styled from 'styled-components/native'
import { css } from 'styled-components';

export const StartScreenView = styled.View`
    ${({theme})=>css`
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      padding: 44px 0px 32px 0px;
      background-color: ${theme.colors.white};
  `}
`;
export const StyledImage = styled.Image`
  width: 100%;
  height: 68%;
`

export const Title = styled.Text`
  ${({theme})=>css`
    font-size: 24px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.bold};

    margin-top: 24px;
    color: ${theme.colors.black};
  `}
`
export const StyleButton = styled.TouchableHighlight`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    padding: 11px 0px 11px 0px;
    margin-top: 32px;
    background-color: ${theme.colors.secondaryShades};
    border-radius: 15px;
  `}
`;
export const ButtonText = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};

    font-weight: ${theme.fontWeight.medium};
    font-size: 16px;
  `}
`
export const Subtitle = styled.Text`
  ${({theme})=>css`
    font-size: 15px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};

    text-align: center;
    width: 90%;
    margin-top: 8px;
  `}
`