import React, { useCallback, useState, KeyboardEvent } from 'react';
import { styled } from 'linaria/react';

import { UploadButton } from './';

interface TodoItemProps {
  name: string;
}
export interface TodoArrayProps {
  todo: Array<TodoItemProps>;
}
export interface BodyProps {
  data: TodoArrayProps;
}

const Body = ({ data }: BodyProps) => {
  const { todo = [{ name: 'empty' }] } = data;
  const [tasks, changeTasks] = useState(todo);
  const [inputTask, changeInputTask] = useState('');

  const onEnter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement> & KeyboardEvent) => {
      if (event.key === 'Enter') {
        const value = event.target.value;
        changeTasks([...tasks, { name: value }]);
        changeInputTask('');
      }
    },
    [tasks, changeTasks, changeInputTask],
  );
  const onInputChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => changeInputTask(value),
    [changeInputTask],
  );

  const onDelete = useCallback(
    (index: number) => () => changeTasks(tasks.filter((_, innerIndex) => innerIndex !== index)),
    [tasks, changeTasks],
  );

  return (
    <Wrapper>
      <Tasks>
        <span>Todo:</span>
        {tasks.map((task: TodoItemProps, index: number) => (
          <TaskRow key={index}>
            <Minus className="heavy" onClick={onDelete(index)} />
            <Task>{`${index + 1}. ${task.name}`}</Task>
          </TaskRow>
        ))}
      </Tasks>
      <Input
        value={inputTask}
        onChange={onInputChange}
        placeholder="+ задача"
        onKeyDown={onEnter}
      />
      <UploadButton tasks={tasks}>Upload</UploadButton>
    </Wrapper>
  );
};

export { Body };

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
    background: gray;
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
