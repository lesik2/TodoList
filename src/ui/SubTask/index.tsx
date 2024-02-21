import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox, Title } from "../Note/styled";
import { StyledInput, SubTaskInfoWrapper } from "./styled";
import { useState } from "react";
import { ISubNote } from "@customTypes/note";

export interface ISubTask{
  id: number;
  name: string;
  checked: boolean;
  handleUpdate: (subtask:ISubNote) => void;
  mode?: 'edit'|'default'
}

export function SubTask({id, name, checked, handleUpdate, mode='default'}:ISubTask) {

  const [input, setInput] = useState(name);
  const handleChangeInput = (text: string) => {
    const updatedSubtask:ISubNote ={
      id: id,
      text: input,
      checked: checked,
    }
    handleUpdate(updatedSubtask);
    setInput(text);

  }
  const handleCheck = () =>{
    const updatedSubtask:ISubNote ={
      id: id,
      text: name,
      checked: !checked,
    }
    handleUpdate(updatedSubtask);
  }

  return (
    <SubTaskInfoWrapper>
      <CheckBox onPress={handleCheck} activeOpacity={1} $subTask={true}>
        {checked && <Icon name="check" size={23} color="#8785F6" />}
      </CheckBox>
      {mode === 'default'? 
        <Title $subTask={true}>{name}</Title>
        :
        <StyledInput 
        multiline 
        value={input}
         onChangeText={handleChangeInput} 
         placeholder="New subtask"/>
      }

    </SubTaskInfoWrapper>
  )
}
