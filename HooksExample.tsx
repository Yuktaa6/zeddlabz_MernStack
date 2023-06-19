

import React, { useState, useEffect, useCallback, useContext } from 'react';

// Define the UserContext and its initial value
const UserContext = React.createContext('');

interface UserData {
  name: string;
  age: number;
}

const HooksExample: React.FC = () => {
  const [count, setCount] = useState(0); // useState hook for managing state
  const [userData, setUserData] = useState<UserData | null>(null);

  // useEffect hook for performing side effects
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);


  // useCallback hook for memoizing functions
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  //  Provide the UserContext value
  // useContext hook for accessing context
  const userContextValue = useContext(UserContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <h2>User Data: {userData?.name}</h2>
      {/* Step 3: Use the UserContext value */}
      <h3>Context Value: {userContextValue}</h3>
    </div>
  );
};

export default HooksExample;

// Step 4: Export the UserContext for other components to use
export { UserContext };
