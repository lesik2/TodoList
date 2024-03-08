import styled from 'styled-components/native';
import { css } from 'styled-components';

export const InputView = styled.View`
  ${({ theme }) => css`
    margin-top: 12%;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    background-color: ${theme.colors.white};
    border-radius: 20px;
    height: 9%;
    width: 92%;
    padding: 12px 15px 12px 15px;
  `}
`;
export const StyledButton = styled.TouchableOpacity`
  width: 10%;
`;
export const StyledInput = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    width: 90%;
    padding: 0px;
    height: 100%;
    margin: 0px;
    font-size: 21px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
    &::placeholder {
      color: ${theme.colors.iconColor};
    }
  `}
`;
