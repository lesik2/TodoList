import styled from 'styled-components/native';
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
export const SmallCircle = styled(LinearGradient)`
  width: 87%;
  height: 42%;
  border-radius: 180px;
  position: absolute;
  left: -23%;
  top: -7%;
  z-index: 2;
`;
export const LargeCircle = styled(LinearGradient)`
  position: absolute;
  right: -20%;
  top: -5%;
  border-radius: 200px;
  width: 97%;
  height: 47%;
  z-index: 1;
`;
