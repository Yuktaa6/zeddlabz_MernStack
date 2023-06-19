
import React, { useRef } from 'react';

const ComponentWithDiv: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div>Content</div>
      <div ref={divRef}></div>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default ComponentWithDiv;
