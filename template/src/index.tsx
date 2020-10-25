import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './theme';

export default () => {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PaperProvider>
  );
};
