import Icon from "react-native-vector-icons/FontAwesome";
import { ChooseDateWrapper, ContentView,DateTitle,DateWrapper,InfoWrapper,SubTitle,Title } from "./styled";
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import { Pressable, StyleSheet } from "react-native";

export interface IDateNote{
  title: string;
  text: string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export function DateNote(
  {
    title, text,date, setDate
  }:IDateNote
) {

  const [open, setOpen] = useState(false)

  const handleCloseModal = () => {
    setOpen(false);
  }
  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleChooseDate = (date:Date)=>{
    setDate(date);
    handleCloseModal();
  }

  return (
      <ContentView>
        <InfoWrapper>
          <Title>{title}</Title>
          <SubTitle>{text}</SubTitle>
        </InfoWrapper>
        <DateWrapper>
          <DateTitle>
            date
          </DateTitle>
        <Pressable onPress={handleOpenModal}>
          <ChooseDateWrapper style={styles.boxShadow}>
            <DateTitle>
              {`${date.toLocaleDateString('en-US', {month: 'long'})}/${date.getDate()}/${date.getFullYear()}`}
            </DateTitle>
          </ChooseDateWrapper>
        </Pressable>
        </DateWrapper>
        

        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          confirmText='Ok'
          onConfirm={handleChooseDate}
          onCancel={handleCloseModal}
      />

      </ContentView>
  )
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