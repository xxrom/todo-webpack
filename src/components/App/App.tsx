import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import Routes from '../../Routes/Routes';

const client = new ApolloClient({
  // uri: 'http://localhost:4000/graphql',
  uri: 'http://mysterious-lowlands-67766.herokuapp.com/graphql',
});

const App: React.FC<{}> = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default hot(App);
