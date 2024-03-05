import styled, { css } from 'styled-components/native';

export const CenteredView = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalView = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 20px;
    padding: 20px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    min-height: 33%;
    position: relative;
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
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Roboto};
    font-weight: ${theme.fontWeight.default};
  `}
`;
