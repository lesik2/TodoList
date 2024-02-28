import {
  ChooseDateWrapper,
  ContentView,
  DateTitle,
  DateWrapper,
  InfoWrapper,
  SubTitle,
  Title,
} from './styled';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Pressable, StyleSheet} from 'react-native';
import {INoteModal} from '../../types';

export function DateNote({newNote, setNewNote}: INoteModal) {
  const {title, text, date} = newNote;
  const dateObj = new Date(date);
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleChooseDate = (date: Date) => {
    setNewNote({...newNote, date: date.toISOString()});
    handleCloseModal();
  };

  return (
    <ContentView>
      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
      </InfoWrapper>
      <DateWrapper>
        <DateTitle>date</DateTitle>
        <Pressable onPress={handleOpenModal}>
          <ChooseDateWrapper style={styles.boxShadow}>
            <DateTitle>
              {`${dateObj.toLocaleDateString('en-US', {
                month: 'long',
              })}/${dateObj.getDate()}/${dateObj.getFullYear()}`}
            </DateTitle>
          </ChooseDateWrapper>
        </Pressable>
      </DateWrapper>

      <DatePicker
        mode="date"
        modal
        open={open}
        date={dateObj}
        confirmText="Ok"
        onConfirm={handleChooseDate}
        minimumDate={new Date()}
        onCancel={handleCloseModal}
      />
    </ContentView>
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
