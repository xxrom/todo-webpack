import * as React from 'react';
import { styled } from 'linaria/react';

const Todo = () => (
  <Wrapper>
    <span>Todo:</span>
    <Task>1. Цветы полить</Task>
    <Task>2. В магазин сходить</Task>
    <Task>3. Почитать</Task>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;

  border: 1px solid gray;
`;

const Task = styled.div`
  margin-left: 1rem;
`;

export { Todo };
