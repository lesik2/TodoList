import styled from 'styled-components/native';
import {css} from 'styled-components';

export const CenteredView = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const ModalView = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border-radius: 20px;
    padding: 20px;
    shadow-color: ${theme.colors.black};
    elevation: 15;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 40px;
    width: 80%;
    min-height: 33%;
    position: relative;
  `}
`;
export const StyledInput = styled.TextInput`
  ${({theme}) => css`
    color: ${theme.colors.black};
    width: 90%;
    padding: 0px;
    margin: 0px;
    font-size: 21px;
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.colors.black};
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
    &::placeholder {
      color: ${theme.colors.iconColor};
    }
  `}
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 25px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;

export const DecisionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 24px;
  right: 16px;
  bottom: 16px;
`;
export const DecisionText = styled.Text`
  ${({theme}) => css`
    font-size: 18px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Roboto};
    font-weight: ${theme.fontWeight.default};
  `}
`;
