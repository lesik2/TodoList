import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { theme } from './src/theme/index';
import { Navigation } from './src/components/Navigation';
import { setUpNotification } from './src/api/pushNotifications';
import { ErrorBoundary } from './src/components/ErrorBoundary';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
    setUpNotification().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.secondary} />
        <Navigation />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
