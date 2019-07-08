import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_TODO = gql`
  {
    todo {
      name
    }
  }
`;

/*
 * Example
 * const Todo = withTodo(({ data }: BodyProps) => <Body data={data} />);
 */
const withTodo = (Component: React.ElementType) => (props: any) => (
  <Query query={GET_TODO}>
    {({ loading, error, data }: any) => {
      if (loading) {
        return <h1>Loading...</h1>;
      } else if (error) {
        return <h1>`Error! ${error.message}`</h1>;
      }

      return <Component data={data} {...props} />;
    }}
  </Query>
);

export { withTodo };
