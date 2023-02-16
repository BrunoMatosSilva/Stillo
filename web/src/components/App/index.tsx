import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Router from '../../Router';
import GlobalStyles from '../../../src/styles/global';
import defaultTheme from '../../../src/styles/theme/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
          <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;