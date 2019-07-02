import React from 'react';
import { styled } from 'linaria/react';

const UploadButton = (props: any) => {
  return <Button>{props.children}</Button>;
};

export { UploadButton };

const Button = styled.button`
  border: solid 1px red;
`;
