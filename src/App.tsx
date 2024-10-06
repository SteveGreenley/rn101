import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Platform, UIManager} from 'react-native';
import {lightColors, createTheme, ThemeProvider} from '@rneui/themed';
import AppNavigation from './navigation/AppNavigation';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
