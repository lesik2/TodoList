import styled from 'styled-components/native';
import {css} from 'styled-components';

export const Wrapper = styled.View<{$isOpen?: boolean}>`
  ${({theme, $isOpen}) => css`
    background-color: ${theme.colors.white};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    z-index: 10;
    padding-top: 5px;
    margin-top: 20%;
    position: absolute;
    left: 16px;
    bottom: 15%;
    height: ${$isOpen ? '75%' : 'auto'};
  `}
`;

export const Line = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.black};
    margin-bottom: 8px;
  `}
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 22px;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
export const WrapperNotes = styled.View`
  height: 54%;
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
`;
