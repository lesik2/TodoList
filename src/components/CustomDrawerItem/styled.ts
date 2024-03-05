import styled from 'styled-components/native';
import { css } from 'styled-components';

export const MenuItemButton = styled.TouchableHighlight`
  width: 100%;
  padding: 18px 0px 18px 0px;
  padding-left: 20px;
`;
export const WrapperView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
export const StyledText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.iconColor};
    font-size: 18px;
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
  `}
`;
