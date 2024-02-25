import {getDateInfo} from '@utils/getCurrentDate';
import {DailyTasks, StyledView, SubTitle, Title} from './styled';
import { useContext } from 'react';
import { NotesContext } from '@context/contextProvider';

export function CurrentDay() {

  const today = new Date().toISOString().split('T')[0];

  const notes = useContext(NotesContext);
  const dailyNotes = notes.filter(note => note.date.split('T')[0] === today);
  const taskName = dailyNotes.length> 1? 'tasks': 'task';

  return (
    <StyledView>
      <Title>
        you have <DailyTasks>{dailyNotes.length} {taskName}</DailyTasks> today!
      </Title>
      <SubTitle>{getDateInfo()}</SubTitle>
    </StyledView>
  );
}
