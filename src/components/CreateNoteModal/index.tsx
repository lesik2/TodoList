import {useContext, useEffect, useState} from 'react';
import {INote} from '@customTypes/note';
import {BasicInfoNote} from './components/BasicInfoNote';
import {SubTasksNote} from './components/SubTasksNote';
import {CustomModal} from '@ui/CustomModal';
import {TimeNote} from './components/TimeNote';
import {DateNote} from './components/DateNote';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {NotesContext, NotesDispatchContext} from '@context/note';
import {actionAddNote, actionUpdateNote} from '@context/actionCreatorsNotes';

export interface ICreateNoteModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  idNote?: string;
}



export function CreateNoteModal({visible, setVisible, idNote}: ICreateNoteModal) {



  const emptyNote:INote = {
    id: '',
    title: '',
    text: '',
    subNotes: [],
    importance:false,
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    date: new Date ().toISOString(),
    checked: false,
    category: '',
  }
  const dispatch = useContext(NotesDispatchContext);

  const notes = useContext(NotesContext);


  const AMOUNT_OF_MODALS = 4;


  const [newNote, setNewNote] = useState<INote>(emptyNote);
  const [currentModal, setCurrentModal] = useState(0);

  useEffect(()=>{
    if(!visible) return;
    if(idNote===undefined){
      const id = uuidv4();
      setNewNote({...emptyNote, id: id});
    }
    if(idNote!==undefined){
      const note = notes.find((note)=>note.id === idNote);
      setNewNote(note!);
    }
  },[visible, idNote])



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

      handleCloseModal();
      setCurrentModal(0);

        if(!dispatch) return;
        if(idNote!==undefined){
          console.log('should update');
          dispatch(actionUpdateNote(newNote));
        }else{
          dispatch(actionAddNote(newNote));
        }

        setNewNote(emptyNote);

    } else {
      setCurrentModal(currentModal + 1);
    }
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const modals = [
    <BasicInfoNote
      newNote={newNote}
      setNewNote={setNewNote}
    />,
    <SubTasksNote
    newNote={newNote}
    setNewNote={setNewNote}
    />,
    <DateNote
      newNote={newNote}
      setNewNote={setNewNote}
    />,
    <TimeNote
      newNote={newNote}
      setNewNote={setNewNote}
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
