import React, { useCallback, useEffect, useState, KeyboardEvent } from 'react';
import { styled } from 'linaria/react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import axios from 'axios';

const GET_HELLO = gql`
  {
    hello
  }
`;

const Todo = () => (
  <div>
    <Query query={GET_HELLO}>
      {({ loading, error, data }) => {
        console.log('data', data);
        if (loading) {
          return <h1>Loading...</h1>;
        }
        if (error) {
          return <h1>`Error! ${error.message}`</h1>;
        }

        return <div>hello</div>;
      }}
    </Query>
  </div>
);

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

export { Todo };
