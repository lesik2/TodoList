import { CustomModal } from "@ui/CustomModal";
import { ContentView, InputText, InputTitle, InputsWrapper, Title } from "./styled";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { ChooseCategory } from "@ui/ChooseCategory";


export interface ISubTasksNote{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SubTasksNote({visible, setVisible}:ISubTasksNote) {

  const [title, setTitle] = useState('');
  const [textArea, setTextArea]= useState('')

  const handleInputTitle = (text: string) =>{
    setTitle(text);
  } 

  const handleInputTextArea = (text: string) =>{
    setTextArea(text);
  } 
  const handleCloseModal = () => {
    setVisible(false);
  }

  return (
    <CustomModal
      modalVisible={visible}
      onRequestClose={handleCloseModal}
      leftButtonText='Cancel'
      rightButtonText='Next'
      leftOnHandleClick={handleCloseModal}
      rightOnHandleClick={()=>console.log('hi')}
    >
      <ContentView>
        <Title>Create new note</Title>
        <InputsWrapper>
          <InputTitle
            style={styles.boxShadow}
            placeholder="Title"
            value={title}
            onChangeText={handleInputTitle}
          />
          <InputText
            style={styles.boxShadow}
            placeholder="Text"
            multiline
            numberOfLines={2}
            value={textArea}
            onChangeText={handleInputTextArea}
          />
          <ChooseCategory />
        </InputsWrapper>

      </ContentView>
    </CustomModal>
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