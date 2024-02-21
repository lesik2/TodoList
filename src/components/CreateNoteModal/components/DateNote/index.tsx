import { ContentView,InputsWrapper, Title } from "./styled";
import { StyleSheet } from "react-native";

import { ISubNote } from "@customTypes/note";


export interface ISubTasksNote{
  title: string;
  text: string;
  setSubtasks: React.Dispatch<React.SetStateAction<ISubNote[]>>;
  
}

export function SubTasksNote({}:ISubTasksNote) {
  
  return (
      <ContentView>
        <Title>Create new note</Title>
        <InputsWrapper>
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