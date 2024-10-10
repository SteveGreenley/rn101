import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Platform, UIManager} from 'react-native';
import {lightColors, createTheme, ThemeProvider} from '@rneui/themed';
import AppNavigation from './navigation/AppNavigation';
import {store} from './app/store';
import {Provider} from 'react-redux';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
