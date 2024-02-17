import React from 'react'
import { SvgProps } from 'react-native-svg';
import { StyledButton } from './styled';


export interface IIConButton{
  hoverColor?: string;
  handlePress: ()=>void;
  children: React.ReactNode;
}
export  function IconButton({handlePress, children,hoverColor='#DBDFFD'}:IIConButton) {
  return (
    <StyledButton onPress={handlePress}  underlayColor={hoverColor} activeOpacity={1}>
      {children}
    </StyledButton>
  )
}
