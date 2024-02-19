import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const WrapperView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;
export const WrapperCircles = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const SmallCircle = styled(LinearGradient)<{$isCircle?: boolean}>`
  ${({$isCircle}) => css`
    width: 85%;
    height: 45%;
    border-radius: 200px;
    position: absolute;
    left: -23%;
    top: -7%;
    z-index: 2;
    opacity: ${$isCircle?1:0.9};
  `}
`;
export const LargeCircle = styled(LinearGradient)<{$isCircle?: boolean}>`
  ${({$isCircle}) => css`
    position: absolute;
    right: -20%;
    top: ${$isCircle?'-5%':'-10%'};
    border-radius: 200px;
    width: 97%;
    height: ${$isCircle?'47%':'90%'};
    z-index: ${$isCircle?1:3};
    opacity: ${$isCircle?1:0.6};
    border-top-left-radius: ${$isCircle ? '200px' : '250px'};
    border-bottom-left-radius: ${$isCircle ? '200px' : '500px'};
  `}
`;
