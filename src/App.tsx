import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import {lightColors, createTheme, ThemeProvider} from '@rneui/themed';
import AppNavigation from './navigation/AppNavigation';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
