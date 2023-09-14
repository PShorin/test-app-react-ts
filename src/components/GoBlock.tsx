import React, { useState, useEffect } from 'react';
import './GoBlock.scss';

const GoBlock = () => {
  const [columnBackground, setColumnBackground] = useState('#FFF');
  const [blockText, setBlockText] = useState('Go');
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setColumnBackground('#4A22D2');
  };

  const handleMouseLeave = () => {
    setColumnBackground('#FFF');
  };

  useEffect(() => {
    const textArray : string[] = ['1', '2', '3', 'Go'];
    let currentIndex : number = 0;

    const startNextRound = () => {
      currentIndex = 0;
      setIsPaused(true);

      setTimeout(() => {
        setIsPaused(false);
      }, 5000);
    };

    const updateText = () => {
      if (!isPaused) {
        setBlockText(textArray[currentIndex]);
        currentIndex = (currentIndex + 1) % textArray.length;

        if (currentIndex === 0) {
          startNextRound();
        }
      }
    };

    const intervalId : NodeJS.Timer = setInterval(updateText, 400);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <div 
      className="column center height-50vh"
      style={{ background: columnBackground }}
    >
      <div 
        className='go-block'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>{blockText}</p>
      </div>
    </div>
  );
};

export default GoBlock;
