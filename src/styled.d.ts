import { type ITheme } from './types/theme';

type CustomTheme = ITheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
