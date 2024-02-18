import styled from 'styled-components/native';
import {css} from 'styled-components';

export const MainView = styled.View`
  ${({theme}) => css`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`;
export const LayoutView = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    padding: 0px 16px 0px 16px;
    z-index: 3;
    flex-direction: column;
    align-items: center;
  `}
`;
