import { NotesContext } from '@context/contextProvider';
import moment from 'moment';
import { useContext } from 'react';
import { NoteState } from '@constants/noteState';

import { YearMonthDayFormat } from '../constants/dateFormat';

export const useGetSelectedNotes = (mode: NoteState) => {
  const today = moment(new Date()).format(YearMonthDayFormat);
  const notes = useContext(NotesContext);

  switch (mode) {
    case NoteState.DAILY: {
      return notes.filter((note) => moment(note.date).format(YearMonthDayFormat) === today);
    }

    case NoteState.IMPORTANT: {
      return notes.filter((note) => note.importance);
    }

    case NoteState.DONE: {
      return notes.filter((note) => note.checked);
    }

    default: {
      return notes;
    }
  }
};
