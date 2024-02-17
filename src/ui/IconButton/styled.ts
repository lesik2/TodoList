import styled from 'styled-components/native'
import { css } from 'styled-components';




export const StyledButton = styled.TouchableHighlight`
    ${({theme})=>css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 55px;
        border-radius: 50px;
        margin: 0px 0px 21px 10px;
    `}
`
