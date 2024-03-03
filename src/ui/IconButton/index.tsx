import React, {memo} from 'react';
import {StyledButton} from './styled';

export interface IIConButton {
  hoverColor?: string;
  handlePress: () => void;
  children: React.ReactNode;
}
function IconButtonComponent({
  handlePress,
  children,
  hoverColor = '#DBDFFD',
}: IIConButton) {
  return (
    <StyledButton
      onPress={handlePress}
      underlayColor={hoverColor}
      activeOpacity={1}>
      {children}
    </StyledButton>
  );
}

export const IconButton = memo(IconButtonComponent);
