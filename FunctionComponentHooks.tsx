// FunctionComponent.tsx

import React, { useEffect , useState} from 'react';

const FunctionComponentHooks: React.FC = () => {
  const [stateValue, setStateValue] = useState('');

  useEffect(() => {
    // This effect runs when the component mounts and whenever the state value changes
    console.log('State value has changed!');
  }, [stateValue]); 

  return <h1>Hello, I am a function component with hooks!</h1>;
};

export default FunctionComponentHooks;
