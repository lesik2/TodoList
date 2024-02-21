import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox, Title } from "../Note/styled";
import { SubTaskInfoWrapper } from "./styled";

export interface ISubTask{
  name: string;
  checked: boolean;
  handleClick: ()=> void;
}

export function SubTask({}:) {
  return (
    <SubTaskInfoWrapper>
      <CheckBox onPress={handleCheck} activeOpacity={1} $subTask={true}>
        {checked && <Icon name="check" size={23} color="#8785F6" />}
      </CheckBox>
      <Title $subTask={true}>{task}</Title>
    </SubTaskInfoWrapper>
  )
}
