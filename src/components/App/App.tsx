import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from '../../Routes/Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App: React.FC<{}> = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
);

export default hot(App);
