import styled from 'styled-components/native';
import { css } from 'styled-components';
import SVGImg from '@assets/icons/plus.svg';

export const CategoryView = styled.View`
  width: 31%;
  position: relative;
`;
export const StyledButton = styled.TouchableHighlight<{ $background?: string }>`
  ${({ $background }) => css`
    background-color: ${$background};
    border-radius: 16px;
    padding: 20px 0px 20px 0px;
  `}
`;
export const ContentWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 17px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.medium};
  `}
`;
export const NumberOfNotesText = styled.Text`
  ${({ theme }) => css`
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 17px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.Jost};
    font-weight: ${theme.fontWeight.default};
  `}
`;

export const AddButton = styled.TouchableHighlight`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border-width: 2px;
    border-color: ${theme.colors.purple};
    border-radius: 16px;
    padding: 30px;
    width: 31%;
  `}
`;
export const StyledIcon = styled(SVGImg)`
  ${({ theme }) => css`
    width: 36px;
    height: 36px;
    color: ${theme.colors.purple};
  `}
`;
export const DeleteIconWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  top: 0px;
  width: 30px;
  height: 30px;
`;
