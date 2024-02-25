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
    padding: 15px;
    position: relative;
    min-height: 90px;
    width: 100%;
  `}
`;

export const TimeWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  justify-content: center;
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
`;
export const MainWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
export const InfoWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 180px;
`;
export const Title = styled.Text<{$subTask?: boolean}>`
  ${({theme, $subTask}) => css`
    color: ${theme.colors.black};
    font-size: ${$subTask ? '14px' : '16px'};
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.easy};
  `}
`;
export const SubTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.iconColor};
    font-size: 12px;
    font-family: ${theme.fonts.Signika};
    font-weight: ${theme.fontWeight.default};
  `}
`;

export const CheckBox = styled.TouchableOpacity<{$subTask?: boolean}>`
  ${({theme, $subTask}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: ${$subTask ? '30px' : '35px'};
    min-height: ${$subTask ? '30px' : '35px'};
    border-radius: 20px;
    border-width: 2px;
    border-color: ${theme.colors.border};
    background-color: ${theme.colors.white};
  `}
`;
export const OptionButton = styled.TouchableOpacity`
  width: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SubTaskWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-left: 23%;
  padding-bottom: 10px;
  align-items: flex-start;
`;
