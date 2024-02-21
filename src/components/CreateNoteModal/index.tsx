

import {useState} from 'react';
import { ISubNote } from '@customTypes/note';
import { BasicInfoNote } from './components/BasicInfoNote';
import { SubTasksNote } from './components/SubTasksNote';
import { CustomModal } from '@ui/CustomModal';
import { TimeNote } from './components/TimeNote';
import { DateNote } from './components/DateNote';



export interface ICreateNoteModal{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateNoteModal({visible, setVisible}:ICreateNoteModal){

  const AMOUNT_OF_MODALS = 4;
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [subtasks, setSubtasks] = useState<ISubNote[]>([]);
  const [importance, setImportance] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const leftButtonText = currentModal === 0?'Cancel':'Back';
  const rightButtonText = currentModal === AMOUNT_OF_MODALS-1?'Ok':'Next';

  const handleLeftPressModal = () =>{
    if(currentModal === 0){
      handleCloseModal();
    }else{
      setCurrentModal(currentModal-1);
    }

  }

  const handleRightPressModal = () =>{
    if(currentModal === AMOUNT_OF_MODALS-1){



      
      setTitle('');
      setText('');
      setSubtasks([]);
      setImportance(false);
      setStartTime(new Date());
      setEndTime(new Date());
      setDate(new Date());
      handleCloseModal();
      setCurrentModal(0);
    }else{
      setCurrentModal(currentModal+1);
    }
  }


  const handleCloseModal = () => {
    setVisible(false);
  }

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
    <DateNote 
      title={title}
      text={text}
      date={date}
      setDate={setDate}

    />,
    <TimeNote 
      startTime={startTime}
      setStartTime={setStartTime}
      endTime={endTime}
      setEndTime={setEndTime}
      title={title}
      text={text}
      importance={importance}
      setImportance={setImportance}
    />
  ]

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


