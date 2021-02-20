import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './theme';

export default () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};
