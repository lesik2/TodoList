import { TextInput, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { InputView,StyledButton,StyledInput } from "./styled";
import { useState } from "react";


export  function SearchInput() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearchText = (text: string)=>{
    setSearchValue(text);
  }

  return (
    <InputView>
      <StyledButton>
        <Icon name="search" size={28}/>
      </StyledButton>
      <StyledInput 
        placeholder="Search tasks"
        underlineColorAndroid="transparent"
        value={searchValue}
        onChangeText={handleSearchText}
        selectionColor="#646FD4"
      />
    </InputView>
  )
}
