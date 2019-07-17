import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import { Body } from './components';

const GET_TASKS = gql`
  {
    getTasks {
      id
      name
    }
  }
`;

const Todo = () => {
  const { data, error, loading } = useQuery(GET_TASKS);
  if (loading || error) {
    return <h1>{loading ? 'Loading... natasha' : `Error! ${error!.message}`}</h1>;
  }

  return <Body data={data.getTasks} />;
};

export { Todo };
