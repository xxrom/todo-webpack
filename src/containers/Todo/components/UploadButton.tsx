import React from 'react';
import { styled } from 'linaria/react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { delTypeName } from '@utils';

import { TodoArrayProps } from './Body';

const REPLACE_TASKS = gql`
  mutation replaceTasks($tasks: [TaskInput!]!) {
    replaceTasks(tasks: $tasks) {
      name
    }
  }
`;

interface UploadButtonProps {
  tasks: TodoArrayProps['todo'];
  children: React.ReactChild;
}
const UploadButton = (props: UploadButtonProps) => {
  const onUpdate = useMutation(REPLACE_TASKS, {
    variables: { tasks: delTypeName(props.tasks) },
  });
  return <Button onClick={onUpdate}>{props.children}</Button>;
};

export { UploadButton };

const Button = styled.button`
  border: solid 1px red;
`;
