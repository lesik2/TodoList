import styled from 'styled-components/native'
import { css } from 'styled-components';

import SVGImg from '@assets/icons/arrow-left.svg';
export const DrawerMenuView = styled.View`
    ${({theme})=>css`
        display: flex;
        height: 100%;
        width: 100%;
        background-color: ${theme.colors.drawerBack};
        padding-top: 40px;
    `}
`;


export const StyledImage = styled(SVGImg)`
    ${({theme})=>css`
        color: ${theme.colors.secondary};
        width: 100%;
        height: 27px;
    `}
`