import { Fragment } from 'react';
import { Homepage } from './pages';
import { AppContainer, GlobalStyles } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <AppContainer>
      <Homepage />
    </AppContainer>
  </Fragment>
);

export default App;
