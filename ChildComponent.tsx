
import React from 'react';

interface Props {
  onDataChange: (data: string) => void;
}

const ChildComponent: React.FC<Props> = ({ onDataChange }) => {
  const sendData = () => {
    onDataChange('Hello from Child Component!');
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
