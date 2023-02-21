import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import csTheme from '../src/utils/muiTheme';



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <main >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Montserrat:ital,wght@0,300;0,400;0,500;0,800;1,500;1,800&display=swap" rel="stylesheet"></link>
      </head>
      <ThemeProvider theme={csTheme}>
        <CssBaseline />
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </ThemeProvider>
    </main>
  ),
  withTests({
    results,
  }),
];
