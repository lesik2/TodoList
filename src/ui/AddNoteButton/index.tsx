import { memo } from 'react';

import { StyledButton, StyledIcon } from './styled';

export interface IAddNoteButton {
  handlePress: () => void;
  size?: 'big' | 'small';
}
function AddNoteButtonComponent({ handlePress, size = 'big' }: IAddNoteButton) {
  return (
    <StyledButton onPress={handlePress} $isBig={size === 'big'}>
      <StyledIcon $isBig={size === 'big'} />
    </StyledButton>
  );
}

export const AddNoteButton = memo(AddNoteButtonComponent);
