import { StyledButton, StyledIcon } from "./styled";

export interface IAddNoteButton{
  handlePress: ()=> void;
}
export function AddNoteButton({handlePress}:IAddNoteButton) {
  return (
    <StyledButton onPress={handlePress}>
      <StyledIcon />
    </StyledButton>
  )
}
