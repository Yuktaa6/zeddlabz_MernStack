

import React from 'react';

interface Props {
  name: string;
}

const FunctionComponent: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}! I am a function component.</h1>;
};

export default FunctionComponent;
