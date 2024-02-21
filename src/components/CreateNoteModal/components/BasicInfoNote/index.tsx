import { CustomModal } from "@ui/CustomModal";
import { ContentView, InputText, InputTitle, InputsWrapper, Title } from "./styled";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { ChooseCategory } from "@ui/ChooseCategory";


export interface IBasicInfoNote{
  title: string;
  text: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export function BasicInfoNote({title, text, setText, setTitle}:IBasicInfoNote) {



  const handleInputTitle = (text: string) =>{
    setTitle(text);
  } 

  const handleInputTextArea = (text: string) =>{
    setText(text);
  } 
 

  return (
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
            value={text}
            onChangeText={handleInputTextArea}
          />
          <ChooseCategory />
        </InputsWrapper>

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