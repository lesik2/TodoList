import Icon from 'react-native-vector-icons/FontAwesome';
import { memo, useState } from 'react';
import { type ISubNote } from '@customTypes/note';

import { StyledInput, SubTaskInfoWrapper } from './styled';

import { CheckBox, Title } from '../Note/styled';

export interface ISubTask {
  id: string;
  name: string;
  checked: boolean;
  handleUpdate: (subtask: ISubNote) => void;
  mode?: 'edit' | 'default';
}

function SubTaskComponent({ id, name, checked, handleUpdate, mode = 'default' }: ISubTask) {
  const [input, setInput] = useState(name);
  const handleChangeInput = (text: string) => {
    const updatedSubtask: ISubNote = {
      id,
      text: input,
      checked,
    };

    handleUpdate(updatedSubtask);
    setInput(text);
  };

  const handleCheck = () => {
    const updatedSubtask: ISubNote = {
      id,
      text: name,
      checked: !checked,
    };

    handleUpdate(updatedSubtask);
  };

  return (
    <SubTaskInfoWrapper>
      <CheckBox onPress={handleCheck} activeOpacity={1} $subTask={true}>
        {checked && <Icon name='check' size={23} color='#8785F6' />}
      </CheckBox>
      {mode === 'default' ? (
        <Title $subTask={true}>{name}</Title>
      ) : (
        <StyledInput multiline value={input} onChangeText={handleChangeInput} placeholder='New subtask' />
      )}
    </SubTaskInfoWrapper>
  );
}

export const SubTask = memo(SubTaskComponent);
