export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    secondaryShades: string;
    secondaryTins: string;
    white: string;
    black: string;
    gray: string;
    drawerBack: string;
    iconColor: string;
    purple: string;
    border: string;
    error: string;
  };
  fonts: {
    Roboto: string;
    Jost: string;
    Signika: string;
  };
  fontWeight: {
    bold: number;
    default: number;
    easy: number;
    medium: number;
  };
}
