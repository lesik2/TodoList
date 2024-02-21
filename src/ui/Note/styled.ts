import styled from 'styled-components/native';
import {css} from 'styled-components';

export const AllNotesView = styled.View`
  ${({theme}) => css`
    flex-direction: column;
    align-items: flex-start;
    background-color: ${theme.colors.white};
    border-radius: 20px;
    z-index: 5;
  `}
`;

export const NoteView = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    position: relative;
  `}
`;

export const TimeWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  justify-content: center;
  width: 20%;
`;

export const TimeText = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.iconColor};
    font-size: 11px;
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;
export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  max-width: 90%;
`;
export const MainWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  max-width: 75%;
`;
export const InfoWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Title = styled.Text<{$subTask?: boolean}>`
  ${({theme, $subTask}) => css`
    color: ${theme.colors.black};
    font-size: ${$subTask ? '16px' : '18px'};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.easy};
  `}
`;
export const SubTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.iconColor};
    font-size: 14px;
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;

export const CheckBox = styled.TouchableOpacity<{$subTask?: boolean}>`
  ${({theme, $subTask}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: ${$subTask ? '33px' : '38px'};
    min-height: ${$subTask ? '33px' : '38px'};
    border-radius: 20px;
    border-width: 2px;
    border-color: ${theme.colors.border};
    background-color: ${theme.colors.white};
  `}
`;
export const OptionButton = styled.TouchableOpacity`
  width: 20px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SubTaskWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
`;
