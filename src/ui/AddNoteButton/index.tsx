import { StyledButton, StyledIcon } from "./styled";

export interface IAddNoteButton{
  handlePress: ()=> void;
  size?: 'big'|'small';
}
export function AddNoteButton({handlePress, size='big'}:IAddNoteButton) {
  return (
    <StyledButton onPress={handlePress} $isBig={size==='big'}>
      <StyledIcon  $isBig={size==='big'}/>
    </StyledButton>
  )
}
