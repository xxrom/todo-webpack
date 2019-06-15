import * as React from 'react';
import { styled } from 'linaria/react';

const Todo = () => (
  <Wrapper>
    <span>Todo</span>
  </Wrapper>
);

const Wrapper = styled.div`
  && {
    border-radius: 0;
    margin-top: 1.25rem;
    color: white;
  }
`;

export { Todo };
