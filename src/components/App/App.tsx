import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Routes from '../../Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default hot(App);
