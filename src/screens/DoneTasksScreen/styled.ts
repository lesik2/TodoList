import styled from 'styled-components/native';
import { css } from 'styled-components';

export const MainView = styled.View`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`;
export const LayoutView = styled.View`
  padding: 0px 16px 0px 16px;
  height: 100%;
  width: 100%;
  z-index: 3;
  flex-direction: column;
  align-items: center;
`;

export const TouchableWrapper = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const WrapperNotes = styled.View`
  height: 54%;
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
`;
export const WrapperButton = styled.View`
  position: absolute;
  bottom: 5%;
  left: 45%;
`;
