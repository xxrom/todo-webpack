import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import { Body } from './components';

const GET_TODO = gql`
  {
    todo {
      name
    }
  }
`;

const Todo = () => {
  const { data, error, loading } = useQuery(GET_TODO);
  if (loading || error) {
    return <h1>{loading ? 'Loading...' : `Error! ${error!.message}`}</h1>;
  }

  return <Body data={data} />;
};

export { Todo };
