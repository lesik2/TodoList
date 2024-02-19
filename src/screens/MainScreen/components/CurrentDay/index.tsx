import {getDateInfo} from '@utils/getCurrentDate';
import {DailyTasks, StyledView, SubTitle, Title} from './styled';

export function CurrentDay() {
  return (
    <StyledView>
      <Title>
        you have <DailyTasks>5 tasks</DailyTasks> today!
      </Title>
      <SubTitle>{getDateInfo()}</SubTitle>
    </StyledView>
  );
}
