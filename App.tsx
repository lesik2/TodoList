
import React from 'react';
import { ThemeProvider } from "styled-components/native";
import {theme} from './src/theme/index';
import { Navigation } from './src/components/Navigation';
function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>

  );
}

export default App;
