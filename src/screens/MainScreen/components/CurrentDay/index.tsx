import { getDateInfo } from '@utils/getCurrentDate';
import { useContext } from 'react';
import { NotesContext } from '@context/contextProvider';
import moment from 'moment';
import { YearMonthDayFormat } from '@constants/dateFormat';

import { DailyTasks, StyledView, SubTitle, Title } from './styled';

export function CurrentDay() {
  const today = moment(new Date()).format(YearMonthDayFormat);

  const notes = useContext(NotesContext);
  const dailyNotes = notes.filter((note) => moment(note.date).format(YearMonthDayFormat) === today);
  const taskName = dailyNotes.length > 1 ? 'tasks' : 'task';

  return (
    <StyledView>
      <Title>
        you have{' '}
        <DailyTasks>
          {dailyNotes.length} {taskName}
        </DailyTasks>{' '}
        today!
      </Title>
      <SubTitle>{getDateInfo()}</SubTitle>
    </StyledView>
  );
}
