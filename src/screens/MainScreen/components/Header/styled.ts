import styled from 'styled-components/native';
import {css} from 'styled-components';

export const HeaderView = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 6%;
    margin-top: 4%;
    width: 100%;
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: 25px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.bold};
  `}
`;
