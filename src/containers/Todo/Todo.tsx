import React, { useState } from 'react';
import { styled } from 'linaria/react';

const Todo = () => {
  const [tasks, changeTasks] = useState(['Цветы полить', 'В магазин сходить', 'Почитать']);
  const [inputTask, changeInputTask] = useState('');

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      console.log(event.target.value);
      changeTasks([...tasks, value]);
      changeInputTask('');
    }
  };
  const onInputChange: React.KeyboardEventHandler = ({ target: { value } }) => {
    console.log(value);
    changeInputTask(value);
  };

  return (
    <Wrapper>
      <Tasks>
        <span>Todo:</span>
        {tasks.map((task: string, index: number) => (
          <Task key={index}>{`${index + 1}. ${task}`}</Task>
        ))}
      </Tasks>
      <Input
        value={inputTask}
        onChange={onInputChange}
        placeholder="+ задача"
        onKeyDown={onEnter}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
`;

const Tasks = styled.div`
  border: 1px solid gray;
`;

const Task = styled.div`
  margin-left: 1rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: 1px solid gray;
`;

export { Todo };
