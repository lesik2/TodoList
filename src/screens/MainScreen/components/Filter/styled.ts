import styled from 'styled-components/native'
import { css } from 'styled-components';

export const Wrapper = styled.View`
  ${({theme})=>css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 89%;
    margin-top: 18%;
    align-self: center;
  `}

`

export const WrapperButton = styled.View`
  ${({theme})=>css`
    elevation:7;
    shadow-color: ${theme.colors.primary};
    border-radius: 30px;
  `}

`
export const StyledButton = styled.TouchableOpacity<{$selected?: boolean}>`
    ${({theme, $selected})=>css`
      background-color: ${$selected? theme.colors.secondary:theme.colors.white };
      border-radius: 30px;
      padding: 4px 16px 4px 16px;
      border: 2px solid ${theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`
export const StyledText = styled.Text`
    ${({theme})=>css`
      color: ${theme.colors.black};
      font-size: 20px;
      font-family: ${theme.fonts.Jost};
      font-weight: ${theme.fontWeight.easy};

  `}
`
