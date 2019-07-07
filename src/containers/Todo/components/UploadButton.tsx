import React from 'react';
import { styled } from 'linaria/react';
import gql from 'graphql-tag';
import { Mutation, TodoArrayProps } from 'react-apollo';
import { delTypeName } from '@utils';

// const REPLACE_TASKS = gql`
//   input TaskInput {
//     name: String
//   }
//   mutation ReplaceTasks($tasks: [TaskInput]!) {
//     replaceTasks(tasks: $tasks) {
//       name: String
//     }
//   }
// `;
const REPLACE_TASKS = gql`
  mutation replaceTasks($tasks: [TaskInput!]!) {
    replaceTasks(tasks: $tasks) {
      name
    }
  }
`;

const onUpload = () => {
  console.log('tasks', props.tasks);
  console.log('utils', delTypeName(props.tasks));
  return replaceTasks({ variables: { tasks: delTypeName(props.tasks) } });
};

const UploadButton = (props: { tasks: TodoArrayProps['todo']; children: React.ReactChild }) => (
  <Mutation mutation={REPLACE_TASKS}>
    {(replaceTasks) => <Button onClick={onUpload}>{props.children}</Button>}
  </Mutation>
);

export { UploadButton };

const Button = styled.button`
  border: solid 1px red;
`;
