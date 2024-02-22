import {useContext, useState} from 'react';
import {INote, ISubNote} from '@customTypes/note';
import {BasicInfoNote} from './components/BasicInfoNote';
import {SubTasksNote} from './components/SubTasksNote';
import {CustomModal} from '@ui/CustomModal';
import {TimeNote} from './components/TimeNote';
import {DateNote} from './components/DateNote';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {saveNote} from '../../api/notes';
import { NotesDispatchContext } from '@context/note';
import { NotesActionTypes } from '../../types/actionsNotes';

export interface ICreateNoteModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateNoteModal({visible, setVisible}: ICreateNoteModal) {
  
  const dispatch = useContext(NotesDispatchContext);
  
  const AMOUNT_OF_MODALS = 4;



  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [subtasks, setSubtasks] = useState<ISubNote[]>([]);
  const [importance, setImportance] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const leftButtonText = currentModal === 0 ? 'Cancel' : 'Back';
  const rightButtonText = currentModal === AMOUNT_OF_MODALS - 1 ? 'Ok' : 'Next';

  const handleLeftPressModal = () => {
    if (currentModal === 0) {
      handleCloseModal();
    } else {
      setCurrentModal(currentModal - 1);
    }
  };

  const handleRightPressModal = async () => {
    if (currentModal === AMOUNT_OF_MODALS - 1) {
      const newNote: INote = {
        id: uuidv4(),
        title,
        text,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        date: date.toISOString(),
        importance,
        subNotes: subtasks,
        checked: false,
        category: '',
      };

      await saveNote(newNote);

      setTitle('');
      setText('');
      setSubtasks([]);
      setImportance(false);
      setStartTime(new Date());
      setEndTime(new Date());
      setDate(new Date());
      handleCloseModal();
      setCurrentModal(0);

      if(dispatch){
        dispatch({
          type: NotesActionTypes.ADD_NOTE,
          payload: newNote
        })
      }
    } else {
      setCurrentModal(currentModal + 1);
    }
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const modals = [
    <BasicInfoNote
      title={title}
      text={text}
      setTitle={setTitle}
      setText={setText}
    />,
    <SubTasksNote
      title={title}
      text={text}
      setSubtasks={setSubtasks}
      subtasks={subtasks}
    />,
    <DateNote title={title} text={text} date={date} setDate={setDate} />,
    <TimeNote
      startTime={startTime}
      setStartTime={setStartTime}
      endTime={endTime}
      setEndTime={setEndTime}
      title={title}
      text={text}
      importance={importance}
      setImportance={setImportance}
    />,
  ];

  return (
    <CustomModal
      modalVisible={visible}
      onRequestClose={handleCloseModal}
      leftButtonText={leftButtonText}
      rightButtonText={rightButtonText}
      leftOnHandleClick={handleLeftPressModal}
      rightOnHandleClick={handleRightPressModal}>
      {modals[currentModal]}
    </CustomModal>
  );
}
