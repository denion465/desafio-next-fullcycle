import { MuiThemeProvider, CssBaseline, Container, Box } from '@material-ui/core';
import type { AppProps } from 'next/app';

import theme from './theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box marginTop={1}>
          <Component {...pageProps} />
        </Box>
      </Container>
    </MuiThemeProvider>
    </>
  );
}

export default MyApp;
