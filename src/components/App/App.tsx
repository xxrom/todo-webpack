import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from '../../Routes/Routes';
// import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
});

// client
//   .query({
//     query: gql`
//       {
//         hello
//       }
//     `,
//   })
//   .then((result) => console.log('result', result))
//   .catch((err) => console.error('error', err));

const App: React.FC<{}> = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
);

export default hot(App);
