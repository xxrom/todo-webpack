import React from 'react';
import { withTodo } from '@HOC';

import { Body, BodyProps } from './components';

const Todo = withTodo(({ data }: BodyProps) => <Body data={data} />);

export { Todo };
