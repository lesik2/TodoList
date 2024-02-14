import styled from 'styled-components/native'
import { css } from 'styled-components';

export const StyledText = styled.Text`
  ${({theme})=>css`
    font-family: ${theme.fonts.Signika};
    margin-top: 50px;
    font-weight: 800;
    font-size: 25px;
    margin-left: 20px;

  `}
`;