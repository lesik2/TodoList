import { DefaultTheme } from "styled-components/native";

import { ITheme } from './src/types/theme';

type CustomTheme = ITheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}