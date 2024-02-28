import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme/index';
import {Navigation} from './src/components/Navigation';
import {StatusBar} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.secondary} />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
