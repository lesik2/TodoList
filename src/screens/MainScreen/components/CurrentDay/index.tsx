import {DailyTasks, StyledView, SubTitle, Title} from './styled';

export function CurrentDay() {
  return (
    <StyledView>
      <Title>
        you have <DailyTasks>5 tasks</DailyTasks> today!
      </Title>
      <SubTitle>Saturday,september 10,2022</SubTitle>
    </StyledView>
  );
}
