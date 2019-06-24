import React, { useState, KeyboardEvent } from 'react';
import { styled } from 'linaria/react';

const Todo = () => {
  const [tasks, changeTasks] = useState(['Цветы полить', 'В магазин сходить', 'Почитать']);
  const [inputTask, changeInputTask] = useState('');

  const onEnter = (event: React.ChangeEvent<HTMLInputElement> & KeyboardEvent) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      changeTasks([...tasks, value]);
      changeInputTask('');
    }
  };
  const onInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    changeInputTask(value);

  const onDelete = (index: number) => () => {
    console.log('index', index);
    changeTasks(tasks.filter((_, innerIndex) => innerIndex !== index));
  };

  return (
    <Wrapper>
      <Tasks>
        <span>Todo:</span>
        {tasks.map((task: string, index: number) => (
          <TaskRow>
            <Minus className="heavy" onClick={onDelete(index)} />
            <Task key={index}>{`${index + 1}. ${task}`}</Task>
          </TaskRow>
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
const TaskRow = styled.div`
  display: flex;
  padding-left: 0.5rem;
`;
const Minus = styled.div`
  position: relative;
  display: flex;
  alight-items: center;
  justify-content: center;
  height: 1rem;
  width: 1rem;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 80%;
    top: 45%;
    left: 5%;
    background: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
const Task = styled.div`
  margin-left: 0.5rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: 1px solid gray;
`;

export { Todo };
