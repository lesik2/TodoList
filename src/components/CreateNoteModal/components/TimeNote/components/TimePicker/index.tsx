import DatePicker from 'react-native-date-picker';
import SvgArrowUp from '@assets/icons/arrowUp.svg';
import SvgArrowDown from '@assets/icons/arrowDown.svg';
import {Pressable, StyleSheet} from 'react-native';
import {
  ChooseTime,
  ChooseTimeWrapper,
  Divider,
  SelectTime,
  TimeTitle,
} from './styled';
import {useState} from 'react';
import { ITimePicker } from '@components/CreateNoteModal/types';



export function TimePicker({title, newNote, setNewNote }: ITimePicker) {
  const [open, setOpen] = useState(false);
  const time  = title === 'from' ? new Date(newNote.startTime): new Date(newNote.endTime);

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleChooseTime = (date: Date) => {
    const property = title === 'from' ? 'startTime': 'endTime';
    setNewNote({...newNote, [property]: date.toISOString()});
    handleCloseModal();

  };

  return (
    <>
      <Pressable onPress={handleOpenModal}>
        <ChooseTimeWrapper>
          <TimeTitle>{title}</TimeTitle>
          <ChooseTime style={styles.boxShadow}>
            <SelectTime>
              <SvgArrowUp />
              <TimeTitle>{time.getHours()}</TimeTitle>
              <SvgArrowDown />
            </SelectTime>
            <Divider>:</Divider>
            <SelectTime>
              <SvgArrowUp />
              <TimeTitle>{time.getMinutes()}</TimeTitle>
              <SvgArrowDown />
            </SelectTime>
          </ChooseTime>
        </ChooseTimeWrapper>
      </Pressable>

      <DatePicker
        mode="time"
        modal
        open={open}
        date={time}
        confirmText="Ok"
        onConfirm={handleChooseTime}
        onCancel={handleCloseModal}
      />
    </>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
});
