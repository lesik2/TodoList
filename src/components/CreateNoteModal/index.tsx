import { useContext, useEffect, useMemo, useState } from 'react';
import { type INote } from '@customTypes/note';
import { CustomModal } from '@ui/CustomModal';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { NotesContext, NotesDispatchContext } from '@context/contextProvider';
import { actionAddNote, actionUpdateNote } from '@context/actionCreatorsNotes';
import { basicInfoNoteSchema } from '@validate/note';
import { cancel, onCreateTriggerNotification } from '@api/pushNotifications';

import { DateNote } from './components/DateNote';
import { TimeNote } from './components/TimeNote';
import { SubTasksNote } from './components/SubTasksNote';
import { BasicInfoNote } from './components/BasicInfoNote';
import { AMOUNT_OF_MODALS } from './constants';

export interface ICreateNoteModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  idNote?: string;
}

export function CreateNoteModal({ visible, setVisible, idNote }: ICreateNoteModal) {
  const emptyNote: INote = useMemo(
    () => ({
      id: '',
      title: '',
      text: '',
      subNotes: [],
      importance: false,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      date: new Date().toISOString(),
      checked: false,
      category: '',
    }),
    [],
  );

  const dispatch = useContext(NotesDispatchContext);

  const notes = useContext(NotesContext);

  const [newNote, setNewNote] = useState<INote>(emptyNote);
  const [currentModal, setCurrentModal] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!visible) return;
    if (!idNote) {
      const id = uuidv4();
      setNewNote({ ...emptyNote, id });
    }

    if (typeof idNote === 'string') {
      const note = notes.find((item) => item.id === idNote);
      setNewNote(note!);
    }
  }, [visible, idNote, notes, emptyNote]);

  const leftButtonText = currentModal === 0 ? 'Cancel' : 'Back';
  const rightButtonText = currentModal === AMOUNT_OF_MODALS - 1 ? 'Ok' : 'Next';

  const handleLeftPressModal = () => {
    if (currentModal === 0) {
      handleCloseModal();
      setNewNote(emptyNote);
      setError('');
    } else {
      setCurrentModal(currentModal - 1);
    }
  };

  const handleRightPressModal = async () => {
    if (currentModal === AMOUNT_OF_MODALS - 1) {
      if (handleValidateTime()) {
        setError('Till time should be larger than before time');

        return;
      }

      let validNote = {
        ...newNote,
        title: newNote.title.trim(),
        text: newNote.text.trim(),
        subNotes: newNote.subNotes
          .filter((subNote) => subNote.text)
          .map((subNote) => ({ ...subNote, text: subNote.text.trim() })),
      };

      validNote = {
        ...validNote,
        checked: validNote.subNotes.every((note) => note.checked),
      };

      handleCloseModal();
      setCurrentModal(0);

      if (!dispatch) return;

      if (idNote !== undefined) {
        dispatch(actionUpdateNote(validNote));
        await cancel(`${validNote.id}-start`);
        await cancel(`${validNote.id}-end`);
      } else {
        dispatch(actionAddNote(validNote));
      }

      if (new Date(validNote.startTime) > new Date()) {
        await onCreateTriggerNotification(
          `${validNote.id}-start`,
          validNote.title,
          validNote.date,
          validNote.startTime,
          true,
        );
        await onCreateTriggerNotification(
          `${validNote.id}-end`,
          validNote.title,
          validNote.date,
          validNote.endTime,
          false,
        );
      }

      setNewNote(emptyNote);
      setError('');
    } else {
      if (await handleValidateBasicInfo()) {
        setCurrentModal(currentModal + 1);
      }
    }
  };

  const handleValidateBasicInfo = async () => {
    try {
      await basicInfoNoteSchema.validate(newNote);
    } catch (errorObj) {
      if (errorObj instanceof Error) {
        setError(errorObj.message);
      }

      return false;
    }

    return true;
  };

  const handleValidateTime = () => {
    const startDate = new Date(newNote.startTime);
    const endDate = new Date(newNote.endTime);

    return endDate <= startDate;
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const modals = [
    <BasicInfoNote key={1} newNote={newNote} setNewNote={setNewNote} error={error} setError={setError} />,
    <SubTasksNote key={2} newNote={newNote} setNewNote={setNewNote} />,
    <DateNote key={3} newNote={newNote} setNewNote={setNewNote} />,
    <TimeNote key={4} newNote={newNote} setNewNote={setNewNote} error={error} setError={setError} />,
  ];

  return (
    <CustomModal
      modalVisible={visible}
      onRequestClose={handleCloseModal}
      leftButtonText={leftButtonText}
      rightButtonText={rightButtonText}
      leftOnHandleClick={handleLeftPressModal}
      rightOnHandleClick={handleRightPressModal}
    >
      {modals[currentModal]}
    </CustomModal>
  );
}
